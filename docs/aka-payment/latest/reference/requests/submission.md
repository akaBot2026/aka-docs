---
title: "Submission requirements"
description: "You cannot submit if the form is incomplete, an invoice is duplicated, a required document is missing, reconciliation is incomplete, or the budget is exceeded (at the Block level)."
id: submission
sidebar_label: Submission requirements
sidebar_position: 3
---

# Submission requirements

You cannot submit if the form is incomplete, an invoice is duplicated, a required document is missing, reconciliation is incomplete, or the budget is exceeded (at the Block level).

**Requirement level:** Required


The server returns a specific error code; the interface applies the same rules in the Review step.

- **Form** (API error code `FORM_INCOMPLETE`): a required answer is missing (including the Chargeable Project when the budget is project-based), there are no expenses or beneficiaries, a multi-line allocation does not match the amount, or the same invoice is used on two expense lines.
- **Documents** (API error code `BUNDLE_INCOMPLETE`): a required document is missing or a required reconciliation rule has not been met; for request types that require reconciliation, an expense that has never been reconciled (or has no file), is being reconciled, failed reconciliation, or was edited after the last reconciliation (the previous result is ignored) will also block submission. An invoice from Invoice Management counts as attached to the invoice document item.
- **Budget** (API error code `BUDGET_OVERRUN`): submission is blocked only when Budget Check for the request type is set to **Block**; **Warning** only displays a dialog with the "Submit anyway" button.
- **Advance settlement** (API error code `CLAIM_EXCEEDS_ADVANCE`): the settlement amount exceeds the remaining advance amount.
- **Disabled request type** (API error code `REQUEST_TYPE_DISABLED`): new requests cannot be submitted for a disabled request type.
- **Total amount**: the total for beneficiaries must equal the total expenses; the interface disables **Submit request** and displays "The total beneficiary amount must equal the total expenses."
- **When saving a draft**: an expense can have only one invoice (API error code `MULTIPLE_INVOICES`), and an invoice cannot be a shared document (API error code `SHARED_INVOICE`).

Only the creator can submit, either from a draft or a returned request.


## Used in these guides

- [Budget overrun rules](../budget/overrun.md) — Set Budget Check for each request type to Off, Warning, or Block; the default is Warning, and the Payment type is currently set to Warning.
- [Requirements for continuing through the request creation process](draft-validation.md) — Each step in the creation process has required fields; if any are incomplete, clicking Continue displays "Please fix the highlighted fields."
- [Reconcile an expense's supporting documents](../../guides/reconciliation/how-to/check-expense.md) — For request types with reconciliation enabled, click Reconcile on an expense line (or Bulk reconcile), then review the result; the system also reconciles automatically at certain times.
- [Edit and resubmit a returned request](../../guides/requests/how-to/resubmit-returned.md) — Open the returned request, click Edit and resubmit, make changes based on the reason, then click Submit request; only the returned step is reopened.
- [Submit a request](../../guides/requests/how-to/submit.md) — In the Review step, click Submit request; the system opens the first approval step and locks the request.
