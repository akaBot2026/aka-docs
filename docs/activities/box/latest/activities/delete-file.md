---
id: delete-file
title: "Delete File"
sidebar_label: "Delete File"
sidebar_position: 3
description: "Delete File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Delete File

RCA.Activities.Box.Files.DeleteFile

## **Description**

Deletes a file from Box.

![delete-file](/static/img/delete-file.png)

(\*For mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input**

* **File Id: `InArgument<String>`*** - The ID of the Box file to delete.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window

**Output**

* **Is Successful: `OutArgument<Boolean>`** - True if the file was deleted successfully; otherwise, False.
