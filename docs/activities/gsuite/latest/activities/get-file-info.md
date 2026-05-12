---
id: get-file-info
title: "Get File Info"
sidebar_label: "Get File Info"
sidebar_position: 9
description: "Get File Info activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get File Info

RCA.Activities.GSuite.GetFileInfo

## **Description**

This activity allows you to return information about a file, including its name, size, and type.

![image-20220505155834-1.png](/img/7c4f84_image-20220505155834-1.png)

(\*For mandatory)

## **In the body of activity**

* **ID of file whose info to get (String)**\* - The ID of the file that you want to get information from. String variables and String are supported.

## **Properties**

**Input**

* **FileID (String)**\* - The ID of the file that you want to get information from. This property supports String variables and string formatted values

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **E.g**: [913123123] Get File Info

**Output**

* **Result (File)** - The details of the file. This property supports Google 'File' variables
