---
id: switch-to
title: "Switch To (NB)"
sidebar_label: "Switch To (NB)"
sidebar_position: 21
description: "Switch To (NB) activity documentation."
displayed_sidebar: activitiesSidebar
---
# Switch To (NB)

RCA.Activities.NativeBrowser.SwitchTo

## **Description**

The Switch To activity allows you to switch between different UI elements within a browser.

![image-20220505151447-1.png](/img/image-20220505151447-1.png)

\* indicates required fields.

## **In the Body of Activity**

* **Switch To (Dropdown List)**: Select the type of element to switch to.  
  **WINDOW**: Switches between browser tabs/windows.
* **Value (String)**: The value of the specified element to switch to.

## **Properties**

**Common**

* **Continue On Error (Boolean)**: Specifies whether the automation should continue when an error occurs.  
  True: Continues execution even if an error occurs within the activity.  
  False (default): Stops the process when an error occurs.
* **Delay After (Int32)**: The delay time (in milliseconds) after the activity executes. Default is `300`.  
  Example: `300`
* **Delay Before (Int32)**: The delay time (in milliseconds) before the activity starts. Default is `300`.  
  Example: `300`

**Input**

* **Switch To Type (Dropdown List)**: Selects the type of HTML element to switch to.  
  **WINDOW**: Switches between browser tabs/windows.
* **Switch To Value (String)**\*: The value of the specified element.

**Misc**

* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.
* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security requirements before using this property. Default is unchecked.