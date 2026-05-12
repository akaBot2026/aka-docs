---
id: cv-table-extract
title: "CV Table Extract"
sidebar_label: "CV Table Extract"
sidebar_position: 9
description: "CV Table Extract activity documentation."
displayed_sidebar: activitiesSidebar
---
# CV Table Extract

RCA.Activities.ComputerVision.CVTableExtract

## **Description**

Extracts a table that is visible on the screen and stores it into a DataTable variable.

![image-20220505132448-2.png](/img/0be4bc_image-20220505132448-2.png)

(\*For mandatory)

## **In the body of activity**

* **Indicate On Screen**\* - Chooses the element to extract. This activity will generate a string variable (Selector) to specify the location of that element.

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

* **Descriptor (String)** - The on-screen coordinates of the ** Target**and each ** Anchor**that is used, if any. These values are stored in a CvDescriptor proprietary object. Once the ** Indicate On Screen** feature is used at runtime, the CvDescriptor is automatically generated in this field.

**Misc**

* **Public (Boolean)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [201135155] CV Table Extract

**Output**

* **Result (DataTable)**- The retrieved table, stored in a DataTable variable.

**Reusable Region**

* **OutputRegion (Rectangle)**- Saves the target of this activity as a Rectangle variable. This enables you to pass the same target from one activity to another. Especially useful at design time, as it makes performing multiple actions on the same UI element easier.
