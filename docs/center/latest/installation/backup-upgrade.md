---
id: backup-upgrade
title: "Backup and Upgrade"
sidebar_label: "Backup and Upgrade"
sidebar_position: 18
description: "Backup and Upgrade documentation."
displayed_sidebar: centerSidebar
---
# Backup and Upgrade

As a general rule, we advise you to have the same Agent, Studio, and Center to take advantage of all the latest features. Studio and Agent must have the same version. This document aims to give you step-by-step instructions on how to update & backup akaBot Studio, Agent & Center.

## **1. akaBot Studio & Agent**

* **Step 1:** Remove the previous version [**Uninstall akaBot**](/docs/agent/latest/installation/uninstallation.md).

* **Step 2:** Download the latest version of akaBot Platform from the link provided in Licensing email Run the installer and wait until the process is finished.

![uelcome akabot.png](/static/img/257532_uelcome-akabot.png)

## **2. akaBot Center**

* **Step 1:** Download the latest version of akaBot Center from the link provided in Licensing email.
* **Step 2:**
Kindly follow all the steps to update [**akaBot Center**](/docs/center/latest/installation/upgrade-3x-to-4x.md).

Make sure you create a backup that contains 2 files from old version : **application-dev.yml** and **application-prod.yml** so you don't have to re-edit

* **Step 3:** Backup license file: Find the license.lic file via the directory below:

C:\Program Files\Apache Software Foundation\Tomcat 8.5\webapps\ROOT\WEB-INF\classes\license

![image-20220825142739-1.png](/static/img/51f066_image-20220825142739-1.png)

* **Step 4:** Backup Database: Open MySQL Export the old Database.

[![https://files.readme.io/b5f111f-Screenshot_90.png](/static/img/e1cd87_b5f111f-screenshot_90.png)](https://dash.readme.com/project/akabotlibraby/v2.0.55/docs/upgrade-akabot)

At Object Selection, select **aka\_orchestrator**. And then select **Export Progress** to Start Export.

![https://files.readme.io/bf9ae04-Capture.PNG](/static/img/36557a_bf9ae04-capture.png)

[![https://files.readme.io/41697f5-cap2.PNG](/static/img/4904ca_41697f5-cap2.png)](https://dash.readme.com/project/akabotlibraby/v2.0.55/docs/upgrade-akabot)

* **Step 5:** Stop **Tomcat** service and delete the old version of "ROOT" folder.

[![https://files.readme.io/a6b28ce-Screenshot_2021-07-05_095021.jpg](/static/img/4b7ca2_a6b28ce-screenshot_2021-07-05_095021.jpg)](https://dash.readme.com/project/akabotlibraby/v2.0.55/docs/upgrade-akabot)

**Step 6:** Copy the file war ( latest version of Center ) and Start **Tomcat** to proceed to upgrade Center.

**Step 7:** Copy 2 files: **application-dev.yml** and **application-prod.yml** and paste them into the directory below after starting Tomcat (If you config these files).

C:\Program Files\Apache Software Foundation\Tomcat 8.5\webapps\ROOT\WEB-INF\classes\config

**Step 8:** Copy the backup license  and paste into the old folder. (Because the license would be disappeared after upgrading. If you follow this step, you don't need to activate the Center again).
