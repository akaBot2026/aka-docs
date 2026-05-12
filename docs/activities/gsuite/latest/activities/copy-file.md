---
id: copy-file
title: "Copy File"
sidebar_label: "Copy File"
sidebar_position: 2
description: "Copy File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Copy File

RCA.Activities.Gsuite.CopyFile

## **Description**

This activity allows you to copy a file on Google Drive

![image-20220505155012-1.png](/img/c03b32_image-20220505155012-1.png)

(\*For mandatory)

## **In the body of activity**

* **ID of file to copy (String)**\* - ID of file to copy. String variables and String are supported.
* **ID of destination folder, or “root” (String)**\* - Destination of folder which file is copy. String variables and String are supported.

## **Properties**

**Input**

* **FileID (String)**\* - The ID of the file that you want to copy. This property supports String variables and string formatted values.
* **New File Name (String)**- The new name of the file that you want to copy. This property supports String variables and string formatted values.
* **New Parent ID (String)** - The ID of the parent folder where you want to copy the file. This property supports String variables and string formatted values.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [185197651] Copy File

**Output**

* **Result (String)** - The ID of the copied file. This property supports String variables. You can use this variable as an input property value in other Google GSuite activities.
