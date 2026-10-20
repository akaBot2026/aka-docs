---
id: send-smtp-mail-message
title: "Send SMTP Mail Message"
sidebar_label: "Send SMTP Mail Message"
sidebar_position: 10
description: "Send SMTP Mail Message activity documentation."
displayed_sidebar: activitiesSidebar
---
# Send SMTP Mail Message

RCA.Activities.Mail.SendMail

## **Description**

This activity allows you to send an email messages by using SMTP protocol.

![image-20220505163134-1.png](/static/img/23be67_image-20220505163134-1.png)

(\* is mandatory)

## **Properties**

**Attachments**

* **Attachments Collection (IEnumerable< String >)** - An IEnumerable object that specifies a list of files which you want to send as attachments.
* **Attachment** - A list of string arguments that represent the attachments you want to send alongside the email.

**Forward**

* **Mail Message (MailMessage)** - This message to be forwarded. This field only supports MailMessage objects.

**Host**

* **Port (Int32)** - The port of the SMTP server.  
  E.g: 587
* **Server (String)**\* - The email server host that is to be used.  
  E.g: “Mail.MyDomain.com”

![587-smtp.png](/static/img/ee78d3_587-smtp.png)

**Logon**

* **Email (String)** - The email account used to log in and send the message. Leave empty for a mail relay that does not require a login.
* **Password (String)** - The password (or App Password) of the email account.
* **SecurePassword (SecureString)** - The password as a secure string, instead of **Password**.
* **Use OAuth (Boolean)** - Select this if the mail server requires modern sign-in (OAuth 2.0). In that case, enter an OAuth access token in **Password** instead of the account password.

**Mail**

* **Body (String)** - The body of the mail message.
* **Subject (String)** - The subject of the message.

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: SMTP Send Mail

**Option**

* **Is Body Html (Checkbox)** - You check it if the body is in Html format.
* **Secure Connection (Dropdown List)**- Specifies when the SSL/TLS encryption are used. It contains: None, Auto, SslOnConnect, StartTls, StartTlsWhenAvailable

**Receiver**

* **Bcc (String)**- The recipients of emails you want to hide from others.
* **Cc (String)** - The secondary recipients of the email message
* **To (String)**\* - The recipients of the email message. Separate several addresses with `;`.

**Sender**

* **From (String)** - The sender address. If empty, **Email** is used.
* **Name (String)** - The display name of the sender.

## **See also: Exchange activities**

The Exchange activities are part of the Mail package (in akaBot Studio: **Mail** > **Exchange**). If your mailbox is on your company's own Exchange Server, use them instead:

* [Send Exchange Mail](/docs/activities/exchange/latest/activities/send-exchange-mail.md) - Sends emails through an Exchange Server.
* [Exchange activities](/docs/activities/exchange/latest/introduction.md) - Overview of all Exchange activities.
* [Setup Exchange (EWS)](/docs/activities/exchange/latest/user-guide/exchange-ews-configuration.md) - How to collect the connection details and configure Exchange Scope.
