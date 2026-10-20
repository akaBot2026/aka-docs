---
id: save-mail
title: "Save Mail"
sidebar_label: "Save Mail"
sidebar_position: 11
description: "Save Mail activity documentation."
displayed_sidebar: activitiesSidebar
---
# Save Mail

RCA.Activities.Mail.SaveMail

## **Description**

This activity saves an email as an `.eml` file. It works with emails read by any Get activity (Outlook, IMAP, POP3 or Exchange). The folder in **File Path** must already exist. A file with the same name is overwritten.

![mail-save](/static/img/mail-save.png)

(\* is mandatory)

## **Properties**

**Input**

* **Mail Message (MailMessage)**\* - The MailMessage object to be saved.
* **File Path (String)**\* - The full path of the file, including the file name and the `.eml` extension. A relative path is relative to the project folder.  
  E.g: "Data\Output\MyEmail.eml"

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Save Mail

## **See also: Exchange activities**

The Exchange activities are part of the Mail package (in akaBot Studio: **Mail** > **Exchange**). This activity also works with emails read from an Exchange Server:

* [Get Exchange Mail Messages](/docs/activities/exchange/latest/activities/get-exchange-email-messages.md) - Reads emails from an Exchange mailbox.
* [Exchange activities](/docs/activities/exchange/latest/introduction.md) - Overview of all Exchange activities.
* [Setup Exchange (EWS)](/docs/activities/exchange/latest/user-guide/exchange-ews-configuration.md) - How to collect the connection details and configure Exchange Scope.
