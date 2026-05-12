---
id: go-forward
title: "Go Forward (NB)"
sidebar_label: "Go Forward (NB)"
sidebar_position: 11
description: "Go Forward (NB) activity documentation."
displayed_sidebar: activitiesSidebar
---
# Go Forward (NB)

RCA.Activities.NativeBrowser.GoForward

## **Description**

The Go Forward activity goes forward to one URL in the history list of the current browser.

![image-20220505150257-1.png](/img/2a006f_image-20220505150257-1.png)

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
  E.g: [2446667] Go Back
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.
