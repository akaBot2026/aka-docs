---
id: move-directory
title: "Move Directory"
sidebar_label: "Move Directory"
sidebar_position: 7
description: "Move Directory activity documentation."
displayed_sidebar: activitiesSidebar
---
# Move Directory

RCA.Activities.Core.MoveDirectory

## **Description**

This activity allows you to move a folder to another location.

![image-20220513105013-1.png](/img/95d686_image-20220513105013-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. The default value is False - blocks the process from continuing the execution.

**Directory**

* **Destination (String)**\* - The destination where you want the folder to move to.  
  E.g : “D:\inputfolder”
* **Path (String)\***- The path of the folder that you want to move.  
  E.g: “C:\Users\Admin\inputfolder”

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [997394815] Move Directory
* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
