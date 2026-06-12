---
id: find-files-and-folders
title: "Find Files And Folders"
sidebar_label: "Find Files And Folders"
sidebar_position: 6
description: "Find Files And Folders activity documentation."
displayed_sidebar: activitiesSidebar
---
# Find Files And Folders

RCA.Activities.Office365.FindFilesAndFolders

## **Description**

Searches for files or folders in OneDrive or SharePoint whose filename, metadata, or file content contain a given search query. Matching results are returned as an array of DriveItems.

![find-files-and-folders.png](/static/img/find-files-and-folders.png)

(\*For mandatory)

## **In the body of the activity**

* **Query** - Defines the free text search phrase for the files or folders to retrieve.

## **Properties**

**Input**

* **Query: `InArgument<String>`** - Defines the free text search phrase for the files or folders to retrieve. If left blank, the root folder contents are returned.

* **Subfolder: `InArgument<String>`** - Optional path of a subfolder in which to search, for example SomeFolder or SomeFolder/Another. If left blank, the root folder is searched.

**Sharepoint**

* **Drive Name: `InArgument<String>`** - The name of the drive within OneDrive or SharePoint searched for the indicated files or folders. If this drive exists within SharePoint, Site Url must be specified.

* **Site Url: `InArgument<String>`** - The URL of the SharePoint site searched for the indicated files or folders.

**Options**

* **Account: `InArgument<String>`** - The ID or User Principal Name for the user who owns the OneDrive. This parameter must be set for ApplicationIdAndSecret and ApplicationIdAndCertificate authentication types.

**Output**

* **First: `OutArgument<DriveItem>`** - The first file or folder matching the specified query.

* **Results: `OutArgument<DriveItem[]>`** - All files and folders matching the query returned as an array of DriveItems.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window


