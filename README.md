# bram-maintenance

Live maintenance dashboard for the Brinkley i275 and the Ram 2500.
Reads the three Notion databases on every page load and renders what is
overdue, due soon, on track, never logged, and checklist-only.

Deployed on Vercel at brammaintenance.vercel.app

## Why there is a server

`api/status.js` runs server side so the Notion token stays out of the browser.
Static hosting such as GitHub Pages cannot do this: the token would ship inside
the page and be readable by anyone. The integration has write access, so an
exposed token would let a stranger create pages in the workspace.

## Setup

Requires two environment variables in Vercel, for both Production and Preview:

    NOTION_TOKEN  = the internal integration secret
    DASHBOARD_KEY = a random key of at least 20 characters

DASHBOARD_KEY locks the API. Without it, `/api/status` would hand anyone the
tasks, stock and shopping list, and `/api/log` would let anyone write to Notion.
Both routes check the `X-Dashboard-Key` header before they touch Notion, refuse
outright if DASHBOARD_KEY is missing or short, and mark every response
`private, no-store` so no shared cache can replay a keyed answer.

The integration must be connected to all three databases, or to the RV
Maintenance parent page so they inherit access. If any one of them is missing,
Notion returns empty rollups and the page shows a warning banner saying the
figures were recalculated rather than read.

Never commit the token. It is covered by .gitignore but the real protection is
that it only ever lives in Vercel project settings.

## Unlocking a phone or computer

Each browser needs the key once. Generate it in your password manager, save it
there, then either:

- open `https://brammaintenance.vercel.app/#key=<the key>` once (the part after
  `#` never reaches the server, and the page clears it from the address bar), or
- open the dashboard and paste the key when it asks.

The key stays in that browser's local storage. A home-screen copy of the page on
an iPhone keeps its own storage, so unlock it separately. **Lock**, next to
Refresh, forgets the key on that device.

To change the key, update DASHBOARD_KEY in Vercel and redeploy. Every device
then asks for the new one.

Order matters on first setup: add DASHBOARD_KEY in Vercel before this change
deploys, or the dashboard will say the key isn't set up until you add it and
redeploy. Nothing is exposed in the meantime; the API stays shut.

## Tests

    npm test

Node's built-in runner, no dependencies. The tests prove both routes refuse
without the key before any call to Notion, and that responses are never cacheable.

## Why formula values are read rather than computed

The Notion MCP tooling cannot return formula and rollup properties, so anything
querying that way has to recompute Status, Days Remaining, and Miles Remaining
by hand. The REST API does return them. This app reads them directly, so the
dashboard and the database cannot disagree.

`classify()` falls back to the same arithmetic the Status formula uses if Notion
returns nothing, and surfaces a warning when that happens on more than half the
tasks.

## Stock

`api/status.js` also reads Chemicals & Lubricants and Tools & Parts. Each task
shows the linked items and their Status, a row says "Need to buy" when one is Out
or To Buy, and anything Running Low, Out or To Buy goes on the shopping list.
These two databases are read best effort: if either fails, the page still renders
and a warning says stock is missing.

## Things that are code, not data

`SHOP_PATTERNS` in `api/status.js` decides which tasks want a bay or a
technician, matched on task title. Replacing it with a `Shop Required` checkbox
in the Maintenance Tasks database would move that judgment into Notion where it
belongs.

## The baseline entry

One Service Log entry titled "Baseline: trailer placed in service (no service
performed)" dated 2025-07-15 is linked to 38 trailer tasks. It is a clock-start
marker, not a record of work.

## Done once before it is tracked

A task counts only once it has a real Service Log entry, meaning anything other
than the baseline. Until then it is `Not Started`: left out of the counts, the
rail and the attention box, and listed collapsed at the bottom of the page.
Logging it starts the clock. The one exception is a Critical task, which shows as
`Never Logged` in the main list, because those are worth a nag.

Never delete or re-date it.
