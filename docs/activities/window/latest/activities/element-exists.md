---
id: element-exists
title: "Element Exists"
sidebar_label: "Element Exists"
sidebar_position: 20
description: "Element Exists activity documentation."
displayed_sidebar: activitiesSidebar
---
# Element Exists

RCA.Activities.Windows.ElementExists

## **Description**

The Element Exists activity allows you to verify whether a specified window element exists or not.

![image-20220505170736-1.png](/img/6bcb00_image-20220505170736-1.png)

(\*For mandatory)

## **In the body of activity**

* **Pick target element\***- Chooses the element to verify its existence. This activity will generate a string variable (Selector) to specify the location of that element.

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

* **Selector (String)\***- String of characters that identifies the location of the window.

**Misc**

* **Public (Checkbox)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [313...] Element Exists

**Options**

* **Automation Base (Dropdown list)**- Specify the version of Automation library. This option goes together with Process argument.
* **Element (AutomationElement)** - Uses variable with type = ‘AutomationElement’ as input instead of selector string.
* **From (UiElement)** - UiElement variable to root when searching for element with Selector string (if not filled, look from desktop root).
* **Use Window (WindowApp)**- Use output variable from Open Window or Window Scope to scope for activity (similar to From).

**Output**

* **Exists (Boolean)**- Indicates if the element exists or not. The field supports only Boolean variables.  
  ・True – The element exists  
  ・False – The element does not exist.

**Wait**

* **Wait For Disable (Checkbox)**- Waits for element to be unable to interact with.
* **Wait For Enable (Checkbox)** - Waits for element to be able to interact with.
* **Wait For Vanish (Checkbox)** - Waits for element to vanish.
