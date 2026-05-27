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
3. Get processes from akaBot Center or akaBot Studio.
4. Control the processes by running/stopping a process, upgrading a processes to new version.

To open the akaBot Agent, you need to:  
– Click system tray to show hidden icons.  
– Right click akaBot icon.  
– Select Show akaBot Agent.

![image-20220505174101-1.png](/static/img/d5b6ed_image-20220505174101-1.png)

After that, akaBot Agent program is displayed on screen as below:

## **Configure network setting**

If your network requires the proxy to get access to the Bot Center, you need to firstly configure the proxy setting to open the connection by performing below steps:

**Step 1:** In Settings screen ( if in the List Workflows screen then select Settings button at the right upper corner).

![image-20221117102945-5.png](/static/img/2d6c9f_image-20221117102945-5.png)

**Step 2:** Choose Network tab and fill information into Network Configuration form.

If select No proxy or Auto detect option, go to step 3.  
If select Manual proxy option, you need to specify the proxy setting:

* Select a proxy type.
* Fill proxy server URL.
* Fill proxy port.
* If the proxy requires the authentication, check option Required Authentication then fill user name, password to authenticate.

![image-20221117102229-3.png](/static/img/5d0ea0_image-20221117102229-3.png)

## **Configure bot setting & connect to Bot Center**

To connect the bot to akaBot Center, you need to register the bot setting in the akaBot Center first to have an Agent Key.

To register the bot to the akaBot Center, you may follow the instruction here.

After having the Agent Key, you can perform below actions to connect to the akaBot Center.

**Step 1:** – In Settings screen ( if in the List Workflows screen then select Settings button at the right upper corner).

**Step 2:** – Choose Center tab and fill information into Central Configuration form.

* Machine name: the computer name of current computer. The machine name is automatically pre-populated for you.
* Agent key: the key registered to the Bot Center.
* Center URL: Bot Center URL.

**Step 3:** – Click Connect to perform the connecting to the akaBot Center.

After connecting successfully, status of akaBot Center turns to be Connected.

![image-20221117102433-4.png](/static/img/fabb7a_image-20221117102433-4.png)

If the bot is already connected to the akaBot Center, you can disconnect at any time by clicking Disconnect button.

## **Get processes from akaBot Center or akaBot Studio**

Every 10 seconds, the akaBot Agent will automatically be refreshed to get all the process packages published from the akaBot Center.

You can refer the link for how to publish a package from the akaBot studio: [How to use akaBot Studio](/docs/studio/latest/user-guide/how-to-use.md)

## **Control the processes**

For a process, you can control by performing below actions:

* Pull a package.
* Start a process
* Stop a process

### **1. Pull new version of a package**

To pull a version of package, you need to click on "Down Arrow" symbol. The akaBot Agent will automatically download the new version of package to the local machine.

After downloading, the changes in new version will be automatically applied in the next running.

![image-20221117102945-5.png](/static/img/2d6c9f_image-20221117102945-5.png)

### **2. Start a process**

You can only start one process in one moment. And you can run process in 2 mode: Run in user's machine and Run Picture in Picture

**Run process in user's machine mode**

To start a process, you need to click "Play" symbol   
For a new process, you need to full the package to the local machine firstly then start the process.

After clicking "Play" symbol, the process starts to act as defined in the workflow. And while running, the bot status turns to be Busy.

![image-20221117103154-6.png](/static/img/119849_image-20221117103154-6.png)

**Run process in Picture in Picture mode**

Picture-in-Picture allows you to run attended automations without having to interrupt your current activity on the machine. While the Robot works in PiP, your machine is free and you can access your files, modify documents, send e-mails, answer phone calls, and other duties that can only be completed by you.

To start a process in Picture in Picture mode, you need to click to 3 dots icon then choose "Run workflow in PiP" symbol

![image-20221117135605-8.png](/static/img/d21165_image-20221117135605-8.png)

For the first-time running process in PiP mode, user has to supply credential information for bot to unlock the screen and start process in case your machine is sleeping.

![image-20221117140949-9.png](/static/img/b6ccf9_image-20221117140949-9.png)

After choosing "Run in PiP", a new session opens and you can choose whether or not you can control it with your mouse and your keyboard by turning on/off toggle "Take control" on the top of the session or can keep it on top in case you want to keep an eyes over the running process while you are working on something else by turning on/off the toggle "Keep on top"

![328420978_738762340828688_4227970519572779063_n.png](/static/img/e9d235_328420978_738762340828688_4227970519572779063_n.png)

**Note:** After closing the PiP session, all the settings related to location, the session's size,  taking control, keeping on top, PiP Mode Resolution, Signing Off After Finish, and Closing PiP After Finish will be kept for the next running.

**Known Issues and Limitations**

There are a few things to consider when using the Picture-in-Picture feature:

* If you are using a PIN to log into the main Windows session, you are asked for your credentials every time you start a Picture-in-Picture session.  
  The above only applies to using a PIN. When a password is used, it is automatically saved for authenticating future Picture-in-Picture sessions.
* When the Picture-in-Picture session is opened, start-up programs open in the PiP session as well. Because of this, it is possible that some settings for peripheral devices to be reset to their default values (such as lighting settings for keyboard and mouse).
* If you enable the Remote Desktop Session when the prompt appears while running a PiP Process, you need to log out and log back in the main Windows Session for the changes to take effect.
* The machine cannot be restarted or shut down while the PiP session is opened as the PiP session needs to be closed beforehand.
* Due to Operating System limitations for running Picture-in-Picture, Home Editions of Windows 8 and 10 are not supported.
* The clipboard is shared between the PiP session and the main session.
* Run as administrator cannot be used in the PiP session.
* Only one Picture-in-Picture session can be started at a time

### **3. Stop a process**

While a process is running, you can stop it manually by clicking "Stop" symbol   
After stopped, robot status turns to be Available and all related programs while running will be closed.

![image-20221117103353-7.png](/static/img/1cd410_image-20221117103353-7.png)
