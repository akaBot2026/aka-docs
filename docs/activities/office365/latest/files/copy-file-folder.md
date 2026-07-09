---
id: copy-file-folder
title: "Copy File/Folder"
sidebar_label: "Copy File/Folder"
sidebar_position: 1
description: "Copy File/Folder activity documentation."
displayed_sidebar: activitiesSidebar
---
# Copy File/Folder

RCA.Activities.Office365.CopyItem

## **Description**

Copies a file or folder from one parent folder to another.

![copy-file-folder.png](/static/img/copy-file-folder.png)

(\*For mandatory)

## **In the body of the activity**

* **File or folder to copy** - The file or folder to copy.
* **Destination folder** - The destination folder where to copy the specified file or folder.

## **Properties**

**Input**

* **File or folder to copy: `InArgument<DriveItem>`*** - The file or folder to copy.

* **Destination folder: `InArgument<DriveItem>`** - The destination folder where to copy the specified file or folder. If left blank, it will default to OneDrive root folder.

* **New name (optional): `InArgument<String>`** - The name of this item after it is copied.

**Options**

* **Account: `InArgument<String>`** - The ID or User Principal Name for the user who owns the OneDrive. This parameter must be set for ApplicationIdAndSecret and ApplicationIdAndCertificate authenticatio types.

**Output**

* **Reference as: `OutArgument<DriveItem>`** - The name you will use to refer the copied file or folder in other activities.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window



