// When a check-off has to ask for an exact odometer reading.
//
// The guiding rule: only demand a number when a mileage figure actually drives
// the task's next due date, and only when the stored reading is old enough that
// it could be meaningfully wrong.
//
// Under-recording an odometer is always safe. A reading pulled from a few days
// ago is lower than actual, never higher, so the next service comes due early
// rather than late. That is why a short freshness window is acceptable at all.

export const MILEAGE_STRICT_MAX = 15000;
export const FRESH_DAYS_STRICT = 3;
export const FRESH_DAYS_LOOSE = 14;

/**
 * tier "none"   never asks. One tap.
 * tier "strict" short intervals where drift matters. Asks unless very fresh.
 * tier "loose"  long intervals where a few hundred miles is noise.
 */
export function odometerPolicy({ intervalMiles, vehicleType }) {
  // No mileage interval means no mileage figure drives the due date.
  if (!intervalMiles) return { tier: "none", freshDays: null };

  // Trailer mileage is an estimate of towed miles that started at zero, so an
  // exact number there is false precision. Wheel bearing repack is the only
  // task this excludes, and its calendar trigger is the honest one anyway.
  if (vehicleType === "Trailer") return { tier: "none", freshDays: null };

  if (intervalMiles <= MILEAGE_STRICT_MAX) {
    return { tier: "strict", freshDays: FRESH_DAYS_STRICT };
  }
  return { tier: "loose", freshDays: FRESH_DAYS_LOOSE };
}

export function daysBetween(fromISO, toISO) {
  const a = Date.parse(String(fromISO).slice(0, 10) + "T00:00:00Z");
  const b = Date.parse(String(toISO).slice(0, 10) + "T00:00:00Z");
  if (Number.isNaN(a) || Number.isNaN(b)) return Infinity;
  return Math.round((b - a) / 86400000);
}

/** Whether the user must type a reading rather than accept the stored one. */
export function odometerRequired(policy, odometerUpdated, todayISO) {
  if (policy.tier === "none") return false;
  if (!odometerUpdated) return true;
  return daysBetween(odometerUpdated, todayISO) > policy.freshDays;
}

export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

/**
 * The rig moves across timezones, and UTC is ahead of every US zone in the
 * evening, so a server-side "today" stamps late entries a day forward. The
 * browser knows the real local date, so it sends it. Validate rather than
 * trust: accept only a well formed date within one day of UTC now.
 */
export function resolveDate(clientDate) {
  const utc = todayISO();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(clientDate || ""))) return utc;
  const drift = Math.abs(daysBetween(clientDate, utc));
  return drift <= 1 ? clientDate : utc;
}
