---
id: save-mail-attachments
title: "Save Mail Attachments"
sidebar_label: "Save Mail Attachments"
sidebar_position: 10
description: "Save Mail Attachments activity documentation."
displayed_sidebar: activitiesSidebar
---
# Save Mail Attachments

RCA.Activities.Mail.SaveMailAttachments

## **Description**

This activity saves the attachments of an email to a folder. It works with emails read by any Get activity (Outlook, IMAP, POP3 or Exchange). If the folder does not exist, akaBot creates it. Files with the same name in the folder are overwritten.

![image-20220505163054-1.png](/static/img/d2b96c_image-20220505163054-1.png)

(\* is mandatory)

## **Properties**

**Input**

* **Folder Path (String)** - The folder to save the attachments to. If empty, the project folder is used.
* **Message (MailMessage)**\* - The email whose attachments you want to save.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Save Mail Attachments

**Option**

* **Filter (String)** - A regular expression. Only attachments whose file path matches it are saved. It is case-sensitive; add `(?i)` to ignore case. Leave empty to save all attachments.  
  E.g: "(?i)\.pdf$"

**Output**

* **Attachments (`IEnumerable<String>`)** - The full paths of the saved files.

## **See also: Exchange activities**

The Exchange activities are part of the Mail package (in akaBot Studio: **Mail** > **Exchange**). This activity also works with emails read from an Exchange Server:

* [Get Exchange Mail Messages](/docs/activities/exchange/latest/activities/get-exchange-email-messages.md) - Reads emails from an Exchange mailbox.
* [Exchange activities](/docs/activities/exchange/latest/introduction.md) - Overview of all Exchange activities.
* [Setup Exchange (EWS)](/docs/activities/exchange/latest/user-guide/exchange-ews-configuration.md) - How to collect the connection details and configure Exchange Scope.
