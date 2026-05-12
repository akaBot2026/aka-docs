---
id: excel-insert-rows
title: "Excel Insert Rows"
sidebar_label: "Excel Insert Rows"
sidebar_position: 12
description: "Excel Insert Rows activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Insert Rows

RCA.Activities.Excel.ExcelInsertRows

## **Description**

This activity allows you to add more rows to insert one or more rows in a table, range, or sheet at the specified location. This only can be used in Excel Application Scope Activity.

![image-20220505133835-1.jpeg](/img/b06091_image-20220505133835-1.jpeg)

(\* for mandatory)

## **In the body of the activity**

* **Sheet name (String)**\* - The name of the sheet that you want to insert row.  
  E.g: “Employee Name”
* **Number of row (Int)**- Number of rows you want to insert in Excel sheet  
  E.g: 5
* **Row position (Int)** - Position where the rows are inserted at.  
  E.g: If we want to insert after 4th row. Input 4

## **Properties**

**Input**

* **Sheet name (String)**\* - The name of the sheet that you want to insert row.  
  E.g: “SheetNameHere”
* **Number of rows (String)**\*- Number of rows you want to insert to.  
  E.g: 5
* **Row position (Int)** - Position where the rows are inserted at.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Insert rows

**Options**

* **CopyOrigin (Dropdown list box)**- There are two options for you to format the rows: xlFormat FromLeftOrAbove or xlFormatFromRightOrBelow.
