---
id: append-line
title: "Append Line"
sidebar_label: "Append Line"
sidebar_position: 1
description: "Append Line activity documentation."
displayed_sidebar: activitiesSidebar
---
# Append Line

RCA.Core.Activities.AppendLine

## **Description**

This activity allows you to append the specified string to a file, creating the file if it does not already exist.

![image-20220513103343-1.png](/img/3a0ad0_image-20220513103343-1.png)

(\* for Mandatory)

## **In the body of activity**

* **File name (String)**\* - The path of the file to append the line to, if the file is not created, create a new file and write line content to it. If the path is not full, the file will be searched in the project folder.  
  E.g: "C:\Users\Admin\Desktop\inputfile.xlsx" or “inputfile.xlsx” (for file that created in project folder)
* **Text (String)**\* – The text to be appended to the file. You can create variable for it.  
  E.g: “Appended text”

## **Properties**

**File**

* **Encoding (String)**- The encoding type to be used. If no encoding type is specified, the activity will search for the file's Byte Order Marks to detect the encoding. If no Byte Order Marks are detected, the UTF-8 encoding is selected by default.
* **File Name (String)**\* - The path of the file to append the line to, if the file is not created, create a new file and write line content to it. If the path is not full, the file will be searched in the project folder.  
  E.g: "C:\Users\Admin\Desktop\inputfile.xlsx" or “inputfile.xlsx”

**Input**

* **Text (String)**\* - The text to be appended to the file. You can create variable for it.  
  E.g: “Appended text”

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [351576757] Append Line
