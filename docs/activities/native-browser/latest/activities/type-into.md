---
id: type-into
title: "Type Into (NB)"
sidebar_label: "Type Into (NB)"
sidebar_position: 23
description: "Type Into (NB) activity documentation."
displayed_sidebar: activitiesSidebar
---
# Type Into (NB)

RCA.Activities.NativeBrowser.TypeInto

## **Description**

The Type Into activity allows you to type text into any text field within a webpage.

![image-20220505151551-1.png](/img/image-20220505151551-1.png)

\* indicates required fields.

## **In the Body of Activity**

* **Pick Target Element**\*: Selects the target UI element. This action generates a **Selector** string to identify the element.
* **Text (String)**\*: The text to type into the target field. Must be enclosed in quotation marks.  
  Example: `"My name is"`

## **Properties**

**Before Type**

* **Empty Field (Checkbox)**: Specifies whether the target field is cleared before typing.  
  Checked: Clears the field.  
  Unchecked: Keeps the existing content.
* **Set Focus (Checkbox)**: If selected, sets focus on the field before typing. Default is unchecked.

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
* **Text (String)**\*: The text to type into the target field. Must be enclosed in quotation marks.  
  Example: `"My name is"`

**Options**

* **Delay Between Keys (Int32)**: The delay (in milliseconds) between each keystroke.  
  Example: `200`
* **Simulate Type (Checkbox)**: If selected, simulates typing using the target application's technology. This method is faster and can run in the background.  
  If not selected, typing is performed using the hardware driver, which is slower and cannot run in the background.  
  By default, this option is selected.

**Misc**

* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.
* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security requirements before using this property. Default is unchecked.