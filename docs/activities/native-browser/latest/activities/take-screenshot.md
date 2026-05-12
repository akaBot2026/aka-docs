---
id: take-screenshot
title: "Take Screenshot (NB)"
sidebar_label: "Take Screenshot (NB)"
sidebar_position: 22
description: "Take Screenshot (NB) activity documentation."
displayed_sidebar: activitiesSidebar
---
# Take Screenshot (NB)

RCA.Activities.NativeBrowser.TakeScreenshot

## **Description**

The Take Screenshot activity captures a screenshot of a UI element within a browser.

![image-20220505151520-1.png](/img/image-20220505151520-1.png)

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

* **Selector (String)**\*: The XML string used to identify the target UI element. It contains attributes of the element and its hierarchy.
* **Wait Visible (Checkbox)**: If selected, waits for the target element to become visible before executing. This option is selected by default.

**Misc**

* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.
* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security requirements before using this property. Default is unchecked.

**Output**

* **Output Screenshot (Image)**: The captured screenshot, returned as an Image object.