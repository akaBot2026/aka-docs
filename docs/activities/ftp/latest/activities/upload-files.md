---
id: upload-files
title: "Upload Files"
sidebar_label: "Upload Files"
sidebar_position: 7
description: "Upload Files activity documentation."
displayed_sidebar: activitiesSidebar
---
# Upload Files

RCA.Activities.FTP.UploadFiles

## **Description**

This activity allows you to upload multiple files to FTP server

![image-20220505152410-1.png](/img/9bd378_image-20220505152410-1.png)

(\* is mandatory)

## **Properties**

**Common**

* **Continue on Error (Boolean)**- Specifies if the automation should continue even when the activity throws an error. This field only supports Boolean values. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.  
  E.g: True

**Input**

* **Local Path (String)\***- The local path of the files that are to be uploaded. This field supports only strings and string variables.  
  E.g: “C:\SourceFolder\”

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Upload File FTP

**Options**

* **Create (Checkbox)** - Check if creating new folder in the FTP server to save your folder. This is uncheck by default.
* **Include Subfolders (Checkbox)**- Check if you want to upload all subfolders. This is uncheck by default.
* **Overwrite (Checkbox)** - Check if overwriting the folders in case of duplicated folder name. This is uncheck by default

**Output**

* **Remote Path (String)\***- The path on the FTP server where the file is to be uploaded.  
  E.g: “/myftpurl.com/wwwroot/myRemoteFolder/”
