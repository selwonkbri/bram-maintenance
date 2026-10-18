# Supplies starter list

`supplies.csv` is the starting point for a fourth Notion database, Supplies. It
tracks what is on hand, not how much: a Level of Low is enough to put an item on
the shopping list, and keeping exact quantities current is the kind of upkeep
that gets abandoned.

## Columns

- **Level**: Good, Low, Out, Need to buy, or Unknown. Items marked Good are the
  ones described from your own product photos in `api/guidance.js`. Everything
  else is Unknown until you confirm it.
- **DIY or Shop**: Shop rows only matter if you decide to do that job yourself.
  Leave them Unknown otherwise so they stay off the shopping list.
- **Key**: matches the `LUBE` id in `api/guidance.js`, so the dashboard can tie a
  task's lubricant card to its stock level.
- **Task keys**: the guidance keys of the tasks that use the item. These become a
  relation to Maintenance Tasks once the database exists.

## Deliberately not tracked

Rags, buckets, a hose, flashlight, socket set, screwdrivers, ladder, step stool,
microfiber towels, mild soap, baking soda, a vacuum, funnel, measuring cup. Assumed
on hand. Tracking them would bury the items that actually run out.

## Importing

Notion: Import, CSV, then point it at this file. It lands as a new database with
Kind, Level and DIY or Shop as selects. Put it under the RV Maintenance page so
the dashboard integration inherits access.
