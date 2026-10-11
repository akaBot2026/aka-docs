---
id: get-imap-mail-messages
title: "Get IMAP Mail Messages"
sidebar_label: "Get IMAP Mail Messages"
sidebar_position: 6
description: "Get IMAP Mail Messages activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get IMAP Mail Messages

RCA.Activities.Mail.GetIMAPMailMessages

## **Description**

This activity allows you to retrieve an IMAP email message from a specified server.

![image-20220505162545-1.png](/static/img/b9eea9_image-20220505162545-1.png)  

(\* is mandatory)

## **Properties**

**Host**

* **Mail Folder (String)** - The mail folder to read from. Default value: "Inbox".
* **Port (Int32)** - The port of the IMAP server.  
  E.g: 993
* **Server (String)**\* - The email server host that is to be used.  
  E.g: “Mail.MyDomain.com”

![e8b4de9-imap.png](/static/img/f640f5_3195a31-imap.png)

**Logon**

* **Email (String)**\* - The email account used to get the message.
* **Password (String)**\* - The password (or App Password) of the email account. Use either **Password** or **SecurePassword**.
* **SecurePassword (SecureString)** - The password as a secure string, instead of **Password**.
* **Use OAuth (Boolean)** - Select this if the mail server requires modern sign-in (OAuth 2.0). In that case, enter an OAuth access token in **Password** instead of the account password.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Get Imap Mail Message

**Option**

* **Delete Messages (CheckBox)** - If selected, the retrieved messages are **permanently deleted** from the server when the activity finishes.
* **Order By Date (OrderByDate)** - Read the newest (NewestFirst, default) or the oldest (OldestFirst) messages first.
* **Secure Connection (DropDownlist)**- Specifies when the SSL/TLS encryption are used. It contains: None, Auto, SslOnConnect, StartTls, StartTlsWhenAvailable
* **Mark As Read (Checkbox)** - If selected, the retrieved messages are marked as read.
* **Only Unread Messages (Checkbox)** - If selected, only unread messages are retrieved. Selected by default.
* **Top (Int32)** - The number of messages to retrieve. Default value: 30.

**Output**

* **Messages (`List<MailMessage>`)** - The retrieved messages.

## **See also: Exchange activities**

The Exchange activities are part of the Mail package (in akaBot Studio: **Mail** > **Exchange**). If your mailbox is on your company's own Exchange Server, use them instead:

* [Get Exchange Mail Messages](/docs/activities/exchange/latest/activities/get-exchange-email-messages.md) - Reads emails from an Exchange mailbox.
* [Exchange activities](/docs/activities/exchange/latest/introduction.md) - Overview of all Exchange activities.
* [Setup Exchange (EWS)](/docs/activities/exchange/latest/user-guide/exchange-ews-configuration.md) - How to collect the connection details and configure Exchange Scope.
