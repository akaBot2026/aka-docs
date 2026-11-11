---
title: "Log in to a mailbox with OAuth (Microsoft 365, Google, other servers)"
description: "Select OAuth - Microsoft 365, OAuth - Google, or OAuth - Other identity provider, follow the setup steps, and enter the Client ID and Client secret. Google also requires signing in with Google."
id: mailbox-oauth
sidebar_label: Log in to a mailbox with OAuth (Microsoft 365, Google, other servers)
sidebar_position: 7
---

# Log in to a mailbox with OAuth (Microsoft 365, Google, other servers)

Select OAuth - Microsoft 365, OAuth - Google, or OAuth - Other identity provider, follow the setup steps, and enter the Client ID and Client secret. Google also requires signing in with Google.

**Required permission:** admin


## Steps

1. Under **Login method**, select **OAuth - Microsoft 365**, **OAuth - Google**, or **OAuth - Other identity provider**. The dialog displays the **Setup steps** for that option.
2. Create an OAuth client with the provider by following the **Setup steps**: Microsoft Entra (App registrations, the IMAP.AccessAsApp permission, and mailbox authorization in Exchange Online); Google Cloud Console (an OAuth client of type Web application, and add the **Redirect URL** shown in the dialog to the authorized redirect URIs); other servers (a client using the client-credentials flow with permission to read mailboxes over IMAP).
3. Enter the client details: Microsoft 365 requires **Directory (tenant) ID**, **Client ID**, and **Client secret** (if the **IMAP server** field is empty, outlook.office365.com is filled in automatically, with port 993); Google requires **Client ID** and **Client secret** (the server is fixed as imap.gmail.com, and the server and port fields are hidden); other servers require **Token URL** (must start with https://), **Client ID**, **Client secret**, **Scope (optional)**, and the **IMAP server** and **Port** at the top of the dialog.
4. For Google only: click **Sign in with Google** (available only after you enter an email address, Client ID, and Client secret), sign in with the account matching the email address, and grant access in the pop-up window. Wait for "Signed in with Google". Until you sign in, **Test connection** and **Add** are unavailable.

## Troubleshooting

- "Your browser blocked the sign-in window.": click **Open sign-in page** or allow pop-ups.
- "The Google sign-in session was for a different email address.": sign in again with the account matching the address you entered.
- "Google did not return a long-lived token…": revoke the app's access in your Google account, then sign in again.
- "Google rejected the Client ID or Client secret.": check the client details in Google Cloud Console.
- "This Token URL is not allowed.": use a different HTTPS Token URL.
- When editing: leave **Client secret** blank to keep the saved secret, unless you change the Client ID, Token URL, or server. For Google, if you change the email address or Client ID, click **Sign in with Google** again.


## Features used

- [Manage incoming invoice sources](../features/settings.md) — Admin → Incoming invoices page: enable or disable sources, configure mailboxes and e-invoice portal accounts, and connect AkaConnect and AkaPay. Administrators only.

## Used in these guides

- [Add a mailbox to receive invoices via IMAP](connect-mailbox.md) — Select an entity, click Add mailbox on the Email tab, enter an address, select a login method (app password or OAuth), click Test connection, then Add.
