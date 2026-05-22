---
id: cv-get-text
title: "CV Get Text"
sidebar_label: "CV Get Text"
sidebar_position: 5
description: "CV Get Text activity documentation."
displayed_sidebar: activitiesSidebar
---
# CV Get Text

RCA.Activities.ComputerVision.CVGetText

## **Description**

Extracts the text from a specified UI element.

![image-20220505132150-1.png](/static/img/3f8f40_image-20220505132150-1.png)

(\*For mandatory)

## **In the body of activity**

* **Indicate On Screen**\* - Chooses the element to extract the text. This activity will generate a string variable (Selector) to specify the location of that element.

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

* **Descriptor (String)** - The on-screen coordinates of the **Target** and each **Anchor** that is used, if any. These values are stored in a CvDescriptor proprietary object. Once the **Indicate On Screen** feature is used at runtime, the CvDescriptor is automatically generated in this field.
* **GetTextMethod (Dropdown List)** - Specifies what method you want to use to retrieve the text. The following options are available:  
  **・OCR** - Uses the OCR engine specified in the parent CV Screen Scope activity to retrieve the text.  
  **・SelectAllText** - Copies the entire text by using the clipboard. This simulates a copy/paste action and can only be used on selectable text, on either local or remote sessions.  
  **・SelectTextRow** - Copies the text in the entire row by using the clipboard. This simulates a copy/paste action and can only be used on selectable text, on either local or remote sessions.

**Misc**

* **Public (Boolean)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [027039645] CV Get Text

**Output**

* **Result (String)**- The retrieved text, stored in a String variable.

**Reusable Region**

* **InputRegion (Rectangle)**- Receives the target of another CV activity stored in a *Rectangle*variable, using it as a target for this activity. This enables you to pass the same target from one activity to another. Especially useful at design time, as it makes performing multiple actions on the same UI element easier. If a variable is set to this field, the current target and anchor elements of the activity are disabled. This field supports only *Rectangle*variables.
* **OutputRegion (Rectangle)**- Saves the target of this activity as a Rectangle variable. This enables you to pass the same target from one activity to another. Especially useful at design time, as it makes performing multiple actions on the same UI element easier.
