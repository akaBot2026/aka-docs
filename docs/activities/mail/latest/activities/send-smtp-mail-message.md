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

![image-20220505163134-1.png](/img/23be67_image-20220505163134-1.png)

(\* is mandatory)

## **Properties**

**Attachments**

* **Attachments Collection (IEnumerable< String >)** - An IEnumerable object that specifies a list of files which you want to send as attachments.
* **Attachment** - A list of string arguments that represent the attachments you want to send alongside the email.

**Common**

* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).

**Forward**

* **Mail Message (MailMessage)** - This message to be forwarded. This field only supports MailMessage objects.

**Host**

* **Port (Int32)**\* - The port that the email is to be sent through.  
  E.g: 587
* **Server (String)**\* - The email server host that is to be used.  
  E.g: “Mail.MyDomain.com”

![587-smtp.png](/img/ee78d3_587-smtp.png)

**Logon**

* **Email (String)**\* - The email account used to send the message.
* **Password (String)**\* - The password of the email account used to send the message

**Mail**

* **Body (String)**\* - The body of the mail message.
* **Subject (String)**\*- The subject of the message you want to send

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: SMTP Send Mail

**Option**

* **Is Body Html (Checkbox)** - You check it if the body is in Html format.
* **Secure Connection (Dropdown List)**- Specifies when the SSL/TLS encryption are used. It contains: None, Auto, SslOnConnect, StartTls, StartTlsWhenAvailable

**Receiver**

* **Bcc (String)**- The recipients of emails you want to hide from others.
* **Cc (String)** - The secondary recipients of the email message
* **To (String)**- The recipients of the email message

**Sender**

* **From (String)** - The email address of the sender
* **Name (String)**- The name of the sender
