---
id: select-file
title: "Select File"
sidebar_label: "Select File"
sidebar_position: 2
description: "Select File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Select File

RCA.Activities.Core.SelectFile

## **Description**

This activity opens a dialog, allows you to select a file and returns full path of the selected file.

![image-20220505093334-1.jpeg](/img/ed0879_image-20220505093334-1.jpeg)

## **Properties**

**Input**

* **Filter (String)** – Used to specify the type of file you want to select. This filter should contain a description of the filter and followed by a vertical bar (|) and the filter pattern. If you want to select multiple file types, separate them with a semicolon (“;”). Use Asterisk to get all files. The default value is: All files

          E.g: Image files (.bmp, .jpg)|.bmp;.jpg| .Excel files (.xlsx)|.xlsx

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [011594913] Select File

**Output**

* **Selected File (String)** - The full path of the file stored in a string variable.
