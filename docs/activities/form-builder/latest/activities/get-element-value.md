---
id: get-element-value
title: "Get Element Value"
sidebar_label: "Get Element Value"
sidebar_position: 4
description: "Get Element Value activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Element Value

RCA.Activities.FormBuilder.GetElementValue

## **Description**

This activity allows you to get the value of the element with the key you passed in

![get-element-value](/static/img/get-element-value.png)

(\*For mandatory)

## **In the body of the activity**

* **Key Name** - The element's key name used to specify the field for which you want to manipulate, Text must be quoted

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input**

* **Form Id: `InArgument<Int32>`** - That is the ID of the form you want to manipulate.

* **Key Name: `InArgument<String>`*** - The element's key name used to specify the field for which you want to manipulate, Text must be quoted

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window

**Output**

* **Output Data: `OutArgument<Object>`** - The value of the element whose key you just entered
