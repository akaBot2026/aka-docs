---
id: click
title: "Click"
sidebar_label: "Click"
sidebar_position: 9
description: "Click activity documentation."
displayed_sidebar: activitiesSidebar
---
# Click

RCA.Activities.Browser.Click

## **Description**

The Click activity is used to send a click action into a webpage.

![Browser_Click](/img/d3cc56_5fcb1fe-screenshot_2021-05-25_155024.jpg)

(\* For Mandatory)

## **In the body of the activity**

* **Pick target element**\* - Chooses the element to verify its existence. This activity will generate a string variable (Selector) to specify the location of that element.
* **Click Type** - Specifies the type of mouse click used when simulating the click event. By default, single click is selected.  
  **・CLICK\_SINGLE** - A single click.  
  **・CLICK\_DOUBLE** - Two clicks in quick succession.  
  **・CLICK\_UP** – Releases the mouse button  
  **・CLICK\_DOWN** - Holds down the mouse button.
* **Mouse Button** - The mouse button (left, right) used for the click action. By default, the left mouse button is selected.  
  **・MOUSE\_LEFT** - Sets the action to click using the left mouse button.  
  **・MOUSE\_RIGHT** – Sets the action to click using the right mouse button.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Click Type (Dropdown List)** - Specifies the type of mouse click used when simulating the click event. By default, single click is selected.  
  **・CLICK\_SINGLE** - A single click.  
  **・CLICK\_DOUBLE** - Two clicks in quick succession.  
  **・CLICK\_UP** – Releases the mouse button  
  **・CLICK\_DOWN** - Holds down the mouse button.
* **Mouse Button (Dropdown List)** - The mouse button (left, right) used for the click action. By default, the left mouse button is selected.  
  **・MOUSE\_LEFT** - Sets the action to click using the left mouse button.  
  **・MOUSE\_RIGHT** – Sets the action to click using the right mouse button.
* **Selector (String)\***- Text property used to find a particular UI element when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Wait Visible (Checkbox)** - Check this box if you want the automation waits for the target to be visible before executing the activity. This is checked by default

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [5656456] Click
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.

**Options**

* **InputMethod (Dropdown List) -** Defines how the system performs the click action on the target element.
  + Default: Automatically selects the best method based on the environment
  + Hardware: Simulates a real mouse click (requires visible UI and active screen).
  + Software: Performs a background click at system level (no physical mouse movement required).
* **Key Modifier (KeyModifiers)** - Enables you to add a key modifier. The following options are available: Alt, Ctrl, Shift, Win

**Scroll -** To control how the system scrolls the screen to make the target element visible before performing an action*.*

* ​​​​​​​​​​​​​​**Horizontal scroll:** Enter a numeric value (pixels) to scroll horizontally.
  + Positive value → scroll right
  + Negative value → scroll left
  + E.g: 200
* **Scroll element to view (checkbox):** The system automatically scrolls until the target element is visible. Default setting is unchecked.
* **Vertical scroll:** Enter a numeric value (pixels) to scroll vertically
  + Positive value → scroll down
  + Negative value → scroll up
  + E.g: 300
