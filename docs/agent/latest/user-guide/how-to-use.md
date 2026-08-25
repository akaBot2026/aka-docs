---
id: how-to-use
title: "How to use akaBot Agent"
sidebar_label: "How to use"
sidebar_position: 2
description: "How to use akaBot Agent documentation."
displayed_sidebar: agentSidebar
---
# How to use akaBot Agent

## **Introduction**

The akaBot Agent is an execution agent that enables you to run processes built in Bot akaBot Studio or deployed from akaBot Center.

This document aims to guide you how to use the akaBot Agent.

## **Using akaBot Agent**

To operate a bot, you need to follow below actions:

1. Configure network setting to open connection to the akaBot Center if needed.
2. Configure bot setting & connect to akaBot Center.
3. Get processes from akaBot Center or akaBot Studio.
4. Control the processes by running/stopping a process, configuring input arguments, or viewing history.

To open the akaBot Agent, you need to:  
– Click system tray to show hidden icons.  
– Right click akaBot icon.  
– Select Show akaBot Agent.

![image-20220505174101-1.png](/static/img/d5b6ed_image-20220505174101-1.png)

After that, akaBot Agent program is displayed on screen as below:

![image-20221117102945-5.png](/static/img/2d6c9f_image-20221117102945-5.png)

---

## **Configure network setting**

If your network requires the proxy to get access to the Bot Center, you need to firstly configure the proxy setting to open the connection by performing below steps:

**Step 1:** In Settings screen (if in the List Workflows screen then select Settings button at the right upper corner).

**Step 2:** Choose Network tab and fill information into Network Configuration form.

If select No proxy or Auto detect option, go to step 3.  
If select Manual proxy option, you need to specify the proxy setting:

* Select a proxy type.
* Fill proxy server URL.
* Fill proxy port.
* If the proxy requires the authentication, check option Required Authentication then fill user name, password to authenticate.

![image-20221117102229-3.png](/static/img/5d0ea0_image-20221117102229-3.png)

---

## **Configure bot setting & connect to Bot Center**

To connect the bot to akaBot Center, you need to register the bot setting in the akaBot Center first to have an Agent Key.

After having the Agent Key, you can perform below actions to connect to the akaBot Center:

**Step 1:** In Settings screen (select Settings button at the right upper corner).

**Step 2:** Choose Center tab and fill information into Central Configuration form.

* Machine name: the computer name of current computer (automatically pre-populated).
* Agent key: the key registered to the Bot Center.
* Center URL: Bot Center URL.

**Step 3:** Click Connect to perform connecting to akaBot Center.

After connecting successfully, status of akaBot Center turns to be **Connected**.

![image-20221117102433-4.png](/static/img/fabb7a_image-20221117102433-4.png)

If the bot is already connected to the akaBot Center, you can disconnect at any time by clicking Disconnect button.

---

## **Get processes from akaBot Center or akaBot Studio**

The akaBot Agent will automatically refresh to get all the process packages published from akaBot Center.

You can refer to the link for how to publish a package from akaBot Studio: [How to use akaBot Studio](/docs/studio/latest/user-guide/how-to-use.md)

---

## **Control the processes**

For a process, you can control by performing below actions:

* Pull a package.
* View Details, Configure Arguments, and View History.
* Start a process (Standard or PiP).
* Stop a process.

### **1. Pull new version of a package**

To pull a version of package, you need to click on "Down Arrow" symbol. The akaBot Agent will automatically download the new version of package to the local machine.

After downloading, the changes in new version will be automatically applied in the next running.

![image-20221117102945-5.png](/static/img/2d6c9f_image-20221117102945-5.png)

---

### **2. Workflow Detail Tabs**

Clicking any workflow card opens the side detail panel featuring **3 tabs**:

#### **A. Details Tab**
Displays metadata about the selected workflow:
* **Name**: The automation package name.
* **Version**: Installed package version.
* **Last Run**: Timestamp of the latest execution.
* **Last Update**: Date when the package was installed or updated.
* **Description**: Functional description of the package.
* *Note: All text fields can be highlighted and copied (`Ctrl+C`).*

![Workflow Details Tab](/static/img/agent-details-tab.png)

#### **B. Configure Tab (Input Arguments)**
Allows users to customize input parameters (`InArgument`) before running the process:
* **Argument Types & Input Validation**: Supports String (up to 4,000 chars), Int32/Numbers, Boolean, and DateTime.
* **Required Arguments (`Name*`)**:
  * Mandatory parameters are marked with a red asterisk (`*`).
  * **Without Default Value**: The input box is open. The workflow **cannot run** until a value is supplied.
  * **With Default Value**: Displays *"Use default value"*. Click the **Pencil icon** to edit or **Undo** to revert.
* **Save & Run**: Click **Save** to persist custom values for future runs, or **Run** to validate and execute immediately.

![Workflow Configure Arguments](/static/img/agent-configure-tab.png)

#### **C. History Tab (Task History)**
Provides an audit log of past executions:
* **Execution Records**: Status (Success, Failed, Cancelled), start time, and duration.
* **Task Details Modal**: Click any historical run to inspect execution source (Local, Center, PiP), output argument values, and error logs.

![Workflow Execution History](/static/img/agent-history-tab.png) -->

### **3. Start a process**

You can only start one process at a time in 2 modes: **Run in user's machine** and **Run Picture-in-Picture**.

#### **Run process in user's machine mode**

To start a process, click the "Play" symbol.

After clicking "Play", the process starts executing and the bot status turns to **Running / Busy**.

![image-20221117103154-6.png](/static/img/119849_image-20221117103154-6.png)

#### **Run process in Picture-in-Picture (PiP) mode**

Picture-in-Picture allows you to run attended automations without interrupting your current activity on the machine. While the Robot works in PiP, your main screen is free.

To start a process in PiP mode: click the PiP icon on the workflow card.

![image-20221117135605-8.png](/static/img/d21165_image-20221117135605-8.png)

For the first-time running in PiP mode, user must supply Windows credentials for the bot to initialize the secondary desktop session.

![image-20221117140949-9.png](/static/img/b6ccf9_image-20221117140949-9.png)

After choosing "Run in PiP", a floating session opens. You can toggle **"Take control"** to interact with mouse/keyboard or **"Keep on top"** to monitor the execution.

![328420978_738762340828688_4227970519572779063_n.png](/static/img/e9d235_328420978_738762340828688_4227970519572779063_n.png)

---

### **4. Stop a process**

While a process is running, you can stop it manually by clicking the "Stop" button.  
After stopped, the robot status returns to **Available** and associated processes will terminate.

<!-- [CẦN THAY HÌNH MỚI 13]: Ảnh khi process dừng lại và Agent trở về trạng thái Available -->
![image-20221117103353-7.png](/static/img/1cd410_image-20221117103353-7.png)
