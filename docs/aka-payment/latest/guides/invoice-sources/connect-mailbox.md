---
title: "Receive invoices through an email mailbox (IMAP)"
description: "An administrator wants the system to automatically read invoice attachments from the organization's invoice-receiving mailbox via IMAP using an app password or OAuth."
id: connect-mailbox
sidebar_label: Receive invoices through an email mailbox (IMAP)
sidebar_position: 5
---

# Receive invoices through an email mailbox (IMAP)

An administrator wants the system to automatically read invoice attachments from the organization's invoice-receiving mailbox via IMAP using an app password or OAuth.

**When to use:**

- A supplier sends electronic invoices to a shared company email address.
- The administrator wants emailed invoices to appear automatically in Invoice Management, without anyone uploading them.
- The administrator wants to retrieve invoice attachments from the company's mailbox via IMAP.

**Required permission:** admin


Each mailbox belongs to a unit; invoice attachments received from a mailbox are assigned to that unit. Gmail or Outlook mailboxes can also be connected through AkaConnect ([Receive invoices from Gmail/Outlook through AkaConnect](connect-akaconnect.md)).

Only messages received after the first scan are read; older messages in the mailbox are not imported.

Unverified: Reading messages and adding their attachments to Invoice Management has not been released (as of 2026-11-09); for now, the mailbox can be saved and its connection tested, but invoices do not yet appear in the list.


## Ways to do this

- [Add an invoice-receiving mailbox through IMAP](how-to/connect-mailbox.md) — Select a unit, click Add mailbox on the Email tab, enter the address, choose a sign-in method (app password or OAuth), click Test connection, then click Add.

## See also

- [Receive invoices from Gmail/Outlook through AkaConnect](connect-akaconnect.md) — An administrator wants to receive invoice attachments from a Gmail or Outlook mailbox connected through AkaConnect, without configuring IMAP.

## Used in these guides

- [Manage incoming invoice sources](features/settings.md) — Administration → Incoming Invoices page: enable or disable sources, configure mailboxes and E-Invoice Portal accounts, and connect AkaConnect and AkaPay. Administrators only.
- [Receive invoices from Gmail/Outlook through AkaConnect](connect-akaconnect.md) — An administrator wants to receive invoice attachments from a Gmail or Outlook mailbox connected through AkaConnect, without configuring IMAP.

## Steps

[Add an invoice-receiving mailbox through IMAP](how-to/connect-mailbox.md)

Availability requirements: check plan and permission requirements

