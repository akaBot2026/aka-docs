---
id: save-mail
title: "Save Mail"
sidebar_label: "Save Mail"
sidebar_position: 3
description: "Save Mail activity documentation."
displayed_sidebar: activitiesSidebar
---
# Save Mail

RCA.Activities.Mail.SaveMail

## **Description**

This activity allows you to save an email message to the specified folder as an EML file. If there is no folder with the given name, akaBot will create it. If no folder is specified, the file is saved in the project folder. Files with the same name in one folder are overwritten.

![mail-save](/static/img/mail-save.png)

(\* is mandatory)

## **Properties**

**Input**

* **Mail Message (MailMessage)**\* - The MailMessage object to be saved.
* **File Path (String)** - The full path where to save the MailMessage object, including the file name and extension.  
  E.g: "Data\Output\MyEmail.eml"

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Save Mail
