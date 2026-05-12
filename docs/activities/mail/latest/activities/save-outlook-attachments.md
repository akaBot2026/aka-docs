---
id: save-outlook-attachments
title: "Save Outlook Attachments"
sidebar_label: "Save Outlook Attachments"
sidebar_position: 4
description: "Save Outlook Attachments activity documentation."
displayed_sidebar: activitiesSidebar
---
# Save Outlook Attachments

RCA.Activities.Mail.SaveOutlookAttachments

## **Description**

This activity allows you to save attachments from an email in Outlook

![image-20220505162439-1.png](/img/f6680f_image-20220505162439-1.png)

(\* is mandatory)

## **Properties**

**Input**

* **Account (String)**- Outlook account from which you wish to interact with.  
  **E.g**: “AccountWantToSaveAttachements”
* **Folder Path (String)** - The folder path where you want to save the Attachments to.  
  **E.g**: "Data\Output\Content Writer Application" +item.From.DisplayName.ToString”

**Mail**

* **Mail Message (MailMessage)** - The mail message to be saved. This activity only supports Outlook mail messages

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **E.g**: Save Outlook Attachments
