---
id: on-premise-deployment
title: "On-Premise Deployment Guide"
sidebar_label: "On-Premise Deployment"
sidebar_position: 1
description: "Deploy akaBot Migration Tool on-premise on Windows or Linux using Java JAR or Docker."
displayed_sidebar: migrationToolSidebar
---

# akaBot Migration Tool — On-Premise Deployment Guide

This guide provides step-by-step instructions to deploy the **akaBot Migration Tool** on-premise for both **Windows** and **Linux** operating systems. The application can be executed either as a standalone Java executable (JAR) or as a containerized Docker application.

---

## **1. Release Package Contents**

The release package consists of the following components:

| File Path / Component | Purpose |
|-----------------------|---------|
| `../common/migration-tool-onprem.jar` | Packaged Spring Boot application executable, shared between Windows and Linux. |
| `application-onprem.example.properties` | Sample configuration properties file for running directly as a Java/JAR runtime. |
| `.env.onprem.example` | Sample environment variables file for running within a Docker container. |
| `start-onprem.bat` / `start-onprem.sh` | Startup script for starting the application as a JAR on Windows (BAT) or Linux (Shell). |
| `docker-run-onprem.ps1` / `docker-run-onprem.sh` | Execution scripts to start the Docker container on Windows or Linux. |
| `../common/ScanCodeConfigFiles` | Configuration configurations used for project analysis and report generation. |
| `../common/MigrationConfigFiles` | Activity mappings and conversion files used for project migration. |

---

## **2. System Prerequisites**

Before starting the deployment, ensure the host machine meets the following requirements:

### **Runtime Requirements**
* **Without Docker**: Java Development Kit (JDK) or Java Runtime Environment (JRE) version **Java 17** must be installed and added to the system `PATH`.
* **With Docker**: **Docker Engine** (or Docker Desktop) runtime must be installed and running.

### **Supported Databases**
* **PostgreSQL or MySQL**: Recommended for production environments.
* **Embedded H2 Database**: Pre-packaged, file-based database that requires **zero installation** or configuration. It is created automatically, making it ideal for quick product demonstrations (demos) or local testing.

---

## **3. Database Setup & Configurations**

Configure your target database by defining the datasource properties. Update the host, port, database name, and credentials accordingly.

### **Option A: PostgreSQL (Production)**
```properties
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/migration_tool
SPRING_DATASOURCE_USERNAME=migration_tool
SPRING_DATASOURCE_PASSWORD=<database-password>
```

### **Option B: MySQL (Production)**
```properties
SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/migration_tool?useUnicode=true&characterEncoding=utf8&serverTimezone=UTC
SPRING_DATASOURCE_USERNAME=migration_tool
SPRING_DATASOURCE_PASSWORD=<database-password>
```

### **Option C: Built-in H2 Database (Demo / Local — Zero Installation)**
H2 is an embedded, file-based database that comes pre-packaged with the application. You do **not** need to install or configure any external database software (like PostgreSQL or MySQL). The application will automatically create and store all database files directly on the local disk.

```properties
SPRING_DATASOURCE_URL=jdbc:h2:file:./data/migration_tool;MODE=PostgreSQL;DATABASE_TO_LOWER=TRUE
SPRING_DATASOURCE_USERNAME=sa
SPRING_DATASOURCE_PASSWORD=akaBot@12345
```

---

## **4. Deployment on Windows**

### **Method A: Using Batch Files (Recommended for Non-Technical Users)**
We provide pre-configured `.bat` scripts. Simply execute the corresponding batch files to manage the lifecycle of the application:
* **Run in Foreground**: Double-click `start-onprem.bat`. The console window will stay open to show output logs.
* **Run in Background**: Double-click `start-onprem-background.bat` to run the application silently in the background.
* **Stop Application**: Double-click `stop-onprem.bat` to safely shut down the background process.

### **Method B: Using PowerShell (For System Administrators)**
Open Windows PowerShell in the deployment directory and run:
* **Start Application**:
  ```powershell
  .\start-onprem.ps1
  ```
* **Stop Application** (if running in background):
  ```powershell
  .\stop-onprem.ps1
  ```

### **Method C: Containerized with Docker**
To build the Docker image and launch the container on Windows:
1. Open PowerShell and navigate to the directory.
2. Build the Docker image:
   ```powershell
   docker build -f ..\common\Dockerfile.onprem -t migration-tool-onprem:latest ..\common
   ```
3. Prepare the environment file:
   ```powershell
   Copy-Item .\.env.onprem.example .\.env.onprem
   notepad .\.env.onprem
   ```
