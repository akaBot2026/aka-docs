---
title: "Import Budget Allocations from Excel"
description: "Users want to bulk import budget allocations from an Excel file."
id: import-allocations
sidebar_label: Import Budget Allocations from Excel
sidebar_position: 3
---

# Import Budget Allocations from Excel

Users want to bulk import budget allocations from an Excel file.

**When to use:** A budget manager has an Excel spreadsheet with allocations for the entire period.


Allocate by period, line item, and unit across multiple rows at once.


## Ways to do this

- [Import budget allocations from Excel](how-to/import-allocations.md) — In Budget Allocations, download the template, fill it in, click Import from Excel, review the preview, then click Apply.

## Before you start

- **[Budget allocation import rules](../../reference/budget/allocation-rules.md)**\
  Amounts must be non-negative; each combination can appear only once in a batch; a batch can contain up to 5,000 rows; notes can contain up to 1,024 characters.

## Steps

[Import budget allocations from Excel](how-to/import-allocations.md)

1. [Import budget allocations from Excel](how-to/import-allocations.md)
   1. In the sidebar, under **Budget Management**, open **Budget Allocations**.
   2. Click the arrow next to **Allocate**, then select **Download template**.
   3. Fill in the template in Excel and save it (period in MM-YYYY format).
   4. Click the arrow next to **Allocate**, then select **Import from Excel** and choose an .xlsx or .csv file (if the file cannot be read, the message "This file can't be read as an Excel or CSV file." appears).
   5. If the file doesn't match the template, the page displays "File doesn't match the template. Select the corresponding column for each field." — select a column for each field, then click **Preview**.
   6. Review the preview: "N new · N updated · N errors" and the status of each row (New, Updated, Error); turn on **Show errors only** or click **Download error list** to fix the file; click **Back** to change the mapping.
   7. Click **Apply N rows**; the button is disabled if there are any errors, no rows, or the row limit per batch is exceeded.

## Troubleshooting

### [Import budget allocations from Excel](how-to/import-allocations.md)

- Row-level error messages: required field; period must be in MM-YYYY format; no active line item with this name; no unit with this code or name; no active project with this name; amount must be ≥ 0; note can contain up to 1,024 characters; duplicate names; combination duplicates the row above. See also [Budget allocation import rules](../../reference/budget/allocation-rules.md).
