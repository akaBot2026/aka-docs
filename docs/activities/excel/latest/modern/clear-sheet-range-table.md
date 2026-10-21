---
id: modern-clear-sheet-range-table
title: "Clear Sheet/Range/Table"
sidebar_label: "Clear Sheet/Range/Table"
sidebar_position: 6
description: "Clear Sheet/Range/Table activity documentation."
displayed_sidebar: activitiesSidebar
---
# Clear Sheet/Range/Table

RCA.Activities.Excel.Modern.ClearRangeX

## **Description**

This activity clears the values and/or the formatting of a sheet, a range or a table. The cells themselves stay in place: nothing is deleted and nothing shifts, so addresses computed before the clear are still valid afterwards.

This activity must be placed inside a **Use Excel File** scope.

**Note:** The classic **Delete Range** is a different operation: it removes cells and shifts the remaining ones.

![The Clear Sheet/Range/Table activity on the canvas with Sheet, range or table to clear = Excel.Sheet("Sheet1") and What to clear = Contents](/static/img/excel-modern-clear-sheet-range-table.png)

(\* is mandatory)

## **In the body of the activity**

* **Sheet, range or table to clear (ExcelRangeRef)**\* - What to clear. Use the **+** button to build the reference.  
  E.g: `Excel.Sheet("Sheet1")`, `Excel.Range("Sheet1", "A1:D10")`, `Excel.Table("Sheet1", "Table1")`
* **What to clear (DropDownList)** - See Options.

## **Properties**

**Input**

* **Sheet, range or table to clear (ExcelRangeRef)**\* - The sheet, range or table to clear.  
  E.g: `Excel.Range("Sheet1", "A1:D10")`

**Options**

* **What to clear (DropDownList)** - What is removed from the cells. By default, Contents is selected. The drop-down contains three options, as follows:  
  ・All - Values and formatting.  
  ・Contents - Values only, keeping formatting.  
  ・Formats - Formatting only, keeping values.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Clear Sheet/Range/Table
