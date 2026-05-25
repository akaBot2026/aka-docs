---
id: get-element
title: "Get Element"
sidebar_label: "Get Element"
sidebar_position: 6
description: "Get Element activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Element

RCA.Activities.IE.GetElement

## **Description**

Extracts multiple UI elements on Internet Explorer. Activity is only valid inside Open Browser activity under the Internet Explorer category.

![image-20220506110339-1.png](/static/img/908bf9_image-20220506110339-1.png)

(\* for Mandatory)

**In the body of the activity**

* **Pick Target Element**\* - Chooses the field to get the item. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even an error occurs within the activity. False (default): blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).  
  Ex: 30000

**Input**

* **Selector (String)\***- String of characters that identifies the specified element.

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Ex: [34534534] Get Element

**Options.**

* **From Element (IEElement)** - Element to be referred to when searching for the desired element. Only IEElement variable type accepted.

**Output**

* **Element (IEElement)** - The output UI element returned from the activity. Only IEElement variable type is supported to store the element.

**Target**

* **Scroll Height (Int32)** - Scroll before getting the Ui Element. To input a number equals to the amount of pixels to scroll vertically. A negative value is to scroll upwards, a positive value is to scroll downwards.  
  Ex: 20.
* **Scroll Into View (Checkbox)**- If selected, the screen will automatically scroll to the desired Ui element on the screen.
* **Scroll Width (Int32)**- Scroll before getting the Ui Element. To input a number equals to the amount of pixels to scroll horizontally. A negative value is to scroll to the leftwards, a positive value is to scroll rightwards.  
  Ex: 20.
