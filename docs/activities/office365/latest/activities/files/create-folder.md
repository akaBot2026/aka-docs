---
id: create-folder
title: "Create Folder"
sidebar_label: "Create Folder"
sidebar_position: 2
description: "Create Folder activity documentation."
displayed_sidebar: activitiesSidebar
---
# Create Folder

RCA.Activities.Office365.CreateFolder

## **Description**

Creates a folder at the specified location in OneDrive or SharePoint.

![create-folder.png](/static/img/create-folder.png)

(\*For mandatory)

## **In the body of the activity**

* **Folder name** - The name of the new folder.
* **Destination folder** - The destination folder where to create the new folder.

## **Properties**

**Input**

* **Folder name: `InArgument<String>`*** - The name of the new folder.

* **Destination folder: `InArgument<DriveItem>`** - The destination folder where to create the new folder. If left blank, it will default to OneDrive root folder.

**Options**

* **Account: `InArgument<String>`** - The ID or User Principal Name for the user who owns the OneDrive. This parameter must be set for ApplicationIdAndSecret and ApplicationIdAndCertificate authentication types.

**Output**

* **Reference as: `OutArgument<DriveItem>`** - The name you will use to refer this folder in other activities.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window



