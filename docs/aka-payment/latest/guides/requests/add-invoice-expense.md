---
title: "Create expenses from existing invoices"
description: "Users have invoices (XML, PDF, or images) or invoices already in Invoice Management and want each invoice converted into a prefilled expense line."
id: add-invoice-expense
sidebar_label: Create expenses from existing invoices
sidebar_position: 3
displayed_sidebar: akaPaymentSidebar
---

# Create expenses from existing invoices

Users have invoices (XML, PDF, or images) or invoices already in Invoice Management and want each invoice converted into a prefilled expense line.

**When to use:**

- Users have electronic invoice files and don't want to enter the details manually.
- Users are drafting a request and want to use invoices already processed in Invoice Management.
- Users want to convert invoices into expense lines.


Each invoice (uploaded or selected from Invoice Management) becomes an expense line in the request being drafted.


## Ways to do this

- [Add expenses from invoices](how-to/add-invoice-expense.md) — On the Expense List step, select Add from invoices, upload invoices or select them from the Invoice Management list; each invoice becomes an expense line.

## Used in these guides

- [Upload incoming invoices to Invoice Management](../invoices/upload.md) — Users want to add invoice files (XML, PDF, images, or ZIP files) to the Invoice Management repository so the system can automatically read and validate them before creating a request.

## Before you start

- **[Requirements for proceeding through the request creation workflow](../../reference/requests/draft-validation.md)** — only if [A draft request is open](../../troubleshooting/requests/draft-open.md) is not already satisfied\
  Each step in the creation workflow has required fields. If any are missing, selecting Continue displays "Please correct the highlighted fields."
- **[Document upload limits](../../reference/extraction/file-limits.md)**\
  Add from invoices supports up to 50 invoices at a time; importing a document package supports up to 50 files and 100 MB; files uploaded to the assistant can be up to 10 MB.

## Steps

[Add expenses from invoices](how-to/add-invoice-expense.md)

1. Check that [A draft request is open](../../troubleshooting/requests/draft-open.md).
   The "Create Payment Request" page displays a document number (for example, TT.19102026.00001) and the "Draft" label in the upper-right corner of the creation progress bar.
   If this is not satisfied: follow [Start a new request and complete the Overview step](how-to/start-draft.md) below.
2. [Start a new request and complete the Overview step](how-to/start-draft.md) — only if [A draft request is open](../../troubleshooting/requests/draft-open.md) is not already satisfied
   1. Select **Create Payment Request** at the top of the page (opens the default request type); select the arrow beside it to open the list of enabled request types and find and select one (sample data: Payment, Advance, Reimbursement, Prepayment, Other payment; the actual list is configured by an administrator). A draft is created immediately.
      ![Top of the My Requests page: (1) the Create Payment Request button and the request type list opened from the arrow beside it (Payment, Advance, Reimbursement, Prepayment, Other payment)](/static/img/aka-payment-latest-requests-start-draft-button.webp)
   2. On the **1 Overview** step, enter the **Request purpose** (2); check **Requester** (you), **Approving unit** (your unit), **Payee** (prefilled), and other fields such as Request date, Document number, Company, Budget period, Payment deadline, and Request description. The Approving unit is also the default Cost-bearing department for expense lines.
      ![Step 1 Overview of the draft: (2) the Request purpose field; Requester, Approving unit, Budget period, and Payee are prefilled; (3) the Continue button](/static/img/aka-payment-latest-requests-start-draft-overview.webp)
   3. Select **Continue** (3) to go to the **2 Expense List** step.
3. [Add expenses from invoices](how-to/add-invoice-expense.md)
   1. On the **2 Expense List** step, select the arrow beside **Add expense**, then select **Add from invoices** (available only for request types that use invoices). The **Add invoices** dialog says "Each invoice becomes an expense line."
   2. On the **Upload** tab: drag and drop or select invoice files (electronic invoice XML, PDF, .docx, or images; multiple files at once, up to 50).
   3. Or, on the **Select from list** tab: view invoices in Invoice Management that have finished processing and aren't included in any request ("N unused invoices"), with Invoice number, Supplier, date, total amount, and the **GDT** column (e-invoice portal lookup result: Valid, Invalid, Needs review). Search by invoice number, supplier, or tax ID, then select the invoices to add (up to 50 at a time; invoices already in this draft won't appear again). If the list is empty, it displays "No invoices available" ([Upload invoices to Invoice Management](../invoices/upload.md) to make invoices available here).
   4. Select **Add N expense lines**. The dialog displays "Uploading x/y…" or "Adding x/y…" and closes automatically when finished. Uploaded files are processed afterward (the line displays "Reading…"; PDFs take a few dozen seconds); invoices selected from the list are added with their existing extracted data.
   5. Expand a line (using the arrow at the start of the line): the "Extracted from invoice" label and file name appear; fields in **Invoice**, **Supplier**, and **Allocation** are automatically populated and marked with the AI icon ("AI-extracted information"). The expense description and amount are also populated; values you've entered aren't overwritten.
   6. Review and edit the fields: select **Tax type** if you see "The invoice specifies a tax rate of …, which doesn't match any tax type"; select **Supplier** if you see "The invoice specifies the supplier: …" (users with configuration permissions also see the **Add new supplier** link). **Budget item** and **Cost-bearing department** are prefilled (based on the first line and the Approving unit, or according to [Apply allocation to all expenses](how-to/apply-expense-defaults.md)).
   7. If reconciliation is enabled for the request type, the system automatically reconciles the expense once invoice processing is complete; see [Reconcile documents for an expense](../reconciliation/how-to/check-expense.md).

## Troubleshooting

### [Add expenses from invoices](how-to/add-invoice-expense.md)

- "Couldn't upload …", "Couldn't read …", or "Couldn't add invoice …": the line is retained; fill it in manually or select **Attach invoice** to attach the file again. File limits: [Document upload limits](../../reference/extraction/file-limits.md).
- Invoices selected from the list are linked to the request only when the request is submitted. Until then, they remain "unused" (they are hidden only in this draft), and removing the line automatically returns the invoice to the unused list.
