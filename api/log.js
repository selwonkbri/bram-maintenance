// Creates one Service Log entry in Notion for a completed task.
//
// Deliberate constraints:
//   - Append only. This route never edits or deletes an existing entry, and in
//     particular never touches the baseline clock-start marker.
//   - Performed By is always "Self". Anything checked off from this dashboard
//     was done by hand. Shop work is logged separately, where the shop name and
//     cost matter and need capturing.
//   - The odometer requirement is enforced here, not just in the browser, so a
//     client that skips the prompt still cannot write a guessed mileage.

import { odometerPolicy, odometerRequired, resolveDate } from "../lib/policy.js";

const NOTION = "https://api.notion.com/v1";
const VERSION = "2025-09-03";

const DB_LOG = "a9d5a9b77582488d8174c8c4fdfa3c1a";
const FALLBACK_DS_LOG = "a76081fd-0fad-4688-9cd0-48f4ec103fdf";

const BASELINE_TITLE = "Baseline: trailer placed in service (no service performed)";

const norm = (id) => String(id || "").replace(/-/g, "");

function headers(token) {
  return {
    Authorization: `Bearer ${token}`,
    "Notion-Version": VERSION,
    "Content-Type": "application/json",
  };
}

async function notion(token, path, options = {}) {
  const r = await fetch(`${NOTION}${path}`, { headers: headers(token), ...options });
  const text = await r.text();
  let json = null;
  try { json = JSON.parse(text); } catch { /* keep raw */ }
  if (!r.ok) {
    const err = new Error((json && json.message) || text.slice(0, 300));
    err.status = r.status;
    throw err;
  }
  return json;
}

function plain(prop) {
  if (!prop) return null;
  if (prop.type === "title") return prop.title.map((t) => t.plain_text).join("");
  if (prop.type === "rich_text") return prop.rich_text.map((t) => t.plain_text).join("");
  if (prop.type === "number") return prop.number;
  if (prop.type === "select") return prop.select ? prop.select.name : null;
  if (prop.type === "date") return prop.date ? prop.date.start : null;
  if (prop.type === "relation") return prop.relation.map((r) => norm(r.id));
  return null;
}

/** Build a property value matching whatever type the database actually uses. */
function textValue(schemaType, value) {
  if (schemaType === "select") return { select: { name: value } };
  if (schemaType === "rich_text") return { rich_text: [{ text: { content: value } }] };
  if (schemaType === "multi_select") return { multi_select: [{ name: value }] };
  if (schemaType === "status") return { status: { name: value } };
  return null;
}

let schemaCache = null;

