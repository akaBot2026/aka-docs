---
id: get-elements
title: "Get Elements"
sidebar_label: "Get Elements"
sidebar_position: 7
description: "Get Elements activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Elements

RCA.Activities.IE.GetElements

## **Description**

Extracts the UI element on Internet Explorer. Activity is only valid inside Open Browser activity under the Internet category.

![image-20220506110422-1.png](/img/4b0c8e_image-20220506110422-1.png)

(\* for Mandatory)

**In the body of the activity**

* **Pick Target Element**\* - Chooses the field to get the item. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even if an error occurs within the activity. False (default): blocks the process from continuing the execution.

**Input**

* **From Element (IEElement)** - Input element used for searching similar elements on Internet Explorer. Only accepts IE Element type variable.
* **Max Results (Int32)** - The maximum amount of elements to be returned from this activity. Default: 1.  
  Ex: 1
* **Selector (String)\***- String of characters that identifies the specified element.
* **Timeout MS (Int32)**- Specifies the amount of time (in milliseconds) to wait for the activity to be complete. Default: 30000  
  Ex: 30000

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Ex: [2424234] Get Elements.

**Output**

* **Elements (IEElement)** - The output UI element returned from the activity. Only Array of IEElement variable type is supported to store the element.
