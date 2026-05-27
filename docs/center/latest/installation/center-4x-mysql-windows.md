---
id: center-4x-mysql-windows
title: "Install Akabot Center 4x and MySQL on Microsoft Windows"
sidebar_label: "Center 4x and MySQL on Microsoft Windows"
sidebar_position: 6
description: "Install Akabot Center 4x and MySQL on Microsoft Windows documentation."
displayed_sidebar: centerSidebar
---
# Install Akabot Center 4x and MySQL on Microsoft Windows

> This guide provides instructions to installing a single instance of **akaBot Center version: 4.x** with **MySQL** as the database engine. The target Operating System (OS) in this guideline is **Microsoft Windows**.

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
| 3 | Apache tomcat | apache-tomcat-10.1.52.exe | 10.1.52 | Web server Apache Tomcat | **[Download](https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.52/bin/apache-tomcat-10.1.52.exe)** |
| 4 | ActiveMQ | apache-activemq- 5.15.1-bin.zip | 5.15.1 | ActiveMQ for Queue functionality in akaBot Center | **[Download](https://archive.apache.org/dist/activemq/5.15.1/apache-activemq-5.15.1-bin.zip)** |
| 5 | MySQL | Windows (x86, 32-bit), MSI Installer | 8.0.45 | The database engine of akaBot Center | Read **Section 3.1**for more details |

## **2. Java JDK 17 Installation**

Run the installer -**openlogic-openjdk-17.0.16** you have downloaded. After that, click **"Next"** to proceed.

![1772678336700-443.png](/static/img/76eafc_1772678336700-443.png)

![1772678575028-725.png](/static/img/a0d494_1772678575028-725.png)

![1772678599882-146.png](/static/img/79f0cd_1772678599882-146.png)

![1772678637728-770.png](/static/img/df20a7_1772678637728-770.png)

* After Installation is complete, you will see the Complete Notification below. Simply click **Finish**. You have successfully installed JDK.

![1772678676435-470.png](/static/img/898bcd_1772678676435-470.png)

**Note**: Make sure that **JAVA\_HOME** presents in your environment variables by typing command **echo %JAVA\_HOME%**, the output should be a path that point to jdk 17 ex: **C:\Program Files\OpenLogic\jdk-17.0.16.8-hotspot**

## **3. MySQL installation**

### **3.1. Install MySQL**

**Step 1**- Kindly download [**MySQL 8.0**](https://dev.mysql.com/downloads/installer/)

![1772679894229-198.png](/static/img/6fedc5_1772679894229-198.png)

**Step 2**- Run the installer

* Select **"Custom"** option and click **"Next"**

![1772680026894-329.png](/static/img/2e325d_1772680026894-329.png)

* To run akaBot Center, you will need MySQL Server and MySQL Workbench.
* Under:  
  +**MySQL Servers > MySQL Server**, choose **the newest** for **MySQL Server.**  
  +**Application > MySQL Workbench**, choose **the newest** version for **MySQL Workbench**

![1772680062957-574.png](/static/img/62134b_1772680062957-574.png)

* Click button **"Next"**

![1772680106676-150.png](/static/img/e8e1be_1772680106676-150.png)

* After that, kindly click **"Execute"** and hit **"Next"**

![1772680183433-519.png](/static/img/309ba6_1772680183433-519.png)

* After products are successfully installed, click **"Next**" to continue process

![1772680302561-505.png](/static/img/30c53e_1772680302561-505.png)

* When you at the **Accounts and Roles** page, it is recommended you set it to the default password **"sis@12345"** to avoid having to update the config file later. Click **Next"**

![1772680441382-833.png](/static/img/636706_1772680441382-833.png)

* Click **"Execute"** and wait till everything is finished. Click **Finish.**

![1772680676937-347.png](/static/img/197a7f_1772680676937-347.png)

* If you see this screen, we have successfully finished the installation. Click **Finish.**

![1772680642000-840.png](/static/img/6ed741_1772680642000-840.png)

### **3.2.Setup MYSQL account to enable remote connection**

Follow these steps to know how to setup remote connection with MySQL. This will help to install MySQL and akaBot Center in separated systems.

**Test your MySQL from remote client using MySQL Workbench**

* Open MySQL Workbench in other computer, click to the **add connection button** (see picture bellowed) to open **Setup** **New** **Connection** window.

![1772680900409-828.png](/static/img/a21512_1772680900409-828.png)

* Input IP address of MySQL that you want to test, explorer in **"HostName"**
* Input your SQLUsername: **root**
* Click to **Test Connection** button

![1772680983582-429.png](/static/img/73674e_1772680983582-429.png)

* After dialog **"Connect to MySQL Server"** appears, you enter **password (you created in 3.1 >Step 2)** for this account then hit **"Ok"** to test this connection

![1772681048495-679.png](/static/img/985936_1772681048495-679.png)

* You will see this dialog if everything is configured successfully.

![1772681188703-627.png](/static/img/b42ef1_1772681188703-627.png)

* After connecting successful, you can browse remote database in detail using MySQL Workbench

### **3.3. Create MySQL Database for Center**

* For the new/first-time installation, you must create a new database for your Center.
* Follow these steps to create a database with the name **aka\_orchestrator** in a machine that is designed to install MySQL Database for Center.

**Step 1**: Open MySQL Workbench in the machine you want to create a MySQL Database

![1772681250244-938.png](/static/img/f89b8a_1772681250244-938.png)

* Open MySQL Workbench, access local instance

![1772681325916-698.png](/static/img/d6ebe6_1772681325916-698.png)

**Step 2**: Click to (1) to open **Create new database dialog**

![1772681367826-951.png](/static/img/14d5de_1772681367826-951.png)

(2) input schema name=**aka\_orchestrator**

(3) input the database name of Center

(4) input Charset =**utf8 ,utf8\_general\_ci**.

(5) Hit **Apply** after you finish all (1) (2) (3) (4).

![1772681424156-676.png](/static/img/1f9747_1772681424156-676.png)

**Step 3**: Hit **Apply** to create our LMS Database

![1772681470131-634.png](/static/img/bdbad7_1772681470131-634.png)

Hit **Finish**

![1772681498688-250.png](/static/img/9438bc_1772681498688-250.png)

## **4. Apache Tomcat installation**

### **4.1. Install Apache Tomcat**

Apache Tomcat installation:  
- Uncheck "Run Apache Tomcat"  
- Uncheck "Show Readme"  
- Click the "Finish" button to complete the installation.

![1772681812071-644.png](/static/img/fb53d4_1772681812071-644.png)

![1772681838609-495.png](/static/img/9305ba_1772681838609-495.png)

![1772681883903-770.png](/static/img/6fda55_1772681883903-770.png)

![1772682064280-243.png](/static/img/153871_1772682064280-243.png)

![1772682108587-419.png](/static/img/8df4ac_1772682108587-419.png)

The installation path for Apache Tomcat: **%TOMCAT\_PATH%** = **C:\Program Files\Apache Software Foundation\Tomcat 10.1**

### **4.2. Apache Tomcat Configuration**

**4.2.1. Configure log settings**

**Step 1:** Open the file **%TOMCAT\_PATH%\conf\logging.properties**

**Step 2:** Add attribute **maxDays** to specify the maximum number of days that rotated access logs will be retained for before being deleted for the catalina, localhost, host-manager, manager logs. If not specified, the default value of-1will be used which means never delete old files.

* Example: keep 90 daysworth of history. Change the number at the end of the following rows:
  + 1catalina.org.apache.juli.AsyncFileHandler.maxDays = **90**
  + 2localhost.org.apache.juli.AsyncFileHandler.maxDays =**90**
  + 3manager.org.apache.juli.AsyncFileHandler.maxDays =**90**
  + 4host-manager.org.apache.juli.AsyncFileHandler.maxDays =**90**

![1772682773352-897.png](/static/img/f18ce4_1772682773352-897.png)

**Step 3:** Save changes and close the file.

**Step 4:** Open the file **%TOMCAT\_PATH%\conf\server.xml**

**Step 5:** Un-Comment the line of log setting to turn on the log and add attribute **maxDays** as below:

![1772682631349-450.png](/static/img/2081bb_1772682631349-450.png)

***Note: Only by opening in Notepad, can you edit the .xml file***

*These following steps illustrate how you can open in Notepad:*

* *Click **Run as administrator***

* *Navigate to **File\Open***

* *Locate to your file in the list, remember select **"All files"** option*

![1772682691513-901.png](/static/img/8f7803_1772682691513-901.png)

![1772682799754-604.png](/static/img/37e190_1772682799754-604.png)

![1772682840226-911.png](/static/img/b23ad0_1772682840226-911.png)

**Step 6:** Save changes and close the file

**4.2.2. Other settings**

**Step 1:** Navigate to the path **%TOMCAT\_PATH%\bin** and double-click the file **Tomcat10w.exe** to open the Apache Tomcat Service configuration.

![1772682897309-350.png](/static/img/bc9234_1772682897309-350.png)

**Step 2**: On the **General** tab

* Select Startup type: **Automatic**
* Choose **Apply** to apply the configuration changes.

![1772683028183-225.png](/static/img/d95fe8_1772683028183-225.png)

**Step 3:** On the **Logging** tab

(1) Log prefix: **Remove "commons-daemon"**

(2) Redirect Stdout: **Remove "auto"**

(3) Redirect Stderror: **Remove "auto"**

(4) Choose **Apply** to apply the configuration changes.

![1772683067655-799.png](/static/img/996e64_1772683067655-799.png)

**Step 4**: On the **Java** tab

a. Adjust the Java Heap configuration:

* Initial memory pool: **Enter a value \<= 1/4 of the server's RAM.**

Example: Server RAM = 32 GB -> Initial memory pool should be \<= 1/4 \* 16 \* 1024 MB

* Maximum memory pool: **Enter a value \<=  of the server's RAM.**

Example: Server RAM = 32 GB -> Maximum memory pool should be \<= 1/2 \* 16 \* 1024 MB

**Note**: If you enter a value that is too large, it may prevent Apache Tomcat service from starting and result in errors.

b.Choose **Apply** to apply the configuration changes.

![1772683124013-819.png](/static/img/18c571_1772683124013-819.png)

**Step 5:** Start the Tomcat Service

On the **General** tab, select **Start** to initiate the Apache Tomcat service.

![1772683144986-469.png](/static/img/b26855_1772683144986-469.png)

### **4.3. Check Apache Tomcat Installation**

**Step 1:** After installation and configuration, go to the Services screen and check the status of the Apache Tomcat service.

* If the Status is not Running, start the Apache Tomcat service.
* If the Status is Running, proceed to step 2.

![1772683257050-138.png](/static/img/ca3bc4_1772683257050-138.png)

**Step 2:** Access the URL [http://localhost:8080](http://localhost:8080/) in Chrome to verify the successful installation of Apache Tomcat:

![1772683276276-714.png](/static/img/77415f_1772683276276-714.png)

## **5. ActiveMQ installation**

### **5.1. Install ActiveMQ**

**Step 1:** Extract the file "apache-activemq-5.15.1-bin.zip" to the desired installation path.

For example: **ACTIVEMQ\_PATH = C:\akaBot\apache-activemq-5.15.1**

Note: The installation path should not contain any spaces.

![1772683661436-911.png](/static/img/7c5154_1772683661436-911.png)

**Step 2:** Open Command Prompt with Administrator privileges.

![1772683666280-827.png](/static/img/40b6b7_1772683666280-827.png)

**Step 3:** Run the file %ACTIVEMQ\_PATH%\bin\win64\InstallService.bat to install the ActiveMQ service.

Run command:**C:\Windows\System32>C:\akaBot\apache-activemq-5.15.1\bin\win64\InstallService.bat**

![1772683675431-199.png](/static/img/03b2c7_1772683675431-199.png)

**Step 4**: Start the ActiveMQ service.

![1772683706286-756.png](/static/img/60819c_1772683706286-756.png)

### **5.2. Java Heap Configuration**

**Step 1:** Stop service ActiveMQ

![1772683757268-489.png](/static/img/5539ff_1772683757268-489.png)

**Step 2**: Open the file **%ACTIVEMQ\_PATH%\bin\win64\wrapper.conf** and configure the parameters:

* ***wrapper.java.initmemory:*** Enter the initial value for the Java Heap memory.

For example, if the server has 32 GB of RAM, you can enter 1024.

* ***wrapper.java.maxmemory:*** Enter the maximum value for the Java Heap memory.

For example, with a server having 32 GB of RAM, you can enter 4096.

![1772683859984-889.png](/static/img/f02ab0_1772683859984-889.png)

**Step 3:** Start ActiveMQ Service

![1772683706286-756.png](/static/img/60819c_1772683706286-756.png)

### **5.3.Check ActiveMQ Installation**

**Step 1**: Check the Running status of the ActiveMQ service. If it is not running, start the service.

![1772683916963-131.png](/static/img/0e6735_1772683916963-131.png)

**Step 2**: Access the URL [http://localhost:8161](http://localhost:8161/) to verify the successful installation of ActiveMQ.

![1772683932770-904.png](/static/img/215213_1772683932770-904.png)

## **6. akaBot Center Installation**

**Download akaBot-center- 4.x.x.x.war.**

### **6.1. Copy and extract war file**

**Step 1: Stop** Apache Tomcat service

![1772684035957-533.png](/static/img/a29a1a_1772684035957-533.png)

**Step 2: Delete** all folders in **%TOMCAT\_PATH%/webapps.**

![1772684090590-522.png](/static/img/7ca112_1772684090590-522.png)

**Step 3: Copy** the file akaBot-center-x.x.x.x.war to the **%TOMCAT\_PATH%/webapps/** directory and **rename** it to **ROOT.war.**

![1772684241741-811.png](/static/img/7d371d_1772684241741-811.png)

**Step 4: Restart** the Apache Tomcat service and wait for the **ROOT.war** to be extracted into the ROOT directory.

![1772684338178-158.png](/static/img/875d26_1772684338178-158.png)

**Step 5**: Stop the Apache Tomcat service.

### **6.2. akaBot Center configuration**

**6.2.1. Config quartz.properties**

**Step 1:** Stop the Apache Tomcat service (if the Apache Tomcat service is currently running).

**Step 2:** Modify the configuration in the file **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/quartz.properties** as follows:

***1. Comment out the jobstore configuration for MySSQL.***

![1772684502932-217.png](/static/img/1d2135_1772684502932-217.png)

***2. Remove the "#" character at the beginning of the line for the jobstore configuration for MySQL to uncomment it.***

![1772684455566-665.png](/static/img/0060f1_1772684455566-665.png)

**6.2.2.Configure the MySQL Database Connection**

**Step 1**: Navigate to the path **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/**

**Step 2**: Modify the configuration in **both files:** ***application-dev.yml*** and ***application-prod.yml***

**Remove** the # characters at the beginning of the lines to uncomment the configuration and enable **MySQL** usage. Add the "#" characters at the beginning of the lines to comment out the configuration and disable MSSQL.

* ***application-dev.yml***

![1772684685833-327.png](/static/img/4a4c27_1772684685833-327.png)

![1772684723990-896.png](/static/img/2ffac1_1772684723990-896.png)

* ***application-prod.yml***

![1772684898397-553.png](/static/img/bba11a_1772684898397-553.png)

![1772684921533-479.png](/static/img/85e189_1772684921533-479.png)

**Save** files after configuring.

**6.2.3. Log setting**

1. Open the file **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/logback-spring.xml**

2. Change the **log level** to ERROR

3. Change the setting in rolling log file as below:

* **maxFileSize:** Limit the size of each file. Ex: 200MB.
* **maxHistory**: The optional maxHistory property controls the maximum number of archive files to keep. Ex: 20
* **totalSizeCap:** The optional totalSizeCap property controls the total size of all archive files. Ex: 20GB

![1772685022797-670.png](/static/img/55d724_1772685022797-670.png)

4. Save changes and close file

5. **Start the Apache Tomcat** service and access **[http://localhost:8080/](http://localhost:8080/)** to verify the installation of akaBot Center.

![1772685097464-483.png](/static/img/0ea552_1772685097464-483.png)

6. Log in using the following credentials:

* username: **admin**
* password:  **admin**
* You will be redirected to the dashboard as shown below.

![1772692638876-773.png](/static/img/ad042c_1772692638876-773.png)

## **7. Troubleshooting**

### **7.1. ActiveMQ**

**7.1.1. Unable to execute Java command**

* Open the file %ACTIVEMQ\_PATH%\bin\win64\wrapper.conf and configure the parameter:

wrapper.java.command=%JAVA\_HOME%/bin/java.exe

![1772693674300-402.png](/static/img/75eecc_1772693674300-402.png)

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
|  |  |%[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\application-dev.yml  %
|  |  |%[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\application-prod.yml  %
|  |  |%[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\quartz.properties | Configuration files for akaBot Center |
| 2 | activeMQ | %[ACTIVEMQ\_PATH](#_bookmark25)%\data | activeMQ data directory |

**9. Activate Licenses**

Please follow the instruction via **[Activation](/docs/center/latest/installation/license-activation.md)**