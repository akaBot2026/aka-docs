---
id: move-file
title: "Move File"
sidebar_label: "Move File"
sidebar_position: 8
description: "Move File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Move File

RCA.Activities.Core.MoveFile

## **Description**

This activity allows you to move a file from a specified location to another.

![image-20220513105249-1.png](/img/62cc32_image-20220513105249-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. The default value is False

**From**

* **Path (String)**\* - The path of the file or directory to be moved.  
  E.g: “C:\Users\Admin\Downloads”

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [997394815] Move File
* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.

**Options**

* **Overwrite (Checkbox)** - When checked, overwrites the files in the destination folder with the file that is to be copied.

**To**

* **Destination (String)**\* - The destination path where the file is to be moved.  
  E.g: “C:\Users\Admin\Downloads”
