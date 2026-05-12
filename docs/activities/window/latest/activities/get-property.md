---
id: get-property
title: "Get Property"
sidebar_label: "Get Property"
sidebar_position: 24
description: "Get Property activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Property

RCA.Activities.Windows.GetProperty

## **Description**

The Get Property activity allows you to retrieve the value of a specified property of a window element.

![image-20220505171020-1.png](/img/61bf81_image-20220505171020-1.png)

(\*For mandatory)

## **In the body of activity**

* **Pick target element**\* - Chooses the element to get value of property. This activity will generate a string variable (Selector) to specify the location of that element.

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

* **Property Name (String)**\* - Name of the property to get value from.  
  E.g: Outlook
* **Selector (String)**\* - String of characters that identifies the location of the window.

**Misc**

* **Public (Checkbox)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [123123] Get Property

**Options**

* **Automation Base (Dropdown List)** - Specify the version of Automation library. This option goes together with Process argument.
* **Element (AutomationElement)** - Uses variable with type = ‘AutomationElement’ as input instead of selector string.
* **From (UiElement)**- UiElement variable to root when searching for element with Selector string (if not filled, look from desktop root).
* **Use Window (WindowApp)** - Use output variable from Open Window or Window Scope to scope for activity (similar to From).

**Output**

* **Output Value (String)**- Variable name for the property value will be returned with type = ‘String’. Not allow white space in output’s name.

**Wait**

* **Wait For Disable (Checkbox)**- Waits for element to be unable to interact with.
* **Wait For Enable (Checkbox)**- Waits for element to be able to interact with.
* **Wait For Vanish (Checkbox)**- Waits for element to vanish.
