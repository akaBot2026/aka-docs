---
id: get-web-attribute
title: "Get Web Attribute"
sidebar_label: "Get Web Attribute"
sidebar_position: 9
description: "Get Web Attribute activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Web Attribute

RCA.Activities.IE.GetWebAttribute

## **Description**

The Get Web Attribute activity allows you to get the value of an attribute that belongs to an Internet Explorer browser element.

![image-20220506110533-1.png](/static/img/34345f_image-20220506110533-1.png)

(\* for Mandatory)

**In the body of the activity**

* **Pick Target Element**\* - Chooses the field to get the attribute. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even if an error occurs within the activity. False (default): blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).  
  Ex: 30000

**Input**

* **Attribute Name (String)**- The expression of the attribute to be selected from. It is a string, so it has to be encased in quotation marks.
* **Selector (String)**\* - String of characters that identifies the element to get the value of the attribute from.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Ex: [3552929] Get Web Attribute

**Options**

* **From Element (IEElement)**- Variable that identifies the element to get the value of an attribute from. Only support for IEElement type.

**Output**

* **Attribute Value (String)**- Value of the attribute that will be outputted with type = ‘String’.

**Target**

* **Scroll Height (Int32)**- Scroll before getting the element. To input a number equals to the amount of pixels to scroll vertically. A negative value is to scroll upwards, a positive value is to scroll downwards.  
  Ex: 20
* **Scroll Into View (Checkbox)**- If selected, the screen will automatically scroll to the desired element on the screen.
* **Scroll Width (Int32)** - Scroll before getting the element. To input a number equals to the amount of pixels to scroll horizontally. A negative value is to scroll to the leftwards, a positive value is to scroll rightwards.   
Ex: 20
