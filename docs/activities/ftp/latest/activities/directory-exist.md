---
id: directory-exist
title: "Directory Exists"
sidebar_label: "Directory Exists"
sidebar_position: 3
description: "Directory Exists activity documentation."
displayed_sidebar: activitiesSidebar
---
# Directory Exists

RCA.Activities.FTP.DirectoryExists

## **Description**

This activity allows you to check whether the directory has been existed in FTP server or not.

![image-20220505152153-1.png](/img/5f4c3a_image-20220505152153-1.png)

(\* is mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even an error occurs within the activity. False (default): blocks the process from continuing the execution.

  E.g: True

**Input**

* **Remote Path (String)**\* - The path of the FTP directory in which to check whether the indicated directory exists.  
  E.g: “/myftpurl.com/wwwroot/myRemoteFolder/”

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: “Directory Exist”

**Output**

* **Exist (Boolean)** - Variable contains the checking result (yes/no)
