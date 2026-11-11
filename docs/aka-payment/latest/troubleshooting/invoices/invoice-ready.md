---
title: "Invoices in Ready Status"
description: "Invoices that have passed the checks (or been overridden or entered manually) are in Ready status and can be selected to create a payment request."
id: invoice-ready
sidebar_label: Invoices in Ready Status
sidebar_position: 2
---

# Invoices in Ready Status

Invoices that have passed the checks (or been overridden or entered manually) are in Ready status and can be selected to create a payment request.

**Check:** In Invoice Management, the invoice's Status column shows "Ready" and its row checkbox is enabled.


![Invoice detail page header with the Ready status label highlighted](/static/img/aka-payment-latest-invoices-invoice-ready.webp)

Invoices automatically progress through the statuses Received → Classifying → Reading → Lookup (only when Check on E-invoice Portal is enabled for the source) → Ready, without requiring anyone to take action. If processing stops at "Manual Entry Required," "Interrupted," or "Rejected," the invoice must be handled manually (entered manually, **Retried**, or **Overridden**) before it can move to Ready.


## How to resolve

- [Review check results and handle stopped invoices](../../guides/invoices/how-to/review-check.md) — Open the invoice and see which check stopped. Click Retry if it was Interrupted, or enter the invoice details manually and click Save if Manual Entry Required.
- [Override invoice check results](../../guides/invoices/how-to/overrule-check.md) — For an invoice with Rejected or Interrupted status, click Override, enter a reason (optional), and confirm. The invoice proceeds, and the user who overrode it and the reason are recorded.

## Used in these guides

- [Select invoices and create a payment request](../../guides/invoices/how-to/create-request.md) — Select the Ready invoices in Invoice Management, click Create Payment Request, select a Request Type, and click Create Payment Request. Each invoice becomes an expense in the draft.
- [Override invoice check results](../../guides/invoices/how-to/overrule-check.md) — For an invoice with Rejected or Interrupted status, click Override, enter a reason (optional), and confirm. The invoice proceeds, and the user who overrode it and the reason are recorded.
- [Review check results and handle stopped invoices](../../guides/invoices/how-to/review-check.md) — Open the invoice and see which check stopped. Click Retry if it was Interrupted, or enter the invoice details manually and click Save if Manual Entry Required.
