---
id: close-form
title: "Close Form"
sidebar_label: "Close Form"
sidebar_position: 2
description: "Close Form activity documentation."
displayed_sidebar: activitiesSidebar
---
# Close Form

RCA.Activities.FormBuilder.CloseForm

## **Description**

Close the form base on the id.

![close-form](/static/img/close-form.png)

(\*For mandatory)

## **In the body of the activity**

* **Form Id** - ID of the form you want to close.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input**

* **Form Id: `InArgument<Int32>`** - ID of the form you want to close.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window
