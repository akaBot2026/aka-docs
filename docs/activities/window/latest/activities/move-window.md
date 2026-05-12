---
id: move-window
title: "Move Window"
sidebar_label: "Move Window"
sidebar_position: 8
description: "Move Window activity documentation."
displayed_sidebar: activitiesSidebar
---
# Move Window

RCA.Activities.Windows.MoveWindow

## **Description**

The Move Window manipulates the position of the selected window.

![image-20220505165811-1.png](/img/9fbdfe_image-20220505165811-1.png)

(\*For mandatory)

## **In the body of activity**

* **Pick target element**\* - Chooses the window to be moved. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)**-A Boolean variable has two possible values: True or False  
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.  
  - False: blocks the process from continuing the execution.
* **TimeOut MS (Int32)**- The amount of time (in milliseconds) to wait for the activity to run. The default amount of time is 30000 milliseconds.  
  E.g: 30000
* **Delay After (Int32)**- Delay time (in milliseconds) after executing the activity.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations.  
  E.g: 300

**Input**

* **Height (Int32)**\* - The new height of the window. This property supports both positive and negative integers.  
  E.g: 638
* **Selector (String)**\* - String of characters that identifies the location of the window.
* **Width (Int32)**\*- The new width of the window. This property supports both positive and negative integers.  
  E.g: 468
* **X (Int32)\***- The new X position of the window. This property supports both positive and negative integers.  
  Eg: 20
* **Y (Int32)\***- The new Y position of the window. This property supports both positive and negative integers.  
  E.g: 20

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [324456456] Move Window

**Options**

* **Automation Base (Dropdown List)** - Specify the version of Automation library. This option goes together with Process argument.
* **Element (AutomationElement)** - Uses variable with type = ‘AutomationElement’ as input instead of selector string.
* **From (UiElement)**- UiElement variable to root when searching for element with Selector string (if not filled, look from desktop root).
* **Use Window (WindowApp)** - Use output variable from Open Window or Window Scope to scope for activity (similar to From).

**Wait**

* **Wait For Disable (Checkbox)** - Waits for element to be unable to interact with.
* **Wait For Enable (Checkbox)** - Waits for element to be able to interact with.
* **Wait For Vanish (Checkbox)** - Waits for element to vanish.
