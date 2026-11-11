---
title: "Enable/disable invoice sources and save settings"
description: "In Administration → Incoming Invoices, select the unit scope, enable or disable each source, configure formats and file size limits, enable checks on the e-Invoice Portal, set sync frequencies, and click Save changes."
id: configure
sidebar_label: Enable/disable invoice sources and save settings
sidebar_position: 2
---

# Enable/disable invoice sources and save settings

In Administration → Incoming Invoices, select the unit scope, enable or disable each source, configure formats and file size limits, enable checks on the e-Invoice Portal, set sync frequencies, and click Save changes.

**Required permission:** admin


## Steps

1. Open **Administration** → **Incoming Invoices** (on a desktop computer).
2. In the **Unit** field, leave **All units** selected to edit the organization-wide defaults, or select a unit to set its own sync frequency and download schedule.
3. Enable or disable the toggle on each source card (labeled **Enabled** / **Disabled**): **User Upload**, **Email**, **Periodic download from GDT**, **AkaConnect connection**, **AkaPay account**.
4. For sources that receive files (User Upload, Email, AkaConnect), select **Accepted formats** (XML, PDF, Images) and **Maximum file size per file** (5, 10, or 15 MB).
5. Enable **Check on the e-Invoice Portal** ("Automatically check after upload" / "after receipt") for sources that need to check invoice and seller details as soon as they are received.
6. Select a **Sync frequency** for Email (Real-time, Every 5/15/30 minutes, Every hour), AkaConnect, and AkaPay (Every 5/15/30 minutes, Every hour; Real-time is not available), and set a **Download schedule** for **Periodic download from GDT**. For a unit, click **Use default** to remove its custom value.
7. Click **Save changes**. If you have a unit selected and changed a setting that applies to the whole organization, the **Apply to all units?** dialog lists the changes; click **Save and apply to all**. The message "Invoice source configuration saved" appears.

## Troubleshooting

- Which settings apply to the whole organization and which are unit-specific: [Invoice source settings: organization-wide or unit-specific](../../../reference/invoice-sources/unit-scope.md).
- Enabling a source alone is not enough to receive invoices through email, the e-Invoice Portal, AkaConnect, or AkaPay: you must also configure a mailbox or account. See [Add a mailbox to receive invoices via IMAP](connect-mailbox.md), [Download invoices periodically from the General Department of Taxation e-Invoice Portal](connect-tax-portal.md), [Connect a Gmail/Outlook mailbox via AkaConnect](connect-akaconnect.md), and [Connect an AkaPay account using an API key](connect-akapay.md).


## Notes

- **[Invoice source settings: organization-wide or unit-specific](../../../reference/invoice-sources/unit-scope.md)**\
  Enabling/disabling sources, formats, file size limits, and Check on the e-Invoice Portal apply to the whole organization; sync frequency, download schedule, and source accounts are configured separately for each unit.

## Result

- [User Upload source is enabled](../../../troubleshooting/invoice-sources/upload-enabled.md) — The User Upload invoice source is enabled, so users can upload invoice files to the Invoice Management page.

## Feature used

- [Manage incoming invoice sources](../features/settings.md) — The Administration → Incoming Invoices page: enable/disable sources, configure mailboxes and e-Invoice Portal accounts, and connect AkaConnect and AkaPay. Administrators only.

## Used in these guides

- [Enable/disable incoming invoice sources](../configure.md) — For administrators who want to choose which sources feed invoices into Invoice Management (upload, email, e-Invoice Portal, AkaConnect, AkaPay) and configure formats, sync frequency, and checks on the e-Invoice Portal.
- [Upload invoice files to Invoice Management](../../invoices/how-to/upload.md) — In Invoice Management, click Upload on the User Upload card, select an XML/PDF/image or ZIP file, and click Upload; the system automatically reads each invoice.
- [User Upload source is enabled](../../../troubleshooting/invoice-sources/upload-enabled.md) — The User Upload invoice source is enabled, so users can upload invoice files to the Invoice Management page.
