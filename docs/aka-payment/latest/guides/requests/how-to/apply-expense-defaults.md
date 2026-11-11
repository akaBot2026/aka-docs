---
title: "Apply allocation to all expenses"
description: "In the Expense list step, open Apply to all expenses, select the item, department (and project), then click Apply."
id: apply-expense-defaults
sidebar_label: Apply allocation to all expenses
sidebar_position: 4
---

# Apply allocation to all expenses

In the Expense list step, open Apply to all expenses, select the item, department (and project), then click Apply.


## Steps

1. In **2 Expense list**, click the arrow next to **Add expense** (on mobile: the ⋯ menu), then select **Apply to all expenses**. This option is available only for request types that include allocation (Budget item).
2. In the dialog, select the allocation values, such as **Budget item**, **Cost center**, **Project** (shown only when the budget is managed by project), or **Employee**. All fields are optional; leaving a field blank does not change any expenses.
3. Click **Apply**. The values are applied to every expense row, except for fields you have edited directly on a row and fields that already had a value before you opened **Creation workflow** this time (blank fields are populated). Rows added afterward (manually, from invoices, or by importing a document bundle) start with these values.
4. Check the summary row below the **Expense list** heading (the icon and value for each field); click the settings icon at the end of the row to reopen the dialog.

## Troubleshooting

- Values are retained only for the current **Creation workflow** session: if you reopen the draft, the dialog is empty (the values already applied to expenses are retained). You can still edit each row individually; each row must still have all required fields. See [Conditions for proceeding in the request creation workflow](../../../reference/requests/draft-validation.md).


## Prerequisites

- [A request draft is open](../../../troubleshooting/requests/draft-open.md) — A request is in Draft status in the creation workflow and has a document number.

## Used in these guides

- [Apply the same budget item and cost center to all expenses](../apply-expense-defaults.md) — The requester wants every expense row in the request to use the same Budget item, Cost center (and Project), without selecting them for each row.
- [Add an expense from an invoice](add-invoice-expense.md) — In the Expense list step, select Add from invoice, upload an invoice or select one from Invoice Management; each invoice becomes an expense row.
- [Create a request and complete it through the Review step](create-draft.md) — After opening a new request, add expenses in the Expense list, enter payment details, then proceed to the Review step.
- [Import a document bundle as expense rows](import-bundle.md) — In the Expense list step, select Import document bundle and upload multiple files, a PDF, or a zip file; the system splits them into expense rows.
