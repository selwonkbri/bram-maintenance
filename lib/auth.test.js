// Run with: npm test (node --test, no dependencies).
import { test, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { checkKey, requireKey, MIN_KEY_LENGTH } from "./auth.js";
import statusHandler from "../api/status.js";
import logHandler from "../api/log.js";

const KEY = "k".repeat(MIN_KEY_LENGTH) + "-correct";

function fakeRes() {
  return {
    code: null,
    body: null,
    headers: {},
    setHeader(k, v) { this.headers[k.toLowerCase()] = v; },
    status(c) { this.code = c; return this; },
    json(b) { this.body = b; return this; },
  };
}
const req = (headers = {}, extra = {}) => ({ method: "GET", headers, ...extra });

let realFetch, fetchCalls;
beforeEach(() => {
  realFetch = globalThis.fetch;
  fetchCalls = [];
  globalThis.fetch = async (url) => {
    fetchCalls.push(String(url));
    throw new Error(`unexpected network call to ${url}`);
  };
  process.env.DASHBOARD_KEY = KEY;
  delete process.env.NOTION_TOKEN;
});
afterEach(() => {
  globalThis.fetch = realFetch;
  delete process.env.DASHBOARD_KEY;
  delete process.env.NOTION_TOKEN;
});

test("no DASHBOARD_KEY configured: refuse, never serve openly", () => {
  const r = checkKey(req({ "x-dashboard-key": KEY }), "");
  assert.equal(r.ok, false);
  assert.equal(r.status, 503);
  assert.equal(r.error, "no_key_configured");
});

test("a DASHBOARD_KEY shorter than the minimum is refused", () => {
  const short = "x".repeat(MIN_KEY_LENGTH - 1);
  const r = checkKey(req({ "x-dashboard-key": short }), short);
  assert.equal(r.status, 503);
  assert.equal(r.error, "key_too_short");
});

test("missing or empty key header: 401 key_required", () => {
  assert.equal(checkKey(req({})).error, "key_required");
  assert.equal(checkKey(req({ "x-dashboard-key": "" })).error, "key_required");
  assert.equal(checkKey({}).error, "key_required");
});

test("wrong key, including one of the same length: 401 key_rejected", () => {
  assert.equal(checkKey(req({ "x-dashboard-key": "nope" })).error, "key_rejected");
  const sameLength = "z".repeat(KEY.length);
  assert.equal(checkKey(req({ "x-dashboard-key": sameLength })).error, "key_rejected");
  assert.equal(checkKey(req({ "x-dashboard-key": KEY + " " })).error, "key_rejected");
});

test("right key passes", () => {
  assert.deepEqual(checkKey(req({ "x-dashboard-key": KEY })), { ok: true });
});

test("requireKey marks every response uncacheable, pass or fail", () => {
  const ok = fakeRes();
  assert.equal(requireKey(req({ "x-dashboard-key": KEY }), ok), true);
  assert.equal(ok.headers["cache-control"], "private, no-store");
  assert.equal(ok.code, null);

  const bad = fakeRes();
  assert.equal(requireKey(req({}), bad), false);
  assert.equal(bad.headers["cache-control"], "private, no-store");
  assert.equal(bad.code, 401);
  assert.deepEqual(Object.keys(bad.body).sort(), ["error", "message"]);
});

test("/api/status without the key: 401 and no call to Notion", async () => {
  process.env.NOTION_TOKEN = "secret_test_token";
  const res = fakeRes();
  await statusHandler(req({}), res);
  assert.equal(res.code, 401);
  assert.equal(fetchCalls.length, 0);
  assert.equal(res.headers["cache-control"], "private, no-store");
});

test("/api/status does not reveal whether NOTION_TOKEN is set before the key passes", async () => {
  const res = fakeRes();
  await statusHandler(req({}), res);
  assert.equal(res.code, 401);
  assert.notEqual(res.body.error, "no_token");
});

test("/api/status with the key reaches the Notion token check", async () => {
  const res = fakeRes();
  await statusHandler(req({ "x-dashboard-key": KEY }), res);
  assert.equal(res.code, 503);
  assert.equal(res.body.error, "no_token");
});

test("/api/status success is not cacheable at the edge", async () => {
  process.env.NOTION_TOKEN = "secret_test_token";
  globalThis.fetch = async (url) => {
    fetchCalls.push(String(url));
    const u = String(url);
    const body = u.includes("/databases/")
      ? { data_sources: [{ id: "ds" }] }
      : u.endsWith("/query")
        ? { results: [], has_more: false, next_cursor: null }
        : {};
    return new Response(JSON.stringify(body), { status: 200, headers: { "Content-Type": "application/json" } });
  };
  const res = fakeRes();
  await statusHandler(req({ "x-dashboard-key": KEY }), res);
  assert.ok(fetchCalls.length > 0, "the handler should have queried Notion");
  assert.equal(res.headers["cache-control"], "private, no-store");
  assert.doesNotMatch(String(res.headers["cache-control"]), /s-maxage|public/);
});

test("/api/log without the key: 401, no write, before the method check", async () => {
  process.env.NOTION_TOKEN = "secret_test_token";
  const res = fakeRes();
  await logHandler(req({}, { method: "POST", body: { taskId: "abc" } }), res);
  assert.equal(res.code, 401);
  assert.equal(fetchCalls.length, 0);

  const wrong = fakeRes();
  await logHandler(req({ "x-dashboard-key": "guess" }, { method: "POST", body: { taskId: "abc" } }), wrong);
  assert.equal(wrong.code, 401);
  assert.equal(wrong.body.error, "key_rejected");
  assert.equal(fetchCalls.length, 0);
});

test("/api/log with the key keeps its own checks", async () => {
  const get = fakeRes();
  await logHandler(req({ "x-dashboard-key": KEY }), get);
  assert.equal(get.code, 405);

  const noToken = fakeRes();
  await logHandler(req({ "x-dashboard-key": KEY }, { method: "POST", body: { taskId: "abc" } }), noToken);
  assert.equal(noToken.code, 503);
  assert.equal(noToken.body.error, "no_token");
  assert.equal(fetchCalls.length, 0);
});
