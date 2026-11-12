---
title: "Invoice Upload Formats, File Size, and Duplicates"
description: "Accept XML, PDF, PNG/JPEG/HEIC/HEIF images (or ZIP files containing them), up to 200 files at 10 MB each by default. Duplicate files within an organization cannot be uploaded."
id: file-types
sidebar_label: Invoice Upload Formats, File Size, and Duplicates
sidebar_position: 4
displayed_sidebar: akaPaymentSidebar
---

# Invoice Upload Formats, File Size, and Duplicates

Accept XML, PDF, PNG/JPEG/HEIC/HEIF images (or ZIP files containing them), up to 200 files at 10 MB each by default. Duplicate files within an organization cannot be uploaded.

**Requirement level:** Required


- **Formats**: .xml, .pdf, .png, .jpg, .jpeg, .heic, .heif, or a .zip file containing these files (the ZIP is extracted in the dialog). GIF and WebP are never accepted. Administrators can restrict formats under **Accepted formats** (XML, PDF, Images) for the **User upload** source. Unsupported format: "Unsupported format. Use XML, PDF, PNG, JPEG, HEIC, or HEIF."
- **File size**: 10 MB per file by default; administrators can select 5, 10, or 15 MB under **Maximum file size per file**. If the limit is exceeded: "File size exceeds N MB."
- **Quantity**: up to 200 files per upload; any additional files trigger "Exceeds the limit of 200 files."
- **Duplicates**: a file identical to an invoice already in the organization cannot be added. The dialog displays "Already in the inbox" with a **View** button that opens the existing invoice, and the duplicate upload is discarded.
- **Source disabled**: when the **User upload** source is disabled, uploads are unavailable and the system displays "The upload source is disabled. Enable it again under Admin › Incoming Invoices."


## Used in these guides

- [Upload invoice files to Invoice Management](../../guides/invoices/how-to/upload.md) — In Invoice Management, click Upload on the User upload card, select XML/PDF/image files or a ZIP file, then click Upload; the system automatically reads each invoice.