4. Run the startup script:
   ```powershell
   .\docker-run-onprem.ps1
   ```

---

## **5. Deployment on Linux**

### **Method A: Standalone Java Execution**
1. Copy the sample properties file and configure the parameters:
   ```bash
   cp application-onprem.example.properties application-onprem.properties
   vi application-onprem.properties
   ```
2. Grant execution permissions and run the startup script:
   ```bash
   chmod +x start-onprem.sh
   ./start-onprem.sh
   ```

### **Method B: Containerized with Docker**
To deploy inside a Docker container on Linux:
1. Build the Docker image:
   ```bash
   docker build -f ../common/Dockerfile.onprem -t migration-tool-onprem:latest ../common
   ```
2. Copy and configure the environment variables:
   ```bash
   cp .env.onprem.example .env.onprem
   vi .env.onprem
   ```
3. Grant execution permissions and run the container script:
   ```bash
   chmod +x docker-run-onprem.sh
   ./docker-run-onprem.sh
   ```

---

## **6. Environment Variables Reference**

Use these parameters in your `.env.onprem` file (Docker) or `application-onprem.properties` file (Standalone JAR) to customize the application:

| Variable Name | Requirement | Purpose / Meaning | Example / Default Value |
|---------------|-------------|-------------------|-------------------------|
| `SPRING_DATASOURCE_URL` | **Required** | JDBC database URL connection string. | `jdbc:postgresql://db-host:5432/migration_tool` |
| `SPRING_DATASOURCE_USERNAME`| **Required** | Database authentication username. | `migration_tool` |
| `SPRING_DATASOURCE_PASSWORD`| **Required** | Database authentication password. | `<database-password>` |
| `SPRING_JPA_HIBERNATE_DDL_AUTO`| Optional | Hibernate schema management mode. | `update` |
| `JWT_APP_SECRET` | **Required** | Base64-encoded signing key for JWT (32+ bytes). | `<base64-secret>` |
| `JWT_EXPIRATION_MINUTES` | Optional | Access token lifetime in minutes. | `59` |
| `JWT_REMEMBER_DAYS` | Optional | Persistent remember-me token duration in days. | `30` |
| `ONPREM_STORAGE_ROOT` | **Required** | Directory path for storing files and outputs. | `./storage` |
| `ONPREM_ADMIN_EMAIL` | **Required** | Admin email used to initialize the platform. | `admin@akabot.com` |
| `ONPREM_ADMIN_PASSWORD` | **Required** | Initial administrator password. | `akabot-admin-change-me` |
| `ONPREM_ADMIN_FULL_NAME` | Optional | Full name of the initialized administrator. | `akaBot Administrator` |
| `SERVER_PORT` | Optional | Application HTTP port. | `8080` |
| `SPRING_SERVLET_MULTIPART_MAX_FILE_SIZE` | Optional | Maximum file size for individual file uploads. | `2GB` |
| `SPRING_SERVLET_MULTIPART_MAX_REQUEST_SIZE`| Optional | Maximum size for an aggregate upload request. | `2GB` |
| `LOG_LEVEL` | Optional | Logging verbosity (DEBUG, INFO, WARN, ERROR). | `INFO` |
| `LOG_PATH` | Optional | Directory path for output logs. | `./logs` |
| `LOG_FILE` | Optional | Target output log file path. | `./logs/Migrate-Service.log` |
| `LOG_MAX_HISTORY` | Optional | Log history retention in days. | `10` |
| `SCAN_UN_INVOKE_WORKFLOW` | Optional | Scan workflow files not explicitly called/invoked. | `true` |

---

## **7. Maintenance, Backup & Verification**

To ensure data safety and correct system operation:

> [!IMPORTANT]
> **Data Backup Policy**  
> 1. **Database Schema**: Configure a database dump tool (e.g., `pg_dump` or `mysqldump`) to back up the database according to your enterprise backup policy.
> 2. **Physical Storage**: Regularly back up the directory specified in `ONPREM_STORAGE_ROOT` as it contains uploaded projects, converted source code packages, and generated analysis reports.

> [!TIP]
> **Post-Startup Verification**  
> 1. Wait a few seconds after running the script, then open your browser and navigate to: `http://localhost:8080` (or the custom port configured in `SERVER_PORT`).
> 2. Verify you are redirected to the login screen, then sign in using your configured `ONPREM_ADMIN_EMAIL` and `ONPREM_ADMIN_PASSWORD`.
