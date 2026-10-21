---
id: modern-read-range
title: "Read Range"
sidebar_label: "Read Range"
sidebar_position: 3
description: "Read Range activity documentation."
displayed_sidebar: activitiesSidebar
---
# Read Range

RCA.Activities.Excel.Modern.ReadRangeX

## **Description**

This activity reads a sheet, a range or a table into a DataTable variable. A sheet reference reads the sheet's used range.

This activity must be placed inside a **Use Excel File** scope.

![The Read Range activity on the canvas with What to read = Excel.Sheet("Sheet1"), Save to = dtResult and the two check boxes](/static/img/excel-modern-read-range.png)

(\* is mandatory)

## **In the body of the activity**

* **What to read (ExcelRangeRef)**\* - The sheet, range or table to read. Use the **+** button to build the reference.  
  E.g: `Excel.Sheet("Sheet1")`, `Excel.Range("Sheet1", "A1:D10")`, `Excel.Table("Sheet1", "Table1")`
* **Save to (DataTable)** - The variable that receives the data.  
  E.g: dtResult
* **Read formatting (DropDownList)** - See **Read formatting** under Options.
* **First row contains headers (Checkbox)** - See Options.
* **Visible rows only (Checkbox)** - See Options.

## **Properties**

**Input**

* **What to read (ExcelRangeRef)**\* - The sheet, range or table to read.  
  E.g: `Excel.Sheet("Sheet1")`

**Options**

* **First row contains headers (Checkbox)** - When selected, the first row is used as the column names of the DataTable. By default, this check box is selected.
* **Visible rows only (Checkbox)** - When selected, rows that are hidden or filtered out are skipped. When cleared, every row is read, even on a filtered sheet. By default, this check box is not selected.
* **Read formatting (DropDownList)** - How cell values are read. By default, SameAsFile is selected. The drop-down contains four options, as follows:  
  ・SameAsFile - Use the **Read formatting** set on the Use Excel File scope.  
  ・Default - The default formatting Excel returns.  
  ・RawValue - Raw underlying values, ignoring all formatting. Fastest on large ranges.  
  ・DisplayValue - Values as displayed in Excel, honouring number, date and currency formats. Cells are read one by one, so this is slow on large ranges.

**Output**

* **Save to (DataTable)** - The data that was read.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Read Range
