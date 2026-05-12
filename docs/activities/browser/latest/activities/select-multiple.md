---
id: select-multiple
title: "Select Multiple Items"
sidebar_label: "Select Multiple Items"
sidebar_position: 22
description: "Select Multiple Items activity documentation."
displayed_sidebar: activitiesSidebar
---
# Select Multiple Items

RCA.Activities.Browser.SelectMultiple

## **Description**

The Select Multiple Items activity allows you to select many items from a combo box or list box.

![image-20220505134303-1.png](/img/e7f3d2_image-20220505134303-1.png)

(\*For Mandatory)

## **In the body of the activity**

* **Pick target element**\* - Chooses the field on a browser to select the item. This activity will generate a string variable (Selector) to specify the location of that field.
* **Select Type (Dropdown List)**  
  ・INDEX – Index of the item (Starting from 0).  
  ・VALUE – Value of the item.  
  ・TEXT – Text of the item.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Select Type (Dropdown List)**  
  ・INDEX – Index of the item (Starting from 0).  
  ・VALUE – Value of the item.  
  ・TEXT – Text of the item.
* **Select Value (String)\***- The value based on the type of selection you want to use. It has to be encased in quotation marks. Format: `{“Value1”, “Value2”,…”ValueN”}`
* **Selector (String)**\* - Text property used to find a particular UI element when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Wait Visible (Checkbox)**- Check this box if you want the automation waits for the target to be visible before executing the activity. This is checked by default

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [564547] Select Multiple Items
* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

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
