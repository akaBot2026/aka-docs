---
id: modern-remove-duplicates
title: "Remove Duplicates"
sidebar_label: "Remove Duplicates"
sidebar_position: 12
description: "Remove Duplicates activity documentation."
displayed_sidebar: activitiesSidebar
---
# Remove Duplicates

RCA.Activities.Excel.Modern.RemoveDuplicatesX

## **Description**

This activity removes duplicate rows from a sheet, a range or a table. Compared with the classic **Excel Remove Duplicates Range**, it can keep a header row and compare only selected columns. With the default settings (no headers, all columns) it behaves like the classic activity.

This activity must be placed inside a **Use Excel File** scope.

![The Remove Duplicates activity on the canvas with Sheet, range or table = Excel.Table("Sheet1", "Table1"), Columns to compare and First row contains headers](/static/img/excel-modern-remove-duplicates.png)

(\* is mandatory)

## **In the body of the activity**

* **Sheet, range or table (ExcelRangeRef)**\* - Where to remove duplicates. Use the **+** button to build the reference.  
  E.g: `Excel.Table("Sheet1", "Table1")`
* **Columns to compare (String[])** - See Input.  
  E.g: `{"Name", "Email"}`
* **First row contains headers (Checkbox)** - See Options.

## **Properties**

**Input**

* **Sheet, range or table (ExcelRangeRef)**\* - The sheet, range or table to remove duplicate rows from.  
  E.g: `Excel.Range("Sheet1", "A1:D100")`
* **Columns to compare (String[])** - The columns that decide whether two rows are duplicates, by header name, column letter, or column number counted from column A of the sheet. For a table, use the table column names. Leave empty to compare all columns.  
  E.g: `{"Name", "Email"}`

**Options**

* **First row contains headers (Checkbox)** - When selected, the first row is a header and is kept. By default, this check box is not selected.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Remove Duplicates
