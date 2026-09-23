---
id: center-5x-postgresql-windows
title: "Install Akabot Center 5x and PostgreSQL on Microsoft Windows"
sidebar_label: "Center 5x and PostgreSQL on Microsoft Windows"
sidebar_position: 7
description: "Install Akabot Center 5x and PostgreSQL on Microsoft Windows documentation."
displayed_sidebar: centerSidebar
---
# Install Akabot Center 5X and PostgreSQL on Microsoft Windows

> This guide provides instructions to installing a single instance of **akaBot Center version 5.x** with **PostgreSQL** as the database engine. The target Operating System (OS) in this guideline is **Microsoft Windows**.

## **1. Prerequisites**

### **1.1. Hardware and OS Requirements**

|  |  |
| --- | --- |
| **Configuration** | **Requirements** |
| Hardware | RAM: 32GB or higher <br/> Core: 8 CPU or higher <br/> SSD: 512 GB |
| Operating System | Windows 10, 11, Server 2012 R2/2016/2019 |

### **1.2. Software Packages**

The installation must be performed using an account with Administrator (root) privileges on the target machine.  
You need to prepare the installation package according to the following list.

**Note:**  
- If the computer where you're installing Center does not have an internet connection, please download the installation package externally and copy it to the machine.  
- To avoid errors during installation with command line execution, please use a dedicated folder for akaBot Center installation and name the installation package directory without any spaces. For example: C:\akaBot

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **#** | **Name** | **File Name** | **Version** | **Description** | **Download Link** |
| 1 | akaBot Center | akaBot-center- 5.x.x.x.war | Newest version | akaBot Center installation package | akaBot provides through email after the customer makes a purchase. |
| 2 | Java Developer Kit | openlogic-openjdk-17.0.16 | 17.0.16 | Open logic JDK 17.0.16 | **[Download](https://builds.openlogic.com/downloadJDK/openlogic-openjdk/17.0.16+8/openlogic-openjdk-17.0.16+8-windows-x64.msi)** |
| 3 | Apache tomcat | apache-tomcat-10.1.52.exe | 10.1.52 | Web server Apache Tomcat | **[Download](https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.52/bin/apache-tomcat-10.1.52.exe)** |
| 4 | ActiveMQ | apache-activemq- 5.15.1-bin.zip | 5.15.1 | ActiveMQ for Queue functionality in akaBot Center | **[Download](https://archive.apache.org/dist/activemq/5.15.1/apache-activemq-5.15.1-bin.zip)** |
| 5 | PostgreSQL | postgresql-18.3-2-windows-x64 | 18.3 | The database engine of akaBot Center | Read**Section 3.1**for more details |

### **1.3. Network & Firewall Requirements**

Ensure the following ports are open in **Windows Defender Firewall** (for on-premises / physical servers) or configured in **Cloud Security Groups / Network Security Groups (NSGs)** (for AWS EC2, Azure VM, GCP):

| **Port** | **Protocol** | **Direction** | **Service / Component** | **Description & Access Scope** |
|---|---|---|---|---|
| `8080` (or `443`) | TCP | Inbound | Apache Tomcat / akaBot Center | Web UI and REST API for Users and akaBot Agents. |
| `8161` | TCP | Inbound | ActiveMQ Web Console | Administration web console for queue monitoring (restrict to admin IP/VPN). |
| `61616` | TCP | Inbound | ActiveMQ Broker (OpenWire) | JMS messaging port used by Center and Agents for queue tasks. |
| `5432` | TCP | Inbound / Outbound | PostgreSQL Server | Database communication port between akaBot Center and PostgreSQL. |

> **Tip for Cloud & Remote Access:**  
> When accessing akaBot Center or ActiveMQ remotely (outside the server itself), replace `localhost` with the server's **Private IP** (within LAN/VPC) or **Public IP / Domain Name** (e.g., `http://<SERVER_IP>:8080/`). Ensure your cloud security group allows inbound traffic on that port from your client IP.

## **2. Java JDK 17 Installation**

Run the installer -**openlogic-openjdk-17.0.16** you have downloaded. After that, click **"Next"** to proceed.

![1773026436457-662.png](/static/img/3ca271_1773026436457-662.png)

![1773026455322-826.png](/static/img/9663dd_1773026455322-826.png)

![1773026480063-797.png](/static/img/b3970d_1773026480063-797.png)

![1773026504396-498.png](/static/img/2a61e6_1773026504396-498.png)

* After Installation is complete, you will see the Complete Notification below. Simply click **Finish**. You have successfully installed JDK.

![1773026554098-998.png](/static/img/40c7a4_1773026554098-998.png)

**Note on JAVA_HOME Environment Variable:**
1. Verify `JAVA_HOME` by running the following command in Command Prompt:
   ```cmd
   echo %JAVA_HOME%
   ```
   The output should point to your JDK 17 installation directory (e.g., `C:\Program Files\OpenLogic\jdk-17.0.16.8-hotspot`).
2. **If `JAVA_HOME` is not set or empty**, configure it manually:
   - Open **Windows Search**, type `env`, and select **Edit the system environment variables**.
   - Click **Environment Variables...**.
   - Under **System variables**, click **New...**, set **Variable name** to `JAVA_HOME` and **Variable value** to your JDK installation path (e.g., `C:\Program Files\OpenLogic\jdk-17.0.16.8-hotspot`).
   - Find the `Path` variable under System variables, select it, click **Edit...**, click **New**, and add `%JAVA_HOME%\bin`.
   - Click **OK** to save and apply changes, then open a new Command Prompt to verify with `echo %JAVA_HOME%` and `java -version`.

## **3. PostgreSQL installation**

> **Note for Existing Database:**  
> If you already have an existing database, you can **skip Section 3** and proceed directly to **Section 4**. Simply ensure an empty database (e.g., `aka_orchestrator`) is created and ready for connection in **Section 6.2.2**.

### **3.1. Install PostgreSQL**

Download link: [https://www.enterprisedb.com/downloads/postgres-postgresql-downloads](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

**Step 1:** Open file

* Open setup file from your computer
* Follow these steps below:

![1773111578739-129.png](/static/img/df9569_1773111578739-129.png)

![1773114333220-825.png](/static/img/364270_1773114333220-825.png)

![1773114368791-509.png](/static/img/1a0991_1773114368791-509.png)

![1773114465751-567.png](/static/img/359d26_1773114465751-567.png)

**Step 2:** Set up your password

* Note: This password will be used in next steps, thus remember this one.

![1773114546424-196.png](/static/img/d99807_1773114546424-196.png)

**Step 3:** Install

* Use default port code

![1773114627305-610.png](/static/img/c0b53b_1773114627305-610.png)

![1773114687711-726.png](/static/img/8772a1_1773114687711-726.png)

* Click button **"Next"** to install

![1773114744583-571.png](/static/img/44c563_1773114744583-571.png)

* Here is the successful screen. Click **"Finish"** to close the window.

![1773114856970-621.png](/static/img/5db87e_1773114856970-621.png)

### **3.2. Setup Stack builder**

* Click **"Next"**

![1773131442848-150.png](/static/img/39dc2b_1773131442848-150.png)

![1773131458317-548.png](/static/img/1984cb_1773131458317-548.png)

![1773115130094-189.png](/static/img/a431c2_1773115130094-189.png)

* Here is the screen announcing that all the installation files have now been successfully downloaded. Click **"Next"** and **"Finish"**

![1773130004131-273.png](/static/img/d1a8f1_1773130004131-273.png)

* You can double check whether PostgreSQL is running through Services.

![1773130089004-725.png](/static/img/924bea_1773130089004-725.png)

### **3.3. Create database**

**Step 1:** Open **pgAdmin4**

**Step 2:** Right click **"Databases"** > Create > Database...

![1773128994191-351.png](/static/img/cba5e5_1773128994191-351.png)

* Input new database: **aka\_orchestrator** in **General**tab, then click **"Save"**

![1773129095687-215.png](/static/img/ebca57_1773129095687-215.png)

![1773129157904-918.png](/static/img/c58482_1773129157904-918.png)

## **4. Apache Tomcat installation**

### **4.1. Install Apache Tomcat**

Apache Tomcat installation:  
- Uncheck "Run Apache Tomcat"  
- Uncheck "Show Readme"  
- Click the "Finish" button to complete the installation.

![1773039471617-579.png](/static/img/a53804_1773039471617-579.png)

![1773039448180-898.png](/static/img/b428d6_1773039448180-898.png)

![1773039436317-278.png](/static/img/fae530_1773039436317-278.png)

The installation path for Apache Tomcat: **%TOMCAT\_PATH%** = **C:\Program Files\Apache Software Foundation\Tomcat 10.1**

### **4.2. Apache Tomcat Configuration**

#### **4.2.1. Configure log settings**

**Step 1: **Open the file **%TOMCAT\_PATH%\conf\logging.properties**

**Step 2:** Add attribute **maxDays** to specify the maximum number of days that rotated access logs will be retained for before being deleted for the catalina, localhost, host-manager, manager logs. If not specified, the default value of -1 will be used which means never delete old files.

* Example: keep 90 daysworth of history. Change the number at the end of the following rows:
  + `catalina.org.apache.juli.AsyncFileHandler.maxDays` = **90**
  + `localhost.org.apache.juli.AsyncFileHandler.maxDays` = **90**
  + `manager.org.apache.juli.AsyncFileHandler.maxDays` = **90**
  + `host-manager.org.apache.juli.AsyncFileHandler.maxDays` = **90**

**Step 3:** Save changes and close the file.

![1773039597849-397.png](/static/img/b3e77f_1773039597849-397.png)

**Step 4:** Open the file **%TOMCAT\_PATH%\conf\server.xml**

**Step 5:** Un-Comment the line of log setting to turn on the log and add attribute **maxDays** as below:

![1773039659797-700.png](/static/img/140d78_1773039659797-700.png)

**Step 6:** Save changes and close the file

#### **4.2.2. Other settings**

**Step 1:** Navigate to the path **%TOMCAT\_PATH%\bin** and double-click the file **Tomcat10w.exe** to open the Apache Tomcat Service configuration.

![1773039700842-636.png](/static/img/504895_1773039700842-636.png)

**Step 2**: On the **General** tab

* Select Startup type: **Automatic**
* Choose **Apply** to apply the configuration changes.

![1773039738250-351.png](/static/img/ae3bbb_1773039738250-351.png)

**Step 3:** On the **Logging** tab

(1) Log prefix: **Remove "commons-daemon"**

(2) Redirect Stdout: **Remove "auto"**

(3) Redirect Stderror: **Remove "auto"**

(4) Choose **Apply** to apply the configuration changes.

![1773039839582-669.png](/static/img/d5f78c_1773039839582-669.png)

**Step 4:** On the **Java** tab

a. Adjust the Java Heap configuration:

* **Initial memory pool:** Enter a value approx. **1/4 of the server's RAM** (minimum 2048 MB).
  - *Example (Server RAM = 32 GB):* Set Initial memory pool to **4096** MB (or 8192 MB).
  - *Example (Server RAM = 16 GB):* Set Initial memory pool to **2048** MB (or 4096 MB).

* **Maximum memory pool:** Enter a value approx. **1/2 of the server's RAM**.
  - *Example (Server RAM = 32 GB):* Set Maximum memory pool to **16384** MB (16 GB).
  - *Example (Server RAM = 16 GB):* Set Maximum memory pool to **8192** MB (8 GB).

> **Note:** Do not set Maximum memory pool larger than 1/2 of the server's RAM, as the operating system, ActiveMQ, and database engine require sufficient RAM to operate without OutOfMemory (OOM) failures.

b. Choose **Apply** to apply the configuration changes.

![1773039888230-493.png](/static/img/9e0c8a_1773039888230-493.png)

**Step 5:** Start the Tomcat Service

On the **General** tab, select **Start** to initiate the Apache Tomcat service.

![1773044980268-508.png](/static/img/ff6bab_1773044980268-508.png)

### **4.3. Check Apache Tomcat Installation**

**Step 1:** After installation and configuration, go to the Services screen and check the status of the Apache Tomcat service.

* If the Status is not Running, start the Apache Tomcat service.
* If the Status is Running, proceed to step 2.

![1773045039977-189.png](/static/img/72426f_1773045039977-189.png)

**Step 2:** Access the URL [http://localhost:8080](http://localhost:8080/) in Chrome to verify the successful installation of Apache Tomcat:

![1773040793096-753.png](/static/img/0b321f_1773040793096-753.png)

## **5. ActiveMQ Installation**

### **5.1. Install ActiveMQ**

**Step 1:** Extract the file "apache-activemq-5.15.1-bin.zip" to the desired installation path.

For example: **ACTIVEMQ\_PATH = C:\akaBot\apache-activemq-5.15.1**

Note: The installation path should not contain any spaces.

![1773042407269-516.png](/static/img/398a8d_1773042407269-516.png)

**Step 2:** Open Command Prompt with Administrator privileges.

![1773042420627-885.png](/static/img/9e3df4_1773042420627-885.png)

**Step 3:** Run the file %ACTIVEMQ\_PATH%\bin\win64\InstallService.bat to install the ActiveMQ service.

Run command:**C:\Windows\System32>C:\akaBot\apache-activemq-5.15.1\bin\win64\InstallService.bat**

![1773042444158-931.png](/static/img/9c9449_1773042444158-931.png)

**Step 4**: Start the ActiveMQ service.

![1773042459471-219.png](/static/img/5f7cff_1773042459471-219.png)

### **5.2. ActiveMQ Configuration**

**Step 1:** Stop service ActiveMQ (if running).

**Step 2**: Open the file **%ACTIVEMQ\_PATH%\bin\win64\wrapper.conf** and configure the parameters:

* ***wrapper.java.command:*** Ensure ActiveMQ uses your installed JDK 17 explicitly to avoid startup failures on Windows:
  ```properties
  wrapper.java.command=%JAVA_HOME%/bin/java.exe
  ```

* ***wrapper.java.initmemory:*** Enter the initial value for Java Heap memory in MB (e.g., `1024` for a 32 GB RAM server).

* ***wrapper.java.maxmemory:*** Enter the maximum value for Java Heap memory in MB (e.g., `4096` for a 32 GB RAM server).

![1773040188173-944.png](/static/img/d71f72_1773040188173-944.png)

**Step 3 (Security Best Practice):** Change the default Web Console credentials:
* Open **%ACTIVEMQ\_PATH%\conf\jetty-realm.properties** in a text editor.
* Locate the line: `admin: admin, admin`
* Replace the default password `admin` with your secure password: `admin: <YOUR_SECURE_PASSWORD>, admin`
* Save and close the file.

**Step 4:** Start ActiveMQ Service.

![1773045637327-680.png](/static/img/4220b9_1773045637327-680.png)

### **5.3. Check ActiveMQ Installation**

**Step 1**: Check the Running status of the ActiveMQ service. If it is not running, start the service.

![1773040234841-235.png](/static/img/cf8369_1773040234841-235.png)

**Step 2**: Access the URL [http://localhost:8161](http://localhost:8161/) to verify the successful installation of ActiveMQ.

![1773040248186-927.png](/static/img/dbc1ce_1773040248186-927.png)

## **6. akaBot Center Installation**

> **Tip (for Virtual Machines / Cloud Environments):**  
> If you are deploying on a Virtual Machine (e.g., VMware, Hyper-V) or Cloud instance (e.g., AWS EC2, Azure VM), it is strongly recommended to take a **VM Checkpoint / Snapshot** at this stage (after successfully installing and verifying JDK, Database, Tomcat, and ActiveMQ).  
> This allows you to quickly roll back to a clean, working foundation if any configuration issues arise during the akaBot Center setup without needing to reinstall prerequisite services.

**Download akaBot-center- 5.x.x.x.war.**

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

#### **6.2.1. Config quartz.properties**

**Step 1:** Stop the Apache Tomcat service (if the Apache Tomcat service is currently running).

**Step 2:** Modify the configuration in the file **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/quartz.properties** as follows:

***1. Comment out the jobstore configuration for MySQL, MSSQL, Oracle.***

***2. Remove the "#" character at the beginning of the line for the jobstore configuration for PostgreSQL to uncomment it.***

![1773125144942-717.png](/static/img/ab5dc3_1773125144942-717.png)

#### **6.2.2. Configure the PostgreSQL Database Connection**

**Step 1**: Navigate to the path **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/**

**Step 2**: Modify the configuration in **both files:** ***application-dev.yml*** and ***application-prod.yml***

**Remove** the # characters at the beginning of the lines to uncomment the configuration and enable **PostgreSQL** usage. Add the "#" characters at the beginning of the lines to comment out the configuration and disable MySQL, MSSQL,...

**Input** your username and password that you created in **3.2>Step 3.**

* ***application-dev.yml***

![1773125613939-709.png](/static/img/b5165a_1773125613939-709.png)

![1773128009161-558.png](/static/img/d45143_1773128009161-558.png)

![1773125955638-262.png](/static/img/057954_1773125955638-262.png)

* ***application-prod.yml***

![1773126830845-429.png](/static/img/51b325_1773126830845-429.png)

![1773126055777-449.png](/static/img/14e767_1773126055777-449.png)

* **Save** files after configuring.

#### **6.2.3. Log setting**

1. Open the file **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/logback-spring.xml**

2. Change the **log level** to ERROR

3. Change the setting in rolling log file as below:

* **maxFileSize:** Limit the size of each file. Ex: 200MB.
* **maxHistory**: The optional maxHistory property controls the maximum number of archive files to keep. Ex: 20
* **totalSizeCap:** The optional totalSizeCap property controls the total size of all archive files. Ex: 20GB

![1773126136316-429.png](/static/img/c4aa14_1773126136316-429.png)

4. Save changes and close file

5. **Start the Apache Tomcat** service and access **[http://localhost:8080/](http://localhost:8080/)** to verify the installation of akaBot Center.

![1773045819506-903.png](/static/img/8b4b2a_1773045819506-903.png)

![1773044661288-968.png](/static/img/akb-center-login.png)

6. Log in using the following credentials:

* username: **admin**
* password:  **admin**
* You will be redirected to the dashboard as shown below.

![1773044690105-331.png](/static/img/akb-center-home.png)

## **7. Troubleshooting**

### **7.1. ActiveMQ**

#### **7.1.1. Unable to execute Java command**

* Open the file %ACTIVEMQ\_PATH%\bin\win64\wrapper.conf and configure the parameter:

wrapper.java.command=%JAVA\_HOME%/bin/java.exe

#### **7.1.2. Other Errors**

Please check the error details in the log file of **ActiveMQ: %ACTIVEMQ\_PATH%\logs\data\wrapper.log**

## **8. Backup and Disaster Recovery**

To ensure business continuity, minimize downtime, and meet compliance requirements, a robust backup and disaster recovery strategy must cover **what to back up**, **frequency and retention**, and **how to restore**.

### **8.1. Strategy Selection by Infrastructure Capability**

Choose your backup method based on your infrastructure capabilities rather than physical location:

- **Method A: Snapshot-based Backup (Recommended for Snapshot-capable Infrastructure):**  
  Applies to environments with a snapshot/checkpoint layer — including Cloud platforms (AWS EC2, Azure VM, GCP) and on-premises virtualization platforms (VMware vSphere, Hyper-V, Nutanix).
- **Method B: File & Database-level Backup (For Physical / Non-snapshot Environments):**  
  Applies to bare-metal physical servers or environments requiring granular off-site archiving and secondary storage copies.

---

### **8.2. Method A: Snapshot-based Backup (Cloud / Virtual Machines)**

If your infrastructure supports disk snapshots or machine images:

1. **Center & ActiveMQ Server (VM / EC2 Instance):**
   - Take regular snapshots or AMIs covering **all attached storage volumes**.
   - > **Important (ActiveMQ Data Persistence):** Ensure the volume housing the ActiveMQ data directory (`%ACTIVEMQ_PATH%\data`) is included in the snapshot scope. If ActiveMQ data resides on a separate volume and is omitted from the snapshot, in-flight message queue states will be lost upon recovery.
2. **Database (Cloud Managed / Virtualized Database):**
   - For managed databases, enable **Automated Daily Backups** with **Point-In-Time Recovery (PITR)** (recommended retention: 7 to 35 days).
   - For self-hosted PostgreSQL on VMs, schedule daily VM/volume-level snapshots in addition to native write-ahead log (WAL) archiving.
   - Always trigger a manual snapshot prior to any version upgrade or database migration.
3. **Shared File Storage:**
   - If using shared network storage (e.g., AWS EFS, Amazon FSx, NFS/SMB NAS) for `.nupkg` packages across multiple nodes, configure automated daily snapshot or backup policies (e.g., via AWS Backup).

---

### **8.3. Method B: File & Database-level Backup Checklist**

For bare-metal physical servers or secondary off-site backup archiving, follow this backup schedule:

| **No** | **Component** | **Path / Location** | **Recommended Frequency** | **Retention Policy** | **Description** |
|---|---|---|---|---|---|
| 1 | **akaBot Center** | PostgreSQL Database (`aka_orchestrator` by default) | Daily full dump + Continuous WAL | 30–90 days | Database (PostgreSQL) of akaBot Center. Export using `pg_dump`. |
|  |  | `%TOMCAT_PATH%\filestorage` | Daily incremental sync | 30 days | Folder containing `.nupkg` files from akaBot Studio published to akaBot Center. Use incremental/differential sync. |
|  |  | `%TOMCAT_PATH%\webapps\ROOT\WEB-INF\classes\config\application.yml` | On change / Weekly | Indefinite | Base configuration file for akaBot Center. |
|  |  | `%TOMCAT_PATH%\webapps\ROOT\WEB-INF\classes\config\application-dev.yml` | On change / Weekly | Indefinite | Development configuration file for akaBot Center. |
|  |  | `%TOMCAT_PATH%\webapps\ROOT\WEB-INF\classes\config\application-prod.yml` | On change / Weekly | Indefinite | Production configuration file for akaBot Center (overrides `application.yml` in prod profile). |
|  |  | `%TOMCAT_PATH%\webapps\ROOT\WEB-INF\classes\config\quartz.properties` | On change / Weekly | Indefinite | Quartz job scheduler database connection and thread configuration. |
|  |  | `%TOMCAT_PATH%\webapps\ROOT\WEB-INF\classes\license\license.lic` | On initial & renewal | Indefinite | License activation file for akaBot Center. |
| 2 | **ActiveMQ** | `%ACTIVEMQ_PATH%\data` | Daily | 7–14 days | ActiveMQ message queue persistence directory. |

#### **Application Configuration Files & Spring Profile Precedence:**
Located in `%TOMCAT_PATH%\webapps\ROOT\WEB-INF\classes\config\`:
- `application.yml`: Base configuration containing common framework defaults.
- `application-prod.yml`: **Primary source of truth for Production.** When Center runs with the production profile (`-Dspring.profiles.active=prod`), settings in this file override the base `application.yml`.
- `application-dev.yml`: Used strictly for development/debugging environments.
- `quartz.properties`: Job scheduler database and thread pool settings.

---

## **9. Activate Licenses**

Please follow the instruction via **[Activation](/docs/center/latest/installation/license-activation.md)**
