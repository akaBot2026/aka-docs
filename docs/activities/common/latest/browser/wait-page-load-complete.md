---
id: wait-page-load-complete
title: "Wait Page Load Complete"
sidebar_label: "Wait Page Load Complete"
sidebar_position: 12
description: "Wait Page Load Complete activity documentation."
displayed_sidebar: activitiesSidebar
---
# Wait Page Load Complete

RCA.Activities.Common.WaitPageLoadComplete

## **Description**

The Wait Page Load Complete allows you to wait until a webpage is fully loaded.

![image-20220505135118-1.png](/img/bace5b_image-20220505135118-1.png)

(\*For mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity. The default amount of time is 300 milliseconds.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations. The default amount of time is 200 milliseconds.  
  E.g: 200

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.

**Output**

* **Wait Success (Boolean)**- A Boolean variable has two possible values: True or False  
  **True** - The page was fully loaded.  
  **False** - The page was not fully loaded.
