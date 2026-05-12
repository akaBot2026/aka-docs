---
id: go-back
title: "Go Back (NB)"
sidebar_label: "Go Back (NB)"
sidebar_position: 10
description: "Go Back (NB) activity documentation."
displayed_sidebar: activitiesSidebar
---
# Go Back (NB)

RCA.Activities.NativeBrowser.GoBack

## **Description**

The Go Back activity goes back to one URL in the history list of the current browser.

![image-20220505150220-1.png](/img/e1a23f_image-20220505150220-1.png)

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