1. [Add an invoice-receiving mailbox through IMAP](how-to/connect-mailbox.md)
   1. Open **Administration** → **Incoming Invoices**; in the **Unit** field, select the unit that will receive invoices from this mailbox.
   2. On the **Email** tab, if the status is **Disabled**, turn on the toggle (the settings and mailbox list appear only when enabled), select the **Sync frequency** (Real time, Every 5/15/30 minutes, Every hour), then click **Save changes** at the top of the page (the toggle applies to all units).
   3. Under **Invoice-receiving mailboxes**, click **Add mailbox**. The **Add invoice-receiving mailbox** dialog opens; enter the **Email address**.
   4. How does the mailbox sign in to IMAP?
      - **password**: The mail server allows IMAP sign-in with a password or app password — [Sign in to a mailbox with an app password](how-to/mailbox-password.md); check plan and permission requirements
        - Note: [Invoice source settings: organization-wide or per unit](../../reference/invoice-sources/unit-scope.md) — Enable/disable, format, size, and Test on the E-Invoice Portal apply to the entire organization; frequency, download schedule, and source account are configured per unit.
        1. [Sign in to a mailbox with an app password](how-to/mailbox-password.md)
           1. Under **Sign-in method**, select **App password** (the default when adding a new mailbox).
           2. In the two fields below **Email address**, enter the **IMAP server** (for example, imap.congty.vn) and check the **Port** (pre-filled with 993).
           3. Enter the **Username** if it differs from the email address (if left blank, the email address is used by default).
           4. Enter the mailbox's **App password**. When editing a mailbox, leave this blank to keep the saved password; this works only if the mailbox still uses password sign-in and the server has not changed. Otherwise, the dialog displays "Enter password: the saved password cannot be kept when changing the server."
      - **oauth**: A Microsoft 365, Gmail (Google Workspace), or custom identity server mailbox that only allows OAuth sign-in — [Sign in to a mailbox with OAuth (Microsoft 365, Google, other servers)](how-to/mailbox-oauth.md); check plan and permission requirements
        - Note: [Invoice source settings: organization-wide or per unit](../../reference/invoice-sources/unit-scope.md) — Enable/disable, format, size, and Test on the E-Invoice Portal apply to the entire organization; frequency, download schedule, and source account are configured per unit.
        1. [Sign in to a mailbox with OAuth (Microsoft 365, Google, other servers)](how-to/mailbox-oauth.md)
           1. Under **Sign-in method**, select **OAuth - Microsoft 365**, **OAuth - Google**, or **OAuth - other identity server**. The dialog displays **Setup steps** for that option.
           2. Create an OAuth client with the provider by following the **Setup steps**: Microsoft Entra (App registrations, the IMAP.AccessAsApp permission, and mailbox authorization in Exchange Online); Google Cloud Console (an OAuth client of type Web application, and add the **Redirect URL** shown in the dialog to the authorized redirect URIs); other servers (a client using the client-credentials flow with permission to read mailboxes over IMAP).
           3. Enter the client details: Microsoft 365 requires **Directory (tenant) ID**, **Client ID**, and **Client secret** (if the **IMAP server** field is blank, outlook.office365.com and port 993 are filled in automatically); Google requires **Client ID** and **Client secret** (the server imap.gmail.com is fixed, and the server and port fields are hidden); other servers require **Token URL** (must start with https://), **Client ID**, **Client secret**, **Scope (optional)**, as well as the **IMAP server** and **Port** at the top of the dialog.
           4. For Google only: click **Sign in with Google** (available only after entering an email address, Client ID, and Client secret), sign in to the account matching the email address, and grant permission in the pop-up window; wait for "Signed in with Google." Until signed in, **Test connection** and **Add** are unavailable.
   5. Click **Test connection** and wait for "Connection successful" (optional, but recommended; the button is available only after all required information has been entered).
   6. Click **Add**. The mailbox appears in the list with a status (Connected, Authentication error, Unable to connect, Not synced); the pencil (**Edit**) and trash (**Remove**) icons appear at the end of the row.
   7. After the mailbox is added, the system scans it according to the **Sync frequency**. The first scan only records the mailbox's current position: existing messages are not imported; only new messages are read. Each attachment in a supported format (XML, PDF, or image) becomes an **Email** source invoice in **Invoice Management**, assigned to the mailbox's unit, and then goes through the same validation steps as an uploaded invoice.
   8. To scan immediately instead of waiting for the schedule, an administrator or operator can click **Check email now** on the **Email** tab at the top of **Invoice Management**. When finished, the tab displays "Complete: N messages read, M attachments added."

## Notes

- **[Invoice source settings: organization-wide or per unit](../../reference/invoice-sources/unit-scope.md)**\
  Enable/disable, format, size, and Test on the E-Invoice Portal apply to the entire organization; frequency, download schedule, and source account are configured per unit.

## Troubleshooting

### [Add an invoice-receiving mailbox through IMAP](how-to/connect-mailbox.md)

- "Authentication error": incorrect password, Client ID, or Client secret. "Unable to connect": incorrect server or port. "IMAP server is not allowed" / "This IMAP server is not allowed.": the server is blocked by the system (for example, an internal address); use a different server.
- "This mailbox has already been added.": the address is already in the list.
- "Password encryption key is not configured. Contact your system administrator.": the system operations team must configure it; organization administrators cannot fix this themselves.
- If you don't see the Add mailbox button and instead see "Select a unit above to add.": select a unit in step 1.

### [Sign in to a mailbox with OAuth (Microsoft 365, Google, other servers)](how-to/mailbox-oauth.md)

- "The browser blocked the sign-in window.": click **Open sign-in page** or allow pop-ups.
- "The Google sign-in session used a different email address.": sign in again with the account matching the address you entered.
- "Google did not return a long-lived token…": remove the app's access in your Google account, then sign in again.
- "Google rejected the Client ID or Client secret.": check the client details in Google Cloud Console.
- "This Token URL is not allowed.": use a different HTTPS Token URL.
- When editing: leave **Client secret** blank to keep the saved secret, unless you change the Client ID, Token URL, or server; for Google, if you change the email address or Client ID, click **Sign in with Google** again.
