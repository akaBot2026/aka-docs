---
id: move-item
title: "Move File/Folder"
sidebar_label: "Move File/Folder"
sidebar_position: 8
description: "Move File/Folder activity documentation."
displayed_sidebar: activitiesSidebar
---
# Move File/Folder

RCA.Activities.Office365.MoveItem

## **Description**

Moves a file or folder from one parent directory to another.

![move-file-folder.png](/static/img/move-file-folder.png)

(\*For mandatory)

## **In the body of the activity**

* **File or folder to move** - The file or folder to move.
* **Destination folder** - The destination folder where to move the specified file or folder.

## **Properties**

**Input**

* **File or folder to move: `InArgument<DriveItem>`*** - The file or folder to move.

* **Destination folder: `InArgument<DriveItem>`** - The destination folder where to move the specified file or folder. If left blank, it will default to OneDrive root folder.

* **New name (optional): `InArgument<String>`** - An optional new name for the file or folder after it is moved.

**Options**

* **Account: `InArgument<String>`** - The ID or User Principal Name for the user who owns the OneDrive. This parameter must be set for ApplicationIdAndSecret and ApplicationIdAndCertificate authentication types.

**Output**

* **Reference as: `OutArgument<DriveItem>`** - The name you will use to refer the moved file or folder in other activities.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window



