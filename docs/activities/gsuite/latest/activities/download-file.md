---
id: download-file
title: "Download File"
sidebar_label: "Download File"
sidebar_position: 7
description: "Download File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Download File

RCA.Activities.GSuite.DownloadFile

## **Description**

This activity is specified for Google Drive to download file.

![image-20220505155459-1.png](/img/de3c0d_image-20220505155459-1.png)

(\*For mandatory)

## **In the body of activity**

* **Id of File To Download (String)**\* - The ID of the file that you want to download. This property supports String variables and string formatted values.

## **Properties**

**Input**

* **FileID (String)**\* - The ID of the file that you want to download. This property supports String variables and string formatted values.
* **LocalPath (String)** - The full path where to download the file, including the file name and extension. This property supports String variables and string formatted values  
  E.g: “D:\file.txt\”

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [610085514] Download File
