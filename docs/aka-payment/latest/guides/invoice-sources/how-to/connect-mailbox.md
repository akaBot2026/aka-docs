---
title: "Add an IMAP invoice mailbox"
description: "Select an organization, click Add mailbox on the Email tab, enter the address, choose a sign-in method (app password or OAuth), click Test connection, then click Add."
id: connect-mailbox
sidebar_label: Add an IMAP invoice mailbox
sidebar_position: 5
displayed_sidebar: akaPaymentSidebar
---

# Add an IMAP invoice mailbox

Select an organization, click Add mailbox on the Email tab, enter the address, choose a sign-in method (app password or OAuth), click Test connection, then click Add.

**Required permission:** admin


## Steps

1. Go to **Administration** → **Input Invoices**; in the **Organization** field, select the organization that will receive invoices from this mailbox.
2. On the **Email** tab, if the status is **Disabled**, turn on the toggle (the settings and mailbox list are only shown when enabled), select a **Sync frequency** (Real-time, Every 5/15/30 minutes, Every hour), then click **Save changes** at the top of the page (the toggle applies to all organizations).
3. Under **Invoice mailboxes**, click **Add mailbox**. The **Add invoice mailbox** dialog opens; enter the **Email address**.
4. How does the mailbox sign in to IMAP?
5. Click **Test connection** and wait for "Connection successful" (optional, but recommended; the button is only enabled after all required information is entered).
6. Click **Add**. The mailbox appears in the list with a status (Connected, Authentication error, Unable to connect, Not synced); the pencil (**Edit**) and trash (**Remove**) buttons appear at the end of the row.
7. After you add the mailbox, the system scans it according to the **Sync frequency**. The initial scan only records the mailbox's current position: existing messages are not imported; only new messages are read. Each attachment in a supported format (XML, PDF, image) becomes an **Email** source invoice in **Invoice Management**, associated with the mailbox's organization, and goes through the same validation steps as uploaded invoices.
8. To scan immediately instead of waiting for the schedule, an administrator or operator can click **Check email now** on the **Email** tab at the top of **Invoice Management**. When the scan is complete, the tab displays "Completed: read N messages, added M attachments."

Unverified: steps 7–8 describe a feature that has not yet been released (as of 2026-11-09); currently, invoices received by email do not appear in the list. The upcoming version will also remove "Real-time" from the Email sync frequency options and change the add-mailbox dialog (select Microsoft / Google / OAuth, enter application JSON, "Sign in with Microsoft"); steps 2–6 will be updated when the feature is released.

## Troubleshooting

- "Authentication error": incorrect password, Client ID, or Client secret. "Unable to connect": incorrect server or port. "IMAP server is not allowed" / "This IMAP server is not allowed.": the server is blocked by the system (for example, an internal address); use another server.
- "This mailbox has already been added.": the address is already in the list.
- "Password encryption key is not configured. Contact your system administrator.": the system operations team must configure this; an organization administrator cannot fix it.
- If you don't see the Add mailbox button and instead see "Select an organization above to add.", select an organization in step 1.


## Choose a method

### How does the mailbox sign in to IMAP?

- **password**: The mail server allows IMAP sign-in with a password or app password — [Sign in to a mailbox with an app password](mailbox-password.md)
- **oauth**: A Microsoft 365 or Gmail (Google Workspace) mailbox, or a custom identity server that only allows OAuth sign-in — [Sign in to a mailbox with OAuth (Microsoft 365, Google, other servers)](mailbox-oauth.md)

## Notes

- **[Invoice source settings: organization-wide or per organization unit](../../../reference/invoice-sources/unit-scope.md)**\
  Enabling/disabling sources, formats, file size limits, and checks on the e-Invoice Portal apply organization-wide; sync frequency, download schedule, and source accounts are configured separately for each organization.

## Feature used

- [Manage input invoice sources](../features/settings.md) — Administration → Input Invoices page: enable/disable sources, add mailboxes, configure e-Invoice Portal accounts, and connect AkaConnect and AkaPay. Administrators only.

## Available methods

- [Sign in to a mailbox with an app password](mailbox-password.md) — In the add-mailbox dialog, select Sign-in method: App password, then enter the IMAP server, port, username, and app password.
- [Sign in to a mailbox with OAuth (Microsoft 365, Google, other servers)](mailbox-oauth.md) — Select OAuth - Microsoft 365, OAuth - Google, or OAuth - other identity server, follow the setup steps, and enter the Client ID and Client secret; Google requires Sign in with Google.

## Used in these guides

- [Receive invoices through an email mailbox (IMAP)](../connect-mailbox.md) — For administrators who want the system to automatically read invoice attachments from an organization's invoice mailbox using IMAP with an app password or OAuth.
- [Enable/disable invoice sources and save settings](configure.md) — Go to Administration → Input Invoices, select the organization scope, enable/disable each source, configure formats, file size limits, e-Invoice Portal checks, and sync frequency, then click Save changes.
