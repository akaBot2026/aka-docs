---
id: center-4x-mssql-windows
title: "Install Akabot Center 4x and MSSQL on Microsoft Windows"
sidebar_label: "Center 4x and MSSQL on Microsoft Windows"
sidebar_position: 5
description: "Install Akabot Center 4x and MSSQL on Microsoft Windows documentation."
displayed_sidebar: centerSidebar
---
# Install Akabot Center 4X and MSSQL on Microsoft Windows

> This guide provides instructions to installing a single instance of **akaBot Center version: 4.x** with **MSSQL**as the database engine. The target Operating System (OS) in this guideline is **Microsoft Windows**.

## **1. Prerequisites**

**1.1. Hardware and OS Requirements**

|  |  |
| --- | --- |
| **Configuration** | **Requirements** |
| Hardware | RAM: 32GB or higher <br/> Core: 8 CPU or higher <br/> SSD: 512 GB |
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
| 1 | akaBot Center | akaBot-center- 4.x.x.x.war | Newest version | akaBot Center installation package | akaBot provides through email after the customer makes a purchase. |
| 2 | Java Developer Kit | openlogic-openjdk-17.0.16 | 17.0.16 | Open logic JDK 17.0.16 | **[Download](https://builds.openlogic.com/downloadJDK/openlogic-openjdk/17.0.16+8/openlogic-openjdk-17.0.16+8-windows-x64.msi)** |
| 3 | Apache tomcat | apache-tomcat-\*.exe | 10.1.54 | Web server Apache Tomcat | **[Download](https://tomcat.apache.org/download-10.cgi)** |
| 4 | ActiveMQ | apache-activemq- 5.15.1-bin.zip | 5.15.1 | ActiveMQ for Queue functionality in akaBot Center | **[Download](https://archive.apache.org/dist/activemq/5.15.1/apache-activemq-5.15.1-bin.zip)** |
| 5 | MS SQL Server | SQL2025-SSEI-Eval | 2025 | The database engine of akaBot Center | Read **Section 3.1** for more details |

## **2. Java JDK 17 Installation**

Run the installer -**openlogic-openjdk-17.0.16** you have downloaded. After that, click **"Next"** to proceed.

![1773026436457-662.png](/static/img/8350c5_1773026436457-662.png)

![1773026455322-826.png](/static/img/6cc868_1773026455322-826.png)

![1773026480063-797.png](/static/img/54da96_1773026480063-797.png)

![1773026504396-498.png](/static/img/f18e37_1773026504396-498.png)

* After Installation is complete, you will see the Complete Notification below. Simply click **Finish**. You have successfully installed JDK.

![1773026554098-998.png](/static/img/a9f0ae_1773026554098-998.png)

**Note**: Make sure that **JAVA\_HOME** presents in your environment variables by typing command **echo %JAVA\_HOME%**, the output should be a path that point to jdk 17 ex:**C:\Program Files\OpenLogic\jdk-17.0.16.8-hotspot**

## **3. MSSQL installation**

### **3.1. Install MSSQL**

Download link: **[MSSQL 2025](https://www.microsoft.com/en-us/evalcenter/sql-server-2025-download)**

### **3.2.Setup MSSQL**

**Step 1:** Install

* Opensetup file from your computer
* Select **"Download media"** option

![1773030397244-318.png](/static/img/a90e6a_1773030397244-318.png)

* Click "Download"

**Step 2**: Open file

* Right-click to open the downloaded file in Windows Explorer.

![1773027965562-591.png](/static/img/67e2b0_1773027965562-591.png)

* After that, a new DVD drive named SQLServer2025 (D:) will appear. Click it to open.

![1773028279732-733.png](/static/img/a59de4_1773028279732-733.png)

**Step 3:** Set up

* Opensetup file from the computer

![1773028586816-796.png](/static/img/4024c0_1773028586816-796.png)

* Click **Installation** -1 and click **New SQL Server standalone installation or add features to an existing installation** -2

![1773028679031-652.png](/static/img/8f5346_1773028679031-652.png)

* Follow these steps below:

![1773028809345-281.png](/static/img/b63a54_1773028809345-281.png)

![1773028844443-518.png](/static/img/0da25b_1773028844443-518.png)

![1773028912542-880.png](/static/img/86af31_1773028912542-880.png)

![1773028965488-866.png](/static/img/f4e9d0_1773028965488-866.png)

* Uncheck "**Azure Extension for SQL Serve**r" before clicking "**Next**"

![1773029024745-193.png](/static/img/39e006_1773029024745-193.png)

* Tick box **"Database Engine Services"** then click button **"Next"**

![1773029187897-154.png](/static/img/620a6b_1773029187897-154.png)

* Wait for operation completing then click button **"Back"**

![1773029430504-871.png](/static/img/636658_1773029430504-871.png)

* Continue to click **"Next"**

![1773029474473-473.png](/static/img/ededcc_1773029474473-473.png)

* Tick **Mixed Mode** - 1, Enter password (example: sis@12345) - 2, **Add Current User** - 3 and click **Next** - 4

![1773029919733-269.png](/static/img/573366_1773029919733-269.png)

![1773029970175-451.png](/static/img/1598cc_1773029970175-451.png)

* Here is the successful screen. Click **"Close"**

![1773030041663-622.png](/static/img/83805a_1773030041663-622.png)

### **3.3. Enable Remote Connection**

**Step 1**: Open **SQL Server Management Studio** and connectto server.

![1773030202982-413.png](/static/img/86174f_1773030202982-413.png)

(1) Open "Home" to copy this field and paste as server name

![1773030281640-990.png](/static/img/2bfb8a_1773030281640-990.png)

(2) Input password that you created in **3.2 > Step 3**

(3) Tick **"Trust Server certificate"**

(4) Click **"Connect"**

**Step 2**: Open **Properties** SQLServer.

![1773030536288-582.png](/static/img/4df08e_1773030536288-582.png)

* Select **Security** and tick **SQL Server and Windows Authentication mode.**

![1773044861324-448.png](/static/img/f0e482_1773044861324-448.png)

**Step 3:** Open **SQL Server Configuration Manager.**

* Selected **Protocols for MSSQLSERVER** -> Enabled **Named Pipes and TCP/IP**

![1773030823282-463.png](/static/img/b3cc79_1773030823282-463.png)

**Step 4**: Click **"Restart"** MSSQL Server Service.

![1773030965635-479.png](/static/img/abd354_1773030965635-479.png)

**3.4. Create new Database empty**

**Step 1**:Open **SQL Server Management Studio**

**Step 2:** Right **Click Databases** -1 & click **New Database**-2

![1773031162079-136.png](/static/img/dea9cd_1773031162079-136.png)

**Step 3:** Enter Database Name -1, click **OK** -2

* Ex: database name aka\_orchestrator

![1773031208182-635.png](/static/img/b1c224_1773031208182-635.png)

![1773031234396-166.png](/static/img/94c0d6_1773031234396-166.png)

## **4. Apache Tomcat installation**

### **4.1. Install Apache Tomcat**

Apache Tomcat installation:  
- Uncheck "Run Apache Tomcat"  
- Uncheck "Show Readme"  
- Click the "Finish" button to complete the installation.pe your information message here.

![1773039471617-579.png](/static/img/28a716_1773039471617-579.png)

![1773039448180-898.png](/static/img/bd8a9b_1773039448180-898.png)

![1773039436317-278.png](/static/img/9a9700_1773039436317-278.png)

The installation path for Apache Tomcat: **%TOMCAT\_PATH%** = **C:\Program Files\Apache Software Foundation\Tomcat 10.1**

### **4.2. Apache Tomcat Configuration**

**4.2.1. Configure log setting**s

**Step 1:** Open the file**%TOMCAT\_PATH%\conf\logging.properties**

**Step 2:** Add attribute **maxDay**s to specify the maximum number of days that rotated access logs will be retained for before being deleted for the catalina, localhost, host-manager, manager logs. If not specified, the default value of-1will be used which means never delete old files.

* Example: keep 90 daysworth of history. Change the number at the end of the following rows:
  + 1catalina.org.apache.juli.AsyncFileHandler.maxDays = **90**
  + 2localhost.org.apache.juli.AsyncFileHandler.maxDays =**90**
  + 3manager.org.apache.juli.AsyncFileHandler.maxDays =**90**
  + 4host-manager.org.apache.juli.AsyncFileHandler.maxDays =**90**

**Step 3:** Save changes and close the file.

![1773039597849-397.png](/static/img/b6cfba_1773039597849-397.png)

**Step 4:** Open the file *%TOMCAT\_PATH%\conf\server.xml**

**Step 5:** Un-Comment the line of log setting to turn on the log and add attribute **maxDays** as below:

![1773039659797-700.png](/static/img/0de343_1773039659797-700.png)

**Step 6:** Save changes and close the file

**4.2.2. Other settings**

**Step 1:** Navigate to the path **%TOMCAT\_PATH%\bin** and double-click the file **Tomcat10w.exe** to open the Apache Tomcat Service configuration.

![1773039700842-636.png](/static/img/25160e_1773039700842-636.png)

**Step 2**: On the **General** tab

* Select Startup type: **Automatic**
* Choose **Apply** to apply the configuration changes.

![1773039738250-351.png](/static/img/d37ef5_1773039738250-351.png)

**Step 3:** On the **Logging** tab

(1) Log prefix: **Remove "commons-daemon"**

(2) Redirect Stdout: **Remove "auto"**

(3) Redirect Stderror: **Remove "auto"**

(4) Choose **Apply** to apply the configuration changes.

![1773039839582-669.png](/static/img/af673e_1773039839582-669.png)

**Step 4**: On the **Java** tab

a. Adjust the Java Heap configuration:

* Initial memory pool: **Enter a value \<= 1/4 of the server's RAM.**

Example: Server RAM = 32 GB -> Initial memory pool should be \<= 1/4 \* 16 \* 1024 MB

* Maximum memory pool: **Enter a value \<=  1/2 of the server's RAM.**

Example: Server RAM = 32 GB -> Maximum memory pool should be \<=  \* 16 \* 1024 MB

**Note**: If you enter a value that is too large, it may prevent Apache Tomcat service from starting and result in errors.

b.Choose **Apply** to apply the configuration changes.

![1773039888230-493.png](/static/img/65d78f_1773039888230-493.png)

**Step 5:** Start the Tomcat Service

On the **General** tab, select **Start** to initiate the Apache Tomcat service.

![1773044980268-508.png](/static/img/e6aa88_1773044980268-508.png)

### **4.3. Check Apache Tomcat Installation**

**Step 1:** After installation and configuration, go to the Services screen and check the status of the Apache Tomcat service.

* If the Status is not Running, start the Apache Tomcat service.
* If the Status is Running, proceed to step 2.

![1773045039977-189.png](/static/img/e819f0_1773045039977-189.png)

**Step 2:** Access the URL [http://localhost:8080](http://localhost:8080/) in Chrome to verify the successful installation of Apache Tomcat:

![1773040793096-753.png](/static/img/0a10a3_1773040793096-753.png)

## **5. ActiveMQ installation**

### **5.1. Install ActiveMQ**

**Step 1:** Extract the file "apache-activemq-5.15.1-bin.zip" to the desired installation path.

For example: **ACTIVEMQ\_PATH = C:\akaBot\apache-activemq-5.15.1**

Note: The installation path should not contain any spaces.

![1773042407269-516.png](/static/img/8ef4e2_1773042407269-516.png)

**Step 2:** Open Command Prompt with Administrator privileges.

![1773042420627-885.png](/static/img/f4b4f7_1773042420627-885.png)

**Step 3:** Run the file %ACTIVEMQ\_PATH%\bin\win64\InstallService.bat to install the ActiveMQ service.

Run command:**C:\Windows\System32>C:\akaBot\apache-activemq-5.15.1\bin\win64\InstallService.bat**

![1773042444158-931.png](/static/img/28f86f_1773042444158-931.png)

**Step 4**: Start the ActiveMQ service.

![1773042459471-219.png](/static/img/52623a_1773042459471-219.png)

### **5.2. Java Heap Configuration**

**Step 1:** Stop service ActiveMQ

**Step 2**: Open the file **%ACTIVEMQ\_PATH%\bin\win64\wrapper.conf** and configure the parameters:

* ***wrapper.java.initmemory:*** Enter the initial value for the Java Heap memory.

For example, if the server has 32 GB of RAM, you can enter 1024.

* ***wrapper.java.maxmemory:*** Enter the maximum value for the Java Heap memory.

For example, with a server having 32 GB of RAM, you can enter 4096.

![1773040188173-944.png](/static/img/dd0c2e_1773040188173-944.png)

**Step 3:** Start ActiveMQ Service

![1773045637327-680.png](/static/img/1adf28_1773045637327-680.png)

### **5.3.Check ActiveMQ Installation**

**Step 1**: Check the Running status of the ActiveMQ service. If it is not running, start the service.

![1773040234841-235.png](/static/img/b4e08e_1773040234841-235.png)

**Step 2**: Access the URL [http://localhost:8161](http://localhost:8161/) to verify the successful installation of ActiveMQ.

![1773040248186-927.png](/static/img/1ea791_1773040248186-927.png)

## **6. akaBot Center Installation**

**Download akaBot-center- 4.x.x.x.war.**

### **6.1. Copy and extract war file**

**Step 1: Stop** Apache Tomcat service

![1773045591703-739.png](/static/img/86c996_1773045591703-739.png)

**Step 2: Delete** all folders in **%TOMCAT\_PATH%/webapps.**

![1773041052691-659.png](/static/img/14b8f4_1773041052691-659.png)

**Step 3: Copy** the file akaBot-center-x.x.x.x.war to the**%TOMCAT\_PATH%/webapps/** directory

![1773041088743-833.png](/static/img/7a8d43_1773041088743-833.png)

* **Rename** it to **ROOT.war.**

![1773041108270-318.png](/static/img/a4c57d_1773041108270-318.png)

**Step 4: Restart** the Apache Tomcat service and wait for the **ROOT.war** to be extracted into the ROOT directory.

![1773041152285-315.png](/static/img/dfef46_1773041152285-315.png)

**Step 5**: Stop the Apache Tomcat service.

### **6.2. akaBot Center configuration**

**6.2.1. Config quartz.properties**

**Step 1:** Stop the Apache Tomcat service (if the Apache Tomcat service is currently running).

**Step 2:** Modify the configuration in the file **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/quartz.properties** as follows:

***1. Comment out the jobstore configuration for MySQL.***

![1773041678381-902.png](/static/img/81ec7b_1773041678381-902.png)

***2. Remove the "#" character at the beginning of the line for the jobstore configuration for MSSQL to uncomment it.***

![1773041651589-503.png](/static/img/ac0096_1773041651589-503.png)

**6.2.2. Configure the MSSQL Database Connection**

**Step 1**: Navigate to the path **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/**

**Step 2**: Modify the configuration in **both files:** ***application-dev.yml*** and ***application-prod.yml***

**Remove**the # characters at the beginning of the lines to uncomment the configuration and enable **MSSQL** usage. Add the "#" characters at the beginning of the lines to comment out the configuration and disable MySQL.

**Input** your username and password that you created in **3.2>Step 3.**

* ***application-dev.yml***

![1773044463423-987.png](/static/img/2bd720_1773044463423-987.png)

![1773044494207-261.png](/static/img/063708_1773044494207-261.png)

![1773044521408-329.png](/static/img/eb1547_1773044521408-329.png)

* ***application-prod.yml***

![1773044581478-175.png](/static/img/d34ff4_1773044581478-175.png)

![1773044623077-350.png](/static/img/d2f4e6_1773044623077-350.png)

**Save** files after configuring.

**6.2.3. Log setting**

1. Open the file **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/logback-spring.xml**

2. Change the **log level** to ERROR

3. Change the setting in rolling log file as below:

* **maxFileSize:** Limit the size of each file. Ex: 200MB.
* **maxHistory**: The optional maxHistory property controls the maximum number of archive files to keep. Ex: 20
* **totalSizeCap:** The optional totalSizeCap property controls the total size of all archive files. Ex: 20GB

![1773043114230-690.png](/static/img/9fcee7_1773043114230-690.png)

4. Save changes and close file

5. **Start the Apache Tomcat** service and access **[http://localhost:8080/](http://localhost:8080/)** to verify the installation of akaBot Center.

![1773045819506-903.png](/static/img/7378f7_1773045819506-903.png)

![1773044661288-968.png](/static/img/eac1dc_1773044661288-968.png)

6. Log in using the following credentials:

* username:**admin**
* password: **admin**
* You will be redirected to the dashboard as shown below.

![1773044690105-331.png](/static/img/739053_1773044690105-331.png)

## **7. Troubleshooting**

### **7.1. ActiveMQ**

**7.1.1. Unable to execute Java command**

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
|  |  | %[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\application.yml  %
|  |  |  [TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\application-dev.yml  %
|  |  | %[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\application-prod.yml  %
|  |  | [TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\quartz.properties | Configuration files for akaBot Center |
| 2 | activeMQ | %[ACTIVEMQ\_PATH](#_bookmark25)%\data | activeMQ data directory |

**9. Activate Licenses**

Please follow the instruction via **[Activation](/docs/center/latest/installation/license-activation.md)**