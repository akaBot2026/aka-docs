---
id: move-imap-message-to-another-folder
title: "Move IMAP Message To Another Folder"
sidebar_label: "Move IMAP Message To Another Folder"
sidebar_position: 7
description: "Move IMAP Message To Another Folder activity documentation."
displayed_sidebar: activitiesSidebar
---
# Move IMAP Message To Another Folder

RCA.Activities.Mail.MoveIMAPMessageToFolder

## **Description**

This activity allows you to move an IMAP Message to an another folder.

![image-20220505162857-1.png](/img/24564c_image-20220505162857-1.png)

(\* is mandatory)

## **Properties**

**Input**

* **From Folder (String)** - The folder that contains the message.  
  E.g: “Inbox”
* **Mail Message (MailMessage)**\* - The mail message that you want to be moved

**Destination**

* **Mail folder (String)**\* - The mail folder of the message that you want to move.  
  E.g: “Customer Folder”

**Host**

* **Port (Int32)** - The port that the email is to be sent through.  
  E.g: 993
* **Server (String)**\* - The email server host that is to be used.  
  E.g: “mail.mydomain.com”

![993-imap.png](/img/5cf416_993-imap.png)

* **Enable SSL (Checkbox)** - If you choose this you will use the SSL encryption.

**Logon**

* **Email (String)**\* - The email account used to send the message.  
  E.g: [[email protected]](/cdn-cgi/l/email-protection)
* **Password (String)**\* - The password of the email account used to send the message

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Move IMAP Message

**Option**

* **Secure Connection (DropDown List)** - Specifies when the SSL/TLS encryption are used. It contains: None, Auto, SslOnConnect, StartTls, StartTlsWhenAvailable