async function logSchema(token) {
  if (schemaCache) return schemaCache;
  let dsId = FALLBACK_DS_LOG;
  try {
    const db = await notion(token, `/databases/${DB_LOG}`);
    if (db && db.data_sources && db.data_sources[0]) dsId = db.data_sources[0].id;
  } catch { /* fall back to the known id */ }
  const ds = await notion(token, `/data_sources/${dsId}`);
  const types = {};
  for (const [name, def] of Object.entries(ds.properties || {})) types[name] = def.type;
  schemaCache = { dsId, types };
  return schemaCache;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "method_not_allowed", message: "Use POST." });
    return;
  }

  const token = process.env.NOTION_TOKEN;
  if (!token) {
    res.status(503).json({
      error: "no_token",
      message: "NOTION_TOKEN is not set on this deployment.",
    });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  if (!body || !body.taskId) {
    res.status(400).json({ error: "bad_request", message: "taskId is required." });
    return;
  }

  const taskId = norm(body.taskId);
  const submittedOdo =
    body.odometer === null || body.odometer === undefined || body.odometer === ""
      ? null
      : Number(body.odometer);

  if (submittedOdo !== null && (!Number.isFinite(submittedOdo) || submittedOdo < 0)) {
    res.status(400).json({ error: "bad_odometer", message: "Odometer must be a positive number." });
    return;
  }

  try {
    // The browser supplies its local date. UTC would stamp evening entries
    // a day forward for anyone west of Greenwich.
    const today = resolveDate(body.localDate);

    // Read the task straight from Notion rather than trusting the client.
    const taskPage = await notion(token, `/pages/${taskId}`);
    const taskName = plain(taskPage.properties["Task"]) || "Untitled task";
    const intervalMiles = plain(taskPage.properties["Interval Miles"]);
    const vehicleIds = plain(taskPage.properties["Vehicle"]) || [];
    const vehicleId = vehicleIds[0] || null;

    if (taskName === BASELINE_TITLE) {
      res.status(400).json({
        error: "baseline_protected",
        message: "The baseline entry is a clock-start marker and cannot be logged against.",
      });
      return;
    }

    if (!vehicleId) {
      res.status(400).json({
        error: "no_vehicle",
        message: `"${taskName}" has no vehicle linked in Notion, so the entry has nothing to attach to.`,
      });
      return;
    }

    const vehiclePage = await notion(token, `/pages/${vehicleId}`);
    const vehicleName = plain(vehiclePage.properties["Vehicle"]) || "Unknown vehicle";
    const vehicleType = plain(vehiclePage.properties["Type"]);
    const storedOdo = plain(vehiclePage.properties["Current Odometer"]);
    const odoUpdated = plain(vehiclePage.properties["Odometer Updated"]);

    const policy = odometerPolicy({ intervalMiles, vehicleType });
    const mustAsk = odometerRequired(policy, odoUpdated, today);

    if (mustAsk && submittedOdo === null) {
      res.status(400).json({
        error: "odometer_required",
        message:
          `"${taskName}" is scheduled on mileage and the stored reading for the ` +
          `${vehicleName} is too old to reuse. Enter the current odometer.`,
        storedOdometer: storedOdo,
        odometerUpdated: odoUpdated,
      });
      return;
    }

    const odometer = submittedOdo !== null ? submittedOdo : storedOdo;

    // Refuse a reading that moves backwards. Odometers do not run in reverse,
    // so this is a typo, and a low number would quietly pull every future due
    // date earlier.
    if (submittedOdo !== null && typeof storedOdo === "number" && submittedOdo < storedOdo) {
      res.status(400).json({
        error: "odometer_backwards",
        message:
          `${submittedOdo.toLocaleString("en-US")} is below the stored reading of ` +
          `${storedOdo.toLocaleString("en-US")}. Check the number.`,
        storedOdometer: storedOdo,
      });
      return;
    }

    const { dsId, types } = await logSchema(token);

    const properties = {
      Entry: { title: [{ text: { content: taskName } }] },
      Date: { date: { start: today } },
      Task: { relation: [{ id: taskId }] },
      Vehicle: { relation: [{ id: vehicleId }] },
    };

    if (typeof odometer === "number" && types["Odometer"] === "number") {
      properties["Odometer"] = { number: odometer };
    }

    if (types["Performed By"]) {
      const v = textValue(types["Performed By"], "Self");
      if (v) properties["Performed By"] = v;
    }

    const noteText = String(body.note || "").trim();
    const provenance = "Logged from the dashboard.";
    if (types["Notes"] === "rich_text") {
      properties["Notes"] = {
        rich_text: [{ text: { content: noteText ? `${noteText}\n\n${provenance}` : provenance } }],
      };
    }

    const created = await notion(token, "/pages", {
      method: "POST",
      body: JSON.stringify({
        parent: { type: "data_source_id", data_source_id: dsId },
        properties,
      }),
    });

    // Keep the vehicle odometer current. Only when the user actually typed a
    // number, and only when it moves the reading forward.
    let vehicleUpdated = false;
    if (submittedOdo !== null && (typeof storedOdo !== "number" || submittedOdo > storedOdo)) {
      try {
        await notion(token, `/pages/${vehicleId}`, {
          method: "PATCH",
          body: JSON.stringify({
            properties: {
              "Current Odometer": { number: submittedOdo },
              "Odometer Updated": { date: { start: today } },
            },
          }),
        });
        vehicleUpdated = true;
      } catch {
        // The log entry is already written and is the thing that matters.
        // Report the miss rather than failing the whole action.
        vehicleUpdated = false;
      }
    }

    res.status(200).json({
      ok: true,
      entryId: norm(created.id),
      entryUrl: created.url,
      task: taskName,
      vehicle: vehicleName,
      date: today,
      odometer: typeof odometer === "number" ? odometer : null,
      odometerSource: submittedOdo !== null ? "entered" : "stored",
      vehicleOdometerUpdated: vehicleUpdated,
    });
  } catch (err) {
    const status = err.status || 500;
    const map = {
      401: "Notion rejected the token.",
      403: "The Notion integration does not have write access. Check its capabilities.",
      404: "Notion could not find that page. The integration may not be connected to all three databases.",
      429: "Notion is rate limiting. Wait a moment and try again.",
    };
    res.status(status === 401 || status === 403 || status === 404 || status === 429 ? status : 502).json({
      error: "notion_write_failed",
      message: map[status] || "Notion refused the write.",
      detail: String(err.message || "").slice(0, 300),
    });
  }
}
