---
id: select-item
title: "Select Item"
sidebar_label: "Select Item"
sidebar_position: 19
description: "Select Item activity documentation."
displayed_sidebar: activitiesSidebar
---
# Select Item

RCA.Activities.Browser.SelectItem

## **Description**

The Select Item activity allows you to select an item from a combo box or list box.

![image-20220505133407-1.png](/img/f540d7_image-20220505133407-1.png)

(\*For Mandatory)

## **In the body of the activity**

* **Pick target element**\* - Chooses the field on a browser to select the item. This activity will generate a string variable (Selector) to specify the location of that field.
* **Select Type (Dropdown List)** - Select list of type  
  **・INDEX** – Index of the item (Starting from 0).  
  **・VALUE** – Value of the item.  
  **・TEXT** – Text of the item.
* **Select Value (String)**\* - The item to be selected from the combo or list box. The item must be quoted.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Select Type (Dropdown List)** - Select list of type  
  ・INDEX – Index of the item (Starting from 0).  
  ・VALUE – Value of the item.  
  ・TEXT – Text of the item.
* **Select Value (String)\***- The value based on the type of selection you want to use. It has to be encased in quotation marks.
* **Selector (String)**\* - Text property used to find a particular UI element when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Wait Visible (Checkbox)** - Check this box if you want the automation waits for the target to be visible before executing the activity. This is check by default

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [145364] Select Item
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

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
