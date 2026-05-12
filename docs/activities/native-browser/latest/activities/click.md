---
id: click
title: "Click (NB)"
sidebar_label: "Click (NB)"
sidebar_position: 3
description: "Click (NB) activity documentation."
displayed_sidebar: activitiesSidebar
---
# Click (NB)

RCA.Activities.NativeBrowser.Click

## **Description**

The Click activity is used to send a click action into a webpage.

![image-20220505145431-1.png](/img/deaa58_image-20220505145431-1.png)

(\*For mandatory)

## **In the body of activity**

* **Pick target element**\* - Chooses the element to verify its existence. This activity will generate a string variable (Selector) to specify the location of that element.
* **Click Type** - Specifies the type of mouse click used when simulating the click event. By default, single click is selected.  
  **CLICK\_SINGLE** - A single click  
  **CLICK\_DOUBLE** - Two clicks in quick succession.
* **Mouse Button** - The mouse button (left, right) is used for the click action. By default, the left mouse button is selected.  
  **MOUSE\_LEFT** - Sets the action to click using the left mouse button.  
  **MOUSE\_RIGHT** - Sets the action to click using the right mouse button.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity. The default amount of time is 300 milliseconds.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations. The default amount of time is 300 milliseconds.  
  E.g: 300
* **Timeout MS (Int32)** - The amount of time (in milliseconds) to wait for the activity to run. If the timeout has expired, the page would not be loaded further. The default amount of time is 30000 milliseconds.  
  E.g: 30000

**Input**

* **Click Type (Dropdown List)**- Specify the type of mouse click used when simulating the click event. By default, single click is selected.
* **Mouse Button (Dropdown List)** - The mouse button (left, right) is used for the click action. By default, the left mouse button is selected.
* **Selector (String)**\* - Text property used to find a particular UI element when the activity is executed. It is actually an XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Wait Visible (Checkbox)** - Check this box if you want the automation waits for the target to be visible before executing the activity. This is checked by default

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [5656456] Click
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

**Options**

* **Is Synchronous (Checkbox)** – A Boolean variable has two possible values: True or False. True - allows the click handlers to complete before continue with the execution of the activity. False (default) - blocks the process from continuing the execution.
* **Key Modifier (KeyModifiers)** - Enables you to add a key modifier. The following options are available: Alt, Ctrl, Shift, Win.
* **Simulate Click (Checkbox)** - If selected, it simulates the click by using the technology of the target application. This input method is the fastest of the three and works in the background. If not selected, the click will be performed using the hardware driver. This method is the slowest, it cannot work in the background, but it is compatible with all desktop apps. By default, this check box is selected.
