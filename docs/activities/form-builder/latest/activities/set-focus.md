---
id: set-focus
title: "Set Focus"
sidebar_label: "Set Focus"
sidebar_position: 8
description: "Set Focus activity documentation."
displayed_sidebar: activitiesSidebar
---
# Set Focus

RCA.Activities.FormBuilder.SetFocus

## **Description**

Focus on the field that has the key you entered

![set-focus](/static/img/set-focus.png)

(\*For mandatory)

## **In the body of the activity**

* **Key Name** - The element's key name used to specify the field for which you want to manipulate, Text must be quoted

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input**

* **Form Id: InArgument<Int32>** - That is the ID of the form you want to manipulate

* **Key Name: InArgument<String>*** - The element's key name used to specify the field for which you want to manipulate, Text must be quoted

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window
