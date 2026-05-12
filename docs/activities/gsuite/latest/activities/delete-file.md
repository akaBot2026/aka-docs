---
id: delete-file
title: "Delete File"
sidebar_label: "Delete File"
sidebar_position: 6
description: "Delete File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Delete File

RCA.Activities.GSuite.DeleteFile

## **Description**

This activity allows you to delete a file located on Google Drive.

![image-20220505155255-1.png](/img/17f323_image-20220505155255-1.png)

(\*For mandatory)

## **In the body of activity**

* **ID of file to delete (String)**\* - The ID of the file that you want to delete. This property supports String variables and string formatted values

## **Properties**

**Input**

* **FileID (String)**\* - The ID of the file that you want to delete. This property supports String variables and string formatted values.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **E.g**: [123125436] Delete File
