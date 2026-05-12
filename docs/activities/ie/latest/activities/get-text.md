---
id: get-text
title: "Get Text"
sidebar_label: "Get Text"
sidebar_position: 8
description: "Get Text activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Text

RCA.Activities.IE.GetText

## **Description**

The Get Text activity extracts on a webpage and saves it in a String variable.

![image-20220506110459-1.png](/img/ebb950_image-20220506110459-1.png)

(\* for Mandatory)

**In the body of the activity**

* **Pick Target Element**\* - Chooses the field to get the text. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even if an error occurs within the activity. False (default): blocks the process from continuing the execution.
* **Timeout MS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).  
  Ex: 30000

**Input**

* **Selector (String)**\* - String of characters that identifies the specified field.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Ex: [71577779] Get Text

**Options**

* **From Element (IEElement)** - Variable that identifies the element to get the value of an attribute from. Only support for IEElement type.

**Output**

* **Text (String)**\* - The element you get from the Internet Explorer

**Target**

* **Scroll Height (Number)** - Scroll before getting the element. To input a number equals to the amount of pixels to scroll vertically. A negative value is to scroll upwards, a positive value is to scroll downwards.  
  Ex: 20
* **Scroll Into View (Checkbox)** - If selected, the screen will automatically scroll to the desired element on the screen.
* **Scroll Width (Number)** - Scroll before getting the element. To input a number equals to the amount of pixels to scroll horizontally. A negative value is to scroll to the leftwards, a positive value is to scroll rightwards. Ex: 20
