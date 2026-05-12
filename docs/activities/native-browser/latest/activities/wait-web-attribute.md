---
id: wait-web-attribute
title: "Wait Web Attribute (NB)"
sidebar_label: "Wait Web Attribute (NB)"
sidebar_position: 28
description: "Wait Web Attribute (NB) activity documentation."
displayed_sidebar: activitiesSidebar
---
# Wait Web Attribute (NB)

RCA.Activities.NativeBrowser.WaitWebAttribute

## **Description**

The Wait Web Attribute waits for the value of a specified web attribute to be enabled.

![image-20220505151917-1.png](/img/ee8d45_image-20220505151917-1.png)

(\*For mandatory)

## **In the body of activity**

* **Pick target element**\* - Chooses the field on a browser to select the item. This activity will generate a string variable (Selector) to specify the location of that field.
* **Attribute Name (String)**\* - The expression of the attribute to be selected from. It is a string, so it has to be encased in quotation marks.
* **Attribute Value (String)**\* - The value of the specified attribute. This property supports String variable so it must be quoted.

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

* **Attribute Name (String)**\* - The expression of the attribute to be selected from. It is a string, so it has to be encased in quotation marks.  
  E.g: "Attribute Name"
* **Attribute Value (String)**\* - The value of the specified attribute. This property supports String variable so it must be quoted.  
  E.g: "Attribute Value"
* **Selector (String)**\* - Text property used to find a particular UI element when the activity is executed. It is actually an XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Wait Visible (Checkbox)**- Check this box if you want the automation waits for the target to be visible before executing the activity. This is checked by default

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.
