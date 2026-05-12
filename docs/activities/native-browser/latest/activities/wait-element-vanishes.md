---
id: wait-element-vanishes
title: "Wait Element Vanishes (NB)"
sidebar_label: "Wait Element Vanishes (NB)"
sidebar_position: 24
description: "Wait Element Vanishes (NB) activity documentation."
displayed_sidebar: activitiesSidebar
---
# Wait Element Vanishes (NB)

RCA.Activities.NativeBrowser.WaitElementVanish

## **Description**

The Wait Element Vanishes (NB) activity waits for a selected element to disappear from a webpage.

![image-20220505151644-1.png](/img/image-20220505151644-1.png)

\* indicates required fields.

## **In the Body of Activity**

* **Pick Target Element**\*: Selects a UI element on the browser. This action generates a **Selector** string to identify the element.

## **Properties**

**Common**

* **Continue On Error (Boolean)**: Specifies whether the automation should continue when an error occurs.  
  True: Continues execution even if an error occurs within the activity.  
  False (default): Stops the process when an error occurs.
* **Delay After (Int32)**: The delay time (in milliseconds) after the activity executes. Default is `300`.  
  Example: `300`
* **Delay Before (Int32)**: The delay time (in milliseconds) before the activity starts. Default is `300`.  
  Example: `300`
* **Timeout MS (Int32)**: The maximum time (in milliseconds) to wait for the activity to run. If the timeout expires, execution stops. Default is `30000`.  
  Example: `30000`

**Input**

* **Selector (String)**\*: The XML string used to identify the target UI element.
* **Wait Visible (Checkbox)**: If selected, waits for the target element to become visible before executing. This option is selected by default.

**Misc**

* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.
* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security requirements before using this property. Default is unchecked.

**Output**

* **Vanished (Boolean)**: Indicates whether the element disappeared before the timeout.  
  True: The element vanished before the timeout.  
  False: The element did not vanish before the timeout.