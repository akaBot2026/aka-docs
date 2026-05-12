---
id: element-exist
title: "Element Exist"
sidebar_label: "Element Exist"
sidebar_position: 5
description: "Element Exist activity documentation."
displayed_sidebar: activitiesSidebar
---
# Element Exist

RCA.Activities.IE.ElementExists

## **Description**

The Element Exist allows you to confirm whether an element exists.

![image-20220506110303-1.png](/img/bd2ae0_image-20220506110303-1.png)

(\* for Mandatory)

**In the body of the activity**

* **Pick Target Element**\* - Chooses the field to select the item. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even an error occurs within the activity. False (default): blocks the process from continuing the execution.
* **TimeOut MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).  
  Ex: 30000

**Input**

* **Selector (String)**\* - String of characters that identifies the element to be checked for existence on the IE browser.

**Options**

* **From Elements (IEELement)** - Element to be referred to when searching for the desired element. Only IEElement variable type accepted.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Ex: [723432432] Element Exist

**Target**

* **Scroll Height (Int32)**- Scroll before getting the element. To input a number equals to the amount of pixels to scroll vertically. A negative value is to scroll upwards, a positive value is to scroll downwards.  
  Ex: 20
* **Scroll IntoView (Checkbox)**- If selected, the screen will automatically scroll to the desired element on the screen.
* **Scroll Width (Int32)** - Scroll before getting the element. To input a number equals to the amount of pixels to scroll horizontally. A negative value is to scroll to the leftwards, a positive value is to scroll rightwards. Ex: 20
