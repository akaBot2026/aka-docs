---
id: file-change-trigger
title: "File Change Trigger"
sidebar_label: "File Change Trigger"
sidebar_position: 1
description: "File Change Trigger activity documentation."
displayed_sidebar: activitiesSidebar
---
# File Change Trigger

System.Activities.Core.FileChangeTrigger

## **Description**

This activity allows you to get the change information of a file. This can only be used in monitoring events.

![image-20220505160559-1.png](/img/a03576_image-20220505160559-1.png)

(\* for Mandatory)

## **Properties**

**Event**

* **Change Type (Checkbox)**- The type of change you want to choose. There are options available: Create, Delete, Changed, Renamed, ALl.
* **Notify Filters (Dropdown List)**- A combination of filters that to be watched for changes. Filename is chosen by default.  
  There are options available: FileName, DirectoryName, Attributes, Size, LastWrite, LastAccess, CreationTime, Security.

**File**

* **File Name (String)**- The name of the file you want to watch for changes.  
  E.g: “inputfile.xlsx”
* **Path (String)**\* - The path of the fie to be watched for changes  
  E.g: “D:\inputfile.xlsx”

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [250235209] File Change Trigger

**Options**

* **Include Subdirectories (Checkbox)** - This is used whether you want to include subdirectories of the specified location.
