---
id: send-hotkey
title: "Send Hot Key"
sidebar_label: "Send Hot Key"
sidebar_position: 14
description: "Send Hot Key activity documentation."
displayed_sidebar: activitiesSidebar
---
# Send Hot Key

RCA.Activities.Windows.SendHotKey

## **Description**

The Send Hot Key activity allows you to send a keyboard shortcuts to a window element

![image-20220505170329-1.png](/img/9fa4fe_image-20220505170329-1.png)

(\*For mandatory)

## **In the body of activity**

* **Pick target element\***- Chooses the field to select the item. This activity will generate a string variable (Selector) to specify the location of that field.
* **Alt (Checkbox)** - Modifier Key.
* **Ctrl (Checkbox)** - Modifier Key.
* **Shift (Checkbox)** - Modifier Key.
* **Win (Checkbox)** - Modifier Key.
* **Special Key (DropDownList)** - The key that is sent.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False  
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.  
  - False: blocks the process from continuing the execution.
* **TimeOut MS (Int32)** - The amount of time (in milliseconds) to wait for the activity to run. The default amount of time is 30000 milliseconds.  
  E.g: 30000
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations.  
  E.g: 300

**Input**

* **Selector (String)** - String of characters that identifies the location of the window..

**Misc**

* **Alt (Checkbox)**- Modifier Key
* **Ctrl (Checkbox)**- Modifier Key
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.
* **Key (Dropdown list)** - The key that is sent.
* **Key Argument (String)** - The key argument that is sent. This property supports String variables.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Shift (Checkbox)** - Modifier Key
* **Win (Checkbox)** - Modifier Key

**Options**

* **Automation Base (AutomationElement)** - Specify the version of Automation library. This option goes together with Process argument.
* **Element (AutomationElement)** - Uses variable with type = ‘AutomationElement’ as input instead of selector string.
* **From (UiElement)** - UiElement variable to root when searching for element with Selector string (if not filled, look from desktop root).
* **Send Windows Message (Checkbox)** - Check if you want to send window message
* **Use Window (WindowApp)** - Use output variable from Open Window or Window Scope to scope for activity (similar to From).

**Wait**

* **Wait For Disable (Checkbox)** - Waits for element to be unable to interact with.
* **Wait For Enable (Checkbox)** - Waits for element to be able to interact with.
* **Wait For Vanish (Checkbox)** - Waits for element to vanish.
