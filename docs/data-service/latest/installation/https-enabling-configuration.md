---
id: https-enabling-configuration
title: "HTTPS Enabling Configuration"
sidebar_label: "HTTPS Enabling Configuration"
sidebar_position: 2
description: "HTTPS Enabling Configuration documentation."
displayed_sidebar: dataServiceSidebar
---
# Enabling HTTPS for Center and Data Service
## 1. Prerequisites 

* Apache Tomcat 8.5, MySQL/MSSQL, JDK 11 and ActiveMQ must be installed. 
* JAVA_HOME environment variables must be defined. 
* akaBot Center war file must be placed in correct directory. 
* akaBot Data Service files must be placed in below directory:  
`C:\akaBot\DataService\*` 

## 2. Generate and Trust Certificate 

## 2.1. Generate Certificate 

In this guideline, we are going generate self-signed certificate files. To generate certificates that are trusted globally and accepted by other machines, you need to contact the IT department to create certificates. 

Before doing the next action, we need to backup java system "cacerts" file for safety reasons. 

![generate-certificate](/static/img/data-service/generate-certificate.png)

Then, open command prompt with administrative privileges and run below commands.  

Remember to change your domain, password and company information, if required. 

![domain-dataservice](/static/img/data-service/domain-dataservice.png)

After the above command is finished, the file `C:\Program Files\Java\jdk-11\lib\security\cacerts` will be updated with new alias name "akabot" inside. And there will be 3 files appear to your current working directory: 

![jdk-11](/static/img/data-service/jdk-11.png)

## 2.2. Import Existing Certificate 

In case the IT department already generated a valid certificate. We can convert this certificate to another format and import it to akaBot software. 

![alias-dataservice](/static/img/data-service/alias-dataservice.png)

## 2.3. Trust Certificate 

**Manual (Machine Scope)** 

In the Center and Data Service machine, double click to file "akabot.cer" and then install this certificate to Local Machine > Trusted Root. After install certificate, you can check the result in "Manage computer certificates > Trusted Root Certification Authorities".

![manual-dataservice](/static/img/data-service/manual-dataservice.png)

![machine-scope-dataservice](/static/img/data-service/machine-scope-dataservice.png)

**NOTE:** remember to copy file "akabot.cer" to all Agent machines and trust it also. 

**Automatically (Organization Scope)** 

In an organization, all the machines are connected to an Active Directory server. They will fetch all certificates and policies from this server to apply to local machine. We can do this way to automatically trust the above certificate to all Agent machines. 

To do this, you need to send the above certificate to your IT department. They will add it to Trusted Root of their Active Directory server. 

## 3. Configure Data Service 

Copy file "akabot.p12" to directory `C:\akaBot\DataService` 
 
![configure-dataservice](/static/img/data-service/configure-dataservice.png)

Open file application.yml in directory `C:\akaBot\DataService` and configure is as below. 

![logging-dataservice](/static/img/data-service/logging-dataservice.png)

![server-dataservice](/static/img/data-service/server-dataservice.png)

Make sure file win-install.bat has content looks like this. 

![echo-dataservice](/static/img/data-service/echo-dataservice.png)
 
## 4. Configure akaBot Center 

Copy file "akabot.jks" to directory `C:\Program Files\Apache Software Foundation\Tomcat 8.5\conf`. 

![tomcat-dataservice](/static/img/data-service/tomcat-dataservice.png)

Make sure file server.xml in this directory has content looks like this. 

![server-xml-dataservice](/static/img/data-service/server-xml-dataservice.png)
 
Copy file "akabot.p12" to directory `C:\Program Files\Apache Software Foundation\Tomcat 8.5\webapps\ROOT\WEB-INF\classes\config`. 

![akabot-p12-dataservice](/static/img/data-service/akabot-p12-dataservice.png)
 
Make sure the file application-prod.xml in this directory has content looks like this. 
 
![application-prod-dataservice](/static/img/data-service/application-prod-dataservice.png)

![data-service-enabled](/static/img/data-service/data-service-enabled.png)

Run Tomcat configure application and make sure akaBot Center will use profile "prod,tls" by adding this line: 

`-Dspring.profiles.active=prod,tls` 

![tomcat-8.5-dataservice](/static/img/data-service/tomcat-8.5-dataservice.png)

## 5. Run Applications 

To install and start akaBot Data Service, run file "win-install.bat" using administrative privileges. 

Start to run akaBot Center by using Windows Services.

![run-applications](/static/img/data-service/run-applications.png)