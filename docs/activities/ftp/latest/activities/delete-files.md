# Delete - akaBot Docs

RCA.Activities.FTP.Delete

## **Description**

This activity allows you to delete a folder on FTP server.

![image-20220505152123-1.png](/img/bf476f_image-20220505152123-1.png)

(\* is mandatory)

## **Properties**

**Common**

* **Continue on Error (Boolean)**- Specifies if the automation should continue even when the activity throws an error. This field only supports Boolean values.True: allows the rest of the process to continue the execution even an error occurs within the activity. False (default): blocks the process from continuing the execution.

          E.g: True

**Input**

* **Remote Path (String)\***- Folder path on FTP server which you want to delete.  
  E.g: “/myftpurl.com/wwwroot/myRemoteFolder/”

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Delete Files

Table of Content

* [Description](#HDescription)
* [Properties](#HProperties)