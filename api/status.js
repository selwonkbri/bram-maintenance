// Reads the three RV maintenance databases from Notion and returns one JSON payload.
// The token never reaches the browser. It lives in the NOTION_TOKEN environment variable.

import { guidanceFor, LUBE, RIG } from "./guidance.js";
import { odometerPolicy, odometerRequired, todayISO } from "../lib/policy.js";

const NOTION = "https://api.notion.com/v1";
const VERSION = "2025-09-03";

const DB = {
  tasks: "91a21228d45047f5b36a5710048fd6c0",
  log: "a9d5a9b77582488d8174c8c4fdfa3c1a",
  vehicles: "4b7452c50e0b4aacaa1d6c31598fe1e9",
};

// Known data source IDs, used if resolving from the database container fails.
const FALLBACK_DS = {
  tasks: "3c2ce99c-cfe7-48a8-9267-2162d90b84e8",
  log: "a76081fd-0fad-4688-9cd0-48f4ec103fdf",
  vehicles: "b3a95e8a-10dd-4924-98c1-8d2e2c684333",
};

const BASELINE_TITLE = "Baseline: trailer placed in service (no service performed)";

// Interval types with no due date. These are excluded from the dashboard entirely.
// They still exist in Notion, they just do not belong on a status board, because a
// board full of items that can never be due trains you to ignore the board.
const EXCLUDED_TYPES = new Set(["Every Trip", "Before/After Storage", "As Needed"]);

// Fallback only. `shop` now comes from the guidance module. This list catches any
// task that has no guidance entry yet.
const SHOP_PATTERNS = [
  /qualified dealer/i, /certified rv technician/i, /wheel bearing/i, /repack/i,
  /brake amp draw/i, /engine oil/i, /fuel filter/i, /transmission fluid/i,
  /differential fluid/i, /tire rotation/i, /front end alignment/i,
  /brake inspection/i, /slide-out room adjustment/i, /air filter/i,
];

const norm = (id) => String(id || "").replace(/-/g, "");

function headers(token) {
  return {
    Authorization: `Bearer ${token}`,
    "Notion-Version": VERSION,
    "Content-Type": "application/json",
  };
}

class NotionError extends Error {
  constructor(status, detail) {
    super(detail);
    this.status = status;
  }
}

// ---------- property readers ----------

function readFormula(f) {
  if (!f) return null;
  if (f.type === "string") return f.string;
  if (f.type === "number") return f.number;
  if (f.type === "boolean") return f.boolean;
  if (f.type === "date") return f.date ? f.date.start : null;
  return null;
}

function readRollup(r) {
  if (!r) return null;
  if (r.type === "number") return r.number;
  if (r.type === "date") return r.date ? r.date.start : null;
  if (r.type === "array") return r.array.map(readProp);
  return null;
}

function readProp(p) {
  if (!p) return null;
  switch (p.type) {
    case "title": return p.title.map((t) => t.plain_text).join("");
    case "rich_text": return p.rich_text.map((t) => t.plain_text).join("");
    case "number": return p.number;
    case "select": return p.select ? p.select.name : null;
    case "status": return p.status ? p.status.name : null;
    case "multi_select": return p.multi_select.map((s) => s.name);
    case "date": return p.date ? p.date.start : null;
    case "checkbox": return p.checkbox;
    case "url": return p.url;
    case "email": return p.email;
    case "phone_number": return p.phone_number;
    case "people": return p.people.map((u) => u.name || u.id);
    case "relation": return p.relation.map((r) => norm(r.id));
    case "formula": return readFormula(p.formula);
    case "rollup": return readRollup(p.rollup);
    case "created_time": return p.created_time;
    case "last_edited_time": return p.last_edited_time;
    case "unique_id":
      return p.unique_id ? `${p.unique_id.prefix || ""}${p.unique_id.number}` : null;
    default: return null;
  }
}

function flatten(page) {
  const out = { id: norm(page.id), url: page.url };
  for (const [name, prop] of Object.entries(page.properties || {})) {
    out[name] = readProp(prop);
  }
  return out;
}

// ---------- fetching ----------

async function resolveDataSource(token, dbId, fallback) {
  try {
    const r = await fetch(`${NOTION}/databases/${dbId}`, { headers: headers(token) });
    if (!r.ok) return fallback;
    const j = await r.json();
    const first = j.data_sources && j.data_sources[0];
    return first && first.id ? first.id : fallback;
  } catch {
    return fallback;
  }
}

