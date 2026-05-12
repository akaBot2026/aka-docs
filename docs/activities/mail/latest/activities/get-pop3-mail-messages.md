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

![image-20220505163009-1.png](/img/440180_image-20220505163009-1.png)  
(\* is mandatory)

## **Properties**

**Host**

* **Port (Int32)** - The port that the email is to be sent through.  
  E.g: 995
* **Server**\* - The email server host that is to be used.  
  E.g: “Mail.MyDomain.com”

![995-pop.png](/img/5f438c_995-pop.png)

**Logon**

* **Email (String)**\* - The email account used to get the message.
* **Password (String)**\* - The password of the email account used to get the message.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: “POP3 Get Mail”

**Option**

* **Delete Messages (CheckBox)** - If you choose this, the read message has been marked for deleted
* **Secure Connection (DropDownlist)** - Specifies when the SSL/TLS encryption are used. It contains: None, Auto, SslOnConnect, StartTls, StartTlsWhenAvailable
* **Top (Int32)**- The number of messages to be retrieved starting from the top of the list.

**Output**

* **Messages (`List<MailMessage>`)** - The retrieved messages as a collection of MailMessage objects.
