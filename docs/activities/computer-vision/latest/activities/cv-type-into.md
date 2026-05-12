---
id: cv-type-into
title: "CV Type Into"
sidebar_label: "CV Type Into"
sidebar_position: 10
description: "CV Type Into activity documentation."
displayed_sidebar: activitiesSidebar
---
# CV Type Into

RCA.Activities.ComputerVision.CVTypeInto

## **Description**

Sends keystrokes to a UI element. The UI element is identified by using the Computer Vision neural network.

![image-20220505132534-1.png](/img/7191a2_image-20220505132534-1.png)

(\*For mandatory)

## **In the body of activity**

* **Indicate On Screen**\* - Chooses the element to sends keystrokes. This activity will generate a string variable (Selector) to specify the location of that element.
* **Text (Textbox)**\* - The text to be written in the specified UI element.

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

* **CVTypeInto\_Text (String)**\* - The text to be written in the specified UI element.
* **Descriptor (String)** - The on-screen coordinates of the **Target** and each **Anchor** that is used, if any. These values are stored in a CvDescriptor proprietary object. Once the **Indicate On Screen** feature is used at runtime, the CvDescriptor is automatically generated in this field.
* **Offset Point(String)** - Offset point for click-related activities.

**Misc**

* **Public (Boolean)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [641771238] CV Type Into

**Options**

* **ClickBeforeType (Boolean)**- When this check box is selected, the specified UI element is clicked before the text is written. This is check by default.
* **DelayBetween (Int32)**- Delay time (in milliseconds) between two keystrokes. The default amount of time is 10 milliseconds. The maximum value is 1000 milliseconds.  
  E.g: 10
* **EmptyField (Boolean)**- When this check box is selected, all previously-existing content in the UI element is erased before writing your text. This is check by default.

**Reusable Region**

* **InputRegion (Rectangle)**- Receives the target of another CV activity stored in a *Rectangle* variable, using it as a target for this activity. This enables you to pass the same target from one activity to another. Especially useful at design time, as it makes performing multiple actions on the same UI element easier. If a variable is set to this field, the current target and anchor elements of the activity are disabled. This field supports only *Rectangle* variables.
* **OutputRegion (Rectangle)**- Saves the target of this activity as a Rectangle variable. This enables you to pass the same target from one activity to another. Especially useful at design time, as it makes performing multiple actions on the same UI element easier.
