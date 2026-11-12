---
title: "Filter the List and Open an Invoice"
description: "In Invoice Management, select a tab, search by invoice number/vendor/TIN, filter by date, status, source, and amount (and unit if you're an administrator), then open an invoice."
id: find-invoice
sidebar_label: Filter the List and Open an Invoice
sidebar_position: 3
displayed_sidebar: akaPaymentSidebar
---

# Filter the List and Open an Invoice

In Invoice Management, select a tab, search by invoice number/vendor/TIN, filter by date, status, source, and amount (and unit if you're an administrator), then open an invoice.

## Before you begin

- **[Who can see and manage incoming invoices](../../../reference/invoices/access.md)**\
  An invoice belongs to the unit of the user who uploaded it. Users in that unit and its parent units can see it. Administrators and operators can see invoices from all units.


## Steps

1. Open **Invoice Management** in the sidebar. The top of the page has a card for each enabled source, showing its most recent sync. No cards appear if no sources are enabled.
2. Select the **Payment Request Not Created**, **Payment Request Created**, or **All** tab. Administrators and operators can select a unit from the unit selector in the upper-right corner (clear the selection to show all units).
3. Enter a search term (invoice number, vendor, or TIN), and filter by **Vendor** (the "Name or TIN" field) and **Invoice Date**. Click **Add Filter** to filter by **Status**, **Source**, or **Amount** (From–To, or < 10M, 10–30M, > 30M), then click **Apply** (**Clear** to remove the filters).
4. Hover over an invoice number to preview the extracted information, **Source Information** (the source it was received from), and **Checks** (Is an invoice, Invoice reading, Tax portal lookup: Passed, Failed, or "Not checked" if the source doesn't have lookup enabled).
5. Click a row to open the invoice details page. The original file appears on the left: XML files are displayed as text; images and PDFs can be zoomed in or out using **Fit Width** and **Fit Page**. Click **Download** in the upper-right corner. On the right is the **Invoice Information** card (with the source label in the card's upper corner), where you can edit the information and click **Save**. The checks panel above the card appears only when an invoice is Rejected, Interrupted, has been overridden, or has an e-invoice portal lookup result. Click the ‹ arrow next to the title to return to the list.

## Troubleshooting

- "Invoice not found": the invoice doesn't exist or belongs to a unit you can't see. See [Who can see and manage incoming invoices](../../../reference/invoices/access.md).


## Used in these guides

- [Find and view an incoming invoice](../find-invoice.md) — For users who want to find a received invoice (uploaded, emailed, or received through the e-invoice portal, AkaConnect, or AkaPay) and view its original file, extracted information, and source.
