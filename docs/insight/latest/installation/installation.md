---
id: insight-installation
title: Installation
sidebar_label: Installation
sidebar_position: 1
description: Prerequisites and step-by-step installation guide for akaBot Insight.
displayed_sidebar: insightSidebar
---
# Installation
## Prerequisites

1. MySQL 8.0
2. JDK 11
3. Automation Insight conductor (Prebuilt version)
4. akaBot Center (Latest version)
5. Apache Tomcat 8.5
6. Port 8080 should be free, otherwise you must to run conductor with another port.

## Installation

### 1. MySQL 8.0

1.1. Create new database for conductor by the following sql

create database automationinsight;

1.2. Config mysql connection: open file application-prod.yml

![image-20230421141503-1.png](/static/img/image-20230421141503-1.png)

### 2. JDK 11

<https://www.oracle.com/in/java/technologies/javase/jdk11-archive-downloads.html>

### 3. Apache Tomcat 8.5

<https://archive.apache.org/dist/tomcat/tomcat-8/v8.5.57/bin/apache-tomcat-8.5.57.exe>

![image-20230421141503-2.png](/static/img/image-20230421141503-2.png)

Setup HTTP/1.1 Connector Port: default 8080, same gate port with conductor.

## Config Authenticate User throught akaBot Center

1. Open file application-prod.yml
2. Scroll to the bottom of that file and you can see center section here, then update the configuration if needed:

![image-20230421141503-3.png](/static/img/image-20230421141503-3.png)

Example:

domain: <http://center.akabot.io>

port: 80

dbName: aka\_orchestrator

## Run conductor

1. Open folder Tomcat: C:/Programs File/Apache Software Foundation/Tomcat8/webapps
2. You already downloaded in step 3 and file into folder Tomcat as above url

![image-20230421141503-4.png](/static/img/image-20230421141503-4.png)

 Open Services on Windows and Start Apache Tomcat 8.5

![image-20230421141503-5.png](/static/img/image-20230421141503-5.png)

Once the conductor has successfully started, you can open <http://localhost:8080/swagger-ui/index.html> to see api of conductor.

If you edit config application-prod.yml, you must restart Apache Tomcat.
