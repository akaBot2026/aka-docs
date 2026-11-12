---
title: "Check whether expenses exceed the budget"
description: "Users want to know whether the request they are drafting exceeds the allocated budget."
id: check-budget
sidebar_label: Check whether expenses exceed the budget
sidebar_position: 5
displayed_sidebar: akaPaymentSidebar
---

# Check whether expenses exceed the budget

Users want to know whether the request they are drafting exceeds the allocated budget.

**When to use:**

- Users are concerned that expenses may exceed the budget before they submit a request.
- Users want to see the remaining budget for expense lines in a draft.


Check each budget item and cost center.


## Ways to do this

- [Check the budget before submitting](how-to/check-budget.md) — On the Expense breakdown step, select Check budget to see whether expenses exceed the allocation.

## Before you start

- **[Requirements for continuing in the request creation workflow](../../reference/requests/draft-validation.md)** — only if [A draft request is open](../../troubleshooting/requests/draft-open.md) is not already satisfied\
  Each step in the creation workflow has required fields. If any are missing, clicking Continue displays "Please fix the highlighted fields."

## Steps

[Check the budget before submitting](how-to/check-budget.md)

1. Check that [A draft request is open](../../troubleshooting/requests/draft-open.md).
   The "Create payment request" page displays a document number (for example, TT.19102026.00001) and the "Draft" label in the upper-right corner of the creation workflow bar.
   If this is not already satisfied, follow [Start a new request and complete the Overview step](how-to/start-draft.md) below.
2. [Start a new request and complete the Overview step](how-to/start-draft.md) — only if [A draft request is open](../../troubleshooting/requests/draft-open.md) is not already satisfied
   1. Click **Create payment request** at the top of the page to open the default request type. Click the arrow beside it to open the list of enabled request types and find and select one (sample data: Payment, Advance, Advance settlement, Prepayment, Other payment; the actual list is configured by an administrator). A draft is created immediately.
      ![Top of the My requests page: (1) the Create payment request button and the request type list opened from the arrow beside it (Payment, Advance, Advance settlement, Prepayment, Other payment)](/static/img/aka-payment-latest-requests-start-draft-button.webp)
   2. On the **1 Overview** step, enter the **Request purpose** (2); check the **Requester** (you), **Approving unit** (your unit), **Payee** (pre-filled), and other fields such as Request date, Document number, Company, Budget period, Payment deadline, and Request description. The Approving unit is also the default Cost center for expense lines.
      ![Step 1, Overview, of the draft: (2) the Request purpose field; Requester, Approving unit, Budget period, and Payee are pre-filled; (3) the Continue button](/static/img/aka-payment-latest-requests-start-draft-overview.webp)
   3. Click **Continue** (3) to go to the **2 Expense breakdown** step.
3. [Check the budget before submitting](how-to/check-budget.md)
   1. On the **2 Expense breakdown** step, click the arrow beside **Add expense** (on mobile: the ⋯ menu), then select **Check budget**. This option is available only when budget checking is enabled for the request type.
   2. Review the "Budget check results" dialog. For each Item and Unit (and Project when the budget is project-based), it shows the Allocation, Used, This request, and Over amount, along with the "Over budget" label.
   3. If the request is over budget, expand "N expense lines" below (use the "Change item for expense line" suggestion to change an item), or leave the items unchanged if you accept the overage.
   4. Click **Close**.

## Notes

- **[Budget overage rules](../../reference/budget/overrun.md)**\
  Each request type sets Budget check to Off, Warning, or Block. The default is Warning, and the Payment request type is currently set to Warning.
