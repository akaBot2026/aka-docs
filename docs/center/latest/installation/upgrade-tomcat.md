---
id: upgrade-tomcat
title: "How to Upgrade Apache Tomcat 10"
sidebar_label: "How to Upgrade Apache Tomcat 10"
sidebar_position: 21
description: "How to Upgrade Apache Tomcat 10 documentation."
displayed_sidebar: centerSidebar
---

# How to Upgrade Apache Tomcat 10

:   Upgrading Tomcat from 10 to the latest 10.1.x version (e.g., 10.1.54) is necessary to ensure system security, stability, and compatibility. Newer releases include critical security patches, bug fixes, performance improvements, and better support for modern Java versions and Jakarta EE standards, thereby reducing operational risks and improving system reliability.

### **Step 1: Stop Tomcat 10 & Back up Data**

![1776754074431-378.png](/img/9be634_1776754074431-378.png)

+ Open C:\Program Files\Apache Software Foundation\Tomcat 10.1\bin\Tomcat10w.exe

**+ Take a screenshot of the configuration before performing the backup.**

![1776754130100-744.png](/img/7198ba_1776754130100-744.png)

![1776754151093-356.png](/img/744530_1776754151093-356.png)

**+ Save screenshots for later configuration.**

**+ Copy your current Tomcat folder to another location to create a backup before starting the upgrade.**

![1776754316468-132.png](/img/1deebc_1776754316468-132.png)

Example: D:\backup\Tomcat 10.1

+ In Apps & features, search for Tomcat, select the existing version, and click **Uninstall.**

![1776754372540-847.png](/img/f24cde_1776754372540-847.png)

### **Step 2: Download and install Tomcat 10.1.54**

- Download Tomcat 10.1.54 (latest version 10.1.54) from the following link

[https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.54/bin/apache-tomcat-10.1.54.exe](https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.54/bin/apache-tomcat-10.1.54.exe)

- Install Tomcat 10.1.54, selecting the options as shown below:

![1776754521478-550.png](/img/e4557d_1776754521478-550.png)

### **Step 3: Configure Windows Service Name**

**-** In the Apache Tomcat Setup – Configuration Options screen:

* Locate the **Windows Service Name** field
* Enter a new service name for the Tomcat 10.1.54 instance: Tomcat10

![1776754787926-339.png](/img/808cb0_1776754787926-339.png)

### **Step 4: Configure Java Version (JDK 17)**

In case the server has multiple versions of JRE/JDK installed, make sure to select the correct JRE/JDK 17 (Java 17).

If only one version is installed, you can **SKIP** this step, as the installer will automatically detect the path of the installed JRE/JDK.

![1776754842694-999.png](/img/c3cd9e_1776754842694-999.png)

### **Step 5: Set Destination Folder**

In the **Destination Folder field**, update the folder name to a new value.

![1776754901241-511.png](/img/407e5e_1776754901241-511.png)

### **Step 6:** **Uncheck Run Apache Tomcat and Show Read Me**

At the **Completing Apache Tomcat Setup**step, **uncheck** Run Apache Tomcatand Show Read Me

![1776755733752-153.png](/img/62d447_1776755733752-153.png)

### **Step 7:  Copy Required Data to New Tomcat**

Navigate to the installation directory of the old Tomcat instance:

* Locate the following folders:
  + filestorage
  + webapps
  + indexes
* Right-click and select Copy, then paste them into the corresponding directory of the new Tomcat 10.1.54

![1776756760656-480.png](/img/40a919_1776756760656-480.png)

- Example installation paths for Tomcat 10.1.54:

+ HOME\_TOMCAT\_10.1.54: C:\Program Files\Apache Software Foundation\Tomcat 10.1.54

### **Step 8: Configure Tomcat 10.1.54**

Open HOME\_TOMCAT\_10.1.54\BACKUP\_TOMCAT\_10\bin\Tomcat10w.exe

+ Configure the new Tomcat instance using the saved screenshots from Step 1 as reference.

**+ Tab Logging**

![1776756984077-742.png](/img/cc3088_1776756984077-742.png)

**+ Tab Java**

![1776757139240-119.png](/img/cfac52_1776757139240-119.png)

+ Use a file comparison tool (e.g., MobaDiff, WinMerge) to compare configuration files between the old and new Tomcat instances.

+ Ensure key configurations (e.g., port values in Connector) are consistent between the old and new files, especially the highlighted sections.

![1776757773722-234.png](/img/65e305_1776757773722-234.png)

![1776757794030-167.png](/img/dad40a_1776757794030-167.png)

### **Step 9: Start Tomcat 10**

![1776757846066-507.png](/img/094c0f_1776757846066-507.png)

### **Step 10: Verify the result on Tomcat 10.1.54**