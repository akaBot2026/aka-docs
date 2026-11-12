---
title: "Apply the Same Budget Item and Cost Center to All Expenses"
description: "The creator wants every expense line on a request to use the same Budget Item, Cost Center (and Project), without selecting each line individually."
id: apply-expense-defaults
sidebar_label: Apply the Same Budget Item and Cost Center to All Expenses
sidebar_position: 4
displayed_sidebar: akaPaymentSidebar
---

# Apply the Same Budget Item and Cost Center to All Expenses

The creator wants every expense line on a request to use the same Budget Item, Cost Center (and Project), without selecting each line individually.

**When to use:**

- The user has multiple expense lines with the same Budget Item and Cost Center.
- The user wants to apply one allocation to every expense line, including lines added later.


Enter the allocation once for the entire request. It will be applied to existing and subsequently added lines, and each line can still be edited individually.


## Ways to do this

- [Apply an allocation to all expenses](how-to/apply-expense-defaults.md) — In the Expense Details step, open Apply to all expenses, select the budget item, department (and project), then click Apply.

## Before you start

- **[Requirements for continuing through the request creation workflow](../../reference/requests/draft-validation.md)** — only if [A draft request is open](../../troubleshooting/requests/draft-open.md) is not already satisfied\
  Each step of the creation workflow has required fields. If any are missing, clicking Continue displays "Please fix the highlighted fields."

## Steps

[Apply an allocation to all expenses](how-to/apply-expense-defaults.md)

1. Check that [A draft request is open](../../troubleshooting/requests/draft-open.md).
   The "Create Payment Request" page displays a document number (for example, TT.19102026.00001) and the "Draft" label in the upper-right corner of the creation workflow bar.
   If this condition isn't met, follow [Start a new request and fill in the Overview step](how-to/start-draft.md) below.
2. [Start a new request and fill in the Overview step](how-to/start-draft.md) — only if [A draft request is open](../../troubleshooting/requests/draft-open.md) is not already satisfied
   1. Click **Create Payment Request** at the top of the page to open the default request type. Click the arrow next to it to open the list of enabled request types and find and select one (sample data: Payment, Advance, Advance Settlement, Prepayment, Other Payment; the actual list is configured by an administrator). A draft is created immediately.
      ![Top of the My Requests page: (1) the Create Payment Request button and the request type list opened from the adjacent arrow (Payment, Advance, Advance Settlement, Prepayment, Other Payment)](/static/img/aka-payment-latest-requests-start-draft-button.webp)
   2. In the **1 Overview** step, enter the **Request Purpose** (2). Check the **Requester** (you), **Approving Unit** (your unit), **Payee** (pre-filled), and other fields such as Request Date, Document Number, Company, Budget Period, Payment Deadline, and Request Description. The Approving Unit is also the default Cost Center for expense lines.
      ![Step 1, Overview, of the draft: (2) the Request Purpose field; Requester, Approving Unit, Budget Period, and Payee are pre-filled; (3) the Continue button](/static/img/aka-payment-latest-requests-start-draft-overview.webp)
   3. Click **Continue** (3) to go to step **2 Expense Details**.
3. [Apply an allocation to all expenses](how-to/apply-expense-defaults.md)
   1. In step **2 Expense Details**, click the arrow next to **Add Expense** (on a phone: the ⋯ menu), then select **Apply to all expenses**. This option is available only when the request type includes an allocation section (Budget Item).
   2. In the dialog, select the allocation values, such as **Budget Item**, **Cost Center**, **Project** (shown only when the budget is managed by project), or **Employee**. No fields are required; leaving a field blank leaves that field unchanged on all expenses.
   3. Click **Apply**. The values are added to every expense line. Existing values are not overwritten: this includes fields you edited manually on a line and fields that already had values before you opened the **Creation Workflow** this time (empty fields are filled in). Lines added later (manually, from an invoice, or by importing a document package) start with these values.
   4. Check the summary row below the **Expense Details** table heading (the icon and value for each field). Click the settings icon at the end of the row to reopen the dialog.

## Troubleshooting

### [Apply an allocation to all expenses](how-to/apply-expense-defaults.md)

- Values are retained only for the current **Creation Workflow** session: if you reopen the draft, the dialog is empty (the values already applied to expenses remain). You can still edit each line individually, and each line must still have all required fields: see [Requirements for continuing through the request creation workflow](../../reference/requests/draft-validation.md).
