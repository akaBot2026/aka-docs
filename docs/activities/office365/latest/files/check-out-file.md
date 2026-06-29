---
id: check-out-file
title: "Check Out File"
sidebar_label: "Check Out File"
sidebar_position: 11
description: "Check Out File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Check Out File

RCA.Activities.Office365.CheckOutFile

## **Description**

Check out a document to prevent others from editing it, and prevent your changes from being visible until the document is checked in.

![check-out-file.png](/static/img/check-out-file.png)

(\*For mandatory)

## **In the body of the activity**

* **File To Check Out** - File you want to check out.
* **ListItem To Check Out** - List item you want to check out.

## **Properties**

**Input**

* **File To Check Out: `InArgument<DriveItem>`** - File you want to check out. You can use the Get File/Folder or Find Files And Folders activity to get the file.

* **ListItem To Check Out: `InArgument<Office365SharepointListItem>`** - List item you want to check out. You can use the For Each List Item activity to get the ListItem.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window

