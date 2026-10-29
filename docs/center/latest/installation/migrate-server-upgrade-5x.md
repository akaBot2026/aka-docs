---
id: migrate-server-upgrade-5x
title: "Migrate akaBot Center to a New Server and Upgrade to 5.x"
sidebar_label: "Server Migration and Upgrade to 5.x"
sidebar_position: 22
description: "Move akaBot Center to a new Windows server, migrate its configuration, and upgrade to version 5.x."
displayed_sidebar: centerSidebar
---

# Migrate akaBot Center to a New Server and Upgrade to 5.x

> Follow this guide to move akaBot Center to a new Windows server and upgrade to **Center 5.x.x.x**. It covers a **standalone setup**, where Tomcat and ActiveMQ run on the same server. Your IT team handles the database backup and move separately.

## **1. Prerequisites**

### **1.1. Software Packages**

The installation must be performed using an account with Administrator privileges on the new server.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **#** | **Name** | **Required version / fixed package** | **Download Link** | **Other versions** |
| 1 | akaBot Center | 5.x.x.x (WAR) | akaBot provides through email. | |
| 2 | Java Developer Kit (OpenLogic) | **17–25** (LTS: 17, 21, 25); package: **17.0.20+8** | **[Download](https://builds.openlogic.com/downloadJDK/openlogic-openjdk/17.0.20+8/openlogic-openjdk-17.0.20+8-windows-x64.msi)** | [OpenLogic downloads](https://www.openlogic.com/openjdk-downloads?field_java_parent_version_target_id=All&field_operating_system_target_id=202&field_architecture_target_id=185&field_java_package_target_id=188) |
| 3 | Apache Tomcat | **10.1.x or 11.0.x**, according to the Center package; package: **10.1.61** | **[Download](https://archive.apache.org/dist/tomcat/tomcat-10/v10.1.61/bin/apache-tomcat-10.1.61.exe)** | [Tomcat 10.1](https://tomcat.apache.org/download-10.cgi) / [Tomcat 11](https://tomcat.apache.org/download-11.cgi) |
| 4 | ActiveMQ Classic | **5.15.x–6.3.x**; package: **6.3.3** | **[Download](https://archive.apache.org/dist/activemq/6.3.3/apache-activemq-6.3.3-bin.zip)** | [ActiveMQ downloads](https://activemq.apache.org/components/classic/download/) |

**Note:**
- This guide uses **JDK 17**, **Tomcat 10.1.61**, and **ActiveMQ 6.3.3**. If the supplied Center package requires Tomcat 11, use the Tomcat 11 link instead. Match the JDK to the selected Center and ActiveMQ versions.
- Center 5.x works with ActiveMQ **5.15.x–6.3.x**. Apache lists **6.3.x** as **Active** and **5.15.x** as **Inactive**, rather than assigning an LTS label. Prefer an active line; ActiveMQ 6.3.x supports Java 17, 21, and 25.
- Allow the ports used by the old server: `8080` (or `443`) for Center, `61616` and `8161` for ActiveMQ, and the configured database port.

## **2. Install Software on the New Server**

### **2.1. Java JDK 17 Installation**

Run the installer -**openlogic-openjdk-17.0.20** you have downloaded. After that, click **"Next"** to proceed.

![1773026436457-662.png](/static/img/8350c5_1773026436457-662.png)

![1773026455322-826.png](/static/img/6cc868_1773026455322-826.png)

![1773026480063-797.png](/static/img/54da96_1773026480063-797.png)

![1773026504396-498.png](/static/img/f18e37_1773026504396-498.png)

* After Installation is complete, you will see the Complete Notification below. Simply click **Finish**. You have successfully installed JDK.

![1773026554098-998.png](/static/img/a9f0ae_1773026554098-998.png)

**Note on JAVA_HOME Environment Variable:**
1. Verify `JAVA_HOME` by running the following command in Command Prompt:
   ```cmd
   echo %JAVA_HOME%
   ```
   The output should point to your JDK 17 installation directory (e.g., `C:\Program Files\OpenLogic\jdk-17.0.20.8-hotspot`).
2. **If `JAVA_HOME` is not set or empty**, configure it manually:
   - Open **Windows Search**, type `env`, and select **Edit the system environment variables**.
   - Click **Environment Variables...**.
   - Under **System variables**, click **New...**, set **Variable name** to `JAVA_HOME` and **Variable value** to your JDK installation path.
   - Find the `Path` variable under System variables, select it, click **Edit...**, click **New**, and add `%JAVA_HOME%\bin`.
   - Click **OK** to save and apply changes, then open a new Command Prompt to verify with `echo %JAVA_HOME%` and `java -version`.

### **2.2. Apache Tomcat Installation**

#### **2.2.1. Install Apache Tomcat**

Apache Tomcat installation:
- Uncheck "Run Apache Tomcat"
- Uncheck "Show Readme"
- Click the "Finish" button to complete the installation.

![1773039471617-579.png](/static/img/28a716_1773039471617-579.png)

![1773039448180-898.png](/static/img/bd8a9b_1773039448180-898.png)

![1773039436317-278.png](/static/img/9a9700_1773039436317-278.png)

The installation path for Apache Tomcat: **%TOMCAT\_PATH%** = **C:\Program Files\Apache Software Foundation\Tomcat 10.1**

#### **2.2.2. Configure log settings**

**Step 1:** Open the file **%TOMCAT\_PATH%\conf\logging.properties**

**Step 2:** Set **maxDays** for the catalina, localhost, manager, and host-manager logs. Example: keep 90 days:

```properties
1catalina.org.apache.juli.AsyncFileHandler.maxDays = 90
2localhost.org.apache.juli.AsyncFileHandler.maxDays = 90
3manager.org.apache.juli.AsyncFileHandler.maxDays = 90
4host-manager.org.apache.juli.AsyncFileHandler.maxDays = 90
```

Find these settings in the file and change their values to `90`. Keep the setting names already used in your file.

![1773039597849-397.png](/static/img/b6cfba_1773039597849-397.png)

**Step 3:** Open the file **%TOMCAT\_PATH%\conf\server.xml**, un-comment the access log setting and add attribute **maxDays** as below:

![1773039659797-700.png](/static/img/0de343_1773039659797-700.png)

#### **2.2.3. Other settings**

**Step 1:** Open **Tomcat10w.exe** in **%TOMCAT\_PATH%\bin** (**Tomcat11w.exe** for Tomcat 11). On the **Java** tab, set **Java Virtual Machine** to the newly installed JDK's `bin\server\jvm.dll`.

![1773039700842-636.png](/static/img/25160e_1773039700842-636.png)

**Step 2**: On the **General** tab, select Startup type: **Automatic**, then choose **Apply**.

![1773039738250-351.png](/static/img/d37ef5_1773039738250-351.png)

**Step 3:** On the **Logging** tab

(1) Log prefix: **Remove "commons-daemon"**

(2) Redirect Stdout: **Remove "auto"**

(3) Redirect Stderror: **Remove "auto"**

(4) Choose **Apply** to apply the configuration changes.

![1773039839582-669.png](/static/img/af673e_1773039839582-669.png)

**Step 4**: On the **Java** tab, set how much RAM Tomcat can use, then click **Apply**:

* **Initial memory pool:** approx. **1/4 of the server's RAM** (minimum 2048 MB).
* **Maximum memory pool:** approx. **1/2 of the server's RAM** (e.g., **16384** MB for 32 GB RAM).

![1773039888230-493.png](/static/img/65d78f_1773039888230-493.png)

#### **2.2.4. Carry over the old Tomcat configuration**

The new Tomcat must keep the custom settings of the old server. On the **old server**, take screenshots or copies of the following, then apply them on the new server:

| Old server | What to check |
| --- | --- |
| `bin\Tomcat*w.exe` → **General**, **Logging**, **Java** tabs | Service name, startup type, memory pool, and **Java Options** (custom `-D...` lines such as `-Dspring.profiles.active`, `-Dfile.encoding`). Point the JVM and any server-specific paths to the new installation. |
| `conf\server.xml` | `Connector` port, HTTPS connector and keystore (`certificateKeystoreFile`, password), `maxPostSize`, `maxHttpHeaderSize`, `AccessLogValve` |
| `conf\logging.properties` | `maxDays` and log levels |
| `bin\setenv.bat` (if exists) | JVM options set outside the service |
| Keystore / certificate files | Copy to the same path on the new server |

![1776754130100-744.png](/static/img/7198ba_1776754130100-744.png)

![1776754151093-356.png](/static/img/744530_1776754151093-356.png)

**Note:** Do **not** overwrite the new `conf` files with the old ones. Use a file comparison tool (e.g., WinMerge, MobaDiff) and copy only the custom values, especially the `Connector` sections.

![1776757773722-234.png](/static/img/65e305_1776757773722-234.png)

![1776757794030-167.png](/static/img/dad40a_1776757794030-167.png)

#### **2.2.5. Check Apache Tomcat Installation**

Start the Apache Tomcat service and access [http://localhost:8080](http://localhost:8080/) (or your configured port) to verify the installation. Then **stop Tomcat** and keep it stopped until Section 10.

![1773040793096-753.png](/static/img/0a10a3_1773040793096-753.png)

### **2.3. ActiveMQ Installation**

#### **2.3.1. Install ActiveMQ**

**Step 1:** Extract the file "apache-activemq-6.3.3-bin.zip" to the desired installation path.

For example: **ACTIVEMQ\_PATH = C:\akaBot\apache-activemq-6.3.3**

The existing installation is usually under `C:\akaBot\apache-activemq-<version>`. On the old server, open **Services → ActiveMQ → Properties** and check **Path to executable** to find its installation directory (`ACTIVEMQ_PATH_OLD`). In this guide, `ACTIVEMQ_PATH` refers to the new installation above.

Note: The installation path should not contain any spaces.

![1773042407269-516.png](/static/img/8ef4e2_1773042407269-516.png)

**Step 2:** Open Command Prompt with Administrator privileges and run **%ACTIVEMQ\_PATH%\bin\win64\InstallService.bat** to install the ActiveMQ service.

![1773042444158-931.png](/static/img/28f86f_1773042444158-931.png)

#### **2.3.2. ActiveMQ Configuration**

**Step 1:** Stop service ActiveMQ (if running).

**Step 2**: Open the file **%ACTIVEMQ\_PATH%\bin\win64\wrapper.conf** and configure the parameters:

```properties
wrapper.java.command=%JAVA_HOME%/bin/java.exe
wrapper.java.initmemory=1024
wrapper.java.maxmemory=4096
```

![1773040188173-944.png](/static/img/dd0c2e_1773040188173-944.png)

**Step 3:** Open **%ACTIVEMQ\_PATH%\conf\jetty-realm.properties** and replace the default password in `admin: admin, admin`. If the old server used custom broker settings (users, ports) in `conf\activemq.xml`, compare and copy only those values into the new file.

If ActiveMQ uses `conf\login.config`, `conf\users.properties`, and `conf\groups.properties` to manage user accounts, bring their required settings and any referenced password files to the new server. The username and password used by Center must match an account in ActiveMQ. The web console has its own password setting.

**Step 4:** Start ActiveMQ Service and access [http://localhost:8161](http://localhost:8161/) to verify.

![1773040248186-927.png](/static/img/1ea791_1773040248186-927.png)

Stop the new ActiveMQ service after this check. Copy the backed-up data into it in Section 7 before switching to the new server.

## **3. Back up License and Configuration**

In this guide, `OLD_TOMCAT` and `NEW_TOMCAT` are the old and new Tomcat installation directories. Create a backup folder outside Tomcat, such as `D:\backup-center-data`.

Copy the following from the **old server before deactivating the license**:

| Source under `OLD_TOMCAT` | Back up |
| --- | --- |
| `webapps\ROOT\WEB-INF\classes\license` | Entire `license` folder |
| `webapps\ROOT\WEB-INF\classes\quartz.properties` | `quartz.properties` |
| `webapps\ROOT\WEB-INF\classes\config` | `application.yml`, `application-dev.yml`, and `application-prod.yml` |

![Back up the license folder and Quartz configuration](/static/img/center-migrate-backup-license-and-quartz.png)

![Back up the three application YAML files](/static/img/center-migrate-backup-application-config.png)

## **4. Save the License Key, then Deactivate**

While the old Center is still running:

**Step 1:** Open **Administration → License**, open the license menu, and select **Get LMS license**.

![Get the LMS license key before deactivating the old license](/static/img/center-migrate-get-lms-license-and-deactivate.png)

**Step 2:** Copy the license key to a file in the backup folder, for example `lms-license-key.txt`.

![Copy and save the LMS license key](/static/img/center-migrate-get-lms-license-key.png)

**Step 3:** Select **Deactive License** and copy the **Deactivate Request**.

![Confirm deactivation and copy the request](/static/img/center-migrate-confirm-and-copy-deactivate-request.png)

**Step 4:** Open [LMS Deactivation](https://aegis.akabot.com/#/deactivation), paste the request, and click **Deactivate License**.

![Submit the request on the LMS deactivation page](/static/img/center-migrate-deactive-on-lms.png)

## **5. Stop the Old Center and Copy its Data**

Wait for running jobs to finish before stopping the old Center.

**Step 1:** Open `services.msc` on the old server and **stop the Apache Tomcat service** running Center.

![Stop the old Center Tomcat service](/static/img/center-migrate-stop-tomcat-center.png)

**Step 2:** Copy **`OLD_TOMCAT\indexes`** and **`OLD_TOMCAT\filestorage`** into the backup folder.

![Copy filestorage and indexes after stopping Center](/static/img/center-migrate-backup-filestorage-indexes.png)

**Step 3: Back up ActiveMQ data.** With the old Center stopped, stop the old **ActiveMQ** service and wait until it is fully stopped. Copy the **entire `kahadb` folder**, including all its files, into `D:\backup-center-data`:

| Old server (example) | Backup folder |
| --- | --- |
| `C:\akaBot\apache-activemq-5.15.1\data\kahadb` | `D:\backup-center-data\kahadb` |

Use the old installation folder found in Section 2.3. ActiveMQ saves messages to disk in `kahadb` by default. If the folder was moved elsewhere, use the location set in `conf\activemq.xml`. Keep the old Center and ActiveMQ stopped after the backup.

![Stop the old ActiveMQ service](/static/img/center-migrate-stop-activemq.png)

![Copy the ActiveMQ kahadb folder](/static/img/center-migrate-copy-activemq-kahadb.png)

Confirm the backup folder contains `license`, `quartz.properties`, the three application YAML files, the saved LMS license key, `indexes`, `filestorage`, and `kahadb`.

![Completed Center and ActiveMQ backup, including kahadb and the saved license key](/static/img/center-migrate-all-backup.png)

## **6. Prepare the Database**

Ask the IT team responsible for your database to complete these steps. Keep the old Center stopped:

1. Back up the existing Center database after stopping the old Center, together with the file backups in Section 5. Check that the database backup can be restored.
2. If moving the database to another server, prepare that server, restore the backup, and check the restored data. Use database software and a version supported by your Center package. If keeping the current database server, allow connections from the new Center server.
3. Check that the account used by Center can log in and has the permissions needed to run and upgrade Center.
4. Save the database server address, port, database name, username, and password. Use these details in Section 9.

Use the **existing database or the database restored from your backup** so Center keeps its data. For SQL Server, your IT team can follow [Microsoft: Copy databases with backup and restore](https://learn.microsoft.com/en-us/sql/relational-databases/databases/copy-databases-with-backup-and-restore) and [Microsoft: Transfer logins](https://learn.microsoft.com/en-us/troubleshoot/sql/security/transfer-logins-passwords-between-instances).

## **7. Deploy Center and Restore Data**

On the **new server**, keep Tomcat stopped:

**Step 1:** Copy the **Center 5.x.x.x WAR** to `NEW_TOMCAT\webapps\ROOT.war` and extract it to `NEW_TOMCAT\webapps\ROOT`.

**Step 2:** Copy the backed-up `indexes` and `filestorage` folders into `NEW_TOMCAT`.

**Step 3:** Copy the backed-up `quartz.properties` to `NEW_TOMCAT\webapps\ROOT\WEB-INF\classes\`. In this file, enable the setting for your database type (for example, `org.quartz.impl.jdbcjobstore.MSSQLDelegate` for SQL Server) and comment out the settings for other database types.

**Step 4: Restore ActiveMQ data on the new server.** Keep the new Center stopped and confirm the new **ActiveMQ** service is stopped.

1. Transfer the backup folder to the new server. If `ACTIVEMQ_PATH\data\kahadb` already exists from the installation check, move it aside as `kahadb-before-restore`.
2. Copy the backed-up `kahadb` folder into the new ActiveMQ **`data`** directory:

| Backup on the new server | Restore destination (example) |
| --- | --- |
| `D:\backup-center-data\kahadb` | `C:\akaBot\apache-activemq-6.3.3\data\kahadb` |

3. Open `data\kahadb` and check that the backed-up files are inside it. Avoid creating an extra `kahadb\kahadb` folder. If ActiveMQ uses a different storage location, copy the files there. The Windows account running the ActiveMQ service needs permission to read and write these files.
4. Start the new **ActiveMQ** service. Check the broker log and `http://localhost:8161` to confirm the restored queues/messages are available. Keep Center stopped until the remaining configuration is complete and you reach Section 10. Keep the original backup intact until validation is complete.

![Start the new ActiveMQ service](/static/img/center-migrate-start-activemq.png)

**Step 5:** Open `NEW_TOMCAT\webapps\ROOT\WEB-INF\classes\logback-spring.xml` and set `maxFileSize` = **200MB**, `maxHistory` = **20**, `totalSizeCap` = **20GB**.

![Configure Center rolling-log limits](/static/img/9fcee7_1773043114230-690.png)

## **8. Migrate the Application Configuration**

Download and extract the [Application Configuration Migration Tool](https://ws3.akabot.com/s/GVlG0mQ2AqMyxEz), for example to `D:\migration-application-config-tool`.

| Tool folder | Files to place inside it |
| --- | --- |
| `old` | The three backed-up `application*.yml` files from the **old Center** |
| `new` | The three `application*.yml` files from `NEW_TOMCAT\webapps\ROOT\WEB-INF\classes\config` |
| `result` | Generated by the tool |

Open Command Prompt as Administrator and run:

```cmd
cd /d D:\migration-application-config-tool
migrate-config.bat
```

![Run the Windows configuration migration tool](/static/img/center-migrate-run-migration-config-on-windows.png)

After **Migration completed successfully**, copy the three files from `result` into `NEW_TOMCAT\webapps\ROOT\WEB-INF\classes\config`, replacing the existing files.

![Copy the generated YAML files from result](/static/img/center-migrate-copy-result-config.png)

## **9. Check Settings before Starting Center**

The tool copies connection details from the old server, so check them before starting Center. Find `spring.profiles.active` in `application.yml` or the Tomcat **Java Options**. If it is `prod`, check `application-prod.yml`; if it is `dev`, check `application-dev.yml`:

- Under `datasource`, enter the database address, port, name, username, and password saved in Section 6. If keeping the current database, keep its connection details and check that the new Center server can connect.
- In the new file, enable the JDBC driver and JPA settings listed for your database type. These settings tell Center how to connect to and use the database. If the connection uses a certificate, check that the new Center server trusts it.

![Review the datasource URL and credentials for your database; the screenshot shows example values](/static/img/center-migrate-check-db-config-and-edit.png)

Also check the ActiveMQ broker URL and credentials, file storage paths, and Center public URL.

## **10. Start Center, Activate the License, and Verify**

**Step 1:** Confirm the database and ActiveMQ are running, then **start the new Center Tomcat service**. Keep the old Center stopped.

![Start the new Center Tomcat service](/static/img/center-migrate-start-center-tomcat.png)

**Step 2:** Check the Tomcat/Center logs for errors, then open the new Center URL and sign in.

**Step 3:** Use the **license key saved in Section 4** and follow [License Activation](/docs/center/latest/installation/license-activation.md).

**Step 4:** Verify the Center version is 5.x and the license is active, and check users, Agents, processes, schedules, queues, and file downloads. Run a test job before switching Agents or DNS to the new server.

**Note:** Keep the backups until validation is complete. Do not connect the old Center to a database already upgraded by Center 5.x.
