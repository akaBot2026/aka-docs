---
title: "Reconcile Documents for an Expense"
description: "For request types with reconciliation enabled, click Reconcile on an expense row (or Reconcile in Bulk) and review the results. The system also runs reconciliation automatically at certain times."
id: check-expense
sidebar_label: Reconcile Documents for an Expense
sidebar_position: 2
---

# Reconcile Documents for an Expense

For request types with reconciliation enabled, click Reconcile on an expense row (or Reconcile in Bulk) and review the results. The system also runs reconciliation automatically at certain times.


## Steps

1. Do this only when reconciliation is enabled for the request type (Settings → Request Types → **Request Flow** tab → Expense List step → Reconciliation section → **Enable reconciliation**). When disabled, the expense table does not have a **Reconciliation result** column. The Payment type in the sample data has reconciliation enabled and looks up invoices on the e-invoice portal.
2. Attach a document to the expense row (the button is disabled and shows the hint "Attach a file to reconcile" when the row has no file).
3. In the **Reconciliation result** column, click **Reconcile** for the row.
   - To run reconciliation for multiple rows: click the arrow next to **Add Expense** (on mobile: the ⋯ menu), then select **Reconcile in Bulk**. Only expenses that have not been reconciled or whose data has changed are processed (if nothing needs to be processed, the message "All expenses have been reconciled using the latest data." appears).
   - Note: the system also runs reconciliation automatically when an invoice finishes processing and is added to a row, and when you open step **4 Review** (for expenses with files that have not been reconciled or whose data has changed).
4. Wait for "Reconciling…". The table updates automatically when results are available, including if you reload the page or open it on another device. Results are shown as "Passed", "N items to review", "N items to resolve", "Failed", or "Error". Before reconciliation runs, the result is "Not reconciled".
5. Click a result to open the **Reconciliation results** dialog with the **Overview**, **Documents**, and **Reconciliation** tabs (and the **Invoice** tab when invoice lookup is enabled: "Taxpayer is active", "Invoice issuance has been announced", and "Verify the seller's digital signature"). Click **Reconcile again** to rerun reconciliation after editing a document.

## Troubleshooting

- Reconciliation cannot run: "Unable to reconcile — please try again." Expenses that have not been reconciled, are currently being processed, have errors, or have been edited since the last reconciliation will block submission (Review shows "Not eligible"): see [Conditions for submitting a request](../../../reference/requests/submission.md). A failed mandatory rule also blocks the **Continue** button in the Expense List: see [Conditions for proceeding in the request creation workflow](../../../reference/requests/draft-validation.md).


## Prerequisites

- [An open draft request](../../../troubleshooting/requests/draft-open.md) — A request is in Draft status in the creation workflow and has a document number.

## Used in these guides

- [Reconcile invoices and expense documents](../check-expense.md) — The requester wants the system to match an invoice against its supporting documents before submission.
- [Add an expense from an invoice](../../requests/how-to/add-invoice-expense.md) — In the Expense List step, select Add from Invoice, upload an invoice, or select one from the Invoice Management list; each invoice becomes an expense row.
