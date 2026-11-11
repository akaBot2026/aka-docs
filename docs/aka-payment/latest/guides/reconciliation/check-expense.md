---
title: "Reconcile expense invoices and supporting documents"
description: "The requester wants the system to match invoices with their supporting documents before submission."
id: check-expense
sidebar_label: Reconcile expense invoices and supporting documents
sidebar_position: 2
---

# Reconcile expense invoices and supporting documents

The requester wants the system to match invoices with their supporting documents before submission.

**When to use:**

- The user wants to check whether an invoice matches its quotation.
- The user wants to reconcile supporting documents before submission.


Check the supporting documents for each expense against the rules for the request type.


## Ways to do this

- [Reconcile documents for an expense](how-to/check-expense.md) — For request types with reconciliation enabled, click Reconcile on an expense row (or Reconcile all), then review the results; the system also runs reconciliation automatically at certain times.

## Before you start

- **[Requirements for continuing through the request creation workflow](../../reference/requests/draft-validation.md)** — only if [An expense request draft is open](../../troubleshooting/requests/draft-open.md) is not already satisfied\
  Each step in the creation workflow has required fields; if any are missing, clicking Continue displays "Please fix the highlighted fields."

## Steps

[Reconcile documents for an expense](how-to/check-expense.md)

1. Check [An expense request draft is open](../../troubleshooting/requests/draft-open.md).
   The "Create payment request" page displays a request number (for example, TT.19102026.00001) and the "Draft" label in the upper-right corner of the creation workflow bar.
   If this condition is not met, follow [Start a new request and complete the Overview step](../requests/how-to/start-draft.md) below.
2. [Start a new request and complete the Overview step](../requests/how-to/start-draft.md) — only if [An expense request draft is open](../../troubleshooting/requests/draft-open.md) is not already satisfied
   1. Click **Create payment request** at the top of the page (this opens the default request type); click the arrow next to it to open the list of enabled request types and select one (sample data: Payment, Advance, Reimbursement, Prepayment, Other payment; the actual list is configured by the administrator). A draft is created immediately.
      ![Top of the My Requests page: (1) the Create payment request button and the request type list opened from the arrow next to it (Payment, Advance, Reimbursement, Prepayment, Other payment)](/static/img/aka-payment-latest-requests-start-draft-button.webp)
   2. In step **1 Overview**, enter the **Request purpose** (2); check **Requester** (you), **Approving unit** (your unit), **Payee** (pre-filled), and other fields such as Request date, Request number, Company, Budget period, Payment deadline, and Request description. The Approving unit is also the default Cost center for expense rows.
      ![Step 1 Overview of the draft: (2) the Request purpose field; Requester, Approving unit, Budget period, and Payee are pre-filled; (3) the Continue button](/static/img/aka-payment-latest-requests-start-draft-overview.webp)
   3. Click **Continue** (3) to go to step **2 Expense details**.
3. [Reconcile documents for an expense](how-to/check-expense.md)
   1. Do this only when reconciliation is enabled for the request type (Configuration → Request types → **Request flow** tab → Expense details step → Reconciliation section → **Enable reconciliation**); when it is disabled, the expense table does not have a **Reconciliation result** column. The Payment request type in the sample data has reconciliation enabled and checks invoices through the e-invoice portal.
   2. Attach supporting documents to the expense row (the button is disabled and shows the hint "Attach a file to reconcile" when the row has no files).
   3. In the **Reconciliation result** column, click **Reconcile** for the row.
   4. Wait for "Reconciling…"; the table updates automatically when results are available, including if you reload the page or open it on another device. Results appear as "Passed", "N to review", "N requiring action", "Failed", or "Error"; before reconciliation runs, the status is "Not reconciled".
   5. Click a result to open the **Reconciliation results** dialog with the **Overview**, **Documents**, and **Reconciliation** tabs (and the **Invoice** tab when invoice lookup is enabled: "Taxpayer is active", "Invoice issuance has been announced", "Verify seller's digital signature"); click **Reconcile again** to rerun reconciliation after correcting the documents.

## Troubleshooting

### [Reconcile documents for an expense](how-to/check-expense.md)

- Reconciliation fails to run: "Could not reconcile — please try again." Expenses that have not been reconciled, are processing, have an error, or have been edited since the last reconciliation will block submission (Review shows "Not eligible"): see [Requirements for submitting a request](../../reference/requests/submission.md). A failed mandatory rule also disables the **Continue** button in Expense details: see [Requirements for continuing through the request creation workflow](../../reference/requests/draft-validation.md).
