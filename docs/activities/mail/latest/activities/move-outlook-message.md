---
id: move-outlook-message
title: "Move Outlook Message"
sidebar_label: "Move Outlook Message"
sidebar_position: 5
description: "Move Outlook Message activity documentation."
displayed_sidebar: activitiesSidebar
---
# Move Outlook Message

RCA.Activities.Mail.MoveOutlookMessage

## **Description**

This activity allows you to move Outlook messages to a specified folder.

![image-20220505162512-1.png](/static/img/2c85f9_image-20220505162512-1.png)

(\* is mandatory)

## **Properties**

**Input**

* **Account (String)** - The Outlook account that contains the folder. If empty, the default account is used.  
  **E.g**: “bot.user@company.com”
* **Mail message (MailMessage)**\* – The message that need to be moved.
* **Mail Folder (String)**\* - The folder to move the message to, as shown in Outlook. The folder must already exist.  
  **E.g**: “Inbox\Completed”

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **E.g**: Move Outlook Message

## **See also: Exchange activities**

The Exchange activities are part of the Mail package (in akaBot Studio: **Mail** > **Exchange**). If your mailbox is on your company's own Exchange Server, use them instead:

* [Move Message To Another Folder](/docs/activities/exchange/latest/activities/move-message-to-another-folder.md) - Moves an email in an Exchange mailbox.
* [Exchange activities](/docs/activities/exchange/latest/introduction.md) - Overview of all Exchange activities.
* [Setup Exchange (EWS)](/docs/activities/exchange/latest/user-guide/exchange-ews-configuration.md) - How to collect the connection details and configure Exchange Scope.
