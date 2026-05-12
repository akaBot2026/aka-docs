---
id: read-text-file
title: "Read Text File"
sidebar_label: "Read Text File"
sidebar_position: 10
description: "Read Text File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Read Text File

RCA.Activities.Core.ReadTextFile

## **Description**

This activity allows you to read all characters from a specified file and store it in a String variable.

![image-20220513110137-1.png](/img/2373a1_image-20220513110137-1.png)

(\* for Mandatory)

## **In the body of activity**

* **File name (String)**\* - The path of the file. If the path is not full, the file is created in the project folder.  
  E.g: "C:\Users\Admin\Desktop\inputfile.xlsx" or “inputfile.xlsx”

## **Properties**

**File**

* **Encoding (String)**- The encoding type to be used. If no encoding type is specified, the activity will search for the file's Byte Order Marks to detect the encoding. If no Byte Order Marks are detected, the UTF-8 encoding is selected by default.
* **File Name (String)\***- The path of the file. If the path is not full, the file is read in the project folder.  
  E.g: "C:\Users\Admin\Desktop\inputfile.xlsx" or “inputfile.xlsx” (for file that created in project folder)

**Misc**

* **Public (Checkbox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [674340923] Read Text File

**Output**

* **Content (String)**- The extracted text from the file stored in a string variable.
