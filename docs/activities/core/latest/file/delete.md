---
id: delete
title: "Delete"
sidebar_label: "Delete"
sidebar_position: 5
description: "Delete activity documentation."
displayed_sidebar: activitiesSidebar
---
# Delete

RCA.Activities.Core.Delete

## **Description**

This activity allows you to delete the file or folder in the specified location. If a folder that contains multiple files or folders is specified, they are all deleted.

![image-20220513104159-1.png](/img/5f00c6_image-20220513104159-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**- This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.

**From**

* **Path (String)**\* - The path of the file or directory to be permanently deleted.  
  E.g: "C:\Users\Admin\Downloads\2.0.4.0\Deletedfolder”

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [552809150] Delete
