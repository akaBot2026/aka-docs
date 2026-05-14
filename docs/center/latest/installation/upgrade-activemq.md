---
id: upgrade-activemq
title: "Upgrade ActiveMQ Version in akaBot Center"
sidebar_label: "Upgrade ActiveMQ Version in akaBot Center"
sidebar_position: 20
description: "Upgrade ActiveMQ Version in akaBot Center documentation."
displayed_sidebar: centerSidebar
---

# Upgrade ActiveMQ Version in akaBot Center

# **1. Download ActiveMQ**

- Go to link: [https://activemq.apache.org/download-archives](https://activemq.apache.org/components/classic/documentation/download-archives)

- Click version want to download (ActiveMQ 5.16.5 Release)

![1776064389132-176.png](/static/img/001aef_1776064389132-176.png)

- Download jar file (apache-activemq-5.16.5-bin.zip)

![1776064420865-217.png](/static/img/eb5caa_1776064420865-217.png)

# **2. Upgrade ActiveMQ**

- Go to Services’ windows to get path installed ActiveMQ

* Go to Run and type services.msc
* Find service name ActiveMQ and get path installed ActiveMQ (eg ACTIVEMQ\_PATH\_OLD: D:\Setups\Libs\apache-activemq-5.15.1"

![1776064525229-372.png](/static/img/7a6ff7_1776064525229-372.png)

- Uninstall old services ActiveMQ

* Go to ACTIVEMQ\_PATH\_OLD/bin/win64
* Exec UninstallService.bat file by right click and Run as administrator

![1776064571299-447.png](/static/img/a463dd_1776064571299-447.png)

- Extract zip new version ActiveMQ (eg. apache-activemq-5.16.5-bin.zip) to path you want to install (eg. ACTIVEMQ\_PATH\_OLD: D:\Setups\Libs\)

![1776064673129-770.png](/static/img/105b60_1776064673129-770.png)

![1776064698732-705.png](/static/img/f8b7a3_1776064698732-705.png)

- Copy and replace (override) folder kahadb from old version to new version of ActiveMQ

ACTIVEMQ\_PATH\_OLD/data/kahadb to ACTIVEMQ\_PATH\_NEW/data/kahadb

![1776064775939-834.png](/static/img/e11bbe_1776064775939-834.png)

- Intall new services ActiveMQ

* Go to ACTIVEMQ\_PATH\_NEW/bin/win64
* Exec InstallService.bat file by right click and *Run as administrator*

![1776064857397-462.png](/static/img/2d3ccd_1776064857397-462.png)

- Go to Services’ window to verify ActiveMQ’s version and start service ActiveMQ

![1776064892294-791.png](/static/img/0a6986_1776064892294-791.png)

- Ensure ActiveMQ’s service is *Running*

![1776065051427-766.png](/static/img/449ebe_1776065051427-766.png)

- Go to http://localhost:8161/ (account/pass: admin/admin) to verify ActiveMQ