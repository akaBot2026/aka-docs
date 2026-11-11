---
title: "Enable or disable incoming invoice sources"
description: "Administrators can choose which sources send invoices to Invoice Management (uploads, email, the e-invoice portal, AkaConnect, or AkaPay) and configure formats, sync frequency, and e-invoice portal checks."
id: configure
sidebar_label: Enable or disable incoming invoice sources
sidebar_position: 2
---

# Enable or disable incoming invoice sources

Administrators can choose which sources send invoices to Invoice Management (uploads, email, the e-invoice portal, AkaConnect, or AkaPay) and configure formats, sync frequency, and e-invoice portal checks.

**When to use:**

- A user reports that they cannot upload an invoice because uploads are disabled.
- An administrator wants invoices to be checked on the e-invoice portal as soon as they are received.
- An administrator wants to choose invoice intake channels and sync frequency.

**Required permission:** admin


The Admin → Incoming invoices page determines which sources are enabled and what files each source accepts, as well as how often it syncs.


## Ways to do this

- [Enable or disable invoice sources and save settings](how-to/configure.md) — In Admin → Incoming invoices, select the unit scope, enable or disable each source, configure formats, file size limits, e-invoice portal checks, and frequency, then click Save changes.

## Steps

[Enable or disable invoice sources and save settings](how-to/configure.md)

Availability requirements: check the plan and permission requirements

1. [Enable or disable invoice sources and save settings](how-to/configure.md)
   1. On a computer, open **Admin** → **Incoming invoices**.
   2. In the **Unit** field, leave **All units** selected to edit the organization default, or select a unit to set its own frequency and download schedule.
   3. Enable or disable the switch on each source card (labeled **Enabled** / **Disabled**): **User uploads**, **Email**, **Scheduled download from GDT**, **AkaConnect connection**, **AkaPay account**.
   4. For sources that accept files (User uploads, Email, AkaConnect), select the **Accepted formats** (XML, PDF, Image) and **Maximum file size** (5, 10, or 15 MB).
   5. Enable **Check on e-invoice portal** ("Automatically check after upload" / "after receipt") for sources that need the invoice status and seller checked as soon as they are received.
   6. Choose the **Sync frequency** for Email (Real time, Every 5/15/30 minutes, Every hour), AkaConnect, and AkaPay (Every 5/15/30 minutes, Every hour; Real time is not available), and set the **Download schedule** for **Scheduled download from GDT**. For a unit, click **Use default** to clear its custom value.
   7. Click **Save changes**. If you are editing a unit and have also changed an organization-wide setting, the **Apply to all units?** dialog lists the changes; click **Save and apply to all**. The confirmation message "Invoice source configuration saved" appears.

## Notes

- **[Invoice source settings: organization-wide or per-unit](../../reference/invoice-sources/unit-scope.md)**\
  Enable/disable settings, formats, file size limits, and Check on e-invoice portal apply to the entire organization; frequency, download schedule, and source accounts are configured per unit.

## Troubleshooting

### [Enable or disable invoice sources and save settings](how-to/configure.md)

- Which settings apply organization-wide and which are per-unit: [Invoice source settings: organization-wide or per-unit](../../reference/invoice-sources/unit-scope.md).
- Enabling a source is not enough to receive invoices through email, the e-invoice portal, AkaConnect, or AkaPay: you must also configure a mailbox or account. See [Add a mailbox for receiving invoices via IMAP](how-to/connect-mailbox.md), [Download invoices on a schedule from the General Department of Taxation e-invoice portal](how-to/connect-tax-portal.md), [Connect a Gmail/Outlook mailbox via AkaConnect](how-to/connect-akaconnect.md), and [Connect an AkaPay account using an API key](how-to/connect-akapay.md).
