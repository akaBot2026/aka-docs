---
id: install-elk-stack
title: "Install ELK Stack for akaBot Center"
sidebar_label: "Install ELK Stack for akaBot Center"
sidebar_position: 12
description: "Install ELK Stack for akaBot Center documentation."
displayed_sidebar: centerSidebar
---
# Install ELK Stack for akaBot Center

# **1. Install**

## **1.1 Java**

The first step in this process is getting the server prepared for the Elastic services by installing Java and setting up an environmental variable so Elasticsearch can locate Java

Download and Install Java ([https://www.java.com/en/](https://www.java.com/en/))

Take note of the installation path during the install, you ll need to know that for the next step. It should be something like C:\Program Files\Java\jre1.8\_xxx:

![1776051365761-131.png](/static/img/1124ca_1776051365761-131.png)

![1776051391450-311.png](/static/img/e0cb95_1776051391450-311.png)

Create a system variable named JAVA\_HOME

Open  System Properties  ->  Environment Variables  and create a new  System variable  named as JAVA\_HOME with a value of the path from the Java install.

![1776051433497-983.png](/static/img/67b98f_1776051433497-983.png)

## **1.2 Elasticsearch**

Elasticsearch is the core of the ELK stack and is where all of the data will be stored.

- Download package ([https://www.elastic.co/downloads/elasticsearch](https://www.elastic.co/downloads/elasticsearch)) - version 7.9.3

![1776051583607-548.png](/static/img/8fe54a_1776051583607-548.png)

- Extract the downloaded package into a designated folder in your file system (e.g. c:\elk).

- To install Elasticsearch open a Windows PowerShell prompt (Run as Administrator) and type the following commands:

`Invoke-Expression -command  c:\ELK\elasticsearch\bin\elasticsearch-service install `

- After Elasticsearch installed, open the Elasticsearch service properties with below command, change Startup type to Automatic and start the service.

` Invoke-Expression -command  c:\ELK\elasticsearch\bin\elasticsearch-service manager `

![1776052277687-801.png](/static/img/5a5435_1776052277687-801.png)

- Running browse to [http://localhost:9200](http://localhost:9200)

![1776052395005-832.png](/static/img/5c8496_1776052395005-832.png)

- Open port 9200(default port elasticsearch)

## **1.3 Logstash**

Logstash is responsible for receiving the data from the remote clients and then feeding that data to Elasticsearch.

- Download the Logstash package in .zip format

[(https://www.elastic.co/downloads/logstash)](https://www.elastic.co/downloads/logstash) - version 7.9.3

![1776052537954-605.png](/static/img/48c296_1776052537954-605.png)

- Unzipped Logstash folder (e.g. c:\elk).

- Next is create the configuration file(logstash.conf), which needs saved to the Logstash\config directory

```
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
There is also a sample configuration file in the config directory named  logstash-sample.conf  that you can refer to

- NSSM is going to be used to create the service for Logstash. You can download NSSM (Non-Sucking Service Manager) here

(https://nssm.cc/release/nssm-2.24.zip)

- To install Logstash open a Windows PowerShell prompt (Run as Administrator) and type the following commands. We will use NSSM (Non-Sucking Service Manager) to install it as a Windows Service

**a**. Run following command

Invoke-Expression -command  c:\ELK\nssm\win64\nssm install Logstash 

**b.** In Application Tab, set the following settings:

* Path: C:\ELK\logstash\bin\logstash.bat
* Startup directory: C:\ELK\logstash\bin
* Arguments: -f C:\ELK\logstash\config\logstash.conf

![1776052883129-476.png](/static/img/46a82b_1776052883129-476.png)

**c.** In Details Tab, set the following:

* Display Name: Logstash
* Description: Logstash Service
* Startup type: Automatic

![1776053004190-976.png](/static/img/19497e_1776053004190-976.png)

**d.** In Dependencies Tab, set the following:

* This service depends  : elasticsearch-service-x64
* Click  Install Service 

![1776053063612-117.png](/static/img/2ee080_1776053063612-117.png)

**e**. Open port 5044

## **1.4 Kibana**

Kibana is the web based front end that will be used to search the data stored in Elasticsearch. The Kibana installation is very similar to the Logstash install, and NSSM will be used again for the service creation.

- Download the Kibana package for Windows in .zip format

([https://www.elastic.co/downloads/kibana](https://www.elastic.co/downloads/kibana))   version 7.9.3

![1776053215456-145.png](/static/img/d766ab_1776053215456-145.png)

- Unzipped Kibana folder (e.g. c:\elk).

- To install Kibana open a Windows PowerShell prompt (Run as Administrator) and type the following command. We will use again NSSM (Non-Sucking Service Manager) to install it as a Windows Service:

**a.** Run following command

Invoke-Expression -command  c:\ELK\nssm\win64\nssm install Kibana 

**b.** In Application Tab, set the following settings:

* Path: C:\ELK\kibana\bin\kibana.bat
* Startup directory: C:\ELK\kibana\bin

![1776053341012-491.png](/static/img/0505c1_1776053341012-491.png)

**c.** In Details Tab, set the following:

* Display Name: Kibana
* Description: KibanaService
* Startup type: Automatic

![1776053406326-710.png](/static/img/83f7b7_1776053406326-710.png)

**d.** In Dependencies Tab, set the following:

* This service depends  : elasticsearch-service-x64, Logstash
* Click  Install Service 

![1776053464604-547.png](/static/img/819051_1776053464604-547.png)

- Navigate to the Kibana configuration file, found in the config directory, which in this case is C:\ELK\kibana\config\kibana.yml

Open the file in notepad and uncomment/edit the following lines:

![1776053524831-555.png](/static/img/652264_1776053524831-555.png)

Change server.port (recommend port 5601) and open port (5601)

Open services.msc and verify the service starts: Elasticsearch, Logstash, Kibana.

- Verify Kibana is accessible: [http://localhost:5601](http://localhost:5601)

![1776053596498-662.png](/static/img/9afc4d_1776053596498-662.png)

## **1.5 Filebeat**

Filebeat is used for collecting and shipping log files to logstash.

- Download the Filebeat package for Windows in .zip format

([https://www.elastic.co/fr/downloads/beats/filebeat](https://www.elastic.co/fr/downloads/beats/filebeat))   version 7.9.3

![1776053705946-185.png](/static/img/8f84fa_1776053705946-185.png)

- Unzipped Filebeat folder (e.g. c:\elk\filebeat).

- Edit the filebeat.yml configuration file, commenting out the Elasticsearch output and uncommenting the Logstash section setting the host to the IP of the ELK server: (e.g. localhost:5044)

![1776063183004-113.png](/static/img/5ebb4a_1776063183004-113.png)

Set Directory contains log file: C:\Program Files\Apache Software Foundation\Tomcat 8.5\logs\agents\*\\*.log

![1776063218105-229.png](/static/img/cf1f74_1776063218105-229.png)

- Now to install beats, open a Windows PowerShell prompt (Run as Administrator) and type the following commands:

PowerShell.exe -ExecutionPolicy UnRestricted -File C:\ELK\filebeat\.\install-service-filebeat.ps1

- Open services.msc and verify the service starts: Filebeat

![1776063272337-445.png](/static/img/929e81_1776063272337-445.png)

## **1.6 Creating an index pattern in kibana**

Index patterns tell Kibana what Elasticsearch indices we want to search, so now that there is file logs data in Elasticsearch, an index pattern needs to be configured on the Kibana side.

- Access Kibana at http://localhost:5601 and click on Explore on my own.

![1776063338436-767.png](/static/img/237352_1776063338436-767.png)

- Click on Management (Gear Icon) on the left hand menu

![1776063365041-358.png](/static/img/e2b9da_1776063365041-358.png)

- Click on Kibana > Index Patterns and then Create an Index pattern using filebeat-\* as the pattern

![1776063403706-761.png](/static/img/8836bf_1776063403706-761.png)

- For the Time Filter field name use @timestamp and then click Create index pattern

![1776063506491-523.png](/static/img/4baa59_1776063506491-523.png)

![1776063532613-669.png](/static/img/569e85_1776063532613-669.png)

- The File Logs are now flowing into the ELK stack from the ELK server itself.

And under  Discover .

![1776063579362-885.png](/static/img/c498f1_1776063579362-885.png)

## **2. CONFIG ON CENTER**

- Edit file application.yml => Directory: C:\Program Files\Apache Software Foundation\Tomcat 8.5\webapps\ROOT\WEB-INF\classes\config\application.yml

- Update elasticsearch properties: enabled=true,..

![1776063661414-996.png](/static/img/a78199_1776063661414-996.png)

- Restart tomcat service