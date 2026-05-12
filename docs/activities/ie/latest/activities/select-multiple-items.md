---
id: select-multiple-items
title: "Select Multiple Items"
sidebar_label: "Select Multiple Items"
sidebar_position: 18
description: "Select Multiple Items activity documentation."
displayed_sidebar: activitiesSidebar
---
# Select Multiple Items

RCA.Activities.IE.SelectMultiple

## **Description**

The Select Multiple Items activity allows you to select many items from a combo box or list box.

![image-20220506111046-1.png](/img/401e85_image-20220506111046-1.png)

(\* is mandatory)

**In the body of the activity**

* **Pick Target Element**\* - Chooses the field to select the item. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even an error occurs within the activity. False (default): blocks the process from continuing the execution.
* **Timeout MS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).  
  Ex: 30000

**Input**

* **Selecting Values (String)\***- The value is based on the type of selection you want to use. It has to be encased in quotation marks. Format: `{“Value1”, “Value2”,…”ValueN”}`
* **Selector (String)**\* - String of characters that identifies the specified field.

**Options**

* **From Elements (IEElement)** - Element to be referred to when searching for the desired element. Only IEElement
* **Select By Index (Checkbox)**- To select an item from a list by its index instead of value.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Ex: [62342342] Select Mutiple Items

**Target**

* **Scroll Height (Int32)** - Scroll before getting the element. To input a number equals to the amount of pixels to scroll vertically. A negative value is to scroll upwards, a positive value is to scroll downwards.  
  **Ex**: 20
* **Scroll IntoView (Checkbox)**- If selected, the screen will automatically scroll to the desired element on the screen.
* **Scroll Width (Int32)**- Scroll before getting the element. To input a number equals to the amount of pixels to scroll horizontally. A negative value is to scroll to the leftwards, a positive value is to scroll rightwards.  
  **Ex**: 20
