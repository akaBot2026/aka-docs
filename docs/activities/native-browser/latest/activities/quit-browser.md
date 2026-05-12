---
id: quit-browser
title: "Quit Browser (NB)"
sidebar_label: "Quit Browser (NB)"
sidebar_position: 16
description: "Quit Browser (NB) activity documentation."
displayed_sidebar: activitiesSidebar
---
# Quit Browser (NB)

RCA.Activities.NativeBrowser.QuitBrowser

## **Description**

The Quit Browser closes the current browser. This will only close window Browser opened by Open Browser (NB) activity.

![image-20220505151210-1.png](/img/8da77f_image-20220505151210-1.png)

(\*For Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity. The default amount of time is 300 milliseconds.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations. The default amount of time is 300 milliseconds.  
  E.g: 300

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.
