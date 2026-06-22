---
id: download-file
title: "Download File"
sidebar_label: "Download File"
sidebar_position: 4
description: "Download File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Download File

RCA.Activities.Office365.DownloadFile

## **Description**

Downloads a file from OneDrive or SharePoint.

![down-file.png](/static/img/down-file.png)

(\*For mandatory)

## **In the body of the activity**

* **File to download** - The file to download.
* **Download location** - The local path to which the file will be downloaded.

## **Properties**

**Input**

* **Download as file: `InArgument<String>`*** - The local path to which the file will be downloaded.

* **File to download: `InArgument<DriveItem>`*** - The file to download.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window

