---
id: cv-click
title: "CV Click"
sidebar_label: "CV Click"
sidebar_position: 2
description: "CV Click activity documentation."
displayed_sidebar: activitiesSidebar
---
# CV Click

RCA.Activities.ComputerVision.CVClick

## **Description**

Clicks a specified UI element which is targeted by using the Computer Vision neural network.

![image-20220505131917-2.png](/img/e1d64a_image-20220505131917-2.png)

(\*For mandatory)

## **In the body of activity**

* **Indicate On Screen**\* - Chooses the element to click. This activity will generate a string variable (Selector) to specify the location of that element.

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

* **Click Type (Dropdown List)** - Specifies the type of mouse click (single, double, up, down) used when simulating the click event. By default, single click is selected.
* **Descriptor (String)** - The on-screen coordinates of the ** Target**and each ** Anchor**that is used, if any. These values are stored in a CvDescriptor proprietary object. Once the ** Indicate On Screen** feature is used at runtime, the CvDescriptor is automatically generated in this field.
* **MouseButton (Dropdown List)** - The mouse button (left, right, middle) used for the click action. By default, the left mouse button is selected.
* **Offset Point(String)** - Offset point for click-related activities.

**Misc**

* **Public (Boolean)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [123123] CV Click

**Reusable Region**

* **InputRegion (Rectangle)**- Receives the target of another CV activity stored in a *Rectangle*variable, using it as a target for this activity. This enables you to pass the same target from one activity to another. Especially useful at design time, as it makes performing multiple actions on the same UI element easier. If a variable is set to this field, the current target and anchor elements of the activity are disabled. This field supports only *Rectangle*variables.
* **OutputRegion (Rectangle)**- Saves the target of this activity as a Rectangle variable. This enables you to pass the same target from one activity to another. Especially useful at design time, as it makes performing multiple actions on the same UI element easier.
