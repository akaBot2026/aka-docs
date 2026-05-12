---
id: checkuncheck
title: "Check/Uncheck"
sidebar_label: "Check/Uncheck"
sidebar_position: 2
description: "Check/Uncheck activity documentation."
displayed_sidebar: activitiesSidebar
---
# Check/Uncheck

RCA.Activities.IE.CheckUncheck

## **Description**

The Check/Uncheck activity allows you to check or uncheck a Checkbox.

![image-20220506110038-1.png](/img/416927_image-20220506110038-1.png)

(\* for Mandatory)

**In the body of the activity**

* **Pick target element** - Chooses the field to select the item. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even if an error occurs within the activity. False (default): blocks the process from continuing the execution.
* **TimeOut MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).  
  Ex: 30000

**Input**

* **Selector (String)**\* - String of characters that identifies the specified Checkbox.

**Options**

* **From Elements (IEElement)** - Element to be referred to when searching for the desired element. Only IEElement

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.

**Target**

* **Scroll Height (Int32)**\* - The minimum height of the element would require in order to fit all the content in the viewport. To input a number equals to the amount of pixels to scroll vertically. A negative value is to scroll upwards; a positive value is to scroll downwards.  
  Ex: 20
* **ScrollIntoView (Checkbox)** - If selected, the screen will automatically scroll to the desired element on the screen.
* **Scroll Width (Int32)**\* - The minimum width of the element would require in order to fit all the content in the viewport. To input a number equals to the amount of pixels to scroll horizontally. A negative value is to scroll to the leftwards, a positive value is to scroll rightwards.  
  Ex: 20
