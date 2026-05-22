---
id: cv-dropdown-select
title: "CV Dropdown Select"
sidebar_label: "CV Dropdown Select"
sidebar_position: 3
description: "CV Dropdown Select activity documentation."
displayed_sidebar: activitiesSidebar
---
# CV Dropdown Select

RCA.Activities.ComputerVision.CVDropdownSelect

## **Description**

Selects a specified item from a drop-down list.

![image-20220505132014-1.png](/static/img/939b62_image-20220505132014-1.png)

(\*For mandatory)

## **In the body of activity**

* **Indicate on screen**\* - Chooses the element to select item. This activity will generate a string variable (Selector) to specify the location of that element.
* **Text (Textbox)**\* - The text to be written in the drop-down.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False - True: allows the rest of the process to continue the execution even an error occurs within the activity. - False: blocks the process from continuing the execution.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations.  
  E.g: 300
* **TimeOut MS (Int32)** - The amount of time (in milliseconds) to wait for the activity to run. The default amount of time is 30000 milliseconds.  
  E.g: 30000

**Input**

* **CVDropdownSelect\_Text (String)**\*- The text to be written in the drop-down.
* **Descriptor (String)**- The on-screen coordinates of the **Target** and each **Anchor** that is used, if any. These values are stored in a *CvDescriptor*proprietary object. Once the **Indicate On Screen** feature is used at runtime, the *CvDescriptor*is automatically generated in this field.
* **Offset Point (String)**- The offset point for click-related activities.

**Misc**

* **Public (Boolean)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [123123] CV Dropdown select

**Reusable Region**

* **InputRegion (Rectangle)** - Receives the target of another CV activity stored in a Rectangle variable, using it as a target for this activity. This enables you to pass the same target from one activity to another. Especially useful at design time, as it makes performing multiple actions on the same UI element easier. If a variable is set to this field, the current target and anchor elements of the activity are disabled.
* **OutputRegion (Rectangle)** - Saves the target of this activity as a Rectangle variable. This enables you to pass the same target from one activity to another. Especially useful at design time, as it makes performing multiple actions on the same UI element easier.
