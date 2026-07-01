---
id: document-upload
title: Import Documents
sidebar_label: Import Documents
sidebar_position: 2
description: Upload purchase orders, good receipts, and invoices into Scale Pay for AI extraction and matching.
displayed_sidebar: scalePaySidebar
---

# Import Documents

This guide shows you how to upload, review, and edit documents (purchase orders (PO), good receipts (GR), and invoices) in Scale Pay. Upload documents in the correct order so Scale Pay can map and match them accurately. After extraction, you can review extracted data, correct errors, and monitor document statuses until matching is complete.

This guide shows you how to upload documents into Scale Pay then how to manage them later.

## Upload order

Scale Pay processes documents in this sequence:

1. **Purchase Order (PO)** — the original order from your vendor.
2. **Good Receipt (GR)** — proof that goods or services were received.
3. **Invoice** — the bill from the vendor.

You must upload PO and GR and wait until their status becomes **Ready** before uploading the corresponding invoice.

## Open the Import Documents tab

1. In the left sidebar, open **User Guide → Main features → Import Documents**.
2. You will see three tabs:
   - **Purchase Order**
   - **Good Receipt**
   - **Invoice**

## Step 1: Upload Purchase Order

1. Select the **Purchase Order** tab.
2. Click **Upload** or drag and drop files into the upload area.
3. You can upload multiple files at once.
4. Supported file formats: **image**, **PDF**, **CSV**.

After upload, Scale Pay automatically runs AI extraction on each file.

## Step 2: Upload Good Receipt

1. Select the **Good Receipt** tab.
2. Upload your GR files in the same way.
3. Wait until both PO and GR statuses turn to **Ready**.

Only when PO and GR are **Ready** can you proceed to upload invoices for matching.

## Step 3: Upload Invoice

1. Select the **Invoice** tab.
2. Upload your invoice files.
3. Scale Pay will automatically extract data and attempt to match against the corresponding PO and GR.

## Step 4: Review extracted data

After extraction completes, click the **file ID** to open the detail view.

The detail view shows two panels:

- **Left panel**: the original uploaded document.
- **Right panel**: the information extracted by AI.

![Document detail](/static/img/document_detail.png)

## Document statuses

Each uploaded document has a status. Hover over the status tag to see details.

| Status | Meaning |
|---|---|
| **Ready** | Extraction succeeded and the document is waiting for mapping and matching. Scale Pay will proceed with automap and auto match only when status is Ready. |
| **Unqualified** | The file was marked as unqualified. Hover over the status tag to see the reason. |
| **Duplicate** | A file with the same identifier already exists in the system. |
| **Mismatched** | The document could not be matched with any PO or GR. |
| **Pending Approval** | The document is matched but waiting for manual approval. |

## Edit extracted data manually

For the following statuses, you can manually edit the extracted results:

- **Unqualified**
- **Ready**
- **Mismatched**
- **Pending Approval**

To edit:

1. Find the document row in the list.
2. Click the **pencil (edit)** icon.
3. Update the extracted fields in the right panel.
4. Save the changes.

![Edit extracted data](/static/img/edit_extracted.png)

## What to do next

After all documents are uploaded and status is **Ready**, Scale Pay will automatically map and match them.

Go to [Manage matching sets](../auto-mapping-matching.md) to review matched results, resolve exceptions, and export data.

## Common issues and quick fixes

### I cannot upload the invoice yet

- Check that the corresponding PO and GR statuses are **Ready**.
- If either document is still processing or unqualified, wait or fix the issues first.

### My file is marked as Duplicate

- A file with the same key already exists.
- Check whether the file was already uploaded, or rename and re-upload if it is a different document.

### I do not see the edit icon

- The edit icon is only available for statuses: Unqualified, Ready, Mismatched, and Pending Approval.
- If the status is Processing or another locked state, wait until extraction completes.
