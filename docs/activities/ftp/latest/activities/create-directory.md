---
id: create-directory
title: "Create Directory"
sidebar_label: "Create Directory"
sidebar_position: 1
description: "Create Directory activity documentation."
displayed_sidebar: activitiesSidebar
---
# Create Directory

RCA.Activities.FTP.CreateDirectory

## **Description**

This activity allows you to create a folder on FTP server.

![image-20220505152047-1.png](/img/a25e9b_image-20220505152047-1.png)

(\* is mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even an error occurs within the activity. False (default): blocks the process from continuing the execution.

  E.g: True

**Input**

* **Remote Path (String)**- The path of the FTP directory in which to create the new folder.  
  E.g: “/myftpurl.com/wwwroot/myRemoteFolder/”
* **Directory Name (String)**- Name of folder you want to create.  
  E.g: “NewFolderName”

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: “FTP Create Directory”
