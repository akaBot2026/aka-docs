---
id: upgrade-3x-to-4x
title: "Upgrade Akabot Center from version 3x to 4x"
sidebar_label: "Upgrade Akabot Center from version 3x to 4x"
sidebar_position: 19
description: "Upgrade Akabot Center from version 3x to 4x documentation."
displayed_sidebar: centerSidebar
---

# Upgrade akaBot Center from version 3x to version 4x

> This guide provides instructions for **upgrading** an existing instance of **akaBot Center from Version 3.x to Version 4.x** using **My SQL** as the database engine. The target Operating System (OS) for this upgrade procedure is **Microsoft Windows**.

**Overall, there are 4 main steps:**

1. Backup database, configuration files, license, workflow files

2. Uninstall Tomcat(8), Java(11)

3. Install akaBot 4x

4. Restore configuration files, license, workflow files

## **0. akaBot 3x**

Before proceeding, you must ensure that akaBot 3.x is already installed following the standard instructions. **[View details](/docs/center/latest/installation/center-3x-mysql-windows.md)**

# **1. Backup MySQL database, configuration files, license, workflow files**

**1.1. Back up database**

The database can be backed up using one of the following two methods:

***1.1.1 Back up using MySQL Workbench***

* **Step 1:** Open MySql Workbench on the AkaBot Center s computer, select**"Local instance MySQL80"**

![1774253010662-602.png](/static/img/5b5a99_1774253010662-602.png)

* **Step 2:** Input password (example: sis@12345). If you have stored your password in vault, please skip this step.

![1774253064566-426.png](/static/img/cf013d_1774253064566-426.png)

* **Step 3:** Navigate to**"Administration"** tab, click **"Data export**" under **Management** section

![1774253185643-359.png](/static/img/3f9099_1774253185643-359.png)

* **Step 4**: Set backup parameters:
  + (1) check aka\_orchestrator schema
  + (2) choose  Dump Structure and Data 
  + (3) check all "Objects to export"
  + (4) check  Export to Self-Contained file 
  + (5) choose your location to save file
  + (6) check  Create dump in a single transaction 

![1774253408374-361.png](/static/img/26bcc1_1774253408374-361.png)

* **Step 5:** You can decide which tables, views to export by clicking on the schema  aka\_orchestrator  then check/uncheck tables/views at the right side. If you would like to export all, please skip this step.

![1774253573828-858.png](/static/img/5536e8_1774253573828-858.png)

* **Step 6**: Click "Export"

![1774253676179-539.png](/static/img/31ff6e_1774253676179-539.png)

You will see the export progress window. If there is no error, the backup file (.sql) will be generated on your chosen directory.

![1774253710722-938.png](/static/img/972fd3_1774253710722-938.png)

![1774253893945-268.png](/static/img/fa903b_1774253893945-268.png)

***1.1.2. Back up using command line***

* **Step 1:** Open Command line, change directory to the MySql base directory (usually C:\Program Files\MySQL\MySQL Server 8.0\bin) by typing into: cd  + baseDirectory

![1774254026988-129.png](/static/img/3725d0_1774254026988-129.png)'

* **Step 2:** Export database with this command: **mysqldump  u root  p --databases aka\_orchestrator > file.sql**
  + ` where file.sql is the file name and location where you would like to save the file. For example: mysqldump  u root  p --databases aka\_orchestrator > d:\aka\_orchestrator.sql

![1774254400000-797.png](/static/img/29c688_1774254400000-797.png)

* **Step 3:** The cmd will prompt you to input password for root user. Please put it (ex: sis@12345), press enter and wait for a while. You will see the aka\_orchestrator.sql file on the chosen directory. To dump only specific tables from a database, name them on the command line following the database name: **mysqldump  u root  p --databases aka\_orchestrator act\_id\_info act\_ru\_job asset > d:\aka\_orchestrator.sql**

**1.2. Configuration files, license, workflow files**

***1.2.1. Copy configuration files from Tomcat 8***

- Open  Program files > Apache Software Foundation > Tomcat 8.5 >  webapps >  ROOT >  WEB-INF >  Classes > Config

- Copy all these configuration files in the picture and paste to a specific directory.

![1774260123196-735.png](/static/img/6a3db0_1774260123196-735.png)

***1.2.2. Copy license from Tomcat 8***

- Open Program files > Apache Software Foundation > Tomcat 8.5 > webapps > ROOT > WEB-INF> Classes

- Copy **"License"** and paste to a specific directory

![1774260028768-432.png](/static/img/241964_1774260028768-432.png)

***1.2.3. Copy workflow files from Tomcat 8***

- Open  Program files > Apache Software Foundation > Tomcat 8.5 > Filestorage > Nugets

- Copy folder **"Nugets**" and paste to a specific directory.

![1774259611766-788.png](/static/img/b936d3_1774259611766-788.png)

# **2. Uninstall Tomcat(8), Java(11)**

**2.1. Uninstall Tomcat (8)**

(1) Open **Settings** and select **Apps**

(2) Choose **Tomcat (8)** and select option **"uninstall"**

![1774256004210-859.png](/static/img/eff4c6_1774256004210-859.png)

**2.2. Uninstall Java (11)**

(1) Open **Settings** and select **Apps**

(2) Choose **Java (8)** and select option **"uninstall"**

![1774256552008-273.png](/static/img/694e2c_1774256552008-273.png)

**3. Install akabot 4x**

Download follow the instruction: [Install akaBot 4x](/docs/center/latest/installation/center-4x-mysql-windows.md)

# **4. Restore configuration files, license, workflow files**

**Step 1:** Access the directory where you stored the configuration, license, and workflow files (of Tomcat 8) from the previous step.

**Step 2:** Copy all of those files

**Step 3**: Paste these files into their respective locations within the **Tomcat 10** directory.