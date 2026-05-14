---
id: picture-in-picture
title: "Picture in Picture"
sidebar_label: "Picture in Picture"
sidebar_position: 5
description: "Picture in Picture documentation."
displayed_sidebar: agentSidebar
---
# Picture in Picture

Picture-in-Picture allows you to run attended automation without having to interrupt your current activity on the machine. While the Robot works in PiP mode, your machine  is free and you can access your files, modify documents, send e-mails, answer phone calls, and other duties

To start a process in Picture in Picture mode, you need to click to 3 dots icon then choose "Run workflow in PiP" symbol

![Run workflow in PiP](/static/img/image-20221117135605-8.png)

For the first time running  process in PiP mode, users has to supply credential information for bot to unlock the screen and start process in case your machine is sleeping. 

![PiP credential](/static/img/image-20221117140949-9.png)

After choosing "Run in PiP", a new session opens and you can choose whether or not you can control it with your mouse and your keyboard by turning on/off toggle "Take control" on the top of the session or can keep it on top in case you want to keep an eyes over the running process while you are working on something else by turning on/off the toggle "Keep on top" 

![PiP session](/static/img/328420978_738762340828688_4227970519572779063_n.png)

**Note**: After closing the PiP session, all the settings related to location, the session's size,  taking control, keeping on top, PiP Mode Resolution, Signing Off After Finish, and Closing PiP After Finish will be kept for the next running.

# Known Issues and Limitations
There are a few things to consider when using the Picture-in-Picture feature:

- If you use a PIN to log into the main Windows session, you are asked for your credentials every time you start a Picture-in-Picture session.
The above only applies to using a PIN. When a password is used, it is automatically saved for authenticating future Picture-in-Picture sessions.
- When the Picture-in-Picture session is opened, start-up programs also open in the PiP session. Because of this, it is possible that some settings for peripheral devices to be reset to their default values (such as lighting settings for keyboard and mouse).
- If you enable the Remote Desktop Session when the prompt appears while running a PiP Process, you need to log out and log back in to the main Windows Session for the changes to take effect.
- The machine cannot be restarted or shut down while the PiP session is opened as the PiP session needs to be closed beforehand.
- Due to Operating System limitations for running Picture-in-Picture, Home Editions of Windows 8 and 10 are not supported.
- The clipboard is shared between the PiP session and the main session.
- Run as administrator cannot be used in the PiP session.
- Only one Picture-in-Picture session can be started at a time
- Unable to run PIP mode on Win11.
- PIP mode cannot be executed if the workflow includes activities from the Native Browser package and the Main session has the corresponding browser open.

