---
id: wait-page-load-complete
title: "Wait Page Load Complete (NB)"
sidebar_label: "Wait Page Load Complete (NB)"
sidebar_position: 25
description: "Wait Page Load Complete (NB) activity documentation."
displayed_sidebar: activitiesSidebar
---
# Wait Page Load Complete (NB)

RCA.Activities.NativeBrowser.WaitPageLoadComplete

## **Description**

The Wait Page Load Complete activity allows you to wait until a webpage is fully loaded.

![image-20220505151720-1.png](/img/image-20220505151720-1.png)

\* indicates required fields.

## **Properties**

**Common**

* **Continue On Error (Boolean)**: Specifies whether the automation should continue when an error occurs.  
  True: Continues execution even if an error occurs within the activity.  
  False (default): Stops the process when an error occurs.
* **Delay After (Int32)**: The delay time (in milliseconds) after the activity executes. Default is `300`.  
  Example: `300`
* **Delay Before (Int32)**: The delay time (in milliseconds) before the activity starts. Default is `300`.  
  Example: `300`

**Misc**

* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.
* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security requirements before using this property. Default is unchecked.

**Output**

* **Wait Success (Boolean)**: Indicates whether the page was fully loaded.  
  True: The page is fully loaded.  
  False: The page is not fully loaded.