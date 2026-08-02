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

Requires one environment variable in Vercel:

    NOTION_TOKEN = the internal integration secret

The integration must be connected to all three databases, or to the RV
Maintenance parent page so they inherit access. If any one of them is missing,
Notion returns empty rollups and the page shows a warning banner saying the
figures were recalculated rather than read.

Never commit the token. It is covered by .gitignore but the real protection is
that it only ever lives in Vercel project settings.

## Why formula values are read rather than computed

The Notion MCP tooling cannot return formula and rollup properties, so anything
querying that way has to recompute Status, Days Remaining, and Miles Remaining
by hand. The REST API does return them. This app reads them directly, so the
dashboard and the database cannot disagree.

`classify()` falls back to the same arithmetic the Status formula uses if Notion
returns nothing, and surfaces a warning when that happens on more than half the
tasks.

## Things that are code, not data

`SHOP_PATTERNS` in `api/status.js` decides which tasks want a bay or a
technician, matched on task title. Replacing it with a `Shop Required` checkbox
in the Maintenance Tasks database would move that judgment into Notion where it
belongs.

## The baseline entry

One Service Log entry titled "Baseline: trailer placed in service (no service
performed)" dated 2025-07-15 is linked to 38 trailer tasks. It is a clock-start
marker, not a record of work. Tasks whose only service entry is the baseline are
flagged `baselineOnly` and labelled BASELINE in the UI, because otherwise the
dashboard would imply a maintenance history that does not exist.

Never delete or re-date it.