async function queryAll(token, dsId) {
  const rows = [];
  let cursor = null;
  for (let guard = 0; guard < 25; guard++) {
    const body = { page_size: 100 };
    if (cursor) body.start_cursor = cursor;
    const r = await fetch(`${NOTION}/data_sources/${dsId}/query`, {
      method: "POST",
      headers: headers(token),
      body: JSON.stringify(body),
    });
    if (!r.ok) throw new NotionError(r.status, await r.text());
    const j = await r.json();
    rows.push(...j.results.map(flatten));
    if (!j.has_more) break;
    cursor = j.next_cursor;
  }
  return rows;
}

// ---------- shaping ----------

function pick(row, names) {
  for (const n of names) {
    if (row[n] !== undefined && row[n] !== null && row[n] !== "") return row[n];
  }
  return null;
}

function classify(rawStatus, intervalType, daysRem, milesRem, hasHistory) {
  const s = String(rawStatus || "").toLowerCase();
  if (s.includes("overdue")) return "OVERDUE";
  if (s.includes("due soon") || s.includes("soon")) return "Due Soon";
  if (s.includes("never")) return "Never Logged";
  if (s.includes("track") || s.includes("ok")) return "On Track";
  // Notion gave us nothing usable. Fall back to the same arithmetic the formula uses.
  if (!hasHistory) return "Never Logged";
  const vals = [daysRem, milesRem].filter((v) => typeof v === "number");
  if (!vals.length) return "On Track";
  if (vals.some((v) => v <= 0)) return "OVERDUE";
  if ((typeof daysRem === "number" && daysRem <= 30) ||
      (typeof milesRem === "number" && milesRem <= 1000)) return "Due Soon";
  return "On Track";
}

function intervalLabel(type, miles, months) {
  if (type === "Time") return `${months} mo`;
  if (type === "Mileage") return `${Number(miles).toLocaleString("en-US")} mi`;
  if (type === "Mileage or Time")
    return `${Number(miles).toLocaleString("en-US")} mi or ${months} mo`;
  return type;
}

function elapsedFraction(intervalType, months, miles, daysRem, milesRem) {
  const fracs = [];
  if (months && typeof daysRem === "number") {
    const total = months * 30.44;
    fracs.push((total - daysRem) / total);
  }
  if (miles && typeof milesRem === "number") {
    fracs.push((miles - milesRem) / miles);
  }
  if (!fracs.length) return null;
  return Math.max(...fracs);
}

// ---------- handler ----------

