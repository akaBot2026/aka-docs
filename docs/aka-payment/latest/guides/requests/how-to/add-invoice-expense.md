---
title: "Add expenses from invoices"
description: "In the Expense Breakdown step, select Add from invoices, upload invoices, or select them from the Invoice Management list; each invoice becomes an expense line."
id: add-invoice-expense
sidebar_label: Add expenses from invoices
sidebar_position: 2
displayed_sidebar: akaPaymentSidebar
---

# Add expenses from invoices

In the Expense Breakdown step, select Add from invoices, upload invoices, or select them from the Invoice Management list; each invoice becomes an expense line.

## Before you start

- **[Document upload limits](../../../reference/extraction/file-limits.md)**\
  You can add up to 50 invoices at a time using Add from invoices; import up to 50 files and 100 MB in a document package; and upload files up to 10 MB for the assistant.


## Steps

1. In step **2 Expense Breakdown**, click the arrow next to **Add expense** and select **Add from invoices** (available only for request types that use invoices). The **Add invoices** dialog says "Each invoice becomes an expense line."
2. On the **Upload** tab, drag and drop or select invoice files (e-invoice XML, PDF, .docx, or images; multiple files at once, up to 50).
3. Or, on the **Select from list** tab, choose from invoices in Invoice Management that have finished processing and are not already in a request ("N unused invoices"). The list shows Invoice No., Supplier, date, total amount, and the **GDT** column (e-invoice portal lookup result: Valid, Invalid, Needs review). Search by invoice number, supplier, or tax ID, then select the invoices to add (up to 50 at a time; invoices already in this draft are not shown again). If the list is empty, it says "No invoices available" ([Upload invoices to Invoice Management](../../invoices/upload.md) to make invoices available here).
4. Click **Add N expense lines**. The dialog displays "Uploading x/y…" or "Adding x/y…" and closes automatically when finished. Uploaded files are processed afterward (the line displays "Reading…"; PDFs take a few dozen seconds); invoices selected from the list come with their extracted data.
5. Expand a line (click the arrow at the start of the line): the label "Extracted from invoice" appears with the file name. The **Invoice**, **Supplier**, and **Allocation** sections have fields filled automatically and marked with the AI icon ("AI-extracted information"). The expense description and amount are also filled in; values you already entered are not overwritten.
6. Review and edit the fields: select a **Tax type** if you see "The invoice shows a tax rate of …, which doesn't match any tax type"; select a **Supplier** if you see "The invoice lists the supplier as: …" (users with configuration permissions also see the **Add new supplier** link). **Budget item** and **Cost center** are prefilled (based on the first line and Approving unit, or according to [Apply allocation to all expenses](apply-expense-defaults.md)).
7. If reconciliation is enabled for the request type, the system automatically reconciles again when invoice processing is complete. See [Reconcile documents for an expense](../../reconciliation/how-to/check-expense.md).

## Troubleshooting

- "Failed to upload …", "Failed to read …", or "Failed to add invoice …": the line is kept; enter the details manually or click **Attach invoice** to attach it again. See [Document upload limits](../../../reference/extraction/file-limits.md) for file limits.
- Invoices selected from the list are linked to the request only when the request is submitted. Until then, they remain "unused" (they are only hidden from this draft), and removing the line automatically returns the invoice to the unused list.


## Prerequisite to check

- [A draft request is open](../../../troubleshooting/requests/draft-open.md) — A request is in Draft status in the creation workflow and has a document number.

## Used in these guides

- [Create an expense from an existing invoice](../add-invoice-expense.md) — Use this when you have invoices (XML, PDF, or images), or invoices already in Invoice Management, and want each invoice to become a prefilled expense line.
- [Attach documents shared by the entire request](add-shared-documents.md) — In the Expense Breakdown step, click Shared documents to attach files that apply to all expense lines.
- [Create a request and complete it through the Review step](create-draft.md) — After opening a new request, add expenses in Expense Breakdown, enter payment details, and continue to Review.
