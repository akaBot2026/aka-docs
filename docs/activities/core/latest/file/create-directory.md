---
id: create-directory
title: "Create Directory"
sidebar_label: "Create Directory"
sidebar_position: 4
description: "Create Directory activity documentation."
displayed_sidebar: activitiesSidebar
---
# Create Directory

RCA.Activities.Core.CreateDirectory

## **Description**

This activity allows you to create a folder in a specific location.

![image-20220513103756-1.png](/img/300467_image-20220513103756-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**- This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False.  
  ・True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  ・False (default) - blocks the process from continuing the execution. The default value is False.

**Directory**

* **Path (String)**\* - The full path of directory to be created.  
  E.g: “C:\Users\Admin\CreatedFolder”

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [877432396] Create Directory
* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
