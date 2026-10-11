---
id: get-pop3-mail-messages
title: "Get POP3 Mail Messages"
sidebar_label: "Get POP3 Mail Messages"
sidebar_position: 9
description: "Get POP3 Mail Messages activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get POP3 Mail Messages

RCA.Activities.Mail.GetPOP3MailMessages

## **Description**

This activity allows you to retrieve a POP3 email from a specified server.

![image-20220505163009-1.png](/static/img/440180_image-20220505163009-1.png)  
(\* is mandatory)

## **Properties**

**Host**

* **Port (Int32)** - The port of the POP3 server.  
  E.g: 995
* **Server**\* - The email server host that is to be used.  
  E.g: “Mail.MyDomain.com”

![995-pop.png](/static/img/5f438c_995-pop.png)

**Logon**

* **Email (String)**\* - The email account used to get the message.
* **Password (String)**\* - The password (or App Password) of the email account. Use either **Password** or **SecurePassword**.
* **SecurePassword (SecureString)** - The password as a secure string, instead of **Password**.
* **Use OAuth (Boolean)** - Select this if the mail server requires modern sign-in (OAuth 2.0). In that case, enter an OAuth access token in **Password** instead of the account password.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: “POP3 Get Mail”

**Option**

* **Delete Messages (CheckBox)** - If selected, the retrieved messages are **permanently deleted** from the server when the activity finishes.
* **Secure Connection (DropDownlist)** - Specifies when the SSL/TLS encryption are used. It contains: None, Auto, SslOnConnect, StartTls, StartTlsWhenAvailable
* **Top (Int32)** - The number of newest messages to retrieve. Default value: 30.

**Output**

* **Messages (`List<MailMessage>`)** - The retrieved messages as a collection of MailMessage objects.

## **See also: Exchange activities**

The Exchange activities are part of the Mail package (in akaBot Studio: **Mail** > **Exchange**). If your mailbox is on your company's own Exchange Server, use them instead:

* [Get Exchange Mail Messages](/docs/activities/exchange/latest/activities/get-exchange-email-messages.md) - Reads emails from an Exchange mailbox.
* [Exchange activities](/docs/activities/exchange/latest/introduction.md) - Overview of all Exchange activities.
* [Setup Exchange (EWS)](/docs/activities/exchange/latest/user-guide/exchange-ews-configuration.md) - How to collect the connection details and configure Exchange Scope.
