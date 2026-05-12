---
id: click
title: "Click"
sidebar_label: "Click"
sidebar_position: 17
description: "Click activity documentation."
displayed_sidebar: activitiesSidebar
---
# Click

RCA.Activities.Windows.Click

## **Description**

The Click activity allows you to click a specified UI element.

![image-20220505170535-1.png](/img/501ae9_image-20220505170535-1.png)

(\*For mandatory)

## **In the body of activity**

* **Pick target element**\* - Chooses the target element to click. This activity will generate a string variable (Selector) to specify the location of that Checkbox.

## **Properties**

**Common**

* **Continue On Error (Boolean)**-A Boolean variable has two possible values: True or False  
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.  
  - False: blocks the process from continuing the execution.
* **TimeOut MS (Int32)**- The amount of time (in milliseconds) to wait for the activity to run. The default amount of time is 30000 milliseconds.  
  E.g: 30000
* **Delay After (Int32)**- Delay time (in milliseconds) after executing the activity.  
  E.g: 300
* **Delay Before (Int32)**- Delay time (in milliseconds) before the activity begins performing any operations.  
  E.g: 300

**Input**

* **Click Type (Dropdown List)**- Specifies the type of mouse click (single, double, right, rightdouble) used when simulating the click event. By default, single click is selected.  
  **・Click** : A single click with left button.  
  **・DoubleClick** : Two clicks in quick succession with left button.  
  **・RightClick** : A single click with right button.  
  **・RightDoubleClick**: Two clicks in quick succession with right button.
* **Selector (String)** - String of characters that identifies the location of the window.

**Misc**

* **Public (Checkbox)**- Check if you want to public the activity. Remember to consider data security requirements before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [1231..] Click

**Options**

* **Automation Base (Dropdown List)**- Specify the version of Automation library. This option goes together with Process argument (UIA2 or UIA3).
* **Element (AutomationElement)** - Uses variable with type = ‘AutomationElement’ as input instead of selector string.
* **From (UiElement)**- UiElement variable to root when searching for element with Selector string (if not filled, look from desktop root).
* **Key Modifier**- You can choose a key modifier among: ***Alt*, *Ctrl*, *Shift*, *Win***.
* **Use Window (WindowApp)**- The window you want to take screenshot. This property supports WindowApp variables.

**Wait**

* **Wait For Disable (Checkbox)**- Waits for element to be unable to interact with.
* **Wait For Enable (Checkbox)** - Waits for element to be able to interact with.
* **Wait For Vanish (Checkbox)**- Waits for element to vanish.
