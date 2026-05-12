---
id: set-web-attribute
title: "Set Web Attribute"
sidebar_label: "Set Web Attribute"
sidebar_position: 19
description: "Set Web Attribute activity documentation."
displayed_sidebar: activitiesSidebar
---
# Set Web Attribute

RCA.Activities.IE.SetWebAttribute

## **Description**

Sets the value of a specified web attribute.

![image-20220506111217-1.png](/img/f12f3d_image-20220506111217-1.png)  
(\* for Mandatory)

**In the body of the activity**

* **Attribute Name (String)**\* - Name of the attribute to set the value. This property supports the String variable so it must be quoted.
* **Attribute Value (String)**\* - The value of the specified attribute. This property supports the String variable so it must be quoted.
* **Pick Target Element** - Chooses the field to set the attribute of the item. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even an error occurs within the activity. False (default): blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).  
  Ex: 30000

**Input**

* **Attribute Name (String)**\* - Name of the attribute to set the value. This property supports the String variable so it must be quoted.
* **Attribute Value (String)**\* - The value of the specified attribute. This property supports the String variable so it must be quoted.
* **Selector (String)**\* - String of characters that identifies the specified element.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **Ex**: [78923423] Set Web Attribute

**Options**

* **From Element (IEElement)**- Variable that identifies the element to get value of attribute from. Only support for IEElement type.

**Target**

* **Scroll Height (Int32)** - Scroll before getting the element. To input a number equals to the amount of pixels to scroll vertically. A negative value is to scroll upwards, a positive value is to scroll downwards.  
  **Ex**: 20
* **Scroll Into View (Checkbox)**- If selected, the screen will automatically scroll to the desired element on the screen.
* **Scroll Width (Int32)**- Scroll before getting the element. To input a number equals to the amount of pixels to scroll horizontally. A negative value is to scroll to the leftwards, a positive value is to scroll rightwards.  
  **Ex**: 20
