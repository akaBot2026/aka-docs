---
id: find-control
title: "Find Control"
sidebar_label: "Find Control"
sidebar_position: 19
description: "Find Control activity documentation."
displayed_sidebar: activitiesSidebar
---
# Find Control

RCA.Activities.Windows.FindControl

## **Description**

Finds a Window element and stores it as an AutomationElement variable.

![image-20220505170658-1.png](/img/ff44ba_image-20220505170658-1.png)

(\*For mandatory)

## **In the body of activity**

* **Pick target element**\* - This activity will generate a string variable (Selector) to specify the location of that field.
* **Result Control (AutomationElement)\***- Output of the activity with type = ‘AutomationElement’.

## **Properties**

**Common**

* **Continue On Error (Boolean)**-A Boolean variable has two possible values: True or False  
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.  
  - False: blocks the process from continuing the execution.
* **TimeOut MS (Int32)** - The amount of time (in milliseconds) to wait for the activity to run. The default amount of time is 30000 milliseconds.  
  E.g: 30000
* **Delay After (Int32)**- Delay time (in milliseconds) after executing the activity.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations.  
  E.g: 300

**Input**

* **Selector (String)\***- String of characters that identifies the location of the window.

**Misc**

* **Public (Checkbox)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [0857..] Find Control

**Options**

* **Automation Base (Dropdown List)**- Specify the version of Automation library. This option goes together with Process argument.
* **From (UiElement)** - UiElement variable to root when searching for element with Selector string (if not filled, look from desktop root).
* **Use Window (WindowApp)** - Use output variable from Open Window or Window Scope to scope for activity (similar to From).

**Output**

* **Output Control (AutomationElement)\***- Output of the activity with type = ‘AutomationElement’.

**Wait**

* **Wait For Disable (Checkbox)**- Waits for element to be unable to interact with.
* **Wait For Enable (Checkbox)** - Waits for element to be able to interact with.
* **Wait For Vanish (Checkbox)** - Waits for element to vanish.
