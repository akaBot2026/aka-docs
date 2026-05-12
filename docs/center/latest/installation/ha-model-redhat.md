---
id: ha-model-redhat
title: Installation Guide For High Availability Model on Redhat v9.x
sidebar_label: High Availability Model on Redhat v9.x
sidebar_position: 10
description: "Installation Guide For High Availability Model on Redhat v9.x documentation."
displayed_sidebar: centerSidebar
---
# Installation Guide For High Availability Model on Redhat v9.x


# 1. Before you start
This document aims to guide you to install new akaBot Center in High Availability model (“Fail Over” model) as below:

![Architecture](/img/high-availability.png)

### Model Components:

| # | Component | Description |
|---|-----------|-------------|
| 1 | Nginx Load Balancer | Nginx load balancer acts as the “traffic cop” sitting in front of your akaBot Center servers and routing client requests across all akaBot Center servers capable of fulfilling those requests in a manner that maximizes speed and capacity utilization and ensures that no one server is overworked, which could degrade performance. |
| 2 | akaBot Center | The akaBot Center lets you manage the creation, monitoring, and deployment of the akaBot Agent in your environment. |
| 3 | ActiveMQ Service | Messaging application that support the queue-related functions in akaBot Center. |
| 4 | ELK Stack | Comprehensive log analysis solution that aids in deep searching, analyzing, and displaying logs produced by akaBot Centers. |
| 5 | Redis Cache | In-memory data structure store used as a database, cache, message broker, and streaming engine, allows for fewer database accesses, which helps to reduce the amount of traffic and instances required. |

For other models or upgrading akaBot Center, please contact the project coordinator (if have) or send email to support@akaBot.com to get the guidance.

akaBot team is always here to support your installation success.

> [!IMPORTANT]
> Please read below sections CAREFULLY and prepare necessary resources/information before you start to achieve a successful installation.

## 1.1. Hardware Requirements
To install and use akaBot Center in High Availability model, you need to prepare below hardware requirements:

| # | Server | Quantity | Core | RAM | SSD | Note |
|---|--------|----------|------|-----|-----|------|
| 1 | akaBot Center server | 2 | 08 or more | 32GB or more | 500GB or more | Server to install akaBot Center |
| 2 | ActiveMQ Server | 2 | 08 or more | 16GB or more | 250GB or more | Server to install ActiveMQ service. |
| 3 | ELK Server | 1 | 16 or more | 16 or more | 100GB or more | Server to install indexing service. |
| 4 | Redis Cache server | 1 | 04 or more | 4GB or more | 100GB or more | Server to install caching service. |
| 5 | Nginx Server | 1 | 04 or more | 4GB or more | 100GB or more | Server to install the load balancer service. |

## 1.2. Database requirements
This installation model needs 2 databases:
- 01 database for akaBot Center
- 01 database for ActiveMQ services

Please make sure that these databases are ready to use and prepare below information of each database for connecting:

| # | Information | Description |
|---|-------------|-------------|
| 1 | DB-SERVER | Database IP Address. Ex: 3.112.124.176 |
| 2 | DB-USER | Database user name. Ex: AKA_CENTER_01 |
| 3 | DB-PASSWORD | User name's password. Ex: akaBot123 |
| 4 | DB-PORT | Database port. Ex: 1521 |
| 5 | DB-SID/SERVICE NAME | Database SID/Service Name. Ex: Orcl |

## 1.3. File Storage requirements
Please make sure that you have a dedicated folder on your File Storage server to save Nuget packages and akaBot Center server will have access permissions Read/Write on this folder.

**Ex:** `NFS-NUGET`

## 1.4. Permission requirement
Your user accounts to run installation on each machine needs to have Run permission as **Sudo**.

## 1.5. Prepare Installation Packages
Please make sure that your akaBot Center machine has below installation packages with exact version.

