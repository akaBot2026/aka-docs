---
id: create-file-permission
title: "Create File Permission"
sidebar_label: "Create File Permission"
sidebar_position: 3
description: "Create File Permission activity documentation."
displayed_sidebar: activitiesSidebar
---
# Create File Permission

RCA.Activities.GSuite.CreateFilePermission

## **Description**

This activity allows you to create a permission for the specified file in Google Drive.

![image-20220505155108-1.png](/img/00cbf7_image-20220505155108-1.png)

(\*For mandatory)

## **In the body of activity**

* **Id of file whose permissions to create (String)**\* - The ID of the file that you want to create permissions for. This property supports String variables and string formatted values

## **Properties**

**Input**

* **File ID (String)**\* - The ID of the file that you want to create permissions for. This property supports String variables and string formatted values
* **Domain (String)** - The domain that you want to grant file permissions. This property supports String variables and string formatted values. This property is required only if the GuaranteeType value is Domain.
* **GaranteeType (Drop down list)** - A drop-down list that specifies the entity you want to grant file permissions. The available property values are:  
  **・user** - grants permission to a single user.  
  **・group** - grants permission to a group.  
  **・domain** - grants permission to a domain.  
  **・anyone** - grants permission to anyone with access to the company domain.
* **Role (Dropdown List)** - A drop-down list that specifies the file permission role you want to grant the entity. The available property values are:  
  **・reader** - the entity can read and download the file.  
  **・writer** - the entity can edit the file.  
  **・owner** - the entity owns the file.  
  **・commenter** - the entity can comment on the file.
* **UserEmail (String)** - The email address of the user or group that is getting the file permissions. This property supports String variables and string formatted values. This property is required only if the GuaranteeType value is user or group.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [821884234] Create File Permission

**Options**

* **Email Message (String)**- The message content that you want to send when there is an update to the file permissions. This property supports String variables and string formatted values. The default value is "A new permission has been created, and you are the recipient!". This property is only required if ** SendNotificationEmail** is selected.  
  E.g: "A new permission has been created, and you are the recipient!"
* **SendNotificationEmail (Checkbox)**- If selected, an email notification is sent to the entities with permission.
* **UseDomainAdminAccess (Checkbox)** - If selected, the requester is granted access if they are an administrator of the domain to which the file belongs.

**Output**

* **Result (String)** - The granted permissions. This property supports Google Permission variables.
