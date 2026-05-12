---
id: select-folder
title: "Select Folder"
sidebar_label: "Select Folder"
sidebar_position: 3
description: "Select Folder activity documentation."
displayed_sidebar: activitiesSidebar
---
# Select Folder

RCA.Activities.Core.SelectFolder

## **Description**

This activity opens a dialog, allows you to select a folder and returns full path of the selected folder.

![image-20220505093358-1.jpeg](/img/e2ca08_image-20220505093358-1.jpeg)

## **Properties**

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [351576757] Select Folder

**Output**

* **Selected Folder (String)** – Mandatory. The full path of the folder stored in a string variable.
