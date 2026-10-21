---
id: modern-append-range
title: "Append Range"
sidebar_label: "Append Range"
sidebar_position: 5
description: "Append Range activity documentation."
displayed_sidebar: activitiesSidebar
---
# Append Range

RCA.Activities.Excel.Modern.AppendRangeX

## **Description**

This activity copies a range, a table or a sheet and pastes it below the last non-empty row of another range, table or sheet. The source and the destination can be on different sheets.

This activity must be placed inside a **Use Excel File** scope.

**Note:** This is not the same operation as the classic **Append Range**, which appends a DataTable. To append a DataTable, use [Write DataTable to Excel](./write-datatable-to-excel.md) with **Append** selected.

![The Append Range activity on the canvas with Excel range to append = Excel.Range("Sheet1", "A1:D10") and Append after range = Excel.Sheet("Sheet2")](/static/img/excel-modern-append-range.png)

(\* is mandatory)

## **In the body of the activity**

* **Excel range to append (ExcelRangeRef)**\* - The range, table or sheet to copy. Use the **+** button to build the reference.  
  E.g: `Excel.Range("Sheet1", "A1:D10")`
* **Append after range (ExcelRangeRef)**\* - The range, table or sheet to append to. Use the **+** button to build the reference.  
  E.g: `Excel.Sheet("Sheet2")`
* **What to copy (DropDownList)** - See Options.
* **Starting in column (String)** - See Options.
* **Source has headers (Checkbox)** - See Options.
* **Transpose (Checkbox)** - See Options.

## **Properties**

**Input**

* **Excel range to append (ExcelRangeRef)**\* - The range, table or sheet to copy.  
  E.g: `Excel.Range("Sheet1", "A1:D10")`
* **Append after range (ExcelRangeRef)**\* - The range, table or sheet to append to. The data is pasted one row below its last non-empty row, or at its first row when it is empty.  
  E.g: `Excel.Sheet("Sheet2")`

**Options**

* **What to copy (DropDownList)** - Which parts of the cells are pasted. By default, All is selected. The drop-down contains six options, as follows:  
  ・None - Behaves like All.  
  ・Value - Values only.  
  ・Formula - Formulas.  
  ・NumberFormat - Formats only.  
  ・CellFormat - Formats only.  
  ・All - Everything (values, formulas and formats).
* **Transpose (Checkbox)** - When selected, rows and columns are swapped when pasting. By default, this check box is not selected.
* **Source has headers (Checkbox)** - When selected, the first row of the source is a header and is not appended again. It says nothing about the destination. By default, this check box is not selected.
* **Starting in column (String)** - The column to append in, as a letter or a column number. Leave empty to use the destination's first column.  
  E.g: "C" or "3"

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Append Range
