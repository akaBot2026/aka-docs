---
id: go-forward
title: "Go Forward"
sidebar_label: "Go Forward"
sidebar_position: 6
description: "Go Forward activity documentation."
displayed_sidebar: activitiesSidebar
---
# Go Forward

RCA.Activities.Common.GoForward

## **Description**

The Go Forward activity goes forward to one URL in the history list of the current browser.

![image-20220505134632-1.png](/img/e9a3ae_image-20220505134632-1.png)

(\*For Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity. The default amount of time is 300 milliseconds.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations. The default amount of time is 200 milliseconds.  
  E.g: 300

**Input**

* **Browser (NativeBrowser)** - The existing browser variable that you want to attach to.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [2446667] Go Back
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.
