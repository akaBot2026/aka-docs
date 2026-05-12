---
id: type-into
title: "Type Into"
sidebar_label: "Type Into"
sidebar_position: 15
description: "Type Into activity documentation."
displayed_sidebar: activitiesSidebar
---
# Type Into

RCA.Activities.Windows.TypeInto

## **Description**

The Type Into activity allows you to type into a text field of an indicated window.

![image-20220505170410-1.png](/img/491ac1_image-20220505170410-1.png)

(\*For mandatory)

## **In the body of activity**

* **Pick target element**\* - Chooses the text field to type into. This activity will generate a string variable (Selector) to specify the location of that element.
* **Text (String)**\* - The text to type into. This property supports String variable so it must be quoted.  
  E.g: keyboard

## **Properties**

**Before Type**

* **Click (Boolean)** - If selected, the text field is clicked before the text is written.
* **Double Click (Boolean)** - If selected, the text field is double-clicked before the text is written.
* **Empty Field (Boolean)** - If selected, all the existing content in the text field will be erased before the text is written.
* **Set Focus (Boolean)**- Sets keyboard focus to the text field.

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False  
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.  
  - False: blocks the process from continuing the execution.
* **TimeOut MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000
* **Delay After (Int32)**- Delay time (in milliseconds) after executing the activity.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations.  
  E.g: 300

**Input**

* **Selector (String)**\* - String of characters that identifies the location of the window.
* **Text (String)**\* - The text to type into.  
  E.g: keyboard

**Misc**

* **Public (Checkbox)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: [586302] Type Into

**Options**

* **Automation Base (Dropdown List)** - Specify the version of Automation library. This option goes together with Process argument (UIA2 or UIA3).
* **Delay Between Keys (Number)**- Specified amount of time between keys.
* **Element (AutomationElement)** - Uses variable with type = ‘AutomationElement’ as input instead of selector string.
* **From (UiElement)**- UiElement variable to root when searching for element with Selector string (if not filled, look from desktop root).
* **Send Window Message (Checkbox)** - Check if you want to send window message
* **Use Window (WindowApp)**- Use output variable from Open Window or Window Scope to scope for activity (similar to From).

**Wait**

* **Wait For Disable (Checkbox)**- Waits for element to be unable to interact with.
* **Wait For Enable (Checkbox)** - Waits for element to be able to interact with.
* **Wait For Vanish (Checkbox)**- Waits for element to vanish.
