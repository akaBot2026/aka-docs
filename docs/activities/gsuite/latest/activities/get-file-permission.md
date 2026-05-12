---
id: get-file-permission
title: "Get File Permission"
sidebar_label: "Get File Permission"
sidebar_position: 10
description: "Get File Permission activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get File Permission

RCA.Activities.GSuite.GetFilePermission

## **Description**

This activity allows getting permission for a specified file if requested.

![image-20220505160123-1.png](/img/4706f3_image-20220505160123-1.png)

(\*For mandatory)

## **In the body of activity**

* **Id of file whose permissions to retrieve (String)**\* - ID of file requested to get permission. String variables and String are supported.

## **Properties**

**Input**

* **File ID (String)**\* - ID of file requested to get permission. String variables and String are supported.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [65623834] Get File Permission

**Options**

* **Use Domain Admin Access (Checkbox)** - If selected, the requester is granted access if they are an administrator of the domain to which the file belongs.

**Ouput**

* **Result (String)** - The permissions of the specified file. This property supports Google Permission array variables
