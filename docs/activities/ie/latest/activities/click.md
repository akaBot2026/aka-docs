---
id: click
title: "Click"
sidebar_label: "Click"
sidebar_position: 3
description: "Click activity documentation."
displayed_sidebar: activitiesSidebar
---
# Click

RCA.Activities.IE.Click

## **Description**

The Click activity is used to send a click action into a webpage.

![image-20220506110125-1.png](/img/a909be_image-20220506110125-1.png)

(\* for Mandatory)

**In the body of activity**

* **Pick target element** - Chooses the field to select the item. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even if an error occurs within the activity. False (default): blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).  
  Ex: 30000

**Input**

* **Mouse Button (Dropdown List)** – Select the action to click  
  ・LEFT - Sets the action to click using the left mouse button.  
  ・RIGHT – Sets the action to click using the right mouse button.  
  ・MIDDLE – Sets the action to click using the middle mouse button.
* **Selector (String)\***- String of characters that identifies the element to be clicked on the IE browser.

**Options**

* **From Elements (IEElement)** - Element to be referred to when searching for the desired element. Only IEElement variable type accepted.
* **Virtual Click (Checkbox)**- Check if the virtual click is the desired method of clicking

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Ex: [215266456] Click

**Target**

* **Scroll Height (Number)**- Scroll before getting the element. To input a number equals to the amount of pixels to scroll vertically. A negative value is to scroll upwards, a positive value is to scroll downwards.  
  Ex: 20
* **Scroll IntoView (Checkbox)** - If selected, the screen will automatically scroll to the desired element on the screen.
* **Scroll Width (Number)**- Scroll before getting the element. To input a number equals to the amount of pixels to scroll horizontally. A negative value is to scroll to the leftwards, a positive value is to scroll rightwards.  
  Ex: 20
