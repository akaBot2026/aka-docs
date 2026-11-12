---
title: "Receive invoices from Gmail/Outlook via AkaConnect"
description: "Admins want to receive invoice attachments from Gmail or Outlook mailboxes connected through AkaConnect, without configuring IMAP."
id: connect-akaconnect
sidebar_label: Receive invoices from Gmail/Outlook via AkaConnect
sidebar_position: 3
displayed_sidebar: akaPaymentSidebar
---

# Receive invoices from Gmail/Outlook via AkaConnect

Admins want to receive invoice attachments from Gmail or Outlook mailboxes connected through AkaConnect, without configuring IMAP.

**When to use:**

- Your company uses AkaConnect and wants invoices in Gmail or Outlook to be automatically added to Invoice Management.
- Admins want to retrieve attachments from connected Gmail or Outlook accounts without setting up IMAP.

**Required permission:** admin


AkaConnect is a separate integration product. AkaPayment opens the AkaConnect connection page in a pop-up window, then retrieves emails at the selected **Sync frequency** (the admin page does not offer Real-time for this source).


## How to

- [Connect a Gmail/Outlook mailbox via AkaConnect](how-to/connect-akaconnect.md) — Enable AkaConnect Connection, select a unit, click Add connection, and complete the Gmail or Outlook mailbox connection in the AkaConnect pop-up window.

## See also

- [Receive invoices via an email mailbox (IMAP)](connect-mailbox.md) — Admins want the system to automatically read invoice attachments from a unit's invoice mailbox via IMAP, using an app password or OAuth.

## Used in these guides

- [Receive invoices via an email mailbox (IMAP)](connect-mailbox.md) — Admins want the system to automatically read invoice attachments from a unit's invoice mailbox via IMAP, using an app password or OAuth.

## Steps

[Connect a Gmail/Outlook mailbox via AkaConnect](how-to/connect-akaconnect.md)

Availability requirements: check package and permission requirements

1. [Connect a Gmail/Outlook mailbox via AkaConnect](how-to/connect-akaconnect.md)
   1. Go to **Admin** → **Incoming invoices**; under **Unit**, select the unit that will receive the invoices.
   2. Under the **AkaConnect Connection** tab, turn on the toggle if its status is **Disabled**, select the **Sync frequency** (Every 5/15/30 minutes or Every hour), **Accepted format**, **Maximum file size**, and **Check on e-Invoice Portal** if needed, then click **Save changes** at the top of the page.
   3. Under **Mail connections**, click **Add connection**. The AkaConnect pop-up window opens, and the page displays "Waiting for connection to complete...".
   4. In the AkaConnect window (you must be signed in to AkaConnect), create a connection as you would in AkaConnect, using only the Gmail or Outlook connector: enter a name, select an authentication method, sign in to the invoice mailbox and grant permissions, then click **Check and Create**. For details, see Create a connection in AkaConnect (scaleconnect).
   5. When AkaConnect reports completion or the window closes, the **Mail connections** list reloads. The new connection has the default name Gmail or Outlook, along with its status and last sync time. At the end of the row: the pencil button (**Edit**) opens the **Edit connection** dialog to change the **Connection name**; the eye button (**Open in AkaConnect**, shown only when AkaConnect is configured for the system) opens the connection in AkaConnect; the trash button (**Remove**) stops invoice retrieval and deletes the connection in AkaConnect as well.

## Notes

- **[Invoice source settings: organization-wide or unit-specific](../../reference/invoice-sources/unit-scope.md)**\
  Enable/disable, format, file size, and Check on e-Invoice Portal settings apply to the entire organization; sync frequency, download schedule, and source account are set separately for each unit.

## Troubleshooting

### [Connect a Gmail/Outlook mailbox via AkaConnect](how-to/connect-akaconnect.md)

- "Your browser blocked the connection window.": click **Open connection page** or allow pop-up windows.
- "This connection type is not supported. Only Gmail and Outlook are supported.": select Gmail or Outlook again.
- "This connection has already been added.": the mailbox is already in the list.
- "The connection session has expired. Please try again." (sessions are kept for only 10 minutes) or "You canceled the connection.": click **Add connection** again.
- "Unable to connect. Please try again later.": AkaConnect may not be configured for the system; contact the system operations team.
- The connection reports **Login failed**: reauthorize the connection in AkaConnect (the eye button opens the connection directly); see Reauthorize a connection (scaleconnect).