| # | Platform name | Package name | Version | Description | Download |
|---|---------------|--------------|---------|-------------|----------|
| 1 | JDK/JRE | openlogic-openjdk-11.0.16+8-linux-x64-el.rpm | 11.0.16 | OpenJDK | [Download](#) |
| 2 | Apache tomcat | apache-tomcat-8.5.57.tar.gz | 8.5.57 | Web server Apache Tomcat | [Download](#) |
| 3 | ActiveMQ | apache-activemq-5.15.1-bin.tar.gz | 5.15.1 | ActiveMQ is used for queue-related features | [Download](#) |
| 4 | akaBot Center | akaBot-center-x.x.x.x.war | 3.0.1.2 or later | akaBot Center installation package | akaBot provided |
| 5 | Oracle JDBC driver | ojdbc8.jar | ojdbc8 | Oracle JDBC driver | [Download](#) |
| 6 | Nginx Load Balancer | nginx-1.22.1-1.el8.ngx.x86_64.rpm | 1.22.1 | NGINX Load Balancer package | [Download](#) |
| 7 | Redis Cache | redis-5.0.3-5.module+el8.4.0+12927+b9845322.x86_64.rpm | 5.0.3 | Redis Cache package | [Download](#) |
| 8 | Kibana | kibana-7.17.12-x86_64.rpm | 7.17.12 | Kibana package (Optional) | [Download](#) |
| 9 | Elastic Search | elasticsearch-7.17.12-x86_64.rpm | 7.17.12 | ElasticSearch package | [Download](#) |
| 10 | Logstash | logstash-7.17.12-x86_64.rpm | 7.17.12 | Log analysis platform package | [Download](#) |
| 11 | Filebeat | filebeat-7.17.12-x86_64.rpm | 7.17.12 | Filebeat package | [Download](#) |

**Notes:**
- You should use a separate folder to place installation packages in each server. In this guide, we use the folder named: `/apps`

## 1.6. Other notes
Please pay attention to below notes to prevent future errors during installation:
- Please make sure that your folder names do not have spaces.
- To prevent syntax errors:
    - You should copy the command lines from this guide to your akaBot Center machine to run for convenience.
    - Due to different character encoding modes, please copy the commands into **Notepad file** before copying again to the akaBot Center machine.
    - When updating configuration files, please follow strictly the syntax of the file.

---

# 2. Installation

## 2.1. Install Redis
On Redis server, please follow 3 simple steps to install and configure Redis service as below:

### 2.1.1. Step 1 – Install Redis package.
1. Update system repositories
```bash
sudo dnf update -y
```

2. Install Redis package
```bash
sudo rpm -ivh <package name>
# Ex: sudo rpm -ivh redis-5.0.3-5.module+el8.4.0+12927+b9845322.x86_64.rpm
```

3. Verify installed Redis version:
```bash
rpm -q redis
rpm -qi redis
```
![image-20230804101914-2](/img/high-ava.png)

4. Start and enable Redis service:
```bash
sudo systemctl start redis
sudo systemctl enable redis
```

5. Verify status Redis service
```bash
sudo systemctl status redis
```
![image-20230804101914-3](/img/status.png)

### 2.1.2. Step 2 – Configure Redis Remote Access
1. Turn off Redis service (if running)
```bash
sudo systemctl stop redis
```

2. Open `redis.conf` file
```bash
sudo vi /etc/redis.conf
```

3. Search and update the `bind` parameter value from `127.0.0.1` to `0.0.0.0`
![image-20230804101914-4](/img/bind.png)

4. Save changes and exit: Press `ESC` then type: `:wq`

5. Restart Redis service
```bash
sudo systemctl start redis
```

### 2.1.3. Step 3 – Configure Security Setting (optional)
1. Turn off Redis service (if running)
```bash
sudo systemctl stop redis
```

2. Open `redis.conf` file
```bash
sudo vi /etc/redis.conf
```

3. Search and uncomment the `requirepass` parameter:
![image-20230804101914-5](/img/vie.png)

4. Save changes and exit: Press `ESC` then type: `:wq`

5. Restart Redis service
```bash
sudo systemctl start redis
```

## 2.2. Install ActiveMQ
The High Availability model needs 2 ActiveMQ servers to backup for each other in failover situation. Please repeat below steps to install and configure ActiveMQ service on 2 separate servers.

### 2.2.1. Step 1 - Extract installation file
1. Move to installation folder:
```bash
cd apps/
```

2. Create a folder: `/opt/activemq`
```bash
sudo mkdir /opt/activemq
```

3. Extract Apache ActiveMQ installation package then move to `/opt/activemq` folder.
```bash
sudo tar -xvzf apache-activemq-*-bin.tar.gz
sudo mv apache-activemq-5.15.1 /opt/activemq
```

### 2.2.2. Step 2 - Create group and ActiveMQ user
Create another account and run the ActiveMQ installation by this account instead of using Root account.

1. Create ActiveMQ group
```bash
sudo groupadd activemq
```

2. Create account ActiveMQ under group ActiveMQ and home link: `/opt/activemq`
```bash
sudo useradd -s /bin/false -g activemq -d /opt/activemq activemq
```

3. Phân quyền cho thư mục ActiveMQ
```bash
sudo chown -R activemq:activemq /opt/activemq
```

### 2.2.3. Step 3 - Configure ActiveMQ Service
1. Create configuration file: `activemq.service`
```bash
sudo vi /etc/systemd/system/activemq.service
```

2. Copy below content into this file:
```ini
[Unit]
Description=Apache ActiveMQ
After=network.target

[Service]
Type=forking
User=activemq
Group=activemq
ExecStart=/bin/bash /opt/activemq/bin/activemq start
ExecStop=/bin/bash /opt/activemq/bin/activemq stop

[Install]
WantedBy=multi-user.target
```

3. Save changes and exit: Press `ESC` then type: `:wq`

4. Reload Daemon
```bash
sudo systemctl daemon-reload
```

5. Start ActiveMQ service
```bash
sudo systemctl start activemq
```

6. Enable ActiveMQ service
```bash
sudo systemctl enable activemq
```

7. Check ActiveMQ status
```bash
sudo systemctl status activemq
```
![image-20230804101914-6](/img/studio.png)

### 2.2.4. Step 4 - Configure Java Heap Memory of ActiveMQ Service
1. Stop ActiveMQ service
```bash
sudo systemctl stop activemq
```

2. Update value of Java Heap memory. Open environment file:
```bash
sudo vi /opt/activemq/bin/env
```

Update below line:
```bash
ACTIVEMQ_OPTS_MEMORY="-Xms1G -Xmx2G"
```

**Note:**
- Parameter `-Xms`: minimum Java heap size. Please set the number \<= ¼ RAM capacity. (Ex: RAM = 4G, set -Xms1G).
- Parameter `-Xmx`: maximum Java heap size. Please set the number \<= ½ RAM capacity. (Ex: RAM = 4G, set -Xmx2G).

![image-20230804101914-7](/img/xmx.png)

3. Save changes and exit: Press `ESC` then type: `:wq`

4. Start again ActiveMQ service
```bash
sudo systemctl start activemq
```

5. Verify ActiveMQ service’s status
```bash
sudo systemctl status activemq
```
![image-20230804101914-8](/img/active.png)

### 2.2.5. Step 5 – Configure ActiveMQ service.
1. Stop activemq service
```bash
sudo systemctl stop activemq
```

2. Upload and copy file `ojdbc8.jar` (Oracle JDBC driver) into optional library folder:
```bash
cd ~/apps/
cp ojdbc8.jar /opt/activemq/lib/optional/
```

3. Configure file `activemq.xml`
```bash
sudo vi /opt/activemq/conf/activemq.xml
```

- Change broker name (optional)
![image-20230804101914-9](/img/change.png)

- Add below code section at the end of file to configure Oracle DataSource:
```xml
<bean id="oracle-ds" class="org.apache.commons.dbcp2.BasicDataSource" destroy-method="close">
      <property name="driverClassName" value="oracle.jdbc.driver.OracleDriver"/>
      <property name="url" value="<DB-URL>"/>
      <property name="username" value="<DB-USER>"/>
      <property name="password" value="<DB-PASSWORD>"/>
      <property name="poolPreparedStatements" value="true"/>
</bean>
```
![image-20230804101914-10](/img/bean.png)

**Note:**
- If your database uses SID then: `DB_URL = jdbc:oracle:thin:@<DB-SERVER>:<DB-PORT>:<DB-SID>`
- If your database uses service name then: `DB_URL = jdbc:oracle:thin:@//<HOST>:<PORT>/<SERVICE NAME>`

4. Change `persistenceAdapter` configuration:
```xml
<jdbcPersistenceAdapter dataSource="#oracle-ds" createTablesOnStartup="true" />
```
![image-20230804101914-11](/img/adapter.png)

5. Save changes and exit: Press `ESC` key and type `:wq!`

6. Start and verify activemq service status
```bash
sudo systemctl start activemq
sudo systemctl status activemq
```

## 2.3. Install ELK Stack
ELK Stack is comprehensive log analysis solution that aids in deep searching, analyzing, and displaying logs produced by akaBot Centers.

**Components:**
- **Elasticsearch**: RESTful distributed search engine.
- **Logstash**: Data collection engine.
- **Kibana**: Data visualization tool (optional).
- **FileBeat**: Data shippers installed on servers as agents.

Source: [Elastic Stack Definition](https://www.techtarget.com/searchitoperations/definition/Elastic-Stack)

### 2.3.1. Step 1 - Install ElasticSearch
1. Install ElasticSearch package
```bash
cd apps/
sudo rpm --install elasticsearch-7.17.12-x86_64.rpm
```

2. Start the ElasticSearch service
```bash
sudo systemctl start elasticsearch
```

3. Enable ElasticSearch service
```bash
sudo systemctl enable elasticsearch
```

4. Verify service status
```bash
sudo systemctl status elasticsearch
```

5. Stop ElasticSearch service
```bash
sudo systemctl stop elasticsearch
```

6. Open the setting file for configuration:
```bash
sudo vi /etc/elasticsearch/elasticsearch.yml
```

7. Update below values:
```yaml
network.host: 0.0.0.0
cluster.initial_master_nodes: ["node-1"]
```

8. Save changes and exit: Press `ESC` then type: `:wq`

### 2.3.2. Step 2 - Install Logstash
1. Install Logstash package
```bash
cd apps/
sudo rpm --install logstash-7.17.12-x86_64.rpm
```

2. Enable LogStash service
```bash
sudo systemctl enable logstash
```

3. Start LogStash service
```bash
sudo systemctl start logstash
```

4. Verify LogStash service status
```bash
sudo systemctl status logstash
```

5. Stop LogStash service
```bash
sudo systemctl stop logstash
```

6. Open LogStash configuration file:
```bash
sudo vi /etc/logstash/conf.d/logstash.conf
```

7. Update below code in the file:
```text
input {
  beats {
    port => 5044
    type => "log"
  }
}

filter {
  json {
    source => "message"
    target => "doc"
  }
}

output {
  elasticsearch {
    hosts => "localhost:9200"
    manage_template => false
    index => "%{[@metadata][beat]}-%{+yyyy.ww}"
    document_type => "%{[@metadata][type]}"
  }
}
```

8. Save changes and exit: Press `ESC` then type: `:wq`

9. Start LogStash service
```bash
sudo systemctl start logstash
```

### 2.3.3. Step 3 - Install Filebeat
1. Install FileBeat package
```bash
cd apps/
sudo rpm --install filebeat-7.17.12-x86_64.rpm
```

2. Enable FileBeat service
```bash
sudo systemctl enable filebeat
```

3. Start FileBeat service
```bash
sudo systemctl start filebeat
```

4. Verify FileBeat service status
```bash
sudo systemctl status filebeat
```

5. Stop FileBeat service
```bash
sudo systemctl stop filebeat
```

6. Open FileBeat configuration file:
```bash
sudo vi /etc/filebeat/filebeat.yml
```

7. Update as below code in the file:
```yaml
filebeat.inputs:
- type: log
  paths:
    - /opt/tomcat/logs/agents/*/*.log
```

8. Uncomment below code:
```yaml
output.logstash:
  hosts: ["localhost:5044"]
```

9. Save changes and exit: Press `ESC` then type: `:wq`

10. Start FileBeat service
```bash
sudo systemctl start filebeat
```

### 2.3.5. Step 4 - Install Kibana (optional)
1. Install Kibana package
```bash
cd apps/
sudo rpm --install kibana-7.17.12-x86_64.rpm
```

2. Enable Kibana service
```bash
sudo systemctl enable kibana
```

3. Start Kibana service
```bash
sudo systemctl start kibana
```

4. Verify Kibana service status
```bash
sudo systemctl status kibana
```

5. Stop Kibana service
```bash
sudo systemctl stop kibana
```

6. Open Kibana configuration file:
```bash
sudo vi /etc/kibana/kibana.yml
```

7. Update below code in the file:
```yaml
server.port: 5601
server.host: "0.0.0.0"
```

8. Save changes and exit: Press `ESC` then type: `:wq`

9. Start Kibana service
```bash
sudo systemctl start kibana
```

## 2.4. Install akaBot Center
The High Availability model needs 2 akaBot Center servers to backup for each other in failover situation. Please repeat below steps to install and configure akaBot Center service on 2 separate servers.

### 2.4.1. Step 1 - Install JDK
**Note:**
- If your akaBot machine has installed JDK < 11, please upgrade to JDK 11.
- Otherwise, ignore this step.

1. Move to installation folder:
```bash
cd apps/
```

2. Run installation command:
```bash
sudo yum install openlogic-openjdk-11.0.16+8-linux-x64-el.rpm
```

3. Verify installation:
```bash
java -version
```
![image-20230804101914-12](/img/java.png)

### 2.4.2. Step 2 - Install Apache Tomcat Web Server

#### 2.4.2.1. Step 1: Extract installation file
1. Move to installation folder:
```bash
cd apps/
```

2. Create a folder: `/opt/tomcat`
```bash
sudo mkdir /opt/tomcat
```

3. Extract Apache Tomcat:
```bash
sudo tar xzvf apache-tomcat-8*tar.gz -C /opt/tomcat --strip-components=1
```

#### 2.4.2.2. Step 2: Create group and user Tomcat
1. Create Tomcat group:
```bash
sudo groupadd tomcat
```

2. Create account Tomcat:
```bash
sudo useradd -s /bin/false -g tomcat -d /opt/tomcat tomcat
```

3. Configure account Tomcat for machine code (license activation):
```bash
sudo visudo /etc/sudoers
```
Add below line at the end:
```text
tomcat ALL= NOPASSWD: ALL
```
![image-20230804101914-13](/img/all.png)

Save changes: Press `ESC` key and type: `:wq`

4. Add current user to group Tomcat:
```bash
sudo usermod -g tomcat [current_user_logged]
```

#### 2.4.2.3. Step 3: Configure folder access rights
1. Change ownership:
```bash
cd /opt
sudo chown tomcat:tomcat tomcat
ls -l
```
![image-20230804101914-14](/img/is.png)

2. Configure permissions:
```bash
cd /opt/tomcat
sudo chgrp -R tomcat /opt/tomcat
sudo chmod -R g+r conf
sudo chmod g+x conf
sudo chown -R tomcat webapps/ work/ temp/ logs/
ls -l
```
![image-20230804101914-15](/img/sudo.png)

#### 2.4.2.4 Step 4: Configure Tomcat service running
1. Get Java Installation folder:
```bash
sudo update-alternatives --list | grep java
```
![image-20230804101914-16](/img/grep.png)
`%JAVA_HOME% = /usr/lib/jvm/openlogic-openjdk-11-hotspot`

2. Create `tomcat.service` file:
```bash
sudo vi /etc/systemd/system/tomcat.service
```

3. Copy below code into the file:
```ini
[Unit]
Description=Apache Tomcat Web Application Container
After=network.target

[Service]
Type=forking
Environment=JAVA_HOME=/usr/lib/jvm/openlogic-openjdk-11-hotspot
Environment=CATALINA_PID=/opt/tomcat/temp/tomcat.pid
Environment=CATALINA_HOME=/opt/tomcat
Environment=CATALINA_BASE=/opt/tomcat
Environment='CATALINA_OPTS=-Xms1G -Xmx2G -server -XX:+UseParallelGC'
Environment='JAVA_OPTS=-Djava.awt.headless=true -Djava.security.egd=file:/dev/./urandom'
WorkingDirectory=/opt/tomcat
ExecStart=/opt/tomcat/bin/startup.sh
ExecStop=/opt/tomcat/bin/shutdown.sh
User=tomcat
Group=tomcat
RestartSec=10
Restart=always

[Install]
WantedBy=multi-user.target
```

4. Update `JAVA_HOME`  variable.

Environment=JAVA_HOME=%JAVA_HOME%

Environment=JAVA_HOME=/usr/lib/jvm/openlogic-openjdk-11-hotspot

5. Change Java Heap memory size:

Environment='CATALINA_OPTS=-Xms1G -Xmx2G -server -XX:+UseParallelGC'

* Parameter -Xms: minimum Java heap size. Please set the number \<= ¼ RAM capacity.
      
    Ex: If your akaBot Center machine’s RAM = 4G, then set -Xms1G.

* Parameter -Xmx: maximum Java heap size. Please set the number \<= ½ RAM capacity.
           
    Ex: If your akaBot Center machine’s RAM = 4G, then set -Xms2G.

6. Save changes and exit

    Press ESC then type: :wq

#### 2.4.2.5 Step 5: Configure Tomcat log
1. Open the file `/opt/tomcat/conf/logging.properties`
2. Add `maxDays` attribute to specify the maximum number of days that rotated access logs will be retained for before being deleted for the catalina, localhost, host-manager, manager logs. If not specified, the default value of -1 will be used which means never delete old files. Example: keep 10 days worth of history:
```text
1catalina.org.apache.juli.AsyncFileHandler.maxDays = 10
2localhost.org.apache.juli.AsyncFileHandler.maxDays = 10
3manager.org.apache.juli.AsyncFileHandler.maxDays = 10
4host-manager.apache.juli.AsyncFileHandler.maxDays = 10
```
![1714726922102-116](/img/manager.png)

3. Save changes and exit.

4. Open the file `/opt/tomcat/conf/server.xml`
5. Un-comment the line of log setting to turn on the log
6. Add attribute maxDays to specify the maximum number of days that rotated access logs will be retained for before being deleted for the catalina, localhost, host-manager, manager logs. If not specified, the default value of -1 will be used which means never delete old files. Example: keep 10 days worth of history. 

Ex: maxDays="10" 

![1714726968776-214](/img/maxdays.png)
7. Save changes and exit

8. Reload Daemon:
```bash
sudo systemctl daemon-reload
```

9. Start Tomcat service (Ensure only `ROOT` folder exists in `webapps`):
```bash
sudo systemctl start tomcat
```

10. Enable Tomcat service:
```bash
sudo systemctl enable tomcat
```

11. Check Tomcat status:
```bash
sudo systemctl status tomcat
```
![image-20230804101914-17](/img/hi.png)

```bash
curl localhost:8080
```
![image-20230804101914-18](/img/owner.png)

11. Change owner/group for logs:
```bash
sudo chown -R tomcat /opt/tomcat/logs
sudo chgrp -R tomcat /opt/tomcat/logs
```

## 2.4.3. Step 3 - Install akaBot Center package

### 2.4.3.1. Extract installation folder
1. Stop Tomcat service (if running):
```bash
sudo systemctl stop tomcat
```

2. Remove all folders inside `/opt/tomcat/webapps`:
```bash
sudo rm -rf /opt/tomcat/webapps/*
```

3. Copy `akaBot-center-x.x.x.x.war` into `/opt/tomcat/webapps/` then change its name to `ROOT.war`.
```bash
cd ~/apps
sudo cp akaBot-center-3.0.1.2.war /opt/tomcat/webapps/ROOT.war
```

4. Start Tomcat and wait for extraction:
```bash
sudo systemctl start tomcat
cd /opt/tomcat/webapps
ls –l
```

5. Stop Tomcat and delete `ROOT.war`:
```bash
sudo systemctl stop tomcat
sudo rm /opt/tomcat/webapps/ROOT.war
```

### 2.4.3.2. Configure akaBot Center
To allow akaBot Center to interact with database, cache, and queue services, configure it as below:

#### A. Configure file `quartz.properties`
1. Open file:
```bash
sudo vi /opt/tomcat/webapps/ROOT/WEB-INF/classes/quartz.properties
```

2. Depending on the database type you use(Oracle on MSSQL or MySQL), you perform as below: 

* Enable your database type’s setting by uncommenting the line of `driverDelegateClass` variable of your database type:

   Ex: You use Oracle database, then uncomment the line of Oracle:

![image-20230804101914-19](/img/data.png)
* Disable other database type's setting by commenting out the lines of `driverDelegateClass` variable other database types: 

![image-20230804101914-20](/img/qua.png)

3. Save changes and exit: Press `ESC` then type: `:wq`

#### B. Configure Logback Setting
1. Open the logback setting file:
```bash
sudo vi /opt/tomcat/webapps/ROOT/WEB-INF/classes/logback-spring.xml
```

2. Update the line:
```text
/opt/tomcat/logs/center/akaCenter.%d{yyyy-MM-dd}.%i.log
To:
/opt/tomcat/logs/agents/${agentName}/BotAgent.%d{yyyy-MM-dd}.%i.log
```

3. Update the line 
```bash
${application.home:-.}/logs/agents/${agentName}/BotAgent.%d{yyyy-MM-dd}.%i.log
```
4. Change log level if needed. Ex: ERROR 
5. Change other config:
* maxFileSize: Limit the size of each file. Ex: 100MB.
* maxHistory: The optional maxHistory property controls the maximum number of archive files to keep. Ex: 20
* totalSizeCap: The optional totalSizeCap property controls the total size of all archive files. Ex: 20GB
6. Save changes and exit: 

Press `ESC` then type: `:wq`
![1714722756676-901](/img/log.png)

#### C. Configure Database connection
1. Open the file application-prod.yml
```text
cd /opt/tomcat/webapps/ROOT/WEB-INF/classes/config/

sudo vi application-prod.yml
```
2. Depending on the database type you use (Oracle or MSSQL or MySQL), update the file as below:

   Ex: your database type is Oracle

a. Update database URL
* Uncomment your database’s URL line and update corresponding URL.
* Comment out other databases’ URL lines.

**Oracle URL Format:**
* If you use service’s SID, then URL format should be:

  `url: jdbc:oracle:thin:@<DB-SERVER>:<DB-PORT>:<DB-SID>`
![image-20230804101914-23](/img/orcl.png)

* If you use service’s name, then JDBC URL format should be:
 
  `url: jdbc:oracle:thin:@//<DB-SERVER>:<PORT>/<SERVICE NAME>`
![image-20230804101914-24](/img/oracle.png)

MSSQL URL format:

`url: jdbc:sqlserver://<DB-SERVER>:<DB-PORT>;databaseName=<DB- NAME>;encrypt=true;trustServerCertificate=true;`

MySQL URL format:

` url: jdbc:mysql://< DB-SERVER >:<DB-PORT>/<DB-NAME>`

b. Update your database’s username & password

c. Update driverClassName variable:

+ Uncomment the line of driverClassName variable of your database type.

+ Comment out the line of driverClassName variable of other database types.

![drive](/img/drive.png)

d. Update database-platform and database variable

+ Uncomment the lines of database-platform and database variables of your database type.

+ Comment the lines of database-platform and database variables of other database types.

![drive](/img/fl.png)

e. Save changes and exit

Press ESC then type: :wq

3. Configure for the file  `application-dev.yml`.

   a. Open the file application-dev.yml

sudo vi application-dev.yml
   
  b. Repeat the same from step 2 to step 3 to configure the file application-dev.yml

#### D. Configure ActiveMQ connection
1. Open `application.yml`

cd /opt/tomcat/webapps/ROOT/WEB-INF/classes/config/

sudo vi application.yml

2. Update value for `brokerURL`:
```yaml
brokerURL: failover:(tcp://<IP-ACTIVEMQ-01>:61616,tcp://<IP-ACTIVEMQ-02>:61616)?randomize=false&jms.messagePrioritySupported=true&nested.wireFormat.maxInactivityDurationInitalDelay=30000
```

in which:

+ \<IP-ACTIVEMQ-01\>: the IP address of ActiveMQ server 01

+ \<IP-ACTIVEMQ-02\>: the IP address of ActiveMQ server 02
![image-20230804101914-28](/img/mq.png)

3. Save changes and exit.
Press ESC then type:wq

#### E. Configure Redis Cache connection
1. Open the file `application-prod.yml`

cd /opt/tomcat/webapps/ROOT/WEB-INF/classes/config/

sudo vi application-prod.yml

2. Update the file as below

* Update `mode` to `1` and `server` URL:

![image-20230804101914-30](/img/redis.png)

* Update server variable’s value:
```yaml
If your Redis service requires a password, then server variable’s value is:
server: redis://:<REDIS-PASSWD>@<REDIS-IP>:6379

otherwise, server variable’s value is:
server: redis://<REDIS-IP>:6379
```
3. Save changes and exit

   Press ESC then type: “:wq”

4. Configure for the file `application-dev.yml`.

   a. Open the file application-dev.yml

   sudo vi application-dev.yml

   b. Repeat the same from step 2 to step 3 to configure the file application-dev.yml

#### F. Configure ElasticSearch connection
1. Open the file `application.yml`

   cd /opt/tomcat/webapps/ROOT/WEB-INF/classes/config/

   sudo vi application.yml

2. Add below code to the end of the file as below:
```yaml
elasticsearch:
  enabled: true
  clustername: elasticsearch
  index: filebeat-*
  host: <IP_ES>
  port: 9200
  user:
  password:
  index-max-result-window: 20000000
```
  In which: \<IP_ES\> is the IP address of ElasticSearch server.

3. Save changes and exit

    Press ESC then type: :wq

## G. Configure Elasticsearch Settings

### Step 1: Open the `application-prod.yml` file

```bash
cd /opt/tomcat/webapps/ROOT/WEB-INF/classes/config/

sudo vi application-prod.yml
```

---

### Step 2: Comment out the below code to turn off Tomcat default setting 

Find the following lines:

```yaml
hibernate.search.backend.directory.root: indexes/
hibernate.search.backend.type: lucene
```

Comment them out:

```yaml
#hibernate.search.backend.directory.root: indexes/
#hibernate.search.backend.type: lucene
```

---

### Step 3: Uncomment the below code to turn on the Elastic search settings

Add or uncomment the following configuration:

```yaml
hibernate.search.backend.type: elasticsearch
hibernate.search.backend.host: <IP_ES>:9200
hibernate.search.backend.protocol: http
hibernate.search.backend.username:
hibernate.search.backend.password:
```

Example:

```yaml
hibernate.search.backend.type: elasticsearch
hibernate.search.backend.host: 3.112.124.176:9200
hibernate.search.backend.protocol: http
hibernate.search.backend.username:
hibernate.search.backend.password:
```

Where:

- `<IP_ES>` is the IP address of the Elasticsearch server

---

### Step 4: Save changes and exit

Press `ESC` then type:
:wq
```

---

## Step 5: Configure `application-dev.yml`

Open the file:

```bash
sudo vi application-dev.yml
```

Repeat the same configuration from **Step 2 → Step 4**.

### 2.4.3.3. Step 3 – Start Tomcat Service and Test
1. Start Tomcat:
```bash
sudo systemctl start tomcat
```

2. Test connection:
```bash
curl localhost:8080
```
![image-20230804101914-33](image-20230804101914-33.png)

---

## 2.5 Install NGINX Load Balancer

### 2.5.1. Step 1 - Install Nginx package
1. Install package:
```bash
cd apps/
sudo rpm -ivh <package name>
```

2. Start and enable Nginx:
```bash
sudo systemctl enable nginx
sudo systemctl start nginx
```

3. Verify:
```bash
nginx -v
sudo systemctl status nginx
```
![image-20230804101914-35](image-20230804101914-35.png)

### 2.5.2. Step 2 - Configure Nginx service

#### 2.5.2.1. Configure Nginx Load Balancing
1. Stop Nginx: `sudo systemctl stop nginx`
2. Open `/etc/nginx/sites-available/default`
3. Configure `upstream` and `server` blocks:
```nginx
upstream akaBotCenter {
  server <IP-SRV-CENTER-01>:8080;
  server <IP-SRV-CENTER-02>:8080;
}

server {
  listen 80;
  server_name <YOUR-DOMAIN>;
  client_max_body_size 200M; 
  location / {
    proxy_pass http://akaBotCenter;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  }
}
```

#### 2.5.2.2. Configure Nginx SSL
Follow provider guides or use Self-Signed SSL:
1. Create SSL Cert:
```bash
sudo mkdir /etc/ssl/private
sudo chmod 700 /etc/ssl/private
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt
```

2. Create Diffie-Hellman:
```bash
sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
```

3. Configure `/etc/nginx/conf.d/default.conf` with SSL settings.

---

## 2.6. Configure Catalina.out
Stop Tomcat from writing large logs to `catalina.out`:
1. Open `/opt/tomcat/bin/catalina.sh`
2. Comment out line 229: `#CATALINA_OUT="$CATALINA_BASE"/logs/catalina.out`
3. Add: `CATALINA_OUT=/dev/null`
4. Save and restart Tomcat.

![image-20230804101914-36](image-20230804101914-36.png)

**DONE!!!** You have successfully completed the akaBot Center installation and configuration in High Availability model.

---

# 3. Troubleshoot issues

## 3.1. Self-Troubleshoot

### 3.1.1 Step 1 - Detect issue
- Tomcat service issues: `/opt/tomcat/logs/catalina.out`
- akaBot Center issues: `/opt/tomcat/logs/center/akaCenter.yyyy-mm-dd.0.log`

### 3.1.2 Step 2 – Troubleshoot typical issues
#### Issue 1: Could not commit with auto-commit
**Solution:** Add `-Doracle.jdbc.autoCommitSpecCompliant=false` to `JAVA_OPTS` in `tomcat.service`.
![image-20230804101914-38](image-20230804101914-38.png)
