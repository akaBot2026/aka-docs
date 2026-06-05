---
id: copy-file
title: "Copy File"
sidebar_label: "Copy File"
sidebar_position: 2
description: "Copy File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Copy File

RCA.Activities.Box.Files.CopyFile

## **Description**

Copies a Box file to another folder.

![copy-file](/static/img/copy-file.png)

(\*For mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input**

* **File Id: InArgument<String>*** - The ID of the Box file to copy.

* **Folder Id: InArgument<String>*** - The ID of the destination Box folder.

**Options**

* **File Name: InArgument<String>** - The new file name for the copied file. If not provided, Box keeps the original name.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Copy File

**Output**

* **Result: OutArgument<BoxFile>** - The copied Box file object.
