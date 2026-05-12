---
id: excel-delete-range
title: "Excel Delete Range"
sidebar_label: "Excel Delete Range"
sidebar_position: 6
description: "Excel Delete Range activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Delete Range

RCA.Activities.Excel.ExcelDeleteRange

## **Description**

This activity allows deleting a specified range in an Excel workbook. Can also be used to shift an entire row or column by using the ShiftCells and ShiftOption property fields.

![image-20220505131710-1.jpeg](/img/62cc1a_image-20220505131710-1.jpeg)

(\* for mandatory)

## **Properties**

**Input**

* **Sheet Name (String)** - The name of the sheet contains the data you want to delete. By default, this is filled in with "Sheet1." Only String variables and strings are supported.  
  E.g: “Employee Data”
* **Range (String)\***- The range you want to delete. This field supports only strings and String variables.  
  E.g: “A1:K10”

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Delete Range

**Options**

* **ShiftCells (Checkbox)**- If you check it, cell formatting is shifted according to what is specified in the Shift Option property. If this box is unselected, only the cell data is deleted, leaving the formatting unmodified.
* **ShiftOption (DropDownlist)**- Specifies how to shift the cells in the deleted range. The available options are ShiftUp, ShiftDown, EntireRow, and EntireColumn.
