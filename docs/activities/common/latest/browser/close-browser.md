---
id: close-browser
title: "Close Browser"
sidebar_label: "Close Browser"
sidebar_position: 2
description: "Close Browser activity documentation."
displayed_sidebar: activitiesSidebar
---
# Close Browser

RCA.Activities.Common.CloseBrowser

## **Description**

The Close Browser closes the current browser. This will only close window Browser opened by Open Browser activity.

![image-20220505134350-1.png](/img/e6be53_image-20220505134350-1.png)

(\*For Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity. The default amount of time is 300 milliseconds.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations. The default amount of time is 200 milliseconds.  
  E.g: 200

**Input**

* **Browser (NativeBrowser)** - The browser that you want to close.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.
