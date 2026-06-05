---
id: download-file
title: "Download File"
sidebar_label: "Download File"
sidebar_position: 4
description: "Download File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Download File

RCA.Activities.Box.Files.DownloadFile

## **Description**

Downloads a file from Box to a local file path or folder.

![download-file](/static/img/download-file.png)

(\*For mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input**

* **File Id: InArgument<String>*** - The ID of the Box file to download.

* **File Path: InArgument<String>*** - The local file path or folder where the file is saved.

**Options**

* **Overwrite: Boolean** - Specifies whether to overwrite the destination file if it already exists.

* **Version: InArgument<String>** - The Box file version ID to download. If not provided, the current version is downloaded.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window
