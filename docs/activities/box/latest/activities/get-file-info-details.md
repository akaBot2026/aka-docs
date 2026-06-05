---
id: get-file-info-details
title: "Get File Info Details"
sidebar_label: "Get File Info Details"
sidebar_position: 5
description: "Get File Info Details activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get File Info Details

RCA.Activities.Box.Files.GetFileInfoDetails

## **Description**

Retrieves detailed information for a Box file.

![get-file-info](/static/img/get-file-info.png)

(\*For mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input**

* **File Id: `InArgument<String>`*** - The ID of the Box file to retrieve information for.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window

**Output**

* **Result: `OutArgument<BoxFile>`** - The detailed Box file information.
