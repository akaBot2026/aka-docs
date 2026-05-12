---
id: wait-page-load-complete
title: "Wait Page Load Complete"
sidebar_label: "Wait Page Load Complete"
sidebar_position: 28
description: "Wait Page Load Complete activity documentation."
displayed_sidebar: activitiesSidebar
---
# Wait Page Load Complete

RCA.Activities.Browser.WaitPageLoadComplete

## **Description**

The Wait Page Load Complete allows you to waits until a webpage is fully loaded.

![image-20220505140621-1.png](/img/9d1869_image-20220505140621-1.png)

(\* For Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [34116574] Wait Page Load Complete
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

**Output**

* **Wait Success (Boolean)**- A Boolean variable has two possible values: True or False  
  **・True** - The page was fully loaded.  
  **・False** - The page was not fully loaded.
