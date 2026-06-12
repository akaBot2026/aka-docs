---
id: delete-file-folder
title: "Delete File/Folder"
sidebar_label: "Delete File/Folder"
sidebar_position: 3
description: "Delete File/Folder activity documentation."
displayed_sidebar: activitiesSidebar
---
# Delete File/Folder

RCA.Activities.Office365.DeleteItem

## **Description**

Deletes a file or folder at the specified location in OneDrive or SharePoint.

![delete-file-foler.png](/static/img/delete-file-foler.png)

(\*For mandatory)

## **In the body of the activity**

* **File or folder to delete** - File or folder to delete.

## **Properties**

**Input**

* **File or folder to delete: `InArgument<DriveItem>`*** - File or folder to delete.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window




