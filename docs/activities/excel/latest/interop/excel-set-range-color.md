---
id: excel-set-range-color
title: "Excel Set Range Color"
sidebar_label: "Excel Set Range Color"
sidebar_position: 22
description: "Excel Set Range Color activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Set Range Color

RCA.Activities.Excel.ExcelSetRangeColor

## **Description**

This activity allows changing color of a specified cell or cell range using a Color variable. Can only be used within the Excel Application Scope activity.

![image-20220505133337-1.jpeg](/img/2cff03_image-20220505133337-1.jpeg)

(\* for mandatory)

## **Properties**

**Input**

* **Sheet name (String)\***- The name of the sheet that contains the cell you want to color.  
  E.g: “Name of the sheet”
* **Range (String)**\* - The range of data in specified sheet you want to set color. String supported only.  
  E.g: “A1:K10”
* **Color (System.Drawing.Color)**\* - The extracted color stored as a system drawing color variable.  
  E.g: Color.Red  
  For list of color: https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color?view=net-5.0

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Set Range Color
