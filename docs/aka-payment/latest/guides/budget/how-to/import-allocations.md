---
title: "Import Budget Allocations from Excel"
description: "In Budget Allocation, download the template, fill it in, click Import from Excel, review the preview, then click Apply."
id: import-allocations
sidebar_label: Import Budget Allocations from Excel
sidebar_position: 3
displayed_sidebar: akaPaymentSidebar
---

# Import Budget Allocations from Excel

In Budget Allocation, download the template, fill it in, click Import from Excel, review the preview, then click Apply.

## Before you begin

- **[Budget allocation import rules](../../../reference/budget/allocation-rules.md)**\
  Amounts must be non-negative; each combination can appear only once per batch; a batch can contain up to 5000 rows; notes can contain up to 1024 characters.


## Steps

1. In the sidebar, under **Budget Management**, open **Budget Allocation**.
2. Click the arrow next to **Allocate**, then select **Download template**.
3. Fill in the template in Excel and save it (period format: MM-YYYY).
4. Click the arrow next to **Allocate**, then select **Import from Excel** and choose an .xlsx or .csv file (if the file can't be read, the message "This file can't be read as Excel or CSV." appears).
5. If the file doesn't match the template, the page displays "File doesn't match the template. Select the corresponding column for each field." — select a column for each field, then click **Preview**.
6. Review the preview: "N new · N updated · N errors" and the status of each row (New, Updated, Error). Turn on **Show errors only** or click **Download error list** to fix the file; click **Back** to change the mapping.
7. Click **Apply N rows**. The button is disabled if there are any errors, no rows, or more than the per-import row limit.

## Troubleshooting

- Row-level error messages: required fields; period must use the MM-YYYY format; no active item with this name; no unit with this code or name; no active project with this name; amount must be ≥ 0; note can contain up to 1024 characters; multiple records have the same name; combination duplicates a row above. See also [Budget allocation import rules](../../../reference/budget/allocation-rules.md).


## Used in these guides

- [Import budget allocations using Excel](../import-allocations.md) — For users who want to bulk import budget allocations from an Excel file.
- [Allocate a budget for a period](allocate.md) — Under Budget Management → Budget Allocation, select the year, month, unit (and project), then click Allocate to enter amounts by item and unit.
