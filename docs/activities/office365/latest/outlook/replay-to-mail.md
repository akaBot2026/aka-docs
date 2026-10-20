---
id: replay-to-mail
title: "Replay To Mail"
sidebar_label: "Replay To Mail"
sidebar_position: 6
description: "Replay To Mail activity documentation."
displayed_sidebar: activitiesSidebar
---
# Replay To Mail

RCA.Activities.Office365.ReplyToMail

## **Description**

The Replay To Mail activity replies to an existing email message in Microsoft Office 365 Outlook.

![replay-to-mail-office.png](/static/img/replay-to-mail-office.png)

:::note
This activity must be placed inside the **Do** block of [Office 365 Application Scope](/docs/activities/office365/latest/office365-application-scope.md) with the `Mail` service selected. See [Connecting to Office 365](/docs/activities/office365/latest/azure-app-registration.md) for how to set up authentication and permissions.
:::

(\* is mandatory)

## **In the body of activity**

* None (Configure properties via the Properties panel).

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False  
  **- True** : allows the rest of the process to continue the execution even if an error occurs within the activity.  
  **- False** : blocks the process from continuing the execution.

**Input**

* **Account (String)** - The email account used to send the reply. If left blank, the authenticated account is used.
* **Message (Office365Message)\*** - The original Office365Message object to reply to.
* **New Subject (String)** - An optional new subject for the reply. If left blank, the original subject is preserved (prefixed with RE:).

**Recipients**

* **Add To (String[])** - Additional primary recipient email addresses to add to the reply.  
  E.g: `{"colleague@example.com"}`
* **Add CC (String[])** - Additional CC recipient email addresses to add to the reply.
* **Add BCC (String[])** - Additional BCC recipient email addresses to add to the reply.

**Attachments**

* **Attachments (`List<String>`)** - A list of file paths to attach to the reply.
* **Attachments Collection (`IEnumerable<String>`)** - An IEnumerable collection of file paths to attach to the reply.

**Options**

* **Body (String)** - The body content of the reply message.  
  E.g: "Thank you for the update."
* **Importance (DropDownlist)** - The priority level of the reply: Low, Normal, High. Default value: Normal.
* **Is Body Html (Boolean)** - Specifies whether the reply body contains HTML. Default value: False.
* **Is Draft (Boolean)** - If True, saves the reply as a draft without sending. Default value: False.
* **Reply To All (Boolean)** - If True, replies to all participants in the thread (sender and all CC recipients). If False, replies only to the original sender. Default value: False.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Replay To Mail
