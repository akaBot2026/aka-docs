---
id: file-exist
title: "File Exists"
sidebar_label: "File Exists"
sidebar_position: 6
description: "File Exists activity documentation."
displayed_sidebar: activitiesSidebar
---
# File Exists

RCA.Activities.FTP.FileExists

## **Description**

* This activity allows you to check whether the file has been existed in FTP server or not.

![image-20220505152334-1.png](/img/382075_image-20220505152334-1.png)

(\* is mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even an error occurs within the activity. False (default): blocks the process from continuing the execution.

  E.g: True

**Input**

* **Remote Path (String)\***- The path of the file on FTP server which you want to check whether the indicated file exists.  
  E.g: “/root/Foldername/FileThatNeedcheck.txt”

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: “FTP File Exist”

**Output**

* **Exist (Boolean)** - Variable contains the checking result (yes/no)
