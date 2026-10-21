---
id: modern-write-datatable-to-excel
title: "Write DataTable to Excel"
sidebar_label: "Write DataTable to Excel"
sidebar_position: 4
description: "Write DataTable to Excel activity documentation."
displayed_sidebar: activitiesSidebar
---
# Write DataTable to Excel

RCA.Activities.Excel.Modern.WriteDataTableToExcelX

## **Description**

This activity writes a DataTable into a sheet, a range or a table. Writing starts at the first cell of the destination and overwrites whatever is there. With **Append** selected, the data is written below the last non-empty row of the destination instead, which makes this activity the Modern equivalent of the classic **Append Range**.

This activity must be placed inside a **Use Excel File** scope.

**Note:** **Exclude headers** works the opposite way to the classic **Add Headers** option: leaving it cleared writes the column names.

![The Write DataTable to Excel activity on the canvas with What to write = dtSource, Destination = Excel.Range("Sheet1", "A1") and the Append / Exclude headers check boxes](/static/img/excel-modern-write-datatable-to-excel.png)

(\* is mandatory)

## **In the body of the activity**

* **What to write (DataTable)**\* - The DataTable to write.  
  E.g: dtSource
* **Destination (ExcelRangeRef)**\* - Where to write. Use the **+** button to build the reference.  
  E.g: `Excel.Range("Sheet1", "A1")`, `Excel.Sheet("Sheet1")`
* **Append (Checkbox)** - See Options.
* **Exclude headers (Checkbox)** - See Options.

## **Properties**

**Input**

* **What to write (DataTable)**\* - The DataTable to write.
* **Destination (ExcelRangeRef)**\* - The sheet, range or table to write into.  
  E.g: `Excel.Range("Sheet1", "A1")`

**Options**

* **Append (Checkbox)** - When selected, the data is written after the data already in the destination, starting in the destination's first column. When cleared, writing starts at the destination's first cell. By default, this check box is not selected.
* **Exclude headers (Checkbox)** - When selected, the column names are not written. When cleared, the column names are written as the first row. This applies when appending too, so select it when you append under data that already has headers. By default, this check box is not selected.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Write DataTable to Excel
