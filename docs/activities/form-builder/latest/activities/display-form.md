---
id: display-form
title: "Display Form"
sidebar_label: "Display Form"
sidebar_position: 1
description: "Display Form activity documentation."
displayed_sidebar: activitiesSidebar
---
# Display Form

RCA.Activities.FormBuilder.DisplayForm

## **Description**

This activity allows you to design and work with Forms

![display-form](/static/img/display-form.png)

(\*For mandatory)

## **In the body of the activity**

* **Do** - The activities to execute while the form is displayed.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

* **Execute Do Block First: Boolean** - Execute the Do block once after the form is ready

* **TimeoutMS: InArgument<Int32>** - Duration until the form closes automatically; if not filled or filled with a value less than or equal to 0, the form won't close until the user closes it manually.
  E.g: 30000

**Form Format**

* **Form Title: InArgument<String>** - Form's title, if you do not enter this field, the default value will be "Form Builder" or "Form Runner" depending on the Form's mode

* **Form Width: InArgument<Int32>** - The width of the form, if not entered, the default value will be 540 pixels

* **Form Height: InArgument<Int32>** - The height of the form, if not entered, the height will automatically fit into the content of the form

* **Form Position X: InArgument<Int32>** - Form's x coordinate, which is a distance from the top-left of the form to the left screen, the default value will center the form window relative to the screen

* **Form Position Y: InArgument<Int32>** - Form's y coordinate, which is a distance from the top-left of the form to the top screen, the default value will center the form window relative to the screen

* **Is Minimize On Start: InArgument<Boolean>** - This field determines whether your form minimizes on start or not, if you do not enter this field, the default value will be false

* **Form Icon Path: InArgument<String>** - Form' window icon, which is the icon of the form window, has a default value if you don't enter

* **Always On Top: Boolean** - Always keep the form displayed on top

* **Form Zoom Level: InArgument<Int32>** - Form zoom level in percentage, if not entered the default value will be 100%

**Input**

* **Json Schema File Name: InArgument<String>*** - Form's JSON schema filename, which is the file that stores your Form, this field is required

* **Form Arguments: Dictionary<String,Argument>** - This is a collection of variables of type (String, Int32, Double, Decimal, Float, Boolean, JObject, JArray), That allows data binding through workflow variables with variable names being the key names of the form fields

* **Form Fields Input Data: InArgument<String>** - The JSON string is used to fill in the form data, if the FormArgument and this property are both entered and there are several fields with the same key, the values entered in this property will take precedence.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window

**Output**

* **Form Id: OutArgument<Int32>** - Form's Id, which is the process id of the form window

* **Is Dismissed: OutArgument<Boolean>** - If the user closes the form without submitting it, IsDismissed will be true, otherwise it will be false

* **Selected Key: OutArgument<String>** - The key of the component that was just clicked to activate Do

* **Output Data: OutArgument<Object>** - The data filled in the fields on the form is output as JSON
