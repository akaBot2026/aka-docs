---
id: ha-model-windows-server
title: Installation Guide For High Availability Model on Windows Server
sidebar_label: High Availability Model on Windows Server
sidebar_position: 11
displayed_sidebar: centerSidebar
---

# Installation Guide For High Availability Model on Windows Server

TODO: this page is not up to date

This guide describes how to deploy akaBot Center in a High Availability (HA) configuration on Windows Server. The HA model uses multiple application nodes behind a load balancer with a shared external database, ensuring that automation continues uninterrupted even if one node experiences a failure.

## Prerequisites

- Two or more Windows Server 2019 or 2022 (64-bit) nodes, each with at least 16 GB RAM and 100 GB SSD
- Java JDK 17 installed on all nodes with `JAVA_HOME` configured
- A shared external database (MySQL 8.0, MSSQL 2019, or PostgreSQL 14) on a dedicated server
- Windows Network Load Balancing (NLB) or an external load balancer (e.g., F5, Nginx for Windows) configured
- akaBot Center 4.x installation package
- Administrator access to all nodes and the database server
- A shared network path (UNC path or mapped drive) accessible from all nodes for ActiveMQ shared store

## Installation Steps

1. **Prepare All Windows Nodes**
   - Install Java JDK 17 on each node and set `JAVA_HOME` in system environment variables.
   - Ensure all nodes can communicate with each other and with the database server on the required ports.
   - Synchronize system clocks via Windows Time Service (`w32tm`).

2. **Set Up the Shared External Database**
   - Install and configure the database on a dedicated server (not on the akaBot nodes).
   - Create the akaBot database and user as described in the respective database guide.

3. **Install akaBot Center on Node 1**
   - Extract the akaBot Center 4.x package to `C:\akabot\center` on Node 1.
   - Edit `conf\application.yml` with the shared database URL, credentials, and the NLB virtual IP or hostname for `server.address`.

4. **Initialize the Database (Node 1 Only)**
   - Open an elevated command prompt and run `C:\akabot\center\bin\db-init.bat`.
   - Do not run this on subsequent nodes.

5. **Configure ActiveMQ Shared Store**
   - Mount the shared network path (e.g., `\\fileserver\akabot-activemq`) on all nodes.
   - Edit `conf\activemq.xml` to set the `kahaDB directory` to the shared network path on all nodes.

6. **Install and Configure Node 2 (and Additional Nodes)**
   - Extract the akaBot Center package to `C:\akabot\center` on Node 2.
   - Copy the same `application.yml` and `activemq.xml` from Node 1.
   - Do NOT run `db-init.bat` on Node 2.

7. **Register as Windows Services on All Nodes**
   - Run `install-service.bat` on each node as administrator.

8. **Configure the Load Balancer**
   - Set up NLB or your load balancer to forward traffic on port 8080 and 8443 to all akaBot Center nodes.
   - Configure sticky sessions (session affinity) if required by your session management configuration.

9. **Start Services on All Nodes**
   - Start the akaBot Center service on each node via Services Manager.
   - Check the application logs at `C:\akabot\center\logs\` to confirm no startup errors.

10. **Test Failover**
    - Stop the akaBot Center service on Node 1.
    - Verify that the load balancer routes traffic to Node 2 and the portal remains accessible.

## Notes and Warnings

> **Note:** Configure session persistence (sticky sessions) at the load balancer if your deployment uses stateful session management. Without this, users may be unexpectedly logged out when the load balancer routes them to a different node.

> **Warning:** The shared network path for ActiveMQ must be highly available. If this share goes offline, the message broker on all nodes will fail, disrupting all robot communications.

> **Note:** Ensure Windows Firewall on each node allows inbound connections on ports 8080, 8443, and 61616 from other nodes and from robot machines.
