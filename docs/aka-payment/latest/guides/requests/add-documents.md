---
title: "Attach shared documents to a request"
description: "Users want to attach a contract, quotation, or payment notice that applies to every expense line in a request."
id: add-documents
sidebar_label: Attach shared documents to a request
sidebar_position: 2
---

# Attach shared documents to a request

Users want to attach a contract, quotation, or payment notice that applies to every expense line in a request.

**When to use:**

- Users want to attach a contract or quotation to the entire request.
- Users need a document that applies to every expense line.


Shared documents are attached to all expense lines and used when reconciling each line.


## How to

- [Attach shared documents to the entire request](how-to/add-shared-documents.md) — In the Expense breakdown step, click Shared documents and attach documents that apply to every expense line.

## Before you start

- **[Conditions for continuing the request creation workflow](../../reference/requests/draft-validation.md)** — only if [A draft request is open](../../troubleshooting/requests/draft-open.md) has not been met\
  Each step in the creation workflow has required fields. If they are incomplete, clicking Continue displays "Please correct the highlighted fields".

## Steps

[Attach shared documents to the entire request](how-to/add-shared-documents.md)

1. Check that [A draft request is open](../../troubleshooting/requests/draft-open.md).
   The "Create payment request" page displays a document number (for example, TT.19102026.00001) and the "Draft" label in the upper-right corner of the creation workflow bar.
   If this condition is not met, follow [Start a new request and complete the Overview step](how-to/start-draft.md) below.
2. [Start a new request and complete the Overview step](how-to/start-draft.md) — only if [A draft request is open](../../troubleshooting/requests/draft-open.md) has not been met
   1. Click **Create payment request** at the top of the page (opens the default request type); click the arrow beside it to open the list of enabled request types and select one (sample data: Payment, Advance, Advance settlement, Prepayment, Other payment; the actual list is configured by an administrator). A draft is created immediately.
      ![Top of the My Requests page: (1) the Create payment request button and the list of request types opened from the arrow beside it (Payment, Advance, Advance settlement, Prepayment, Other payment)](/static/img/aka-payment-latest-requests-start-draft-button.webp)
   2. In step **1 Overview**, enter the **Request purpose** (2); check the **Requester** (you), **Approving unit** (your unit), **Payee** (pre-filled), and other fields such as Request date, Document number, Company, Budget period, Payment due date, and Request description. The Approving unit is also the default Cost center for expense lines.
      ![Step 1 Overview of the draft: (2) the Request purpose field; Requester, Approving unit, Budget period, and Payee are pre-filled; (3) the Continue button](/static/img/aka-payment-latest-requests-start-draft-overview.webp)
   3. Click **Continue** (3) to go to step **2 Expense breakdown**.
3. [Attach shared documents to the entire request](how-to/add-shared-documents.md)
   1. In step **2 Expense breakdown**, click **Shared documents** (the dialog says "Attached to all N expense lines and used when reconciling each line").
   2. Drag and drop files into the "Unclassified documents" area (for other documents or a file containing multiple documents; during reconciliation, the system automatically places the file under the correct document type), or click **Attach** next to each document type (for example, "Quotation" or "Payment notice / Payment notification letter from supplier"). New files show "Upload on confirmation".
   3. If a file is in the wrong section, click the **Change document type** icon on the file and select a section under **Move to** (the file shows "Save on confirmation"); click **Remove document** to remove the file.
   4. Click **Accept** to save, or **Cancel** to discard the changes (no files will be uploaded).

## Troubleshooting

### [Attach shared documents to the entire request](how-to/add-shared-documents.md)

- Invoices cannot be used as shared documents (the server rejects the save); attach invoices to each line using **Attach invoice** or [Add an expense from an invoice](how-to/add-invoice-expense.md).
