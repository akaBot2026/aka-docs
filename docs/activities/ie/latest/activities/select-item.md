---
id: select-item
title: "Select Item"
sidebar_label: "Select Item"
sidebar_position: 17
description: "Select Item activity documentation."
displayed_sidebar: activitiesSidebar
---
# Select Item

RCA.Activities.IE.SelectItem

## **Description**

The Select Item activity allows you to select an item from a combo box or dropdown list from IE browser.

![image-20220506111011-1.png](/img/1f6857_image-20220506111011-1.png)

**In the body of the activity**

* **Pick Target Element**\* - Chooses the field to select the item. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even if an error occurs within the activity. False (default): blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).  
  Ex: 30000

**Input**

* **Select Value (String)\***- The value is based on the type of selection you want to use. It has to be encased in quotation marks.
* **Selector (String)**\* - String of characters that identifies the specified field.

**Options**

* **From Elements (IEElement)**- Element to be referred to when searching for the desired element. Only IEElement
* **Select By Index (Checkbox)** - To select an item from a list by its index instead of value.

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Ex: [282223123] Select Item

**Target**

* **Scroll Height (Int32)**- Scroll before getting the element. To input a number equals to the amount of pixels to scroll vertically. A negative value is to scroll upwards, a positive value is to scroll downwards.  
  Ex: 20
* **Scroll IntoView (Checkbox)**- If selected, the screen will automatically scroll to the desired element on the screen.
* **Scroll Width (Int32)**- Scroll before getting the element. To input a number equals to the amount of pixels to scroll horizontally. A negative value is to scroll to the leftwards, a positive value is to scroll rightwards.  
  Ex: 20
