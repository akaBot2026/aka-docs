---
title: "Create a Request and Fill It Through the Review Step"
description: "After opening a new request, add expenses in Expense Details, fill in the payment information, and continue to the Review step."
id: create-draft
sidebar_label: Create a Request and Fill It Through the Review Step
sidebar_position: 7
---

# Create a Request and Fill It Through the Review Step

After opening a new request, add expenses in Expense Details, fill in the payment information, and continue to the Review step.

## Before you start

- **[Requirements for continuing through the request creation workflow](../../../reference/requests/draft-validation.md)**\
  Each step in the creation workflow has required fields. If any are missing, clicking Continue displays the message "Please fix the highlighted fields."


## Steps

1. At step **2 Expense Details**, click **Add expense** to add a row manually, or click the arrow next to it to choose an option: [Add an expense from an invoice](add-invoice-expense.md), [Import a document bundle as expense rows](import-bundle.md), [Apply allocations to all expenses](apply-expense-defaults.md). You can also attach documents to the entire request using [Attach shared documents to the entire request](add-shared-documents.md).

   ![Step 2 Expense Details: (1) Add expense button and the adjacent arrow menu with Add from invoice, Import document bundle, Bulk reconciliation, Apply to all expenses, and Check budget](/static/img/aka-payment-latest-requests-create-draft-expenses.webp)

2. For a manually added row, enter **Expense description** and **Total amount**. Expand the row to check the **Allocation** section: **Budget item** (pre-filled with the first row's item or the first active item), **Cost center** (pre-filled based on the Approving unit), **Project** (only when the budget is managed by project), and Employee. Attach an invoice using **Attach invoice**.
3. Click **Continue**. The draft is saved automatically as you make changes (the label next to the request type changes from "Saving..." to "Saved").
4. At step **3 Payment**, select a **Payment method** (4) from the methods allowed for the request type (Bank transfer, Cash, or Offset; Bank transfer is selected by default).

   ![Step 3 Payment: (4) Payment method field, (5) Fill from expense details button on the Beneficiaries table, (6) Beneficiaries total row and Continue button](/static/img/aka-payment-latest-requests-create-draft-payment.webp)

5. Fill in the **Beneficiaries** table: click **Fill from expense details** (5) to automatically create a row for each recipient listed in the expenses, or click **Add beneficiary**. Click the book icon at the start of a row to select an account saved in the payment contacts. Bank transfers require an Account number, Recipient name, Bank name, and Amount; Cash and Offset require a Recipient name, ID/citizen ID number, and Amount.
6. Check that **Beneficiaries total** matches **Total expenses**, then click **Continue** (6).
7. At step **4 Review** (labeled "Ready to submit"), review the **Checks** section (each expense and its required documents), the "Payment request form" preview, and the **Document package**. If the request type supports reconciliation, this step automatically reconciles expenses with files that have not been reconciled or have changed. You can **Generate report** or **Upload revised version** if the request type uses an Excel report. Submit the request from [Submit a request](submit.md).

## Troubleshooting

- Message: "Please fix the highlighted fields before continuing." See [Requirements for continuing through the request creation workflow](../../../reference/requests/draft-validation.md).
- Row message: "This invoice is already on row …": an invoice can only be paid once; remove the duplicate invoice.


## Preparation guides

- [Open a new request and fill in the Overview step](start-draft.md) — Click Create payment request, fill in the Overview step, and click Continue to go to Expense Details.

## Result

- [Draft request ready to submit](../../../troubleshooting/requests/draft-ready.md) — At the Review step, the request displays the "Ready to submit" status and has no blocking checks.

## Used in these guides

- [Create a payment request](../create-draft.md) — For users who want to create a new payment request and save it as a draft.
- [Select invoices and create a payment request](../../invoices/how-to/create-request.md) — Select invoices with the Ready status in Invoice Management, click Create payment request, select a Request type, and click Create payment request; each invoice becomes an expense in the draft.
- [Duplicate a request](clone-request.md) — In My Requests, click the copy icon (Duplicate) on a row to create a new draft from an existing request, especially one that was rejected.
- [Draft request ready to submit](../../../troubleshooting/requests/draft-ready.md) — At the Review step, the request displays the "Ready to submit" status and has no blocking checks.
