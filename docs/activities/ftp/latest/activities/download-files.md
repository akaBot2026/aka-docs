---
id: download-files
title: "Download Files"
sidebar_label: "Download Files"
sidebar_position: 4
description: "Download Files activity documentation."
displayed_sidebar: activitiesSidebar
---
# Download Files

RCA.Activities.FTP.DownloadFiles

## **Description**

This activity allows you to download a file on FTP server.

![image-20220505152223-1.png](/img/fc347d_image-20220505152223-1.png)

(\* is mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even an error occurs within the activity. False (default): blocks the process from continuing the execution.

  E.g: True

**Input**

* **Remote Path (String)**- The path of the files on the FTP server that are to be downloaded.  
  E.g: “/myftpurl.com/wwwroot/myRemoteFolder/”

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: “FTP Download files”

**Options**

* **Create (Checkbox)**- Check if creating new folder in local machine to save your folder. This is uncheck by default.
* **Include Subfolders (Checkbox)**- Check if you want to download all subfolders. This is uncheck by default.
* **Overwrite (Checkbox)**- Check if overwriting the folders in case of duplicated folder name. This is uncheck by default.

**Output**

* **Local Path (String)** - The local path for the files that are to be downloaded. This field supports only string variables.  
  E.g: “C:/Destinationfolder”
