---
id: set-element-value
title: "Set Element Value"
sidebar_label: "Set Element Value"
sidebar_position: 5
description: "Set Element Value activity documentation."
displayed_sidebar: activitiesSidebar
---
# Set Element Value

RCA.Activities.FormBuilder.SetElementValue

## **Description**

This activity allows you to set the value of the element with the key you passed in

![set-element-value](/static/img/set-element-value.png)

(\*For mandatory)

## **In the body of the activity**

* **Key Name** - The element's key name used to specify the field for which you want to manipulate, Text must be quoted
* **Value** - The value you want to enter into the field specified with the above key, the supported value types are (String, Int32, Double, Decimal, Float, Boolean, JObject, JArray, object)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input**

* **Form Id: `InArgument<Int32>`** -  That is the ID of the form you want to manipulate.

* **Key Name: `InArgument<String>`*** - The element's key name used to specify the field for which you want to manipulate, Text must be quoted

* **Value: `InArgument`*** - The value you want to enter into the field specified with the above key, the supported value types are (String, Int32, Double, Decimal, Float, Boolean, JObject, JArray, object)

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window
