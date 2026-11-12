---
title: "Import a document bundle as expense lines"
description: "In the Expense Report step, select Import bundle and upload multiple files, a PDF, or a ZIP file; the system splits them into expense lines."
id: import-bundle
sidebar_label: Import a document bundle as expense lines
sidebar_position: 8
displayed_sidebar: akaPaymentSidebar
---

# Import a document bundle as expense lines

In the Expense Report step, select Import bundle and upload multiple files, a PDF, or a ZIP file; the system splits them into expense lines.

## Before you begin

- **[Document upload limits](../../../reference/extraction/file-limits.md)**\
  Add from invoice: up to 50 invoices per import; import bundle: up to 50 files and 100 MB; files uploaded to the assistant: up to 10 MB.


## Steps

1. In step **2 Expense Report**, click the arrow next to **Add expense** and select **Import bundle**.
2. Drag and drop files or **select files**: upload multiple files at once, or a single .zip file (the ZIP is extracted in the browser; unsupported files are skipped and listed). Supported formats: .pdf, .docx, .xml, .png, .jpg, .jpeg, .webp, .gif, .zip. A single PDF is split into individual documents.
3. Click **Import**. The button changes to "Splitting documents…" and the dialog says "This may take a few minutes. This window closes automatically when splitting is complete, even if you reload the page."
4. When the dialog closes automatically, review the new expense lines ("Created N expenses"): each invoice becomes a line with its invoice number, date, description, and extracted amount; allocation starts as it does for a manually added line (the first line's expense category, the department from Approval Unit, or the value set in [Apply allocation to all expenses](apply-expense-defaults.md)), and each line includes the shared supporting documents.
   - How files are matched: XML and PDF invoices with the same number are combined into one line; a document related to only one invoice (by matching ticket number, booking number, contract number, or invoice number, or by matching its exact amount) is attached to that line; a document related to multiple invoices is attached to every matching line; if there are no invoices, each file becomes a line.
5. Review any warnings above the table: page not recognized, document type unclear, invoice unreadable ("enter that expense manually"), or file unreadable and skipped. Handle these items manually.

## Troubleshooting

- If there are more than 50 files or the total size exceeds 100 MB, the Import button is disabled: see [Document upload limits](../../../reference/extraction/file-limits.md). Errors during splitting include: the bundle has too many pages, the file is not a PDF, no documents were recognized, the request was submitted before splitting finished, or processing took too long (try again).


## Preconditions to verify

- [A draft request is open](../../../troubleshooting/requests/draft-open.md) — A request is in Draft status in the creation workflow and has a document number.

## Used in these guides

- [Import an entire document bundle at once](../import-bundle.md) — Users have multiple invoices and supporting documents and want to create expense lines for them all at once.
- [Create a request and complete it through the Review step](create-draft.md) — After opening a new request, add expenses in the Expense Report, enter payment details, and proceed to the Review step.
