---
title: "Conditions for Creating a Payment Request from Invoices"
description: "Only Ready invoices can be selected, with a maximum of 50 invoices per request. Only request types that support invoices can be used."
id: create-request-rules
sidebar_label: Conditions for Creating a Payment Request from Invoices
sidebar_position: 3
---

# Conditions for Creating a Payment Request from Invoices

Only Ready invoices can be selected, with a maximum of 50 invoices per request. Only request types that support invoices can be used.

**Requirement level:** Required


- Only invoices with the **Ready** status can be selected. An invoice that is already included in another payment request (for example, a rejected request) can be selected again if it is Ready. If an invoice is not ready when you submit, the system displays "Some invoices have not finished processing".
- You can include up to 50 invoices per request. Once you reach 50, the remaining checkboxes are disabled.
- The **Select request type** dialog lists only published request types that use invoices in the expense report. If no such types are available, the **Create payment request** button is disabled and the hint "No request types support invoices" is displayed.
- You cannot create a payment request with an invoice that is already included in an active request. The system displays "Invoice is already included in payment request …".
- When an invoice is already included in a payment request, its details are locked and cannot be edited ("Invoice is already included in a payment request and cannot be edited.").


## Used in these guides

- [Select invoices and create a payment request](../../guides/invoices/how-to/create-request.md) — Select the Ready invoices in Invoice Management, click Create payment request, select a request type, and click Create payment request. Each invoice becomes an expense item in the draft.
- [Review check results and handle invoices that are stopped](../../guides/invoices/how-to/review-check.md) — Open an invoice to see which check stopped. Click Retry if processing was interrupted, or manually enter the invoice details and click Save if manual entry is required.
