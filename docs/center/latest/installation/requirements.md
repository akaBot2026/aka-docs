---
id: requirements
title: "Hardware & Software Requirements"
sidebar_label: "Hardware & Software Requirements"
sidebar_position: 1
description: "Hardware & Software Requirements documentation."
displayed_sidebar: centerSidebar
---
# Hardware & Software Requirements

## **akaBot Center**

| Number of Agents | CPU Cores (min 2 GHz) | RAM (GB) | Storage (GB) |
| --- | --- | --- | --- |
| \<20 | 8 | 16 | 400 |
| \<50 | 8 | 16 | 500 |
| \<100 | 8 | 16 | 600 |
| \<200 | 8 | 16 | 700 |
| \<250 | 8 | 16 | 800 |

## **Hardware requirement for Database (High Availability)**

| Number of Agents | CPU Cores (min 2 GHz) | RAM (GB) | Storage (GB) |
| --- | --- | --- | --- |
| \<20 | 4 | 8 | 100 |
| \<50 | 4 | 8 | 200 |
| \<100 | 8 | 8 | 300 |
| \<200 | 8 | 8 | SSD 400 |
| \<250 | 8 | 16 | SSD 400 |

## **Software Requirements**

|  | Supported Versions |
| --- | --- |
| **Operating System (OS)** | Windows 10 |
|  | Windows 10N |
|  | Windows 11 |
|  | Windows Server 2016 |
|  | Windows Server 2019 |
|  | Windows Server 2022 |
|  | Windows Server 2025 |
|  | Ubuntu 18, 20, 22, 24 LTS |
|  | Red Hat Enterprise Linux (RHEL) 8, 9, 10 |
|  | Amazon Linux 2, 2023, 2025 |
|  | *Debian (11, 12, 13), CentOS (7,8,9), Fedora (40, 41, 42) \** |
| **Databases** | MySQL 8.x |
|  | Microsoft SQL Server (MSSQL) 2016, 2017, 2029, 2022 |
|  | Oracle database (10g, 11g, 12c, 18c, 19c, 21c, 23c) |
|  | PostgreSQL 14, 15, 16 *(only support from akaBot Center version 4.x.x.x)* |
| **Web Servers** | Tomcat 8.5.x (*akaBot Center 2.x, 3.x*)  Tomcat 9.0.x (*akaBot Center 2.x, 3.x*)  Tomcat 10.1.x (*akaBot Center 4.x*)  Tomcat 11.0.x (*akaBot Center 4.x*) |
| **ActiveMQ** | ActiveMQ Classic 5.15.x or higher |
| **Browser** (for using the Center s UI) | Google Chrome version 65 or higher |
| **JRE/JDK** | Minimum: Java 8 |

> **Note:** It is strongly recommended to use a dedicated server for akaBot Center in production environments. Sharing the server with other enterprise applications may lead to resource contention and degraded performance.

> **Warning:** Running akaBot Center on unsupported operating systems or software versions is not recommended and may result in unexpected behavior or installation failures.
