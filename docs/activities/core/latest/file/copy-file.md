---
id: copy-file
title: "Copy File"
sidebar_label: "Copy File"
sidebar_position: 3
description: "Copy File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Copy File

RCA.Core.Activities.CopyFile

## **Description**

This activity allows you to copy files from a specified location to another.

![image-20220513103651-1.png](/img/d5bb12_image-20220513103651-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**- This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. The default value is False.

**File**

* **Destination (String)**\* - The destination where you want to copy the file to. If you provide a folder path, the file is copied with the original name. You can specify the file name.  
  E.g: "C:\Users\Admin\Downloads\outputfile.xlsx"
* **Path (String)**\* - The full path of the file you want to copy.  
  E.g: “C:\Users\Admin\inputfile.xlsx”

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [351576757] Select Folder

**Options**

* **Overwrite (Checkbox)**- Check this option to overwrite the files in the destination folder with the file that is to be copied.
