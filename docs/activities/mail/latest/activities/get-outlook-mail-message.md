---
id: get-outlook-mail-message
title: "Get Outlook Mail Message"
sidebar_label: "Get Outlook Mail Message"
sidebar_position: 3
description: "Get Outlook Mail Message activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Outlook Mail Message

RCA.Activities.Mail.GetOutlookMailMessages

## **Description**

This activity helps you to retrieve email messages from Outlook

![image-20220505162407-1.png](/static/img/32e0c2_image-20220505162407-1.png)

(\* is mandatory)

## **Properties**

**Input**

* **Account (String)** - The Outlook account to read from. If empty, the default account is used.  
  **E.g** “bot.user@company.com”
* **Mail Folder (String)** - The folder to read from, as shown in Outlook. Use `\` for sub-folders. Default value: "Inbox".  
  **E.g**: “Inbox\Invoices”

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **E.g**: Get Outlook Mail

**Option**

* **Filter (String)** - A string used as a filter for the messages to be retrieved. Accepts JET Queries or DASL Queries.  
  **E.g**: "[HomeAddressCountry] = 'Canada'"
* **Mark as read (CheckBox)** - Specifies whether to mark retrieved messages as read. By default, this check box is cleared.
* **Only Unread Messages (CheckBox)** - Specifies whether to retrieve only unread messages. By default, this check box is selected.
* **Order By Date (OrderByDate)** - Read the newest (NewestFirst, default) or the oldest (OldestFirst) messages first.
* **Top (Int32)** - The number of messages to retrieve, starting from the newest or the oldest depending on **Order By Date**. Default value: 30.

**Output**

* **Messages (`List<MailMessage>`)** - The retrieved messages.

## **See also: Exchange activities**

The Exchange activities are part of the Mail package (in akaBot Studio: **Mail** > **Exchange**). If your mailbox is on your company's own Exchange Server, use them instead:

* [Get Exchange Mail Messages](/docs/activities/exchange/latest/activities/get-exchange-email-messages.md) - Reads emails from an Exchange mailbox.
* [Exchange activities](/docs/activities/exchange/latest/introduction.md) - Overview of all Exchange activities.
* [Setup Exchange (EWS)](/docs/activities/exchange/latest/user-guide/exchange-ews-configuration.md) - How to collect the connection details and configure Exchange Scope.
