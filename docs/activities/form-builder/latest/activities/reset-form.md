---
id: reset-form
title: "Reset Form"
sidebar_label: "Reset Form"
sidebar_position: 3
description: "Reset Form activity documentation."
displayed_sidebar: activitiesSidebar
---
# Reset Form

RCA.Activities.FormBuilder.ResetForm

## **Description**

Clear all data in the form

![resert-form](/static/img/resert-form.png)

(\*For mandatory)

## **In the body of the activity**

* **Form Id** - ID of the form you want to reset its element value

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input**

* **Form Id: InArgument<Int32>** - That is the ID of the form you want to manipulate.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window
