---
id: modern-rename-sheet
title: "Rename Sheet"
sidebar_label: "Rename Sheet"
sidebar_position: 13
description: "Rename Sheet activity documentation."
displayed_sidebar: activitiesSidebar
---
# Rename Sheet

RCA.Activities.Excel.Modern.RenameSheetX

## **Description**

This activity renames a worksheet. It works on a whole sheet only, so **Sheet** must be a sheet reference such as `Excel.Sheet("Sheet1")`. A range or table reference is rejected.

The new name is checked before the sheet is renamed. It cannot be empty, cannot be longer than 31 characters, cannot contain any of `: \ / ? * [ ]`, and cannot be the name of another sheet in the workbook.

This activity must be placed inside a **Use Excel File** scope.

![The Rename Sheet activity on the canvas with Sheet = Excel.Sheet("Sheet1") and New name = "Summary"](/static/img/excel-modern-rename-sheet.png)

(\* is mandatory)

## **In the body of the activity**

* **Sheet (ExcelRangeRef)**\* - The sheet to rename. Use the **+** button to build the reference.  
  E.g: `Excel.Sheet("Sheet1")`
* **New name (String)**\* - The new name of the sheet.  
  E.g: "Summary"

## **Properties**

**Input**

* **Sheet (ExcelRangeRef)**\* - The sheet to rename.  
  E.g: `Excel.Sheet("Sheet1")`
* **New name (String)**\* - The new name of the sheet.  
  E.g: "Summary"

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Rename Sheet
