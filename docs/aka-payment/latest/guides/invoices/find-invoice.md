---
title: "Find and view an incoming invoice"
description: "Users want to find an invoice that has been received (by upload, email, e-invoice portal, AkaConnect, or AkaPay) and view the original file, extracted information, and source."
id: find-invoice
sidebar_label: Find and view an incoming invoice
sidebar_position: 3
displayed_sidebar: akaPaymentSidebar
---

# Find and view an incoming invoice

Users want to find an invoice that has been received (by upload, email, e-invoice portal, AkaConnect, or AkaPay) and view the original file, extracted information, and source.

**When to use:**

- Users need to check whether a supplier invoice has arrived in the system.
- Users want to view invoices that haven't been used to create a payment request.
- Users want to search for an incoming invoice by invoice number, supplier, or tax code.
- Users want to view invoices received by upload, email, e-invoice portal, AkaConnect, or AkaPay.


The Invoice Management page lists all incoming invoices you have permission to view, along with their source, status, and any payment request that has used the invoice.


## How to

- [Filter the list and open an invoice](how-to/find-invoice.md) — In Invoice Management, select a tab, search by invoice number/supplier/tax code, filter by date, status, source, and amount (and by unit if you're an administrator), then open an invoice.

## Before you start

- **[Who can view and manage incoming invoices](../../reference/invoices/access.md)**\
  An invoice belongs to the unit of the user who uploaded it. That unit and its parent units can view it. Administrators and operators can view invoices for all units.

## Steps

[Filter the list and open an invoice](how-to/find-invoice.md)

1. [Filter the list and open an invoice](how-to/find-invoice.md)
   1. Open **Invoice Management** from the sidebar. The top of the page displays a card for each enabled source, with its most recent sync time. If no sources are enabled, no cards are displayed.
   2. Select the **No PR Created**, **PR Created**, or **All** tab. Administrators and operators can select a unit from the unit selector in the upper-right corner (clear the selection to view all units).
   3. Enter a search term in the search box (invoice number, supplier, tax code), filter by **Supplier** (the "Name or Tax Code" field) and **Invoice Date**. Click **Add filter** to filter by **Status**, **Source**, and **Amount** (From–To, or < 10 million, 10–30 million, > 30 million), then click **Apply** (**Clear** to remove the filters).
   4. Hover over an invoice number to preview the extracted information, **Information from source** (the receiving source), and **Checks** (Valid invoice, Invoice reading, Tax portal lookup: Passed, Failed, or "Not checked" when lookup isn't enabled for the source).
   5. Click a row to open the invoice details page. The original file appears on the left: XML files are displayed as text; images and PDFs can be zoomed in or out using **Fit width** and **Fit page**. Click **Download** in the upper-right corner. The **Invoice Information** card on the right (with a source label in the card's corner) can be edited; click **Save** to save your changes. The check panel above the card appears only when an invoice is Rejected, Interrupted, overridden, or has an e-invoice portal lookup result. Click the ‹ arrow next to the title to return to the list.

## Troubleshooting

### [Filter the list and open an invoice](how-to/find-invoice.md)

- "Invoice not found": The invoice doesn't exist or belongs to a unit you can't view. See [Who can view and manage incoming invoices](../../reference/invoices/access.md).
