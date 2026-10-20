---
id: save-outlook-attachments
title: "Save Outlook Attachments"
sidebar_label: "Save Outlook Attachments"
sidebar_position: 4
description: "Save Outlook Attachments activity documentation."
displayed_sidebar: activitiesSidebar
---
# Save Outlook Attachments

RCA.Activities.Mail.SaveOutlookAttachements

## **Description**

This activity allows you to save attachments from an email in Outlook

![image-20220505162439-1.png](/static/img/f6680f_image-20220505162439-1.png)

(\* is mandatory)

## **Properties**

**Input**

* **Account (String)**- Outlook account from which you wish to interact with.  
  **E.g**: “AccountWantToSaveAttachements”
* **Folder Path (String)** - The folder to save the attachments to. The folder must already exist. If empty, the project folder is used.  
  **E.g**: "Data\Output\Content Writer Application" +item.From.DisplayName.ToString”

**Mail**

* **Mail Message (MailMessage)** - The mail message to be saved. This activity only supports Outlook mail messages

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **E.g**: Save Outlook Attachments

## **See also: Exchange activities**

The Exchange activities are part of the Mail package (in akaBot Studio: **Mail** > **Exchange**). If your mailbox is on your company's own Exchange Server, use them instead:

* [Exchange activities](/docs/activities/exchange/latest/introduction.md) - Overview of all Exchange activities.
* [Setup Exchange (EWS)](/docs/activities/exchange/latest/user-guide/exchange-ews-configuration.md) - How to collect the connection details and configure Exchange Scope.
