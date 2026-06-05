---
id: get-file-lock-info
title: "Get File Lock Info"
sidebar_label: "Get File Lock Info"
sidebar_position: 6
description: "Get File Lock Info activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get File Lock Info

RCA.Activities.Box.Files.GetFileLockInfo

## **Description**

Retrieves lock information for a Box file.

![get-file-lock](/static/img/get-file-lock.png)

(\*For mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input**

* **File Id: `InArgument<String>`*** - The ID of the Box file to retrieve lock information for.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window

**Output**

* **Result: `OutArgument<BoxFileLock>`** - The Box file lock information.
