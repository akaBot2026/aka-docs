---
id: write-text-file
title: "Write Text File"
sidebar_label: "Write Text File"
sidebar_position: 12
description: "Write Text File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Write Text File

RCA. Core.Activities.WriteTextFile

## **Description**

This activity allows you to write the specified text into a file. If the file already exists, the pre-existing text is overwritten. If the file does not exist, it is created.

![image-20220513111351-1.png](/img/2fbe16_image-20220513111351-1.png)

(\* for Mandatory)

## **In the body of activity**

* **File name (String)\***-The path of the file. If the path is not full, the file is searched in the project folder.  
  E.g: "C:\Users\Admin\Desktop\inputfile.xlsx" or “inputfile.xlsx”(for file that created in project folder)
* **Text (String)\***-  The text to be written into the file. Supports both Strings and String variables.  
  E.g: “input text to the file”

## **Properties**

**File**

* **Encoding (String)**- The encoding type to be used. If no encoding type is specified, the activity will search for the file's Byte Order Marks to detect the encoding. If no Byte Order Marks are detected, the UTF-8 encoding is selected by default.
* **File Name (String)**\* - The path of the file. Write [Input] text to the file specified in [File Name]. If file don’t exists, will create file [FileName]. If file have value, Overwrite [input] text to this file [File Name].

**Input**

* **Text (String)** - The text to be added to the file. Support both strings and string variable.  
  E.g: “input text to the file”

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [586182511] Write Text File
