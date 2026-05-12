---
id: move-outlook-message
title: "Move Outlook Message"
sidebar_label: "Move Outlook Message"
sidebar_position: 5
description: "Move Outlook Message activity documentation."
displayed_sidebar: activitiesSidebar
---
# Move Outlook Message

RCA.Activities.Mail.MoveOutlookMessage

## **Description**

This activity allows you to move Outlook messages to a specified folder.

![image-20220505162512-1.png](/img/2c85f9_image-20220505162512-1.png)

(\* is mandatory)

## **Properties**

**Input**

* **Account (String)** - The account used to access the messages to be moved.  
  **E.g**: “SourceFolderName”
* **Mail message (MailMessage)**\* – The message that need to be moved.
* **Mail folder (String)**\* - The mail folder to which the messages are to be moved.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **E.g**: Move Outlook Message
