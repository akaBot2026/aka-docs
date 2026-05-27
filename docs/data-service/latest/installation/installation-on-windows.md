---
id: installation-on-windows
title: "Installation on Windows"
sidebar_label: "Installation on Windows"
sidebar_position: 3
description: "Installation on Windows documentation."
displayed_sidebar: dataServiceSidebar
---
# Data Service Installation on Windows

## **1. Introduction**

This document will guide you on how to install Data Service on Windows server.

## **2. System Requirements**

* Windows Server 2012 or later
* Java Development Kit 11.x.x
* MSSQL v15.x.x.x or later
* 8GB RAM or higher
* 100GB SSD (prefer)/HDD.
* 4 CPU or more

## **3. File System**

Download the latest release version of DataService from the [Release Notes](/docs/data-service/latest/release-notes.md).

![1775807383276-429.png](/static/img/00d47e_1775807383276-429.png)

Download NSSM - the Non-Sucking Service Manager in this link: [https://nssm.cc/download](https://nssm.cc/download). It’s required to run DataService as a Windows service. Whenever your system is restarted, the NSSM helps us to run DataService again without manual logging in to start it.

Extract files to: C:\akaBot\DataService\nssm\win64\nssm.exe

Make sure %JAVA\_HOME% is set to the path of the correct JDK.

Download DataService files and place to folder structure is as follows:

![1775807402060-288.png](/static/img/72521b_1775807402060-288.png)

## **4. Database Setup**

### **4.1. MySQL**

N/A

### **4.2. MS SQL Server**

To run DataService on top of Microsoft SQL Server, system administrators need to manually create these schemas on your database: *akabot\_dataservice, akabot\_userdata.*

Then, we need to edit file *C:\akaBot\DataService\application.yml* as the following sample.

* Change the properties to match with your database system: *localhost, port, username, password.*
* *base-url* is the public address of DataService. Can be IP address or domain name.
* *center.domain* is the public address of akaBot Center.

![1775807526677-252.png](/static/img/92f8f4_1775807526677-252.png)

![1775807561050-696.png](/static/img/a823f9_1775807561050-696.png)

## **5. Installation Process**

Run the installation script with administrative privileges: *win-install.bat*

After running the above commands, the script will register a service called “akaBotDataSvc” to Windows system.

To check if the installation is successful, visit this URL in your browser: http://localhost:8084/#/login.

Enter the credential: admin/admin. You should see the page like this.

![1775807845355-721.png](/static/img/1f83d1_1775807845355-721.png)

## **6. Troubleshooting**

* The webservice store log files in this directory: C:\akaBot\Dataservice\logs\\*
* Use Task Manager to check if the webservice is running or stopped

![1775807991336-321.png](/static/img/a07b05_1775807991336-321.png)
