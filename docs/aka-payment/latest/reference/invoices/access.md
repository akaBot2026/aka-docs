---
title: "Who can view and act on incoming invoices"
description: "Invoices belong to the uploader’s unit and are visible to that unit and its parent units. Administrators and operators can see invoices from all units."
id: access
sidebar_label: Who can view and act on incoming invoices
sidebar_position: 2
---

# Who can view and act on incoming invoices

Invoices belong to the uploader’s unit and are visible to that unit and its parent units. Administrators and operators can see invoices from all units.

**Requirement level:** Mandatory


- Each invoice is assigned to the uploader’s unit (or to the unit of the configured source account: an e-invoice portal account, an AkaConnect connection, or an AkaPay account; an email inbox will be supported when email reading is released) as soon as it is received. Members of that unit and all parent units can see the invoice. If the uploader does not belong to a unit, only that uploader can see the invoice.
- Administrators, operators, and organization owners can see invoices from all units.
- Anyone who can see an invoice can also use **Retry** and **Overrule**, and edit information extracted from that invoice. If an invoice is not visible to you, the system reports "Invoice not found".
- **Sync now** on the source card in Invoice Management is visible only to administrators and operators.
- Duplicates are checked within a unit: if the same file (with identical content) already exists in the unit, it cannot be added again, regardless of the existing invoice’s status.


## Used in these guides

- [Select invoices and create a payment request](../../guides/invoices/how-to/create-request.md) — In Invoice Management, select invoices with the Ready status, click Create payment request, select a Request type, and click Create payment request. Each invoice becomes an expense item in the draft.
- [Filter the list and open an invoice](../../guides/invoices/how-to/find-invoice.md) — In Invoice Management, select a tab, search by invoice number/supplier/tax ID, filter by date, status, source, amount (and unit if you are an administrator), then open an invoice.
- [Overrule an invoice check result](../../guides/invoices/how-to/overrule-check.md) — On an invoice with the Rejected or Interrupted status, click Overrule, enter a reason (optional), and confirm. The invoice proceeds to the next step, and the user who overruled it and the reason are recorded.
- [Review check results and handle stopped invoices](../../guides/invoices/how-to/review-check.md) — Open an invoice to see which check stopped it. Click Retry when the status is Interrupted, or manually enter the invoice information and click Save when the status is Manual entry required.
- [Upload invoice files to Invoice Management](../../guides/invoices/how-to/upload.md) — In Invoice Management, click Upload on the User upload card, select XML/PDF/image files or a ZIP file, then click Upload. The system automatically reads each invoice.
