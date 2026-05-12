---
id: send-outlook-mail
title: "Send Outlook Mail"
sidebar_label: "Send Outlook Mail"
sidebar_position: 1
description: "Send Outlook Mail activity documentation."
displayed_sidebar: activitiesSidebar
---
# Send Outlook Mail

RCA.Activities.Mail.SendOutlookMail

## **Description**

This activity allows you to send email messages from Outlook.

![image-20220505162242-1.png](/img/6f58bd_image-20220505162242-1.png)

(\* is mandatory)

## **Properties**

**Attachments**

* **Attachments Collection (IEnumerable< String >)**- An IEnumerable object that specifies a list of files which you want to send as attachments.
* **Attachment** - A list of string arguments that represent the attachments you want to send alongside the email.

**Forward**

* **Mail Message (MailMessage)**- This message to be forwarded. This field only supports MailMessage objects.

**Input**

* **Account (String)** - Account to send the email message

**Mail**

* **Body (String)** - The body of the mail message.
* **Subject (String)** - The subject of the message you want to send

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **E.g** Send Outlook Mail

**Options**

* **Is Body Html (CheckBox)** - This option allows you to check if the body is in Html format.
* **Is Draft (CheckBox)** - If you choose this, akaBot will save the email as draft.

**Receiver**

* **Bcc (String)** - The hidden recipients of the email message.
* **Cc (String)** - The secondary recipients of the email message.
* **To (String)**\* - The main recipients of the email message.
