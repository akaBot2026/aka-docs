---
id: find-file-folder
title: "Find File Folder"
sidebar_label: "Find File Folder"
sidebar_position: 8
description: "Find File Folder activity documentation."
displayed_sidebar: activitiesSidebar
---
# Find File Folder

RCA.Activities.GSuite.FindFileFolder

## **Description**

This activity allows you to look for file or folder located on Google Drive. Then return file information including: name, size, and ID.

![image-20220505155537-1.png](/img/af53b1_image-20220505155537-1.png)

(\*For mandatory)

## **In the body of activity**

* **Search for object (String)**\* - Object could be name, size or ID. String variables and String are supported.  
  E.g: "name = '{0} cannot be null.'"

## **Properties**

**Input**

* **MaxResults (Int32)** - Specifies the maximum number of files that you want to return. String variables and String are supported. Default: 50

  E.g: 50
* **SearchExpression (String)** - Specifies the maximum number of files that you want to return. String variables and String are supported.

  E.g: "name = '{0} cannot be null.'"

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [2144546456] Find File Folder

**Output**

* **FeelingLucky (String)** - The File ID of the first result. This property supports String variables
* **Result (File)** - The files that match your search results. This property supports Google Files array variables.
