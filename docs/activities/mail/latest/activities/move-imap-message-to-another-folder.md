---
id: move-imap-message-to-another-folder
title: "Move IMAP Message To Another Folder"
sidebar_label: "Move IMAP Message To Another Folder"
sidebar_position: 7
description: "Move IMAP Message To Another Folder activity documentation."
displayed_sidebar: activitiesSidebar
---
# Move IMAP Message To Another Folder

RCA.Activities.Mail.MoveIMAPMailMessageToFolder

## **Description**

This activity allows you to move an IMAP Message to an another folder.

![image-20220505162857-1.png](/static/img/24564c_image-20220505162857-1.png)

(\* is mandatory)

## **Properties**

**Input**

* **From Folder (String)** - The folder that contains the message. If empty, the folder the message was read from is used.  
  E.g: “Inbox”
* **Mail Message (MailMessage)**\* - The mail message that you want to be moved

**Destination**

* **Mail Folder (String)**\* - The folder to move the message to. The folder must already exist.  
  E.g: “Customer Folder”

**Host**

* **Port (Int32)** - The port of the IMAP server.  
  E.g: 993
* **Server (String)**\* - The email server host that is to be used.  
  E.g: “mail.mydomain.com”

![993-imap.png](/static/img/5cf416_993-imap.png)

* **EnableSSL (Checkbox)** - Not used. Use **Secure Connection** to choose the encryption.

**Logon**

* **Email (String)**\* - The email account that contains the message.  
  E.g: "bot.account@gmail.com"
* **Password (String)**\* - The password (or App Password) of the email account. Use either **Password** or **SecurePassword**.
* **SecurePassword (SecureString)** - The password as a secure string, instead of **Password**.
* **Use OAuth (Boolean)** - Select this if the mail server requires modern sign-in (OAuth 2.0). In that case, enter an OAuth access token in **Password** instead of the account password.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Move IMAP Message

**Option**

* **Secure Connection (DropDown List)** - Specifies when the SSL/TLS encryption are used. It contains: None, Auto, SslOnConnect, StartTls, StartTlsWhenAvailable

## **See also: Exchange activities**

The Exchange activities are part of the Mail package (in akaBot Studio: **Mail** > **Exchange**). If your mailbox is on your company's own Exchange Server, use them instead:

* [Move Message To Another Folder](/docs/activities/exchange/latest/activities/move-message-to-another-folder.md) - Moves an email in an Exchange mailbox.
* [Exchange activities](/docs/activities/exchange/latest/introduction.md) - Overview of all Exchange activities.
* [Setup Exchange (EWS)](/docs/activities/exchange/latest/user-guide/exchange-ews-configuration.md) - How to collect the connection details and configure Exchange Scope.
