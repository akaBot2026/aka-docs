---
id: ha-model-windows-server
title: Installation Guide For High Availability Model on Windows Server
sidebar_label: High Availability Model on Windows Server
sidebar_position: 11
displayed_sidebar: centerSidebar
---

# Installation Guide For High Availability Model on Windows Server

# 1. Before you start

This document aims to guide you to install new akaBot Center in **High Availability model** ("Fail Over" model) as below:

![image-20230804101914-1.png](/static/img/47848a_image-20230804101914-1.png)

**Model Components:**

| **#** | **Component** | **Description** |
|---|---|---|
| 1 | Nginx Load Balancer | Nginx load balancer acts as the "traffic cop" sitting in front of your akaBot Center servers and routing client requests across all akaBot Center servers capable of fulfilling those requests in a manner that maximizes speed and capacity utilization and ensures that no one server is overworked, which could degrade performance. |
| 2 | akaBot Center | The akaBot Center lets you manage the creation, monitoring, and deployment of the akaBot Agent in your environment. |
| 3 | ActiveMQ Service | Messaging application that support the queue-related functions in akaBot Center. |
| 4 | ELK Stack | Comprehensive log analysis solution that aids in deep searching, analyzing, and displaying logs produced by akaBot Centers. |
| 5 | Redis Cache | In-memory data structure store used as a database, cache, message broker, and streaming engine, allows for fewer database accesses, which helps to reduce the amount of traffic and instances required. |

For other models or upgrading akaBot Center, please contact the project coordinator (if have) or send email to [support@akaBot.com](mailto:support@akaBot.com) to get the guidance.

**akaBot team is always here to support your installation success**.

Please read below sections **CAREFULLY** and prepare necessary resources/information before you start to achieve a successful installation.

## 1.1. Hardware Requirements

To install and use akaBot Center in High Availability model, you need to prepare below hardware requirements:

| **#** | **Server** | **Quantity** | **Core** | **RAM** | **SSD** | **Note** |
|---|---|---|---|---|---|---|
| 1 | akaBot Center server | 2 | 08 or more | 32GB or more | 500GB or more | Server to install akaBot Center |
| 2 | ActiveMQ Server | 2 | 08 or more | 16GB or more | 250GB or more | Server to install ActiveMQ service. |
| 3 | ELK Server | 1 | 16 or more | 16 or more | 100GB or more | Server to install indexing service. |
| 4 | Redis Cache server | 1 | 04 or more | 4GB or more | 100GB or more | Server to install caching service. |
| 5 | Nginx Server | 1 | 04 or more | 4GB or more | 100GB or more | Server to install the load balancer service. |

## 1.2. Database requirements

This installation model needs 2 databases:

- 01 database for akaBot Center
- 01 database for ActiveMQ services

Please make sure that **these databases are ready to use** and prepare below information of each database for connecting:

| **#** | **Information** | **Description** |
|---|---|---|
| 1 | DB-SERVER | Database IP Address. Ex: 3.112.124.176 |
| 2 | DB-USER | Database user name. Ex: AKA\_CENTER\_01 |
| 3 | DB-PASSWORD | User name's password. Ex: akaBot123 |
| 4 | DB-PORT | Database port. Ex: 1521 |
| 5 | DB-SID/SERVICE NAME | Database SID/Service Name. Ex: Orcl |

## 1.3. File Storage requirements

Please make sure that you have a dedicated folder on your File Storage server to save Nuget packages and akaBot Center server will have access permissions Read/Write on this folder.

Ex: NFS-NUGET

## 1.4. Permission requirement

Your user accounts to run installation on each machine needs to have **Run permission as Sudo**.

## 1.5. Prepare Installation Packages

Please make sure that your akaBot Center machine has below installation packages **with exact version**.

