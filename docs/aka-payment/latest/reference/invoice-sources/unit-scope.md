---
title: "Configure invoice sources: organization-wide or per unit"
description: "Enable/disable settings, formats, file size limits, and Check on the e-Invoice Portal apply to the entire organization; sync frequency, download schedules, and source accounts are configured per unit."
id: unit-scope
sidebar_label: "Configure invoice sources: organization-wide or per unit"
sidebar_position: 2
---

# Configure invoice sources: organization-wide or per unit

Enable/disable settings, formats, file size limits, and Check on the e-Invoice Portal apply to the entire organization; sync frequency, download schedules, and source accounts are configured per unit.

**Requirement level:** Note


- **Organization-wide** (including when editing from a unit's page): the enable/disable toggle for each source, **Accepted formats**, **Maximum file size**, and **Check on the e-Invoice Portal**. If you edit these settings while a unit is selected, a dialog titled "Apply to all units?" appears when you save and lists the changes; click **Save and apply to all** to save.
- **Per unit**: **Sync frequency** (Email, AkaConnect, AkaPay) and **Download schedule**, **Scope per download**, **Invoice type**, **Invoice template symbol** (Periodic download from GDT). Units without their own settings inherit them from the nearest parent unit, then from the default settings under "All units"; **Use default** removes the unit-specific value.
- **Mailboxes and source accounts** (email mailboxes, e-Invoice Portal accounts, AkaConnect connections, AkaPay accounts) belong to a specific unit; invoices received through an e-Invoice Portal account, AkaConnect connection, or AkaPay account are assigned to that unit. Under "All units," the list shows accounts for every unit (with the unit name), but you can't add accounts; the page displays "Select a unit above to add."
- If you switch units while there are unsaved changes, you'll be asked "Discard unsaved changes?".


## Used in these guides

- [Manage input invoice sources](../../guides/invoice-sources/features/settings.md) — On the Administration → Input invoices page: enable/disable sources and configure mailboxes, e-Invoice Portal accounts, AkaConnect connections, and AkaPay accounts. Administrators only.
- [Enable/disable invoice sources and save settings](../../guides/invoice-sources/how-to/configure.md) — Under Administration → Input invoices, select a unit scope, enable/disable each source, adjust formats, file size limits, and e-Invoice Portal checks, set the sync frequency, then click Save changes.
- [Connect Gmail/Outlook mailboxes through AkaConnect](../../guides/invoice-sources/how-to/connect-akaconnect.md) — Enable AkaConnect connection, select a unit, click Add connection, and complete the connection to a Gmail or Outlook mailbox in the AkaConnect pop-up window.
- [Connect an AkaPay account using an API key](../../guides/invoice-sources/how-to/connect-akapay.md) — Enable AkaPay account, click Add account, paste the API key, click Load pipeline, select a pipeline and the invoice statuses to receive, enter a name, then click Add.
- [Add a mailbox to receive invoices via IMAP](../../guides/invoice-sources/how-to/connect-mailbox.md) — Select a unit, click Add mailbox on the Email card, enter an address, select a sign-in method (app password or OAuth), click Test connection, then click Add.
- [Download invoices periodically from the General Department of Taxation e-Invoice Portal](../../guides/invoice-sources/how-to/connect-tax-portal.md) — Enable Periodic download from GDT, set the download schedule, scope, invoice type, and template symbol; add the unit's e-Invoice Portal account, click Test connection, then click Add.
