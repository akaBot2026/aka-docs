---
id: minimize-window
title: "Minimize Window"
sidebar_label: "Minimize Window"
sidebar_position: 6
description: "Minimize Window activity documentation."
displayed_sidebar: activitiesSidebar
---
# Minimize Window

RCA.Activities.Windows.MinimizeWindow

## **Description**

The Minimize Window selects a window and minimizes it.

![image-20220505165547-1.png](/img/ca0388_image-20220505165547-1.png)

(\*For mandatory)

## **In the body of activity**

* **Pick target element\***- Chooses the element to minimize. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)**-A Boolean variable has two possible values: True or False  
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.  
  - False: blocks the process from continuing the execution.
* **Timeout MS (Int32)** - The amount of time (in milliseconds) to wait for the activity to run. The default amount of time is 30000 milliseconds.  
  E.g: 30000
* **Delay After (Int32)**- Delay time (in milliseconds) after executing the activity.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations.  
  E.g: 300

**Input**

* **Selector (String)\***- String of characters that identifies the location of the window.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [12368654] Minimize Window

**Options**

* **Automation Base (Dropdown list)** - Specify the version of Automation library. This option goes together with Process argument.
* **Element (AutomationElement)**- Uses variable with type = ‘AutomationElement’ as input instead of selector string.
* **From (UiElement)**- UiElement variable to root when searching for element with Selector string (if not filled, look from desktop root).
* **Use Window (WindowApp)**- Use output variable from Open Window or Window Scope to scope for activity (similar to From).

**Wait**

* **Wait For Disable (Checkbox)**- Waits for element to be unable to interact with.
* **Wait For Enable (Checkbox)** - Waits for element to be able to interact with.
* **Wait For Vanish (Checkbox)**- Waits for element to vanish.
