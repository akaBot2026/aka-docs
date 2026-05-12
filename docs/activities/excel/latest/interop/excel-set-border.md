---
id: excel-set-border
title: "Excel Set Border"
sidebar_label: "Excel Set Border"
sidebar_position: 21
description: "Excel Set Border activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Set Border

RCA.Activities.Excel.ExelSetBorder

## **Description**

The activity allows you to set the borders through different ranges in Excel. This only can be used in Excel Application Scope Activity.

![image-20220505133607-1.jpeg](/img/707809_image-20220505133607-1.jpeg)

(\* is mandatory)

## **Properties**

**Input**

* **Sheet name (String)\***- The name of the sheet that contains the cell you want to border.  
  E.g: “Employee Infomation”
* **Range (String)**\* - The Range that you want to border.  
  E.g: “A1:K10”

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: **“Set Border”**

**Options**

* **Border Weight (Dropdown list box)** - You can change this category by choosing different options to make the borders thicker or thinner as you want. This options include: xlThin, xlThick, xlMedium, xlHairline
* **Color Index (Int)** - The number that determines the color of an object. The smaller the color index, the more blue(hotter) it is. Int32 only  
  E.g: 1234
* **Line Style (Dropdown list box)** - You can choose different style of the border. It contains: xlStyleLineNone, xlDouble, xlDot, xlDash, xlDashDot, xlDashDotDot,xlSlantDashDot
