---
id: wait-element-exist
title: "Wait Element Exist"
sidebar_label: "Wait Element Exist"
sidebar_position: 21
description: "Wait Element Exist activity documentation."
displayed_sidebar: activitiesSidebar
---
# Wait Element Exist

RCA.Activities.Windows.WaitElementExist

## **Description**

A container that waits for a UI element to appear and enables you to perform multiple actions within it.

![image-20220505170814-1.png](/img/656128_image-20220505170814-1.png)

## **In the body of activity**

* **Pick target element** - Chooses the field to wait until it appears. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)**-A Boolean variable has two possible values: True or False  
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.  
  - False: blocks the process from continuing the execution.
* **Timeout MS (Int32)** - The amount of time (in milliseconds) to wait for the activity to run. If the timeout has expired, the page would not be loaded further.  
  Default value: 30000 (milliseconds).
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations.  
  E.g: 300

**Input**

* **Selector (String)** - String of characters that identifies the specified field.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.

**Options**

* **Automation Base (Dropdown List)** - Specify the version of Automation library. This option goes together with Process argument.
* **From (UiElement)** - UiElement variable to root when searching for element with Selector string (if not filled, look from desktop root).
* **Use Window (WindowApp)** - Use output variable from Open Window or Window Scope to scope for activity (similar to From).

**Output**

* **Found Element (AutomationElement)** - The resulted UI element. This field supports only UiElement variables.
