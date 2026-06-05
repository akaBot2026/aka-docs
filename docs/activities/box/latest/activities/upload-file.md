---
id: upload-file
title: "Upload File"
sidebar_label: "Upload File"
sidebar_position: 8
description: "Upload File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Upload File

RCA.Activities.Box.Files.UploadFile

## **Description**

Uploads a local file to a Box folder.

![upload-file](/static/img/upload-file.png)

(\*For mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input**

* **File Path: `InArgument<String>`*** - The local path of the file to upload.
* 
* * **Folder Id: `InArgument<String>`*** - The ID of the destination Box folder.

**Options**

* **File Name: `InArgument<String>`** - The file name to use in Box. If not provided, the local file name is used.

* **Upload Mode: UploadMode** - The upload mode to use. Available values: Auto, Single, Chunked.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window

**Output**

* **File Id: `OutArgument<String>`** - The ID of the uploaded Box file.

* **Result: `OutArgument<BoxFile>`** - The uploaded Box file object.
