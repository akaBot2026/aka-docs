---
title: "Connect a Gmail/Outlook mailbox via AkaConnect"
description: "Enable the AkaConnect connection, select a unit, click Add connection, and complete the Gmail or Outlook mailbox connection in the AkaConnect pop-up window."
id: connect-akaconnect
sidebar_label: Connect a Gmail/Outlook mailbox via AkaConnect
sidebar_position: 3
---

# Connect a Gmail/Outlook mailbox via AkaConnect

Enable the AkaConnect connection, select a unit, click Add connection, and complete the Gmail or Outlook mailbox connection in the AkaConnect pop-up window.

**Required permission:** admin


## Steps

1. Open **Administration** → **Incoming Invoices**; in the **Unit** field, select the unit that will receive invoices.
2. On the **AkaConnect Connection** tab, turn on the toggle if it is **Off**, select the **Sync frequency** (Every 5/15/30 minutes or Hourly), **Accepted formats**, **Maximum file size**, and **Check on e-Invoice Portal** if needed, then click **Save changes** at the top of the page.
3. Under **Mail connections**, click **Add connection**. The AkaConnect window opens, and the page displays "Waiting for connection to complete...".
4. In the AkaConnect window (you must be signed in to AkaConnect), create a connection as you would in AkaConnect, using only the Gmail or Outlook connector: enter a name, select an authentication method, sign in to the mailbox that receives invoices, and grant permission, then click **Test and Create**. For details, see Create a connection in AkaConnect (scaleconnect).
5. When AkaConnect reports completion or the window closes, the **Mail connections** list refreshes. The new connection uses the default name Gmail or Outlook and shows its status and last sync time. At the end of the row: the pencil button (**Edit**) opens the **Edit connection** dialog to change the **Connection name**; the eye button (**Open in AkaConnect**, shown only when AkaConnect has been configured for the system) opens the connection in AkaConnect; the trash button (**Remove**) stops invoice retrieval and deletes the connection in AkaConnect as well.

## Troubleshooting

- "Your browser blocked the connection window.": click **Open connection page** or allow pop-up windows.
- "This connection type is not supported. Only Gmail and Outlook are supported.": select Gmail or Outlook again.
- "This connection has already been added.": the mailbox is already in the list.
- "The connection session has expired. Please try again." (sessions are kept for only 10 minutes) or "You canceled the connection.": click **Add connection** again.
- "Unable to connect. Please try again later.": AkaConnect may not have been configured for the system; contact the system operations team.
- The connection shows **Sign-in failed**: reauthorize the connection in AkaConnect (the eye button opens the connection directly); see Reauthorize a connection (scaleconnect).


## Notes

- **[Invoice source settings: organization-wide or per unit](../../../reference/invoice-sources/unit-scope.md)**\
  Enable/disable settings, formats, file size, and Check on e-Invoice Portal apply to the entire organization; sync frequency, download schedule, and source account are configured separately for each unit.

## Features used

- [Manage incoming invoice sources](../features/settings.md) — The Administration → Incoming Invoices page: enable/disable sources, configure mailboxes and e-Invoice Portal accounts, and set up AkaConnect and AkaPay connections. Administrators only.

## Used in these guides

- [Receive invoices from Gmail/Outlook via AkaConnect](../connect-akaconnect.md) — For administrators who want to receive invoices attached to emails from a Gmail or Outlook mailbox connected through AkaConnect, without configuring IMAP.
- [Enable/disable invoice sources and save settings](configure.md) — In Administration → Incoming Invoices, select the unit scope, enable/disable each source, configure formats, file size, e-Invoice Portal checks and sync frequency, then click Save changes.