| **#** | **Platform name** | **Package name** | **Version** | **Description** | **Download** |
|---|---|---|---|---|---|
| 1 | JDK/JRE | jdk-11.0.20\_windows-x64\_bin.exe | 11.0.20 | OpenJDK | [Download](https://www.techspot.com/downloads/downloadnow/5553/?evp=cc1002b8f24231deaf82043061a06561&file=6310) |
| 2 | Apache tomcat | apache-tomcat-8.5.89.exe | 8.5.89 | Web server Apache Tomcat | [Download](https://archive.apache.org/dist/tomcat/tomcat-8/v8.5.89/bin/apache-tomcat-8.5.89.exe) |
| 3 | ActiveMQ | apache-activemq-5.15.1-bin.zip | 5.15.1 | ActiveMQ is used for queue-related features in akaBot Center | [Download](https://archive.apache.org/dist/activemq/5.15.1/apache-activemq-5.15.1-bin.zip) |
| 4 | akaBot Center | akaBot-center-x.x.x.x.war | 3.0.1.2 or later | akaBot Center installation package | akaBot provides. Please contact project coordinator or support@akaBot.com |
| 5 | Oracle JDBC driver | ojdbc8.jar | ojdbc8 | Oracle JDBC driver | [Download](https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html) |
| 6 | Nginx Load Balancer | nginx-1.22.1-1.el8.ngx.x86\_64.rpm | 1.22.1 | NGINX Load Balancer package | [Download](https://nginx.org/packages/rhel/8/x86_64/RPMS/) |
| 7 | Redis Cache | redis-5.0.3-5.module+el8.4.0+12927+b9845322.x86\_64.rpm | 5.0.3 | Redis Cache package | [Download](https://fbi2.cdn.euro-linux.com/dist/eurolinux/server/8/x86_64/certify-AppStream/all/Packages/r/) |
| 8 | Kibana | kibana-7.17.12-x86\_64.rpm | 7.17.12 | Kibana package (Optional) | [Download](https://artifacts.elastic.co/downloads/kibana/kibana-7.17.12-x86_64.rpm) |
| 9 | Elastic Search | elasticsearch-7.17.12-x86\_64.rpm | 7.17.12 | ElasticSearch package | [Download](https://www.elastic.co/fr/downloads/past-releases/elasticsearch-7-17-12) |
| 10 | Logstash | logstash-7.17.12-x86\_64.rpm | 7.17.12 | Log analysis platform package | [Download](https://artifacts.elastic.co/downloads/logstash/logstash-7.17.12-x86_64.rpm) |
| 11 | Filebeat | filebeat-7.17.12-x86\_64.rpm | 7.17.12 | Filebeat package | [Download](https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-7.17.12-x86_64.rpm) |

**Notes**:

- You should use a separate folder to place installation packages in each server. In this guide, we use the folder named: **/apps**

## 1.6. Other notes

**Please pay attention to below notes to prevent future errors during installation:**

1. Please make sure that your folder names do not have spaces.
2. To prevent syntax errors:
   - You should copy the command lines from this guide to your akaBot Center machine to run for convenience.
   - Due to different character encoding modes, please copy the commands into **Notepad file** before copying again to the akaBot Center machine.
   - When updating configuration files, please follow strictly the syntax of the file.

# 2. Installation

## 2.1. Install Redis

Redis is not officially supported on Windows. However, you can install Redis on Windows for development by following the instructions below.

To install Redis on Windows, you'll first need to enable [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install) (Windows Subsystem for Linux). WSL2 lets you run Linux binaries natively on Windows. For this method to work, you'll need to be running Windows 10 version 2004 and higher or Windows 11.

**Step 1**: Install or enable WSL2

Microsoft provides [detailed instructions for installing WSL](https://docs.microsoft.com/en-us/windows/wsl/install). Follow these instructions, and take note of the default Linux distribution it installs. This guide assumes Ubuntu.

**Step 2:** Install Redis

Once you're running Ubuntu on Windows, you can follow the steps detailed at [Install on Ubuntu/Debian](https://redis.io/docs/install/install-redis/install-redis-on-linux#install-on-ubuntu-debian) to install recent stable versions of Redis from the official packages.redis.io APT repository. Add the repository to the apt index, update it, and then install:

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
sudo apt-get update
sudo apt-get install redis
```

**Step 3**: Start the Redis server like so:

```
sudo service redis-server start
```

**Step 4:** Connect to Redis

You can test that your Redis server is running by connecting with the Redis CLI:

```
redis-cli
127.0.0.1:6379> ping
PONG
```

## 2.2. Install ActiveMQ

The High Availability model needs 2 ActiveMQ servers to backup for each other in failover situation.

Please **repeat below steps** to install and configure ActiveMQ service on 2 separate servers.

### 2.2.1. Install ActiveMQ

Step 1: Extract the file "apache-activemq-5.15.1-bin.zip" to the desired installation path.

For example: ACTIVEMQ\_PATH = C:\akaBot\apache-activemq-5.15.1

Note: The installation path should not contain any spaces.

![1699244069336-269.png](/static/img/1699244069336-269.png)

Step 2: Open Command Prompt with Administrator privileges.

![1699244074920-832.png](/static/img/1699244074920-832.png)

Step 3: Run the file %ACTIVEMQ\_PATH%\bin\win64\InstallService.bat to install the ActiveMQ service.

![1699244080655-576.png](/static/img/1699244080655-576.png)

Step 4: Start the ActiveMQ service.

![1698830727957-440.png](/static/img/1698830727957-440.png)

### 2.2.2. Java Heap Configuration

**Step 1:** Stop service ActiveMQ

![1698830792792-356.png](/static/img/1698830792792-356.png)

Step 2: Open the file **%ACTIVEMQ\_PATH%\bin\win64\wrapper.conf** and configure the parameters:

- wrapper.java.initmemory: Enter the initial value for the Java Heap memory.

  For example, if the server has 32 GB of RAM, you can enter 1024.

- wrapper.java.maxmemory: Enter the maximum value for the Java Heap memory.

  For example, with a server having 32 GB of RAM, you can enter 4096.

Step 3: Start ActiveMQ Service

![1698830915678-493.png](/static/img/1698830915678-493.png)

### 2.2.3. Check ActiveMQ Installation

Step 1: Check the Running status of the ActiveMQ service. If it is not running, start the service.

![1698830978699-754.png](/static/img/1698830978699-754.png)

Step 2: Access the URL [http://localhost:8161](http://localhost:8161/) to verify the successful installation of ActiveMQ.

![1698831013334-870.png](/static/img/1698831013334-870.png)

## 2.3. Install ELK Stack

ELK Stack is comprehensive log analysis solution that aids in deep searching, analyzing, and displaying logs produced by akaBot Centers.

Its components including:

1. **Elasticsearch** is a RESTful distributed search engine built on top of Apache Lucene and released under an Apache license. It is Java-based and can ingest data as well as search and index document files in diverse formats.
2. **Logstash** is a data collection engine that unifies data from multiple sources, offers database normalization and distributes the data.
3. **Kibana** is an open source data visualization and exploration tool that is specialized for large volumes of streaming and real-time data. The software makes complex data streams more easily and quickly understandable through graphic representation. This component is optional to install.
4. **FileBeat** are *data shippers* that are installed on servers as agents used to send different types of operational data to Elasticsearch either directly or through Logstash, where the data might be enhanced or archived.

*Source: https://www.techtarget.com/searchitoperations/definition/Elastic-Stack*

To install ELK Stack, please follow below steps:

### 2.3.1. Install ElasticSearch

**Note**
If you use Collaboration Center, you have to install ElasticSearch. If not, this is not required.


#### a. Install ElasticSearch

**Step 1**: Extract the file "elasticsearch-7.17.10-windows-x86\_64.zip" to the desired installation path.

For example, ES\_PATH: C:\akaBot\elasticsearch-7.17.10.

![1698831079505-432.png](/static/img/1698831079505-432.png)

**Step 2:** Install the Elasticsearch service. Open the Command Prompt with "Run as administrator" and run the command:

```
%ES_PATH%\bin\elasticsearch-service.bat install
```

![1698831173260-619.png](/static/img/1698831173260-619.png)

**Step 3**: Start the Elasticsearch service using the command:

```
%ES_PATH%\bin\elasticsearch-service.bat start
```

![1698831334372-779.png](/static/img/1698831334372-779.png)

#### b. ElasticSearch Configuration

**b.1. Security Configuration**

Step 1: Stop the Elasticsearch service.

Step 2: Open the file %ES\_PATH%\config\elasticsearch.yml and add the following configuration at the beginning of the file:

```
xpack.security.enabled: true
```

Step 3: Start the Elasticsearch service again.

Step 4: Open the Command Prompt and run **%ES\_PATH%\bin\elasticsearch-setup-passwords interactive**

Enter passwords for all the built-in users of Elasticsearch.

![1698831288454-144.png](/static/img/1698831288454-144.png)

**b.2. Other configuration**

Step 1: Open Command Prompt with "Run as administrator" and run the file **%ES\_PATH%\bin\elasticsearch-service.bat manager** to open the configuration management interface for Elasticsearch service.

![1698831522366-251.png](/static/img/1698831522366-251.png)

Step 2: On the **General** tab, select "Startup Type" and set it to "Automatic."

![1698831577184-391.png](/static/img/1698831577184-391.png)

Step 3: On the **Logging** tab

![1698831635096-754.png](/static/img/1698831635096-754.png)

Step 4: On the **Java** tab

![1698831653137-277.png](/static/img/1698831653137-277.png)

#### c. Check ElasticSearch Installation

Check the Running status of the Elasticsearch service.

![1698831705683-754.png](/static/img/1698831705683-754.png)

Access the URL [http://localhost:9200/](http://localhost:9200/) to verify the successful installation of Elasticsearch.

![1698831739225-456.png](/static/img/1698831739225-456.png)

![1698831748226-661.png](/static/img/1698831748226-661.png)

### 2.3.2. Install Logstash

Please follow this guide to Install Logstash: [https://www.elastic.co/guide/en/logstash/current/installing-logstash.html](https://www.elastic.co/guide/en/logstash/current/installing-logstash.html)

### 2.3.3. Install Filebeat

Please follow this guide to Install Filebeat: [https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-installation-configuration.html](https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-installation-configuration.html)

### 2.3.4. Install Kibana (optional)

Please follow this guide to install Kibana on Windows Server: [https://www.elastic.co/guide/en/kibana/current/windows.html](https://www.elastic.co/guide/en/kibana/current/windows.html)

## 2.4. Install akaBot Center

The High Availability model needs 2 akaBot Center servers to backup for each other in failover situation.

Please **repeat below steps** to install and configure akaBot Center service on 2 separate servers.

### 2.4.1. Install JDK

**Step 1**: Double-click the file "jdk-11.0.18\_windows-x64\_bin.exe" to install JDK/JRE. Please follow the instructions in the installer to proceed.

![1698826168817-287.png](/static/img/1698826168817-287.png)

**Step 2:** Check the Installation Result

Open the Command Prompt and enter the command "java -version" to check if the JDK/JRE installation was successful.

![1698826198507-492.png](/static/img/1698826198507-492.png)

### 2.4.2. Install Apache Tomcat Web Server

#### a. Install Apache Tomcat

Double-click the file "apache-tomcat-8.5.89.exe" to install Apache Tomcat. Please follow the instructions in the installer.

**Note:** In the final step of the Apache Tomcat installation:

- Uncheck "Run Apache Tomcat"
- Uncheck "Show Readme"
- Click the "Finish" button to complete the installation.

![1698826414378-509.png](/static/img/1698826414378-509.png)

The installation path for Apache Tomcat: **%TOMCAT\_PATH%** = "C:\Program Files\Apache Software Foundation\Tomcat 8.5"

#### b. Apache Tomcat Configuration

Step 1: Navigate to the path **%TOMCAT\_PATH%\bin** and double-click the file **Tomcat8w.exe** to open the Apache Tomcat Service configuration.

![1698826573279-276.png](/static/img/1698826573279-276.png)

Step 2: On the **General** tab

- Select Startup type: Automatic
- Choose **Apply** to apply the configuration changes.

![1698826602935-553.png](/static/img/1698826602935-553.png)

Step 3: On the **Logging** tab

1. Log prefix: Remove "commons-daemon"
2. Redirect Stdout: Remove "auto"
3. Redirect Stderror: Remove "auto"
4. Choose Apply to apply the configuration changes.

![1698826668751-847.png](/static/img/1698826668751-847.png)

Step 4: On the **Java** tab

a. Adjust the Java Heap configuration:

- Initial memory pool: Enter a value \<= ½ of the server's RAM.

  Example: Server RAM = 32 GB -> Initial memory pool should be \<= ½ * 16 * 1024 = 16384 MB

- Maximum memory pool: Enter a value \<= ½ of the server's RAM.

  Example: Server RAM = 32 GB -> Maximum memory pool should be \<= ½ * 16 * 1024 = 16384 MB

**Note**: If you enter a value that is too large, it may prevent Apache Tomcat service from starting and result in errors.

![1698826792581-457.png](/static/img/1698826792581-457.png)

b. Choose **Apply** to apply the configuration changes.

![1698826829349-538.png](/static/img/1698826829349-538.png)

Step 5: Start the Tomcat Service

On the **General** tab, select **Start** to initiate the Apache Tomcat service.

![1698826877948-604.png](/static/img/1698826877948-604.png)

#### c. Check Apache Tomcat Installation

Step 1: After installation and configuration, go to the Services screen and check the status of the Apache Tomcat service.

- If the Status is not Running, start the Apache Tomcat service.
- If the Status is Running, proceed to step 2.

![1699244034878-897.png](/static/img/1699244034878-897.png)

Step 2: Access the URL [http://localhost:8080](http://localhost:8080/) in Chrome to verify the successful installation of Apache Tomcat:

![1699244051857-950.png](/static/img/1699244051857-950.png)

### 2.4.3. Install akaBot Center package

#### a. Copy and extract war file

Step 1: Stop Apache Tomcat service

![1698831867557-259.png](/static/img/1698831867557-259.png)

Step 2: Delete all folders in %TOMCAT\_PATH%/webapps.

Step 3: Copy the file akaBot-center-x.x.x.x.war to the %TOMCAT\_PATH%/webapps/ directory and rename it to ROOT.war.

![1698831956427-192.png](/static/img/1698831956427-192.png)

Step 4: Restart the Apache Tomcat service and wait for the ROOT.war to be extracted into the ROOT directory.

![1698831960528-312.png](/static/img/1698831960528-312.png)

Step 5: Stop the Apache Tomcat service.

![1698831966006-837.png](/static/img/1698831966006-837.png)

#### b. akaBot Center configuration

## 2.5. Install NGINX Load Balancer

### 2.5.1. Install Nginx package

1. Install Nginx package

```
cd apps/
sudo rpm -ivh <package name>
```

Ex: `sudo rpm -ivh nginx-1.22.1-1.el8.ngx.x86_64.rpm`

2. Start and enable Nginx server

```
sudo systemctl enable nginx
sudo systemctl start nginx
```

3. Verify Nginx version

```
nginx -v
```

```
sudo systemctl status nginx
```

### 2.5.2. Configure Nginx service

#### 2.5.2.1. Configure Nginx Load Balancing

1. Stop Nginx service (if running)

```
sudo systemctl stop nginx
```

2. Open the configuration file

```
sudo vi /etc/nginx/sites-available/default
```

3. Copy below code into the file

```nginx
upstream akaBotCenter {
  server <IP-SRV-CENTER-01>:8080;
  server <IP-SRV-CENTER-02>:8080;
}

# This server accepts all traffic to port 80 and passes it to the upstream.
# Notice that the upstream name and the proxy_pass need to match.
server {
  listen 80;
  server_name  <YOUR-DOMAIN>;
  client_max_body_size 200M;

  location / {
        proxy_pass http://akaBotCenter;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        # WebSocket support (nginx 1.4)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
  }
}
```

4. Update the variable in file

- `<IP-SRV-CENTER-01>`: IP address of akaBot Center server 01
- `<IP-SRV-CENTER-02>`: IP address of akaBot Center server 02
- `<YOUR-DOMAIN>`: akaBot Center domain.

5. Set the load balancing mode

In order to distribute the request from end user to appropriate akaBot Center server, you need to set the load balancing mode for Nginx as one of below modes:

**+ Round robin mode:** the requests will be distributed sequentially for each server.

You don't need to change the file setting and go to step 6 to exit the setting.

**+ Weighted round robin mode:** based on request processing capacity of each server and its priority, you will assign a weight of priority. The requests will be distributed by servers' priority.

You add weight setting after server address in upstream configuration as below:

```nginx
upstream akaBotCenter {
  server <IP-SRV-CENTER-01>:8080;
  server <IP-SRV-CENTER-02>:8080 weight=2;
}
```

In this example, request traffic to akaBot Center server 02 will be doubled than server 01.

**+ Least Connections:** The requests will be distributed in priority order of servers from least to highest active connections. To use it, add below constant into the upstream configuration:

```nginx
upstream akaBotCenter {
  least_conn;
  server <IP-SRV-CENTER-01>:8080;
  server <IP-SRV-CENTER-02>:8080;
}
```

**+ IP Hash:** The IP Hash policy uses an incoming request's source IP address as a hashing key to route non-sticky traffic to the same backend server. The load balancer routes requests from the same client to the same backend server as long as that server is available. To use it, add below constant into the upstream configuration:

```nginx
upstream akaBotCenter {
  ip_hash;
  server <IP-SRV-CENTER-01>:8080;
  server <IP-SRV-CENTER-02>:8080;
}
```

6. Save changes and exit

Press ESC key and type `:wq!`

#### 2.5.2.2. Configure Nginx SSL

If you use SSL service from provider, please follow the provider's guides to install and configure it.

Otherwise, please follow below steps to deploy your own Self-Signed SSL.

1. Create SSL Certificate (Self-Signed SSL)

```
sudo mkdir /etc/ssl/private
sudo chmod 700 /etc/ssl/private
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt
```

2. Create Diffie-Hellman

```
sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
```

3. Create configuration file

```
sudo vi /etc/nginx/conf.d/default.conf
```

4. Copy below code into the configuration file:

```nginx
server {
    listen 443 http2 ssl;
    listen [::]:443 http2 ssl;
    server_name <YOUR-DOMAIN>;
    client_max_body_size 200M;

    ssl_certificate /etc/ssl/certs/nginx-selfsigned.crt;
    ssl_certificate_key /etc/ssl/private/nginx-selfsigned.key;
    ssl_dhparam /etc/ssl/certs/dhparam.pem;

    ########################################################################
    # from https://cipherlist.eu/                                          #
    ########################################################################
    ssl_protocols TLSv1.3; # Requires nginx >= 1.13.0 else use TLSv1.2
    ssl_prefer_server_ciphers on;
    ssl_ciphers EECDH+AESGCM:EDH+AESGCM;
    ssl_ecdh_curve secp384r1; # Requires nginx >= 1.1.0
    ssl_session_timeout  10m;
    ssl_session_cache shared:SSL:10m;
    ssl_session_tickets off; # Requires nginx >= 1.5.9
    ssl_stapling on; # Requires nginx >= 1.3.7
    ssl_stapling_verify on; # Requires nginx => 1.3.7
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;
    # Disable preloading HSTS for now.
    #add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    ##################################
    # END https://cipherlist.eu/ BLOCK
    ##################################

  location / {
        proxy_pass http://akaBotCenter;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        # WebSocket support (nginx 1.4)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
  }
}
```

5. Update server\_name variable in file as your akaBot Center domain.

```
server_name <YOUR-DOMAIN>;
```

6. Configure redirect from HTTP to HTTPS (optional)

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name <YOUR-DOMAIN>;
    return 301 https://$host$request_uri;
}
```

8. Save changes and exit

Press ESC key and type `:wq!`

9. Enable configuration change for Nginx service and restart nginx

```
sudo nginx -t
sudo systemctl restart nginx
```

## 2.6. Configure Catalina.out

By default, Tomcat will write out the logs into *catalina.out* file which may cause dramatic increasing of the file size and decrease the performance. To stop this, change the configuration in Catalina.out as below:

1. Open the file

```
sudo vi /opt/tomcat/bin/catalina.sh
```

2. Press ESC then type: ":229" to go to line 229

3. Comment out this line to stop writing log to catalina.out.

```
#CATALINA_OUT="$CATALINA_BASE"/logs/catalina.out
```

4. Add below line after the commented line.

```
CATALINA_OUT=/dev/null
```

5. Save changes and close the file

Press ESC then type: `:wq`

**DONE!!!** You have successfully completed the akaBot Center installation and configuration in High Availability model.

**Wish you a wonderful experience with akaBot Center in your automation journey!!**

# 3. Troubleshoot issues

The installation may encounter various issues due to a variety of akaBot Center machine environments, account permission and regulative settings in each organization context. This section aims to guide you to self-troubleshoot some typical issues **(continuously updated)** and provide akaBot contact information for expert's support.

## 3.1. Self-Troubleshoot

If any raised issue during your installation, please follow below actions to self-troubleshoot.

### 3.1.1. Step 1 - Detect issue

Please use the logs to detect the issue.

- Issues related to Tomcat service start, please use Tomcat log file: */opt/tomcat/logs/catalina.out*
- Issues related to akaBot Center, please use Center log file: */opt/tomcat/logs/center/akaCenter.yyyy-mm-dd.0.log*

1. Remove the log of previous run by navigating to log folder then remove all the log files.
2. Start service again to generate log.
3. Open the log file to detect the issue.

### 3.1.2. Step 2 – Troubleshoot issue

#### 3.1.2.1. Issue 1: Could not commit with auto-commit

**Issue:** Could not commit with auto-commit as below image:

**Solution:**

1. At step 2.2.4 Step 4: Configure Tomcat service, please add below option into the JAVA-OPTS variable into service configuration file.

```
-Doracle.jdbc.autoCommitSpecCompliant=false
```

2. Continue to follow the next steps in the guide.

## 3.2. Contact akaBot team for Expert's support

If your self-troubleshooting endeavor does not work, **akaBot team is always here to support your installation success**, please contact akaBot team to get our expert's support through:

- contacting your project coordinator (if have)
- or sending an email to [support@akaBot.com](mailto:support@akaBot.com)
- or leaving a message on [akaBot website](https://akabot.com/contact-us/).
