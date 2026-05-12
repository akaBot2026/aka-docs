---
id: set-web-attribute
title: "Set Web Attribute"
sidebar_label: "Set Web Attribute"
sidebar_position: 24
description: "Set Web Attribute activity documentation."
displayed_sidebar: activitiesSidebar
---
# Set Web Attribute

RCA.Activities.Browser.SetWebAttribute

## **Description**

The Set Web Attribute sets the value for an attribute of a web element.

![image-20220505134907-1.png](/img/b0ac8f_image-20220505134907-1.png)

(\* For Mandatory)

## **In the body of the activity**

* **Pick target element**\* - Chooses the field on a browser to select the item. This activity will generate a string variable (Selector) to specify the location of that field.
* **Attribute Name (String)**\* - The expression of the attribute to be selected from. It is a string, so it has to be encased in quotation marks.
* **Attribute Value (String)**\* - The value of the specified attribute. This property supports String variable so it must be quoted.

## **Properties**

**Common**

* **Continue on Error (Boolean)** - A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Attribute Name (String)\***- The expression of the attribute to be selected from. It is a string, so it has to be encased in quotation marks.
* **Attribute Value (String)**\* - The value of the specified attribute. This property supports String variable so it must be quoted.
* **Selector (String)\***- Text property used to find a particular UI element when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Wait Visible (Checkbox)**- Check this box if you want the automation waits for the target to be visible before executing the activity. This is checked by default

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [366546456] Set Web Attribute
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

**Scroll**: To control how the system scrolls the screen to make the target element visible before performing an action*.*

* ​​​​​​​**Horizontal scroll:** Enter a numeric value (pixels) to scroll horizontally.
  + Positive value → scroll right
  + Negative value → scroll left
  + E.g: 200
* **Scroll element to view (checkbox):** The system automatically scrolls until the target element is visible. Default setting is unchecked.
* **Vertical scroll:** Enter a numeric value (pixels) to scroll vertically
  + Positive value → scroll down
  + Negative value → scroll up
  + E.g: 300
