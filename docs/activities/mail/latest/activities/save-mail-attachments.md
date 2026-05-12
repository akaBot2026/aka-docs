---
id: save-mail-attachments
title: "Save Mail Attachments"
sidebar_label: "Save Mail Attachments"
sidebar_position: 10
description: "Save Mail Attachments activity documentation."
displayed_sidebar: activitiesSidebar
---
# Save Mail Attachments

RCA.Activities.Mail.SaveMailAttachements

## **Description**

This activity allows you to save mail attachments to specified folder. If there is no folder with given name, akaBot will create new file. Files with the same name in one folder are overwritten.

![image-20220505163054-1.png](/img/d2b96c_image-20220505163054-1.png)

(\* is mandatory)

## **Properties**

**Input**

* **Folder Path (String)** - The path of the folder that you want to save email to.
* **Message (MailMessage)**\* - The message you want to be saved with the attachments.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Save Mail Attachments

**Option**

* **Filter (String)** - The filter you want to add to the mail message.

**Output**

* **Attachments (`IEnumerable<String>`)** - The attachments to be added to the email message.
