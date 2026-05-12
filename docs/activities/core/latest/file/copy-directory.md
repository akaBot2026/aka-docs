---
id: copy-directory
title: "Copy Directory"
sidebar_label: "Copy Directory"
sidebar_position: 2
description: "Copy Directory activity documentation."
displayed_sidebar: activitiesSidebar
---
# Copy Directory

RCA.Activities.Core.CopyDirectory

## **Description**

This activity allows you to copy a folder to specified location

![image-20220513103534-1.png](/img/bc9de5_image-20220513103534-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. The default value is False.

**Directory**

* **Destination (String)**\* - The destination path where you want to copy the folder to.  
  E.g: "C:\Users\Admin\Downloads\2.0.4.0\Folder to copy”
* **Path (String)**\* - The path of the folder that you want to copy.  
  E.g: “C:\Users\Admin\Downloads\Folder to copy”

**Notes**: If the Destination property doesn’t include the folder name, only the content within the folder is copy to the destination folder.

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [351576757] Select Folder

**Options**

* **Copy Sub Dirs (Checkbox)** - If you choose this you can copy subfolders in your directory.
