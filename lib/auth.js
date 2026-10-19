// Shared-secret check for the API routes.
//
// The dashboard is public, and the Notion integration behind it has write
// access, so every route asks for the key in DASHBOARD_KEY before it touches
// Notion. The page sends the key it was given in the X-Dashboard-Key header.
//
// Deliberate choices:
//   - Fail closed. With no DASHBOARD_KEY set, or one too short to resist
//     guessing, every route refuses rather than serving openly.
//   - Compare SHA-256 digests with timingSafeEqual, so neither the key's
//     length nor its prefix leaks through response timing.
//   - Never cache. A shared CDN cache keyed on the URL alone would hand a
//     keyed response to anyone who asks for the same URL without the key.

import { createHash, timingSafeEqual } from "node:crypto";

export const HEADER = "x-dashboard-key";
export const MIN_KEY_LENGTH = 20;

const digest = (s) => createHash("sha256").update(String(s)).digest();

/** Decide whether a request carries the right key. Pure, so it is easy to test. */
export function checkKey(req, expected = process.env.DASHBOARD_KEY) {
  if (!expected) {
    return {
      ok: false,
      status: 503,
      error: "no_key_configured",
      message:
        "DASHBOARD_KEY is not set. Add it under Vercel project settings, Environment Variables, then redeploy.",
    };
  }
  if (expected.length < MIN_KEY_LENGTH) {
    return {
      ok: false,
      status: 503,
      error: "key_too_short",
      message: `DASHBOARD_KEY must be at least ${MIN_KEY_LENGTH} characters. Generate a longer one, update it in Vercel, then redeploy.`,
    };
  }
  const given = req.headers?.[HEADER];
  if (typeof given !== "string" || given === "") {
    return { ok: false, status: 401, error: "key_required", message: "This dashboard needs its key." };
  }
  if (!timingSafeEqual(digest(given), digest(expected))) {
    return { ok: false, status: 401, error: "key_rejected", message: "That key was not accepted." };
  }
  return { ok: true };
}

/** Mark the response uncacheable, and answer for the route when the key is wrong. */
export function requireKey(req, res) {
  res.setHeader("Cache-Control", "private, no-store");
  const result = checkKey(req);
  if (result.ok) return true;
  res.status(result.status).json({ error: result.error, message: result.message });
  return false;
}
