---
title: "Import an entire document bundle at once"
description: "Users have multiple invoices and supporting documents and want to create expense lines at the same time."
id: import-bundle
sidebar_label: Import an entire document bundle at once
sidebar_position: 8
---

# Import an entire document bundle at once

Users have multiple invoices and supporting documents and want to create expense lines at the same time.

**When to use:**

- Users have a folder of invoices and contracts to include in one request.
- Users have multiple documents and want to create expense lines all at once.


Upload a bundle of files or a zip file to create multiple expense lines.


## How to do it

- [Import a document bundle as expense lines](how-to/import-bundle.md) — In the Expense Breakdown step, select Import document bundle and upload multiple files, a PDF, or a zip file; the system splits them into expense lines.

## Before you start

- **[Requirements for continuing through the request creation workflow](../../reference/requests/draft-validation.md)** — only if [A draft request is open](../../troubleshooting/requests/draft-open.md) is not satisfied\
  Each step in the creation workflow has required fields. If any are missing, clicking Continue displays "Please fix the highlighted fields".
- **[Document upload limits](../../reference/extraction/file-limits.md)**\
  Add from invoices: up to 50 invoices at a time; import a document bundle: up to 50 files and 100 MB; files uploaded for the assistant: up to 10 MB.

## Steps

[Import a document bundle as expense lines](how-to/import-bundle.md)

1. Check that [A draft request is open](../../troubleshooting/requests/draft-open.md).
   The "Create Payment Request" page displays a document number (for example, TT.19102026.00001) and the "Draft" label in the upper-right corner of the creation workflow bar.
   If this is not satisfied: follow [Start a new request and complete the Overview step](how-to/start-draft.md) below.
2. [Start a new request and complete the Overview step](how-to/start-draft.md) — only if [A draft request is open](../../troubleshooting/requests/draft-open.md) is not satisfied
   1. Click **Create Payment Request** at the top of the page (this opens the default request type); the arrow next to it opens a list of enabled request types to browse and select from (sample data: Payment, Advance, Reimbursement, Prepayment, Other Payment; the actual list is configured by an administrator). A draft is created immediately.
      ![Top of the My Requests page: (1) the Create Payment Request button and the request type list opened from the adjacent arrow (Payment, Advance, Reimbursement, Prepayment, Other Payment)](/static/img/aka-payment-latest-requests-start-draft-button.webp)
   2. In **1 Overview**, enter the **Request Purpose** (2); check **Requester** (you), **Approving Unit** (your unit), **Payee** (pre-filled), and other fields such as Request Date, Document Number, Company, Budget Period, Payment Deadline, and Request Description. The Approving Unit is also the default Cost Center for expense lines.
      ![Step 1, Overview, of the draft: (2) the Request Purpose field; Requester, Approving Unit, Budget Period, and Payee are pre-filled; (3) the Continue button](/static/img/aka-payment-latest-requests-start-draft-overview.webp)
   3. Click **Continue** (3) to go to **2 Expense Breakdown**.
3. [Import a document bundle as expense lines](how-to/import-bundle.md)
   1. In **2 Expense Breakdown**, click the arrow next to **Add Expense**, then select **Import Document Bundle**.
   2. Drag and drop files or **select files**: multiple files at once, or a single .zip file (the zip is extracted in the browser; files with unsupported types are skipped and listed). Supported formats: .pdf, .docx, .xml, .png, .jpg, .jpeg, .webp, .gif, .zip. A single PDF is split into individual documents.
   3. Click **Import**. The button changes to "Splitting documents…" and the dialog displays "This may take a few minutes. This window closes automatically when splitting is complete, even if you refresh the page."
   4. When the dialog closes automatically, check the new expense lines ("N expenses created"): each invoice appears as a line with its invoice number, date, description, and extracted amount; allocation starts as it does for a manually added line (the first line's category, the unit from Approving Unit, or the value currently set in [Apply allocation to all expenses](how-to/apply-expense-defaults.md)), and each line includes the shared supporting documents.
   5. Check for warnings above the table, if any: page not recognized, document type unclear, invoice unreadable ("enter this expense manually"), or file unreadable and skipped; handle these items manually.

## Troubleshooting

### [Import a document bundle as expense lines](how-to/import-bundle.md)

- If there are more than 50 files or the total size exceeds 100 MB, the Import button is disabled: see [Document upload limits](../../reference/extraction/file-limits.md). Errors during splitting: the bundle has too many pages, is not a PDF, no documents are recognized, the request was submitted before splitting finished, or processing took too long (try again).
