---
id: enumerate-files
title: "Enumerate Files"
sidebar_label: "Enumerate Files"
sidebar_position: 5
description: "Enumerate Files activity documentation."
displayed_sidebar: activitiesSidebar
---
# Enumerate Files

RCA.Activities.FTP.EnumerateFiles

## **Description**

This activity allows you to get the list of files found at a specified FTP server path and save it under a DataTable variable.

![image-20220505152257-1.png](/img/e04ad9_image-20220505152257-1.png)

(\* is mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even an error occurs within the activity. False (default): blocks the process from continuing the execution.

  E.g: True

**Input**

* **Remote Path (String)**\* - The path of the directory on the FTP server whose files are to be enumerated.  
  E.g: “/root/TargetFolder/”

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: “FTP Enumerate Files”

**Options**

* **Include Subfolders (Checkbox)** - Check if you want to enumerate all subfolders. This is uncheck by default.

**Output**

* **File (IEnumerable)** - IEnumerable variable to save the output.
