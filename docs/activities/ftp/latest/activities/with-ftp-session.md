---
id: with-ftp-session
title: "With FTP Session"
sidebar_label: "With FTP Session"
sidebar_position: 8
description: "With FTP Session activity documentation."
displayed_sidebar: activitiesSidebar
---
# With FTP Session

RCA.Activities.FTP.WithFTPSession

## **Description**

This activity provides a container which connects to an FTP server and performs multiple actions within it. Moreover, this activity helps you to establish the FTP session by specifying the connection details & validating it.

![image-20220505152445-1.png](/img/ef84d5_image-20220505152445-1.png)

(\* is mandatory)

## **In the body of activity**

* **Do** - Drop FTP activities which would be processed.

## **Properties**

**Common**

* **Continue on Error (Boolean)** - Specifies if the automation should continue even when the activity throws an error. This field only supports Boolean values. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.

**Credentials**

* **Password (String) -** It is used to login to the FTP Server.  
  E.g: “P@ssW0rd123”
* **Use Anonymous Login (Checkbox)**- If the FTP server accepts the anonymous login, you may use this option, otherwise, you are unable to login to through anonymous login. This is uncheck by default.  
  E.g: Checked mean Yes
* **Username (String) -** It is used to login to the FTP Server  
  E.g: “UserNameForFTPSite”

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: FTP Container

**Security**

* **Accept All Certificates (Checkbox)** - Check if you want to auto accept all required certificates of FTP Session. This is uncheck by default.  
  E.g: Checked mean no restriction
* **Client Certificate Password**- The password of certificate of your client machine.
* **Client Certificate Path** - The location path of certificate file in your client machine.  
  E.g: “C:\Foldername\CertFileName.pem”
* **FTPS Mode (DropDownlist)**- FTPS mode for your FTP session. Explicit or Implicit
* **SSL Protocols (DropDownlist)**- SSL Protocol of your FTP session. Selections are TLS1.0, TLS1.1, TLS1.2, Default
* **Use SFTP (Checkbox)**- Check if use SFTP, otherwise, leave it unchecked. This is uncheck by default.

**Server**

* **Host** - IP or address of FTP server  
  E.g: “ftp.myhost.com” or “12.34.56.78”
* **Port** - The port of the FTP server you want to connect to  
  E.g : 21
