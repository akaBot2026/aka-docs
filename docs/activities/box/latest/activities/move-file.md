---
id: move-file
title: "Move File"
sidebar_label: "Move File"
sidebar_position: 7
description: "Move File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Move File

RCA.Activities.Box.Files.MoveFile

## **Description**

Moves a Box file to another folder.

![move-file](/static/img/move-file.png)

(\*For mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input**

* **File Id: InArgument<String>*** - The ID of the Box file to move.

* **Folder Id: InArgument<String>*** - The ID of the destination Box folder.

**Options**

* **File Name: InArgument<String>** - The new file name after moving the file. If not provided, Box keeps the original name.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window

**Output**

* **Result: OutArgument<BoxFile>** - The moved Box file object.
