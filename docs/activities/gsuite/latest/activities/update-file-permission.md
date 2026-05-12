---
id: update-file-permission
title: "Update File Permission"
sidebar_label: "Update File Permission"
sidebar_position: 15
description: "Update File Permission activity documentation."
displayed_sidebar: activitiesSidebar
---
# Update File Permission

RCA.Activities.GSuite.UpdateFilePermission

## **Description**

This activity allows you to update the permission of a specified file.

![image-20220505160539-1.png](/img/ce3b36_image-20220505160539-1.png)

(\*For mandatory)

## **In the body of activity**

* **Id of file whose permissions to update (String)**\* - ID of file requested to update permission. String variables and String are supported.
* **Id of permissions to update (String)**\* - The ID of the permission that you want to update.

## **Properties**

**Input**

* **File ID (String)**\* - ID of file requested to get permission. String variables and String are supported.
* **Permission ID (String)**\* - The ID of the permission that you want to update.
* **ExpirationTime (DateTime)** - The time that you want the file permissions to expire. This property supports < Nullable >DateTime variables and < Nullable >DateTime formatted values. If no value is specified, the permission updates without an expiration time.
* **Role (Dropdown List)** - A drop-down list that specifies the role to grant the entity. The available property values are:  
  **・reader** - the entity can read and download the file.  
  **・writer** - the entity can edit the file.  
  **・owner** - the entity owns the file.  
  **・commenter** - the entity can comment on the file.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [65623834] Update File Permission

**Options**

* **Use Domain Admin Access (Checkbox)** - If selected, the requester is granted access if they are an administrator of the domain to which the file belongs.
* **RemoveExpiration (Checkbox)**- If selected, the previous expiration date for the permission is removed.

**Output**

* **Result (String)** - The updated permission. This property supports Google Permission variables
