---
title: "Conditions for proceeding in the request creation flow"
description: "Each step in the creation flow has required fields. If any are missing, clicking Continue displays “Please fix the fields marked below.”"
id: draft-validation
sidebar_label: Conditions for proceeding in the request creation flow
sidebar_position: 2
displayed_sidebar: akaPaymentSidebar
---

# Conditions for proceeding in the request creation flow

Each step in the creation flow has required fields. If any are missing, clicking Continue displays “Please fix the fields marked below.”

**Requirement level:** Required


Required fields depend on the request type configuration. The example below uses the “Payment” request type with sample data.

- **Step 1: Overview**: Purpose, Requester, Approver, and Payee are required.
- **Step 2: Expense report**: At least one expense line is required. Each line must include an Expense description, Total amount, Budget item, Cost center, and—if the budget is project-based—a Project. Lines with an invoice must also include Invoice type, Invoice number, Tax type, and Total amount payable. An invoice cannot appear on two lines (“This invoice is already on line …”). Missing required documents (“Missing required documents: …”) or an unmet mandatory reconciliation rule also blocks Continue. Reconciliation in progress does not block this step; it only blocks submission. For request types that split an expense across multiple allocation lines, each allocation line must include a budget item and cost center (and a project if required), an amount greater than 0, and a unique combination of fields. The total of the allocation lines must equal the expense amount.
- **Step 3: Payment**: Payment method and at least one beneficiary are required. For bank transfers, Account number, Recipient name, Bank name, and Amount are required. For methods that do not use a bank account (Cash, Accounts payable offset), Recipient name, ID number, and Amount are required. The beneficiary total must equal the total expenses. If it does not, step 3 displays “The total beneficiary amount must equal the total expenses.” and the **Submit request** button on step 4 is disabled for the same reason.
- **Step 4: Review** is available only when step 3 is valid. Once all requirements are met, the status label displays “Ready to submit.” For submission requirements, see [Conditions for submitting a request](submission.md).


## Used in these guides

- [Reconcile documents for an expense](../../guides/reconciliation/how-to/check-expense.md) — For request types with reconciliation enabled, click Reconcile on an expense line (or Bulk reconcile) and review the results. The system also runs reconciliation automatically at certain points.
- [Apply allocations to all expenses](../../guides/requests/how-to/apply-expense-defaults.md) — In the Expense report step, open Apply to all expenses, select a budget item, cost center (and project), then click Apply.
- [Create a request and complete it through the Review step](../../guides/requests/how-to/create-draft.md) — After opening a new request, add expenses in Expense report, enter the payment details, then proceed to the Review step.
- [Open a new request and complete the Overview step](../../guides/requests/how-to/start-draft.md) — Click Create payment request, complete the Overview step, then click Continue to proceed to Expense report.
