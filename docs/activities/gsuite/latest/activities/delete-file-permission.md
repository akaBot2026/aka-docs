---
id: delete-file-permission
title: "Delete File Permission"
sidebar_label: "Delete File Permission"
sidebar_position: 5
description: "Delete File Permission activity documentation."
displayed_sidebar: activitiesSidebar
---
# Delete File Permission

RCA.Activities.GSuite.DeleteFilePermission

## **Description**

This activity allows to delete permission to a file.

![image-20220505155423-1.png](/img/d19794_image-20220505155423-1.png)

(\*For mandatory)

## **In the body of activity**

* **Id of file whose permissions to delete (String)**\* - ID of file requested to delete permission. String variables and String are supported.
* **Id of permissions to delete (String)**\* - The ID of the permission that you want to delete.

## **Properties**

**Input**

* **File ID (String)\***- The ID of the file that you want to delete permissions from. This property supports String variables and string formatted values
* **PermissionID (String)**\* - The ID of the permission that you want to delete.

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [345963453] Delete File Permission

**Options**

* **Use Domain Admin Access (Checkbox)**- If selected, the requester is granted access if they are an administrator of the domain to which the file belongs.
