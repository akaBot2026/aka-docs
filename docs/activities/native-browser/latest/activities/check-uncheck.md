---
id: check-uncheck
title: "Check/Uncheck (NB)"
sidebar_label: "Check/Uncheck (NB)"
sidebar_position: 2
description: "Check/Uncheck (NB) activity documentation."
displayed_sidebar: activitiesSidebar
---
# Check/Uncheck (NB)

RCA.Activities.NativeBrowser.Check

## **Description**

The Check/Uncheck activity allows you to check or uncheck a Checkbox.

![image-20220505145345-1.png](/img/3c41a3_image-20220505145345-1.png)

(\*For mandatory)

## **In the body of activity**

* **Pick target element**\* - Chooses the Checkbox on a browser for checking or unchecking. This activity will generate a string variable (Selector) to specify the location of that Checkbox.
* **Action (Dropdown List)** - Selects the action to perform  
  **Check** – Check the box.  
  **Uncheck** – Uncheck the box.

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

* **Selector (String)**\* - Text property used to find a particular UI element when the activity is executed. It is actually an XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Wait Visible (Checkbox)** - Check this box if you want the automation waits for the target to be visible before executing the activity. This is checked by default

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [23423432] Check/Uncheck
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

**Options**

* **Action (Dropdown List)** - Selects the action to perform  
  Check – Check to select a check box or radio button.  
  Uncheck – Uncheck to clear a check box.
