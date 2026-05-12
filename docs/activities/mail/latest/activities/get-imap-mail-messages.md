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

![image-20220505162545-1.png](/img/b9eea9_image-20220505162545-1.png)  
(\* is mandatory)

## **Properties**

**Host**

* **Mail folder (String)** - The mail folder that you want to retrieve. String required only.
* **Port (Int32)** - The port that the email is to be sent through.  
  E.g: 993
* **Server (String)**\* - The email server host that is to be used.  
  E.g: “Mail.MyDomain.com”

![e8b4de9-imap.png](/img/f640f5_3195a31-imap.png)

**Logon**

* **Email (String)**\* - The email account used to get the message.
* **Password (String)**\* - The password of the email account used to get the message.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Get Imap Mail Message

**Option**

* **Delete Messages (CheckBox)** - If you choose this, the read message has been marked for deleted
* **Order By Date (OrderByDate)** - Order mail messages by date
* **Secure Connection (DropDownlist)**- Specifies when the SSL/TLS encryption are used. It contains: None, Auto, SslOnConnect, StartTls, StartTlsWhenAvailable
* **Mark as read (Checkbox)** - Specified whether the retrieve message is marked as read
* **Only Unread Messages (Checkbox)** - Specified to retrieve only unread message.
* **Top (Int32)** - The number of messages that you want to retrieve, start from the top.

**Output**

* **Messages (`List<MailMessage>`)** - The retrieve message of mail collection.
