---
id: check
title: "Check/Uncheck"
sidebar_label: "Check/Uncheck"
sidebar_position: 16
description: "Check/Uncheck activity documentation."
displayed_sidebar: activitiesSidebar
---
# Check/Uncheck

RCA.Activities.Windows.Check

## **Description**

The Check/Uncheck activity allows you to check or uncheck a Checkbox.

![image-20220505170455-1.png](/img/fdecd3_image-20220505170455-1.png)

(\*For mandatory)

## **In the body of activity**

* **Pick target element**\* - Chooses the Checkbox on a window for checking or unchecking. This activity will generate a string variable (Selector) to specify the location of that Checkbox.

## **Properties**

**Common**

* **Continue On Error (Boolean)**-A Boolean variable has two possible values: True or False  
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.  
  - False: blocks the process from continuing the execution.
* **TimeOut MS (Int32)**- The amount of time (in milliseconds) to wait for the activity to run. The default amount of time is 30000 milliseconds.  
  E.g: 30000
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity.  
  E.g: 300
* **Delay Before (Int32)**- Delay time (in milliseconds) before the activity begins performing any operations.  
  E.g: 300

**Input**

* **Selector (String)\***- String of characters that identifies the location of the window.
* **Check Options (Dropdown)**- Specify the way of checking: ***Check*, *Uncheck*, *Threeway\_Checked*, *Threeway\_Intermediate*, *Threeway\_Unchecked***

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [12312..] Check/Uncheck

**Options**

* **Automation Base (Dropdown List)**- Specify the version of Automation library. This option goes together with Process argument (UIA2 or UIA3).
* **Element (AutomationElement)**- Uses variable with type = ‘AutomationElement’ as input instead of selector string.
* **From (UiElement)**- UiElement variable to root when searching for element with Selector string (if not filled, look from desktop root).
* **Use Window (WindowApp)**- Use output variable from Open Window or Window Scope to scope for activity (similar to From).

**Wait**

* **Wait For Disable (Checkbox)** - Waits for element to be unable to interact with.
* **Wait For Enable (Checkbox)**- Waits for element to be able to interact with.
* **Wait For Vanish (Checkbox)** - Waits for element to vanish.
