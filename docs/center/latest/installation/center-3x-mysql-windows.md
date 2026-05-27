---
id: center-3x-mysql-windows
title: "Install Akabot Center 3x and MySQL on Microsoft Windows"
sidebar_label: "Center 3x and MySQL on Microsoft Windows"
sidebar_position: 4
description: "Install Akabot Center 3x and MySQL on Microsoft Windows documentation."
displayed_sidebar: centerSidebar
---
# Install Akabot Center 3x and MySQL on Microsoft Windows

> This guide provides instructions to installing a single instance of **akaBot Center version: 3.x, 2.x, 1.x** with **MySQL** as the database engine. The target Operating System (OS) in this guideline is **Microsoft Windows**.

## **Guide video**

**[Install Akabot Center 3x and MySQL on Microsoft Windows (2026) - YouTube](https://www.youtube.com/watch?v=IBwA0TiYIwE)**

## **1. Prerequisites**

**1.1. Hardware and OS Requirements**

|  |  |
| --- | --- |
| **Configuration** | **Requirements** |
| Hardware | RAM: 32GB or higher <br/> Core: 8 CPU or higher <br/>  SSD: 512 GB |
| Operating System | Windows 10, 11, Server 2012 R2/2016/2019 |

**1.2. Software Packages**

The installation must be performed using an account with Administrator (root) privileges on the target machine.  
You need to prepare the installation package according to the following list.

**Note:**  
- If the computer where you're installing Center does not have an internet connection, please download the installation package externally and copy it to the machine.  
- To avoid errors during installation with command line execution, please use a dedicated folder for akaBot Center installation and name the installation package directory without any spaces. For example: C:\akaBot

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **#** | **Name** | **File Name** | **Version** | **Description** | **Download Link** |
| 1 | akaBot Center | akaBot-center-3.x.x.x.war | Newest version | akaBot Center installation package | akaBot provides through email after the customer makes a purchase. |
| 2 | Java Developer Kit | openlogic-openjdk-11.0.20 | 11.0.20 | Open logic JDK 11.0.20 | **[Download](https://builds.openlogic.com/downloadJDK/openlogic-openjdk/11.0.20+8/openlogic-openjdk-11.0.20+8-windows-x64.msi)** |
| 3 | Apache tomcat | apache-tomcat- 8.5.89.exe | 8.5.59 | Web server Apache Tomcat | **[Download](https://archive.apache.org/dist/tomcat/tomcat-8/v8.5.89/bin/apache-tomcat-8.5.89.exe)** |
| 4 | ActiveMQ | apache-activemq- 5.15.1-bin.zip | 5.15.1 | ActiveMQ for Queue functionality in akaBot Center | **[Download](https://archive.apache.org/dist/activemq/5.15.1/apache-activemq-5.15.1-bin.zip)** |
| 5 | MySQL | Windows (x86, 32-bit), MSI Installer | 8.0.45 | The database engine of akaBot Center | Read **Section 3.1**for more details |

## **2. Java JDK 11 Installation**

Run the installer -**openlogic-openjdk-11.0.20** you have downloaded. After that, click **"Next"** to proceed.

![1693904663056-588.png](/static/img/ec5495_1693904663056-588.png)

![1772523074597-686.png](/static/img/e6cae6_1772523074597-686.png)

* After Installation is complete, you will see the Complete Notification below. Simply click **Finish**. You have successfully installed JDK.

![1693904326967-726.png](/static/img/a31a17_1693904326967-726.png)

**Note**: Make sure that **JAVA\_HOME** presents in your environment variables by typing command **echo %JAVA\_HOME%**, the output should be a path that point to jdk 11 ex: **C:\Program Files\OpenLogic\jdk-11.0.20.8**

## **3. MySQL installation**

### **3.1. Install MySQL**

**Step 1**- Kindly download [**MySQL 8.0**](https://dev.mysql.com/downloads/installer/)

![1772437408190-866.png](/static/img/dd5252_1772437408190-866.png)

**Step 2**- Run the installer

* Select **"Custom"** option and click **"Next"**

![1772437719601-511.png](/static/img/310c0d_1772437719601-511.png)

* To run akaBot Center, you will need MySQL Server and MySQL Workbench.
* Under:  
  + **MySQL Servers > MySQL Server**, choose **the newest** for **MySQL Server.**  
  + **Application > MySQL Workbench**, choose **the newest** version for **MySQL Workbench**

![Screenshot_1.png](/static/img/caa6b7_screenshot_1.png)

![MY SQL 2.png](/static/img/e9117a_screenshot_2.png)

* Click button **"Next"**

![MY SQL3.png](/static/img/f54636_screenshot_3.png)

* After that, kindly click "**Execute"** and hit **"Next"**

![MY SQL 4.png](/static/img/f01cdb_screenshot_4.png)

* After products are successfully installed, click **"Next** " to continue process

![1772441172714-108.png](/static/img/43ee17_1772441172714-108.png)

* When you at the **Accounts and Roles** page, it is recommended you set it to the default password **sis@12345** to avoid having to update the config file later. Click **"Next"**

![1772439437071-858.png](/static/img/35d17a_1772439437071-858.png)

* Click **"Execute"** and wait till everything is finished. Click **Finish.**

![1772439474719-293.png](/static/img/8f7e23_1772439474719-293.png)

* If you see this screen, we have successfully finished the installation. Click **Finish.**

![1772441401441-726.png](/static/img/c81312_1772441401441-726.png)

### **3.2.Setup MYSQL account to enable remote connection**

Follow these steps to know how to setup remote connection with MySQL. This will help to install MySQL and akaBot Center in separated systems.

**Test your MySQL from remote client using MySQL Workbench**

* Open MySQL Workbench in other computer, click to the **add connection button** (see picture bellowed) to open **Setup New Connection** window.

![1706867096054-795.png](/static/img/793985_1706867096054-795.png)

* Input IP address of MySQL that you want to test, explorer in **"HostName"**
* Input your SQLUsername: **root**
* Click to **Test** **Connection** button
* After dialog **Connect to MySQL Server** appears, you enter **password** ***(you created in 3.1 >Step 2)*** for this account then hit ok totest this connection

![1772524392234-168.png](/static/img/5a867f_1772524392234-168.png)

* You will see this dialog if everything is configured successfully.

![1772532912080-735.png](/static/img/278da0_1772532912080-735.png)

* After connect successful, you can browse remote database in details using MySQL Workbench

### **3.3. Create MySQL Database for Center**

* For the new/first-time installation, you must create a new database for your Center.
* Follow these steps to create a database with the name **aka\_orchestrator** in a machine that is designed to install MySQL Database for Center.

**Step 1**: Open MySQL Workbench in the machine you want to create a MySQL Database

![aaaa.png](/static/img/ec0b66_aaaa.png)

* Open MySQL Workbench, access local instance

![b.png](/static/img/ee85fc_b.png)

**Step 2**: Click to (1) to open **Create** **new** **database** **dialog**

(2) input schema name=**aka\_orchestrator**

(3) input the database name of Center

(4) input Charset =**utf8 ,utf8\_general\_ci**.

(5) Hit **Apply** after you finish all (1) (2) (3) (4).

![c.png](/static/img/2dcf81_c.png)

**Step 3**: Hit **Apply** to create our LMS Database

![d.png](/static/img/a3a97e_d.png)

Hit **Finish**

![e.png](/static/img/d2e666_e.png)

## **4. Apache Tomcat installation**

### **4.1. Install Apache Tomcat**

Apache Tomcat installation:  
-Uncheck "Run Apache Tomcat"  
-Uncheck "Show Readme"  
-Click the "Finish" button to complete the installation.

![1772442127295-195.png](/static/img/590434_1772442127295-195.png)

![1698826414378-509.png](/static/img/cc2589_1698826414378-509.png)

The installation path for Apache Tomcat:**%TOMCAT\_PATH%** = C:\Program Files\Apache Software Foundation\Tomcat 8.5

### **4.2. Apache Tomcat Configuration**

**4.2.1. Configure log setting**s

**Step 1:** Open the file **%TOMCAT\_PATH%\conf\logging.properties**

**Step 2:** Add attributemaxDays to specify the maximum number of days that rotated access logs will be retained for before being deleted for the catalina, localhost, host-manager, manager logs. If not specified, the default value of-1will be used which means never delete old files.

* Example: keep 10 daysworth of history. Enter:
  + 1catalina.org.apache.juli.AsyncFileHandler.maxDays = 10
  + 2localhost.org.apache.juli.AsyncFileHandler.maxDays = 10
  + 3manager.org.apache.juli.AsyncFileHandler.maxDays = 10
  + 4host-manager.org.apache.juli.AsyncFileHandler.maxDays = 10

![1772682379196-293.png](/static/img/2f3e17_1772682379196-293.png)

**Step 3:** Save changes and close the file.

**Step 4:** Open the file **%TOMCAT\_PATH%\conf\server.xml**

**Step 5:** Un-Comment the line of log setting to turn on the log and add attribute **maxDays** as below:

![1772529944202-188.png](/static/img/74fe8a_1772529944202-188.png)

***Note: Only by opening in Notepad, can you edit the .xml file***

*These following steps illustrate how you can open in Notepad:*

* *Click **Run as administrator***

![1772443837379-641.png](/static/img/858cf5_1772443837379-641.png)

* *Navigate to **File\Open***

![1772443919471-532.png](/static/img/c6cd4d_1772443919471-532.png)

* *Locate to your file in the list, remember select **"All files"** option*

![1772444056154-686.png](/static/img/641de5_1772444056154-686.png)

**Step 6:** Save changes and close the file

**4.2.2. Other settings**

**Step 1:** Navigate to the path **%TOMCAT\_PATH%\bin** and double-click the file **Tomcat8w.exe** to open the Apache Tomcat Service configuration.

![1698826573279-276.png](/static/img/aef040_1698826573279-276.png)

**Step 2**: On the **General** tab

* Select Startup type: **Automatic**
* Choose **Apply** to apply the configuration changes.

![1698826602935-553.png](/static/img/d3597d_1698826602935-553.png)

**Step 3:** On the **Logging** tab

(1) Log prefix: **Remove "commons-daemon"**

(2) Redirect Stdout: **Remove "auto"**

(3) Redirect Stderror: **Remove "auto"**

(4) Choose **Apply** to apply the configuration changes.

![1698826668751-847.png](/static/img/7d4777_1698826668751-847.png)

**Step 4**: On the **Java** tab

a. Adjust the Java Heap configuration:

* Initial memory pool: **Enter a value \<= 1/4of the server's RAM.**

Example: Server RAM = 32 GB -> Initial memory pool should be \<= 1/4 \* 16 \* 1024 MB

* Maximum memory pool: **Enter a value \<=  of the server's RAM.**

Example: Server RAM = 32 GB -> Maximum memory pool should be \<=  \* 16 \* 1024 MB

**Note**: If you enter a value that is too large, it may prevent Apache Tomcat service from starting and result in errors.

![1698826792581-457.png](/static/img/1ce0a7_1698826792581-457.png)

b.Choose **Apply** to apply the configuration changes.

![1772532754855-337.png](/static/img/7280c5_1772532754855-337.png)

**Step 5:** Start the Tomcat Service

On the **General** tab, select **Start** to initiate the Apache Tomcat service.

![1698826877948-604.png](/static/img/10ded1_1698826877948-604.png)

### **4.3. Check Apache Tomcat Installation**

**Step 1:** After installation and configuration, go to the Services screen and check the status of the Apache Tomcat service.

* If the Status is not Running, start the Apache Tomcat service.
* If the Status is Running, proceed to step 2.

![1699244034878-897.png](/static/img/43701e_1699244034878-897.png)

**Step 2:** Access the URL [http://localhost:8080](http://localhost:8080/) in Chrome to verify the successful installation of Apache Tomcat:

![1699244051857-950.png](/static/img/8fcb85_1699244051857-950.png)

## **5. ActiveMQ installation**

### **5.1. Install ActiveMQ**

**Step 1:** Extract the file "apache-activemq-5.15.1-bin.zip" to the desired installation path.

For example: **ACTIVEMQ\_PATH = C:\akaBot\apache-activemq-5.15.1**

Note: The installation path should not contain any spaces.

![1699244069336-269.png](/static/img/f0dd32_1699244069336-269.png)

**Step 2:** Open Command Prompt with Administrator privileges.

![1699244074920-832.png](/static/img/00c7a3_1699244074920-832.png)

**Step 3:** Run the file %ACTIVEMQ\_PATH%\bin\win64\InstallService.bat to install the ActiveMQ service.

Run command: **C:\Windows\System32>C:\akaBot\apache-activemq-5.15.1\bin\win64\InstallService.bat**

![1699244080655-576.png](/static/img/845cac_1699244080655-576.png)

**Step 4**: Start the ActiveMQ service.

![1698830727957-440.png](/static/img/0d2d88_1698830727957-440.png)

### **5.2. Java Heap Configuration**

**Step 1:** Stop service ActiveMQ

![1698830792792-356.png](/static/img/8d3a99_1698830792792-356.png)

**Step 2**: Open the file **%ACTIVEMQ\_PATH%\bin\win64\wrapper.conf** and configure the parameters:

* ***wrapper.java.initmemory:*** Enter the initial value for the Java Heap memory.

For example, if the server has 32 GB of RAM, you can enter 1024.

* ***wrapper.java.maxmemory:*** Enter the maximum value for the Java Heap memory.

For example, with a server having 32 GB of RAM, you can enter 4096.

**Step 3:** Start ActiveMQ Service

![1698830915678-493.png](/static/img/36ce80_1698830915678-493.png)

### **5.3.Check ActiveMQ Installation**

**Step 1**: Check the Running status of the ActiveMQ service. If it is not running, start the service.

![1698830978699-754.png](/static/img/d07929_1698830978699-754.png)

**Step 2**: Access the URL [http://localhost:8161](http://localhost:8161/) to verify the successful installation of ActiveMQ.

![1698831013334-870.png](/static/img/c76f1f_1698831013334-870.png)

## **6. akaBot Center Installation**

**Download akaBot-center- 3.x.x.x.war.**

### **6.1. Copy and extract war file**

**Step 1: Stop** Apache Tomcat service

![1698831867557-259.png](/static/img/3ff711_1698831867557-259.png)

**Step 2: Delete** all folders in **%TOMCAT\_PATH%/webapps.**

**Step 3: Copy** the file akaBot-center-x.x.x.x.war to the**%TOMCAT\_PATH%/webapps/** directory and **rename** it to **ROOT.war.**

![1698831956427-192.png](/static/img/ad0815_1698831956427-192.png)

**Step 4: Restart** the Apache Tomcat service and wait for the ROOT.war to be extracted into the ROOT directory.

![1698831960528-312.png](/static/img/8eaf21_1698831960528-312.png)

**Step 5**: Stop the Apache Tomcat service.

![1698831966006-837.png](/static/img/36c3e2_1698831966006-837.png)

### **6.2. akaBot Center configuration**

**6.2.1. Configquartz.properties**

**Step 1:** Stop the Apache Tomcat service (if the Apache Tomcat service is currently running).

**Step 2:** Modify the configuration in the file **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/quartz.properties** as follows:

***1. Comment out the jobstore configuration for MySSQL.***

![1772446604326-131.png](/static/img/dd8781_1772446604326-131.png)

***2. Remove the "#" character at the beginning of the line for the jobstore configuration for MySQL to uncomment it.***

![1772446627348-744.png](/static/img/758a7a_1772446627348-744.png)

**6.2.2.Configure the MySQL Database Connection**

**Step 1**: Navigate to the path **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/**

**Step 2**: Modify the configuration in **both files:** ***application-dev.yml*** and ***application-prod.yml***

**Remove** the # characters at the beginning of the lines to uncomment the configuration and enable **MySQL** usage. Add the "#" characters at the beginning of the lines to comment out the configuration and disable MSSQL.

* ***application-dev.yml***

![1772507158837-545.png](/static/img/e59b6f_1772507158837-545.png)

![1772507280528-183.png](/static/img/85db57_1772507280528-183.png)

* ***application-prod.yml***

![1772507513075-296.png](/static/img/09516e_1772507513075-296.png)

![1772507539912-791.png](/static/img/adf0d1_1772507539912-791.png)

**6.2.3. Log setting**

1. Open the file **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/logback-spring.xml**

2. Change the **log level** to ERROR

3. Change the setting in rolling log file as below:

* **maxFileSize:** Limit the size of each file. Ex: 200MB.
* **maxHistory**: The optional maxHistory property controls the maximum number of archive files to keep. Ex: 20
* **totalSizeCap:** The optional totalSizeCap property controls the total size of all archive files. Ex: 20GB

![1772507762567-722.png](/static/img/dffe00_1772507762567-722.png)

4. Save changes and close file

5. **Start the Apache Tomcat** service and access **[http://localhost:8080/](http://localhost:8080/)** to verify the installation of akaBot Center.

![1772507853732-828.png](/static/img/0522c9_1772507853732-828.png)

6. Log in using the following credentials:

* username: admin
* password: admin
* You will be redirected to the dashboard as shown below.

![1772526428540-942.png](/static/img/cb998d_1772526428540-942.png)

## **7. Troubleshooting**

### **7.1. ActiveMQ**

**7.1.1. Unable to execute Java command**

![1698833178465-447.png](/static/img/9dbe5e_1698833178465-447.png)

* Open the file %ACTIVEMQ\_PATH%\bin\win64\wrapper.conf and configure the parameter:

wrapper.java.command=%JAVA\_HOME%/bin/java.exe

**7.1.2. Other Errors**

Please check the error details in the log file of **ActiveMQ: %ACTIVEMQ\_PATH%\logs\data\wrapper.log**

## **8. Backup for disaster recovery**

Information to be backed up for disaster recovery scenarios:

|  |  |  |  |
| --- | --- | --- | --- |
| **No** | **Name** | **Path** | **Description** |
| 1 | akaBot Center | Database | Database (MSSQL) of akaBot Center |
|  |  | %[TOMCAT\_PATH](#_bookmark21)%/filestorage | Folder containing .nupkg files from akaBot Studio published to akaBot Center |
|  |  | %[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\application.yml
|  |  |%[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\application-dev.yml
|  |  |%[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\application-prod.yml
|  |  |%[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\quartz.properties | Configuration files for akaBot Center |
| 2 | activeMQ | %[ACTIVEMQ\_PATH](#_bookmark25)%\data | activeMQ data directory |

**9. Activate Licenses**

Please follow the instruction via **[Activation](/docs/center/latest/installation/license-activation.md)**