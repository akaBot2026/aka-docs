---
id: move-file
title: "Move File"
sidebar_label: "Move File"
sidebar_position: 13
description: "Move File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Move File

RCA.Activities.Gsuite.MoveFile

## **Description**

This activity allows you to move a file on Google Drive

![image-20220505160420-1.png](/img/13f180_image-20220505160420-1.png)

(\*For mandatory)

## **In the body of activity**

* **ID of file to move (String)**\* - ID of file to move. String variables and String are supported.
* **ID of destination folder, or “root” (String)**\* - Destination of folder which file is move to. String variables and String are supported.

## **Properties**

**Input**

* **FileID (String)**\* - The ID of the file that you want to move. This property supports String variables and string formatted values.
* **New File Name (String)** - The new name of the file that you want to move. This property supports String variables and string formatted values.
* **New Parent ID (String)**- The ID of the new parent folder. This property supports String variables and string formatted values.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [345197651] Move File
