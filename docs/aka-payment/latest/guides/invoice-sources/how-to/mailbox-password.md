---
title: "Sign in to a mailbox using an app password"
description: "In the Add mailbox dialog, select Login method: App password, then enter the IMAP server, port, username, and app password."
id: mailbox-password
sidebar_label: Sign in to a mailbox using an app password
sidebar_position: 8
displayed_sidebar: akaPaymentSidebar
---

# Sign in to a mailbox using an app password

In the Add mailbox dialog, select Login method: App password, then enter the IMAP server, port, username, and app password.

**Required permission:** admin


## Steps

1. Under **Login method**, select **App password** (the default option when adding a new mailbox).
2. In the two fields directly below **Email address**, enter the **IMAP server** (for example, imap.congty.vn) and check the **Port** (pre-filled with 993).
3. Enter the **Username** if it differs from the email address (if left blank, the email address is used by default).
4. Enter the mailbox's **App password**. When editing a mailbox, leave this field blank to keep the saved password. This only works if the mailbox still uses password-based sign-in and the server has not changed; otherwise, the dialog displays "Enter password: the saved password cannot be kept when changing the server."


## Features

- [Manage incoming invoice sources](../features/settings.md) — On the Administration → Incoming invoices page, enable or disable sources, configure mailboxes and e-invoice portal accounts, and connect AkaConnect and AkaPay. Administrators only.

## Used in these guides

- [Add a mailbox to receive invoices via IMAP](connect-mailbox.md) — Select an organization, click Add mailbox on the Email card, enter the address, select a login method (app password or OAuth), click Check connection, then click Add.
