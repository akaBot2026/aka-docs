---
id: standalone-windows-server
title: "Installation guide for standalone model on Windows Server (Network Edition)"
sidebar_label: "Standalone model on Windows Server (Network Edition)"
sidebar_position: 9
description: "Installation guide for standalone model on Windows Server (Network Edition) documentation."
displayed_sidebar: centerSidebar
---
# Installation Guide for Standalone Model on Windows Server (Network Edition)

## **1. Prerequisites**

Note: Please read this section carefully before installation.

### **1.1. Installation Model**

This guide provides instructions for installing akaBot Center in the installation model described below. For other installation models, please find in other pages or send an email to [[support@akaBot.com]](/cdn-cgi/l/email-protection#74070104041b060034151f15361b005a171b19) for assistance.

![1698741761870-882.png](/static/img/06bd5f_1698741761870-882.png)

### **1.2.Machine Configuration Requirements**

To install and use akaBot Center on Windows server, please prepare your computer with the following requirements:

|  |  |
| --- | --- |
| **Configuration** | **Requirements** |
| Hardware | Virtual Machine <br/> RAM: 32GB or higher <br/> Core: 8 CPUs or higher <br/> SSD: 500GB |
| Software | Operating System: Windows Server 2012 R2/2016/2019 <br/> Browser: The latest version of Chrome |

### **1.3. Installation Privilege Requirements**

The account performing the installation needs to have Admin (Root) privileges on the installation machine.

### **1.4.MSSQL Database Connection Requirements**

* The installation machine must have network connectivity to the pre-established MSSQL database.
* The required configuration information for Center to connect to the database includes:

|  |  |  |
| --- | --- | --- |
| **#** | **Information** | **Description** |
| 1 | DB-SERVER | IP address of the MSSQL Database |
| 2 | DB-USER | Connection account |
| 3 | DB-PASSWORD | Connection password |
| 4 | DB-PORT | MSSQL database connection port |
| 5 | DB-NAME | Name of the MSSQL database |

* If you are installing Collaboration Center, please prepare a separate database for Collaboration Center and have the connection information ready, similar to the database setup for Center. (*For more information about what Collaboration Center is, please read further at [Human-Bot Collaboration](/docs/collaboration/latest/overview.md)*).

### **1.5.Prepare the Installation Package**

You need to prepare the installation package according to the following list.

**Note:**  
- If the computer where you're installing Center does not have an internet connection, please download the installation package externally and copy it to the machine.  
- To avoid errors during installation with command line execution, please use a dedicated folder for akaBot Center installation and name the installation package directory without any spaces. For example: C:\akaBot


|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **#** | **Name** | File Name | **Version** | **Mô tả** | **Link** |
| 1 | akaBot Center | akaBot-center- 3.x.x.x.war | Newest version | - akaBot Center installation package | akaBot provides through email after the customer makes a purchase. |
| 2 | akaBot Collaboration Center | akaBot-cc-x.x.x.zip | Newest version | - Collaboration Center installation package  **- Not required** |
| 3 | JDK/JRE | jdk- 11.0.18\_windows- x64\_bin.exe | 11.0.18 | JDK 11.0.18 | [Download](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html) |
| 4 | Apache tomcat | apache-tomcat- 8.5.89.exe | 8.5.59 | Web server apache Tomcat | [Download](https://archive.apache.org/dist/tomcat/tomcat-8/v8.5.89/bin/apache-tomcat-8.5.89.exe) |
| 5 | ActiveMQ | apache-activemq- 5.15.1-bin.zip | 5.15.1 | ActiveMQ for Queue functionality in akaBot Center | [Download](https://archive.apache.org/dist/activemq/5.15.1/apache-activemq-5.15.1-bin.zip) |
| 6 | Elasticsearch 7 | elasticsearch-  7.17.10-windows- x86\_64.zip | 7.17.10 | Elastic search 7  **- Not required** (only used when installing Collaboration Center). | [Download](https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.10-windows-x86_64.zip) |
| 7 | NSSM | nssm-2.24.zip | 2.24 | Service Manager  **- Not required** (only used when installing Collaboration Center). | [Download](https://nssm.cc/release/nssm-2.24.zip) |

### **1.6. Guide to Some key Operations**

In this document, some basic operations are repeated, and the writer will provide guidance in this section. Please read the instructions for those operations as follows.

**1.6.1. Open the Command Prompt (cmd) and enter the installation command**

* Type "cmd" into the Windows search bar.
* Right-click on the Command Prompt function and select "Run as Administrator."

![1698825373980-794.png](/static/img/aa1f1c_1698825373980-794.png)

* The Command Prompt window opens, and you can enter any service installation command.

![1698825115865-941.png](/static/img/d84b2f_1698825115865-941.png)

**1.6.2. Start/Stop/Restart a Service**

* Press the Windows key + R.
* Enter "services.msc" to access the Services function containing all services on the computer.
* Press Enter.

![1698826007648-821.png](/static/img/7b493e_1698826007648-821.png)

* In the Services window:
  + To start a service, select "Start."
  + To stop a service, select "Stop."
  + To restart a service, select "Restart."

![1698826078465-711.png](/static/img/dc88d1_1698826078465-711.png)

![1698826084497-414.png](/static/img/165745_1698826084497-414.png)

## **2. Java JDK 11 Installation**

**Step 1** - Kindly download Java JDK 11 at **[JAVA JDK 11](https://builds.openlogic.com/downloadJDK/openlogic-openjdk/11.0.20+8/openlogic-openjdk-11.0.20+8-windows-x64.msi)**

**Step 2**- Run the installer you have downloaded. After that, click **"Next"** to proceed.

![1693904663056-588.png](/static/img/ec5495_1693904663056-588.png)

![1693904774851-856.png](/static/img/9c4d87_1693904774851-856.png)

* After Installation is complete, you will see the Complete Notification below. Simply click “Finish”. You have successfully installed JDK.

![1693904326967-726.png](/static/img/a31a17_1693904326967-726.png)

**Note**: Make sure that **JAVA\_HOME** presents in your environment variables by typing command **echo %JAVA\_HOME%**, the output should be a path that point to jdk 11 ex: **C:\Program Files\Java\jdk-11.0.12**

## **3. MySQL installation**

### **3.1. Install MySQL**

**Step 1** - Kindly download [**MySQL 8.0**](https://dev.mysql.com/downloads/installer/)

![image-20220506134617-7.png](/static/img/86f152_image-20220506134617-7.png)

**Step 2**- Run the installer and choose **Custom** option.

![image-20220506134622-8.png](/static/img/b461d3_image-20220506134622-8.png)

* To run akaBot Center, you will need MySQL Server and MySQL Workbench.
* Under:  
  + **MySQL Servers > MySQL Server**, choose the newest for **MySQL Server.**  
  + **Application > MySQL Workbench**, choose the newest version for **MySQL Workbench.**

![image-20220506134630-9.png](/static/img/59947d_image-20220506134630-9.png)

![image-20220506134638-10.png](/static/img/6c15a3_image-20220506134638-10.png)

* After that, kindly click **Execute** and hit **Next**,...

![image-20220506134644-11.png](/static/img/ccf7f2_image-20220506134644-11.png)

* When you at the **Accounts and Roles** page, it is recommended you set it to the default password **”sis@12345”** to avoid having to update the Config file later. Click **“Next"**

![image-20220506134651-12.png](/static/img/cc7aa3_image-20220506134651-12.png)

* Click **"Execute"** and wait till everything is finished. Click “Finish”.

![image-20220506134706-14.png](/static/img/718b4e_image-20220506134706-14.png)

* If you see this prompt, we have successfully finished the installation. Click “Finish”.

![image-20220506134713-15.png](/static/img/8ea23c_image-20220506134713-15.png)

### **3.2. Setup MYSQL account to enable remote connection**

Follow these steps to know how to setup remote connection with MYSQL. This will help to install MYSQL and  CENTER in separated systems.  
***3.2.1. Create a MYSQL account and grant access to specific database (Center in this document )***

- Open MySQL Workbench and go to Local instance with root account as bellowed

![1706866874754-225.png](/static/img/76f263_1706866874754-225.png)

- Access “**Users** **and** **Privileges**” function in the left panel (1)

- Then click “**Add** **Account**” (2)

![1706866892185-101.png](/static/img/9784b7_1706866892185-101.png)

* Enter data for Login tab including: Login Name, Password as bellowed, leave authentication Type and **Limit to hosts Matching** with default values. **“%”** in “**Limit to Host** **Matching**” means that the host does not include “**localhost**” so it can access from other remote computer, remote IPs.

![1706866939179-690.png](/static/img/7df028_1706866939179-690.png)

- Leave “**Account** **Limits**” as default.

![1706866951938-126.png](/static/img/962e43_1706866951938-126.png)

- You can grant any roles for this account by check to designed roles item in the left panel. In this scenario, we only want to grant this account to specific database with normal user permission (not admin at all) so we leave it with default values (do not check anything).

![1706866963595-397.png](/static/img/ba5649_1706866963595-397.png)

- “**Schema** **Privileges**” tab helps to grant specific permission to one or more schema like CENTER Database.

- Click to “**Add** **Entry**” to begin setup

![1706866976416-822.png](/static/img/c47d99_1706866976416-822.png)

- then select database that designed for this user ( in this case we select database of CENTER application )  
- if database has not been created yet , you can create it first by following **3.3. Create MySQL Database for CENTER**

![1706866987817-428.png](/static/img/92aba5_1706866987817-428.png)

- Apply suitable access rights to this schema, we select all access rights for specific data base in this scenario,

- **Object** **Rights** are right to work with any records, **DDL** **Rights** are right to work with data base definition type…

![1706866999267-422.png](/static/img/623ce3_1706866999267-422.png)

- After click “**Apply**”, you will see new user named “**lmsUser**” in user accounts list. You can click “**refresh**” button to force MYSQLWORKBENCH update the list for you. Note that: **“%”** in column “**From** **Host**” means that this account can be access remotely.

![1706867026079-558.png](/static/img/96d819_1706867026079-558.png)

***3.2.2.  Test your  MySQL from remote client using MySQL Workbench***

- Open MySQL Workbench in other computer, click to the add connection button (see picture bellowed) to open “**Setup** **New** **Connection**” window.

![1706867096054-795.png](/static/img/a39f10_1706867096054-795.png)

-Input IP address of MySQL that you want to test, explorer in “**HostName**”, input MySQL UserName that you create in previous step then click to “**Test** **Connection**” button”

- After dialog “**Connect** **to** **MySQL** **Server**” appears, you enter password for this account then hit ok to test this connection

![1706867108837-611.png](/static/img/c279ee_1706867108837-611.png)

- You will see this dialog if everything is OK.

![1706867122081-842.png](/static/img/611350_1706867122081-842.png)

- After connect successful, you can browse remote database in details using MySQL Workbench

### **3.3.Create MySQL Database for CENTER**

- For the new/first-time installation, you must create a new database for your CENTER.

- Follow these steps to create a database with the name “**aka\_orchestrator**” in a machine that is designed to install MYSQL Database for CENTER.

**Step1**: Open MySQL Workbench in the machine you want to create a MySQL Database

![aaaa.png](/static/img/48b772_aaaa.png)

- Open MySQL Workbench, access local instance

![b.png](/static/img/1f701a_b.png)

**Step 2** : Click to (1) to open “**Create** **new** **database** **dialog**”

(2) input schema name=”**aka\_orchestrator**”

(3) input the database name of CENTER

(4) input Charset =”**utf8 ,utf8\_general\_ci**”.

(5) Hit “**Apply**” after you finish all (1) (2) (3) (4).

![c.png](/static/img/274468_c.png)

**Step 3**: Hit “**Apply**” to create our LMS Database

![d.png](/static/img/280a32_d.png)

Hit “**Finish**”

![e.png](/static/img/87d08b_e.png)

## **4. Apache Tomcat installation**

### **4.1. Install Apache Tomcat**

Double-click the file "apache-tomcat-8.5.89.exe" to install Apache Tomcat. Please follow the instructions in the installer.

**Note:** In the final step of the Apache Tomcat installation:  
- Uncheck "Run Apache Tomcat"  
- Uncheck "Show Readme"  
- Click the "Finish" button to complete the installation.

![1698826414378-509.png](/static/img/ba7a8b_1698826414378-509.png)

The installation path for Apache Tomcat: **%TOMCAT\_PATH%** = “C:\Program Files\Apache Software Foundation\Tomcat 8.5”

### **4.2. Apache Tomcat Configuration**

**4.2.1. Configure log setting**s

Step 1: Open the file **%TOMCAT\_PATH%\conf\logging.properties**

Step 2: Add attribute maxDays to specify the maximum number of days that rotated access logs will be retained for before being deleted for the catalina, localhost, host-manager, manager logs. If not specified, the default value of -1 will be used which means never delete old files. Example: keep 10 days worth of history.

![1714719008984-381.png](/static/img/05c1d5_1714719008984-381.png)

Step 3: Save changes and close the file.

Step 4: Open the file **%TOMCAT\_PATH%\conf\server.xml**

Step 5: Un-Comment the line of log setting to turn on the log and add attribute maxdays as below:

![1714719488405-585.png](/static/img/352bde_1714719488405-585.png)

Step 6: Save changes and close the file

**4.2.2. Other settings**

Step 1: Navigate to the path **%TOMCAT\_PATH%\bin** and double-click the file **Tomcat8w.exe** to open the Apache Tomcat Service configuration.

![1698826573279-276.png](/static/img/d3158a_1698826573279-276.png)

Step 2: On the **General** tab

* Select Startup type: Automatic
* Choose **Apply** to apply the configuration changes.

![1698826602935-553.png](/static/img/c55a9d_1698826602935-553.png)

Step 3: On the **Logging** tab

(1) Log prefix: Remove "commons-daemon"

(2) Redirect Stdout: Remove "auto"

(3) Redirect Stderror: Remove "auto"

(4) Choose Apply to apply the configuration changes.

![1698826668751-847.png](/static/img/2a75de_1698826668751-847.png)

Step 4: On the **Java**tab

a. Adjust the Java Heap configuration:

* Initial memory pool: Enter a value \<= 1/4 of the server's RAM.

Example: Server RAM = 32 GB -> Initial memory pool should be \<= 1/4 \* 16 \* 1024  MB

* Maximum memory pool: Enter a value \<= ½ of the server's RAM.

Example: Server RAM = 32 GB -> Maximum memory pool should be \<= ½ \* 16 \* 1024  MB

**Note**: If you enter a value that is too large, it may prevent Apache Tomcat service from starting and result in errors.

![1698826792581-457.png](/static/img/758a5c_1698826792581-457.png)

b. Choose **Apply** to apply the configuration changes.

![1698826829349-538.png](/static/img/79812c_1698826829349-538.png)

Step 5: Start the Tomcat Service

On the **General** tab, select **Start** to initiate the Apache Tomcat service.

![1698826877948-604.png](/static/img/33da6a_1698826877948-604.png)

### **4.3. Check Apache Tomcat Installation**

Step 1: After installation and configuration, go to the Services screen and check the status of the Apache Tomcat service.

* If the Status is not Running, start the Apache Tomcat service.
* If the Status is Running, proceed to step 2.

![1699244034878-897.png](/static/img/d6c3f9_1699244034878-897.png)

Step 2: Access the URL [http://localhost:8080](http://localhost:8080/) in Chrome to verify the successful installation of Apache Tomcat:

![1699244051857-950.png](/static/img/e997ca_1699244051857-950.png)

## **5. ACTIVEMQ installation**

### **5.1. Install ActiveMQ**

Step 1: Extract the file "apache-activemq-5.15.1-bin.zip" to the desired installation path.

For example: ACTIVEMQ\_PATH = C:\akaBot\apache-activemq-5.15.1

Note: The installation path should not contain any spaces.

![1699244069336-269.png](/static/img/e72378_1699244069336-269.png)

Step 2: Open Command Prompt with Administrator privileges.

![1699244074920-832.png](/static/img/254b02_1699244074920-832.png)

Step 3: Run the file %ACTIVEMQ\_PATH%\bin\win64\InstallService.bat to install the ActiveMQ service.

![1699244080655-576.png](/static/img/7e9bee_1699244080655-576.png)

Step 4: Start the ActiveMQ service.

![1698830727957-440.png](/static/img/299bae_1698830727957-440.png)

### **5.2. Java Heap Configuration**

**Step 1:** Stop service ActiveMQ

![1698830792792-356.png](/static/img/4bb532_1698830792792-356.png)

Step 2: Open the file **%ACTIVEMQ\_PATH%\bin\win64\wrapper.conf** and configure the parameters:

* wrapper.java.initmemory: Enter the initial value for the Java Heap memory.

For example, if the server has 32 GB of RAM, you can enter 1024.

* wrapper.java.maxmemory: Enter the maximum value for the Java Heap memory.

For example, with a server having 32 GB of RAM, you can enter 4096.

Step 3: Start ActiveMQ Service

![1698830915678-493.png](/static/img/d32c74_1698830915678-493.png)

### **5.3. Check ActiveMQ Installation**

Step 1: Check the Running status of the ActiveMQ service. If it is not running, start the service.

![1698830978699-754.png](/static/img/641c75_1698830978699-754.png)

Step 2: Access the URL [http://localhost:8161](http://localhost:8161/) to verify the successful installation of ActiveMQ.

![1698831013334-870.png](/static/img/e674f8_1698831013334-870.png)

## **6. ELASTICSEARCH installation**

**Note:** If you use Collaboration Center, you have to install ElasticSearch. If not, this is not required.

### **6.1. Install ElasticSearch**

Step 1: Extract the file "elasticsearch-7.17.10-windows-x86\_64.zip" to the desired installation path.

For example, ES\_PATH: C:\akaBot\elasticsearch-7.17.10.

![1698831079505-432.png](/static/img/30b605_1698831079505-432.png)

Step 2: Install the Elasticsearch service  
Open the Command Prompt with "Run as administrator" and run the command:

%ES\_PATH%\bin\elasticsearch-service.bat install

![1698831173260-619.png](/static/img/5261a2_1698831173260-619.png)

Step 3: Start the Elasticsearch service using the command:

```
%ES_PATH%\bin\elasticsearch-service.bat start
```

![1698831334372-779.png](/static/img/b43feb_1698831334372-779.png)

### **6.2. ElasticSearch Configuration**

**6.2.1. Security Configuration**

Step 1: Stop the Elasticsearch service.

Step 2: Open the file %ES\_PATH%\config\elasticsearch.yml and add the following configuration at the beginning of the file:

```
xpack.security.enabled: true
```

Step 3: Start the Elasticsearch service again.

Step 4: Open the Command Prompt and run **%ES\_PATH%\bin\elasticsearch-setup-passwords interactive**

Enter passwords for all the built-in users of Elasticsearch.

![1698831288454-144.png](/static/img/e97567_1698831288454-144.png)

**6.2.2. Other configuration**

Step 1: Open Command Prompt with "Run as administrator" and run the file **%ES\_PATH%\bin\elasticsearch-service.bat manager** to open the configuration management interface for Elasticsearch service.

![1698831522366-251.png](/static/img/b401c2_1698831522366-251.png)

Step 2: On the **General** tab, select "Startup Type" and set it to "Automatic."

![1698831577184-391.png](/static/img/a51bf3_1698831577184-391.png)

Step 3: On the **Logging** tab

![1698831635096-754.png](/static/img/205abc_1698831635096-754.png)

Step 4: On the **Java** tab

![1698831653137-277.png](/static/img/760f22_1698831653137-277.png)

### **6.3. Check ElasticSearch Installation**

Check the Running status of the ActiveMQ service.

![1698831705683-754.png](/static/img/f469d3_1698831705683-754.png)

Access the URL [http://localhost:9200/](http://localhost:9200/) to verify the successful installation of Elasticsearch.

![1698831739225-456.png](/static/img/8f0d4a_1698831739225-456.png)

![1698831748226-661.png](/static/img/be1f4c_1698831748226-661.png)

## **7. akaBot Center Installation**

### **7.1. Copy and extract war file**

Step 1: Stop Apache Tomcat service

![1698831867557-259.png](/static/img/23fd34_1698831867557-259.png)

Step 2: Delete all folders in %TOMCAT\_PATH%/webapps.

Step 3: Copy the file akaBot-center-x.x.x.x.war to the %TOMCAT\_PATH%/webapps/ directory and rename it to ROOT.war.

![1698831956427-192.png](/static/img/12779b_1698831956427-192.png)

Step 4: Restart the Apache Tomcat service and wait for the ROOT.war to be extracted into the ROOT directory.

![1698831960528-312.png](/static/img/cd1412_1698831960528-312.png)

Step 5: Stop the Apache Tomcat service.

![1698831966006-837.png](/static/img/f5c068_1698831966006-837.png)

### **7.2. akaBot Center configuration**

**7.2.1. Config quartz.properties**

Step 1: Stop the Apache Tomcat service (if the Apache Tomcat service is currently running).

Step 2: Modify the configuration in the file %TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/quartz.properties as follows:

1. Comment out the jobstore configuration for MySQL.

![1698832086809-294.png](/static/img/f42084_1698832086809-294.png)

1. Remove the "#" character at the beginning of the line for the jobstore configuration for MSSQL to uncomment it.

![1698832094915-186.png](/static/img/2b4cd7_1698832094915-186.png)

**7.2.2. Configure the MSSQL Database Connection**

**Step 1**: Navigate to the path %TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/

**Step 2**: Modify the configuration in both files:

* application-dev.yml
* application-prod.yml

1. Comment out the MySQL datasource and JPA configurations.

![1698832182139-477.png](/static/img/cbaf67_1698832182139-477.png)

2. Remove the "#" character at the beginning of the lines to uncomment the following lines.

![1698832196463-541.png](/static/img/654fba_1698832196463-541.png)

3. Change the lines to:

* url: jdbc:sqlserver://DB-SERVER:DB-PORT;databaseName=DB-NAME;encrypt=true;trustServerCertificate=true;
* username: DB-USER
* password: DB-PASSWORD

**7.2.3. Log setting**

1. Open the file %TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/logback-spring.xml

2. Change the log level to ERROR

![1714720162669-409.png](/static/img/68d289_1714720162669-409.png)

3. Change the setting in rolling log file as below:

* maxFileSize: Limit the size of each file. Ex: 200MB.
* maxHistory: The optional maxHistory property controls the maximum number of archive files to keep. Ex: 20
* totalSizeCap: The optional totalSizeCap property controls the total size of all archive files. Ex: 20GB

![1714720244392-526.png](/static/img/285acd_1714720244392-526.png)

4. Save changes and close file

5. Start the Apache Tomcat service and access [http://localhost:8080/](http://localhost:8080/) to verify the installation of akaBot Center.

![1698832285390-704.png](/static/img/1c2800_1698832285390-704.png)

**7.2.4. Configuring email server**

**Step 1:** Configure sender email address

Open the file **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/application.yml**

Locate the **mail** configuration section and update the **from**field as shown below:

* from: Specifies the default sender email address displayed in all outgoing emails generated by the application (e.g., notifications, activation emails, password reset emails).

Notes:

* The email address should belong to a valid and authorized domain.
* It is recommended to use a no-reply or service account email address.
* The sender address should align with the SMTP account configured in 
**Step 2** to avoid email delivery or spam issues.

![1765954433056-182.png](/static/img/95885a_1765954433056-182.png)

**Step 2:** Configure SMTP email settings

Navigate to the path **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/**

Modify the configuration in both files **application-dev.yml, application-prod.yml**:

* host: The fully qualified domain name (FQDN) of the SMTP server used to send outgoing emails.
* port: The network port used by the SMTP server for secure email transmission. Port 587 is the standard submission port and supports STARTTLS encryption.
* username: The email account used by the application to authenticate with the SMTP server and to identify the sender of outgoing emails.
* password: The credential used by the application to authenticate with the SMTP server. This value should be securely stored and must not be hard-coded or committed to source control.

![1765954450412-716.png](/static/img/834a56_1765954450412-716.png)

**7.2.5. Configuring SSL (https)**

Configure SSL for akaBot Center following the instructions provided [here](/docs/center/latest/installation/install-ssl-tls.md)

## **8. Install akaBot Collaboration Center (Optional)**

### **8.1. Install nssm**

Extract the file nssm-2.24.zip to the desired installation path. For example: NSSM\_PATH: C:\akaBot\nssm-2.24

![1698832680035-235.png](/static/img/40a101_1698832680035-235.png)

### **8.2. Install akaBot Collaboration Center**

**Step 1**: Copy and extract the akaBot-cc-3.14.0.zip file to the desired installation path. For example: AKABOT\_CC\_PATH: C:\akaBot\akaBot-cc-3.14.0

![1698832709811-242.png](/static/img/8cbea9_1698832709811-242.png)

**Step 2**: Configure the config-sqlserver.properties file Open the config-sqlserver.properties file and edit it as follows:

1. Configure the MSSQL database connection:
   * spring.datasource.url=jdbc:sqlserver://DB-SERVER:DB-PORT;databaseName=DB-NAME
   * spring.datasource.username=DB-USER
   * spring.datasource.password=DB-PASSWORD
2. Configure the ElasticSearch connection:
   * conductor.elasticsearch.password=Set password

![1698832784356-349.png](/static/img/0f1dcf_1698832784356-349.png)

**Step 3**: Configure akaBotCCSvc service

Open and edit the file **%AKABOT\_CC\_PATH%\install-akaBot-cc-service.bat**

1. Update NSSM\_PATH: %NSSM\_PATH%\win64. *Example*: C:\akaBot\nssm-2.24\win64
2. Update the Java path: %NSSM\_PATH%\nssm install akaBotCCSvc “%JAVA\_HOME%\bin\java.exe” . *Example*: “C:\Program Files\Java\jdk-11\bin\java.exe”
3. Update the App Directory path: %NSSM\_PATH%\nssm set akaBotCCSvc AppDirectory %AKABOT\_CC\_PATH%. *Example*: C:\akaBot\akaBot-cc-3.14.0

![1698832852600-116.png](/static/img/8577c1_1698832852600-116.png)

**Step 4**: Install the akaBotCCSvc service

Open the Command Prompt with "Run as administrator" and run the file %AKABOT\_CC\_PATH%\install-akaBot-cc-service.bat to install the akaBotCCSvc service.

![1698832948891-178.png](/static/img/bfa292_1698832948891-178.png)

### **8.3. Check akaBot Collaboration Center Installation**

**Step 1**: Check the Running status of the akaBotCCSvc service.

![1698832983869-732.png](/static/img/5706c7_1698832983869-732.png)

**Step 2**: Access the URL [http://localhost:3393](http://localhost:3393/) to verify the successful installation of akaBot Collaboration Center.

![1698833007812-806.png](/static/img/1876e3_1698833007812-806.png)

### **8.4. Configure Connection to akaBot Collaboration Center**

**Step 1**: Stop the Apache Tomcat service (if the Apache Tomcat service is currently running).

**Step 2**: Configure the file %TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/application.yml:

* process-builder.enabled: true
* process-builder.conductor.url: [http://localhost:3393/api](http://localhost:3393/api)

![1698833069564-201.png](/static/img/bc5e5d_1698833069564-201.png)

**Step 3**: Configure the file %TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/application-prod.yml:

* Configure log level
  + com.netflix.conductor.client: ERROR
  + sun.net.www: ERROR

![1698833088172-677.png](/static/img/cd64be_1698833088172-677.png)

**Step 4**: Start the Apache Tomcat service again and access [http://localhost:8080/](http://localhost:8080/) to verify the akaBot Center installation.

![1698833120163-411.png](/static/img/c32b9f_1698833120163-411.png)

## **9. Troubleshooting**

### **9.1. ActiveMQ**

**9.1.1. Unable to execute Java command**

![1698833178465-447.png](/static/img/b5ab86_1698833178465-447.png)

* Open the file %ACTIVEMQ\_PATH%\bin\win64\wrapper.conf and configure the parameter:

wrapper.java.command=%JAVA\_HOME%/bin/java.exe

**9.1.2. Other Errors**

Please check the error details in the log file of **ActiveMQ: %ACTIVEMQ\_PATH%\logs\data\wrapper.log**

## **10. Backup for disaster recovery**

Information to be backed up for disaster recovery scenarios:

|  |  |  |  |
| --- | --- | --- | --- |
| **No** | **Name** | **Path** | **Description** |
| 1 | akaBot Center | Database | Database (MSSQL) of akaBot Center |
|   |  | %[TOMCAT\_PATH](#_bookmark21)%/filestorage | Folder containing .nupkg files from akaBot Studio published to akaBot Center |
|   |  | %[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\application.yml  
|   |  | %[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\application-dev.yml  
|   |  | %[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\application-prod.yml  
|   |  | %[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\quartz.properties | Configuration files for akaBot Center |
| 2 | activeMQ | %[ACTIVEMQ\_PATH](#_bookmark25)%\data | activeMQ data directory |
| 3 | akaBot Collaboration Center | Database | Database (MSSQL) of akaBot Collaboration Center |