export default async function handler(req, res) {
  const token = process.env.NOTION_TOKEN;
  if (!token) {
    res.status(503).json({
      error: "no_token",
      message:
        "NOTION_TOKEN is not set. Add it under Vercel project settings, Environment Variables, then redeploy.",
    });
    return;
  }

  try {
    const [dsTasks, dsLog, dsVeh] = await Promise.all([
      resolveDataSource(token, DB.tasks, FALLBACK_DS.tasks),
      resolveDataSource(token, DB.log, FALLBACK_DS.log),
      resolveDataSource(token, DB.vehicles, FALLBACK_DS.vehicles),
    ]);

    const [taskRows, logRows, vehRows] = await Promise.all([
      queryAll(token, dsTasks),
      queryAll(token, dsLog),
      queryAll(token, dsVeh),
    ]);

    // vehicles
    const vehicles = {};
    for (const v of vehRows) {
      vehicles[v.id] = {
        id: v.id,
        name: pick(v, ["Vehicle"]) || "Unnamed vehicle",
        type: pick(v, ["Type"]),
        year: pick(v, ["Year"]),
        model: pick(v, ["Make / Model"]),
        odometer: pick(v, ["Current Odometer"]),
        odometerUpdated: pick(v, ["Odometer Updated"]),
        notes: pick(v, ["Notes"]),
      };
    }

    // the clock-start marker
    const baselineEntry = logRows.find((l) => pick(l, ["Entry"]) === BASELINE_TITLE);
    const baselineId = baselineEntry ? baselineEntry.id : null;

    // service log, newest first, baseline excluded from "recent work"
    const history = logRows
      .filter((l) => l.id !== baselineId)
      .map((l) => ({
        id: l.id,
        entry: pick(l, ["Entry"]),
        date: pick(l, ["Date"]),
        odometer: pick(l, ["Odometer"]),
        cost: pick(l, ["Cost"]),
        performedBy: pick(l, ["Performed By"]),
        location: pick(l, ["Location"]),
        vehicle: (l["Vehicle"] || [])[0] || null,
        tasks: l["Task"] || [],
      }))
      .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));

    let blankStatus = 0;
    const today = todayISO();

    // Drop the no-due-date items before anything else touches them.
    const scheduledRows = taskRows.filter(
      (t) => !EXCLUDED_TYPES.has(pick(t, ["Interval Type"]))
    );
    const excludedCount = taskRows.length - scheduledRows.length;

    const tasks = scheduledRows.map((t) => {
      const title = pick(t, ["Task"]) || "Untitled task";
      const intervalType = pick(t, ["Interval Type"]);
      const months = pick(t, ["Interval Months"]);
      const miles = pick(t, ["Interval Miles"]);
      const daysRem = pick(t, ["Days Remaining"]);
      const milesRem = pick(t, ["Miles Remaining"]);
      const rawStatus = pick(t, ["Status"]);
      const logIds = t["Service Log"] || [];
      const vehicleId = (t["Vehicle"] || [])[0] || null;

      if (rawStatus === null || rawStatus === undefined) blankStatus++;

      const realWork = logIds.filter((id) => id !== baselineId);
      const baselineOnly = Boolean(baselineId) && logIds.includes(baselineId) && realWork.length === 0;

      const guidance = guidanceFor(title);

      const veh = vehicles[vehicleId];
      const policy = odometerPolicy({
        intervalMiles: typeof miles === "number" ? miles : null,
        vehicleType: veh ? veh.type : null,
      });
      const mustAsk = odometerRequired(policy, veh ? veh.odometerUpdated : null, today);

      const status = classify(
        rawStatus, intervalType,
        typeof daysRem === "number" ? daysRem : null,
        typeof milesRem === "number" ? milesRem : null,
        logIds.length > 0
      );

      return {
        id: t.id,
        url: t.url,
        task: title,
        vehicleId,
        vehicleName: vehicles[vehicleId] ? vehicles[vehicleId].name : "Unassigned",
        category: pick(t, ["Category"]),
        priority: pick(t, ["Priority"]),
        source: pick(t, ["Source"]),
        brinkleySchedule: pick(t, ["Brinkley Schedule"]),
        partsSpecs: pick(t, ["Parts & Specs"]),
        intervalType,
        intervalMonths: typeof months === "number" ? months : null,
        intervalMiles: typeof miles === "number" ? miles : null,
        intervalLabel: intervalLabel(intervalType, miles, months),
        status,
        rawStatus: rawStatus || null,
        daysRemaining: typeof daysRem === "number" ? daysRem : null,
        milesRemaining: typeof milesRem === "number" ? milesRem : null,
        nextDueDate: pick(t, ["Next Due Date"]),
        nextDueMiles: pick(t, ["Next Due Miles"]),
        lastDone: pick(t, ["Last Done"]),
        lastDoneMiles: pick(t, ["Last Done Miles"]),
        timesServiced: pick(t, ["Times Serviced"]),
        baselineOnly,
        neverServiced: logIds.length === 0 || baselineOnly,
        shop: guidance
          ? Boolean(guidance.shop)
          : SHOP_PATTERNS.some((re) => re.test(title)),
        guidance,
        odometerTier: policy.tier,
        odometerRequired: mustAsk,
        elapsed: elapsedFraction(
          intervalType, months, miles,
          typeof daysRem === "number" ? daysRem : null,
          typeof milesRem === "number" ? milesRem : null
        ),
      };
    });

    const warnings = [];
    if (!baselineId) {
      warnings.push(
        "The baseline entry was not found in the Service Log, so items that have never actually been serviced cannot be labelled."
      );
    }
    if (blankStatus > tasks.length / 2) {
      warnings.push(
        `Notion returned no Status value on ${blankStatus} of ${tasks.length} tasks. The integration is probably missing access to one of the three databases, so these figures were recalculated rather than read.`
      );
    }
    const unguided = tasks.filter((t) => !t.guidance);
    if (unguided.length) {
      warnings.push(
        `No guidance written for ${unguided.length} task${unguided.length === 1 ? "" : "s"}: ${unguided
          .map((t) => t.task)
          .join(", ")}. Either the task is new or its title changed in Notion, which breaks the slug match in api/guidance.js.`
      );
    }

    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
    res.status(200).json({
      generatedAt: new Date().toISOString(),
      vehicles,
      tasks,
      history: history.slice(0, 40),
      lube: LUBE,
      rig: RIG,
      excludedCount,
      warnings,
    });
  } catch (err) {
    const status = err instanceof NotionError ? err.status : 500;
    const map = {
      401: "Notion rejected the token. Check the NOTION_TOKEN value in Vercel project settings.",
      404: "Notion cannot see the databases. Open the RV Maintenance parent page in Notion, then Connections, and add the integration.",
      429: "Notion is rate limiting the request. Wait a moment and reload.",
    };
    res.status(status === 401 || status === 404 || status === 429 ? status : 502).json({
      error: "notion_request_failed",
      status,
      message: map[status] || "Notion did not answer. Reload in a moment.",
      detail: String(err.message || "").slice(0, 400),
    });
  }
}
