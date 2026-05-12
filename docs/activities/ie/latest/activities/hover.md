---
id: hover
title: "Hover"
sidebar_label: "Hover"
sidebar_position: 12
description: "Hover activity documentation."
displayed_sidebar: activitiesSidebar
---
# Hover

RCA.Activities.IE.Hover

## **Description**

The Hover activity will move the mouse pointer to a specified element without clicking.

![image-20220506110715-1.png](/img/8fba3d_image-20220506110715-1.png)

(\* for Mandatory)

**In the body of the activity**

* **Pick Target Element\***- Chooses the field to hover. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even if an error occurs within the activity. False (default): blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).  
  Ex: 30000

**Input**

* **Selector (String)**\* - String of characters that identifies the element to hover on the IE browser.

**Options**

* **From Elements (IEElement)** - Element to be referred to when searching for the desired element. Only IEElement variable type accepted.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Ex: [76938349] Hover

**Target**

* **Scroll Height (Int32)**- Scroll before getting the element. To input a number equals to the amount of pixels to scroll vertically. A negative value is to scroll upwards, a positive value is to scroll downwards.  
  Ex: 20
* **Scroll IntoView (Checkbox)** - If selected, the screen will automatically scroll to the desired element on the screen.
* **Scroll Width (Int32)** - Scroll before getting the element. To input a number equals to the amount of pixels to scroll horizontally. A negative value is to scroll to the leftwards, a positive value is to scroll rightwards.  
  Ex: 20
