---
title: "Budget Allocation Import Rules"
description: "Amounts must be non-negative; each combination can appear only once per batch; a batch can contain up to 5,000 rows; notes can contain up to 1,024 characters."
id: allocation-rules
sidebar_label: Budget Allocation Import Rules
sidebar_position: 2
displayed_sidebar: akaPaymentSidebar
---

# Budget Allocation Import Rules

Amounts must be non-negative; each combination can appear only once per batch; a batch can contain up to 5,000 rows; notes can contain up to 1,024 characters.

**Requirement level:** Required


Amounts must be non-negative. When allocation by project is enabled, each row must include a project (the Project field is required in the "New Allocation" table); rows missing an enabled allocation detail (for example, Project) cannot be saved. Two rows with the same combination (period, item, unit, project) in one batch cannot be saved. A batch can contain up to 5,000 rows. When importing from Excel, the period must use the MM-YYYY format and notes can contain up to 1,024 characters; the "Apply N rows" button is available only when there are no remaining rows with errors. An allocation with a combination that already exists cannot be created either; the system reports that the allocation already exists.


## Used in these guides

- [Allocate a budget for a period](../../guides/budget/how-to/allocate.md) — Go to Budget Management → Budget Allocation, select the year, month, unit (and project), then click Allocate to enter amounts by item and unit.
- [Import budget allocations from Excel](../../guides/budget/how-to/import-allocations.md) — In Budget Allocation, download the template, fill it in, click Import from Excel, review the preview, then click Apply.
