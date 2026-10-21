---
id: modern-copy-paste-range
title: "Copy/Paste Range"
sidebar_label: "Copy/Paste Range"
sidebar_position: 8
description: "Copy/Paste Range activity documentation."
displayed_sidebar: activitiesSidebar
---
# Copy/Paste Range

RCA.Activities.Excel.Modern.CopyPasteRangeX

## **Description**

This activity copies a range, a table or a sheet and pastes it at the top-left cell of the destination, which can be on another sheet. You can choose what to paste, transpose the data, and leave out the source's header row.

This activity must be placed inside a **Use Excel File** scope.

![The Copy/Paste Range activity on the canvas with Copy from = Excel.Range("Sheet1", "A1:D10"), Paste to = Excel.Range("Sheet2", "A1"), What to copy, Headers and Transpose](/static/img/excel-modern-copy-paste-range.png)

(\* is mandatory)

## **In the body of the activity**

* **Copy from (ExcelRangeRef)**\* - The range, table or sheet to copy. Use the **+** button to build the reference.  
  E.g: `Excel.Range("Sheet1", "A1:D10")`
* **Paste to (ExcelRangeRef)**\* - Where to paste. The data is pasted starting at its top-left cell. Use the **+** button to build the reference.  
  E.g: `Excel.Range("Sheet2", "A1")`
* **What to copy (DropDownList)** - See Options.
* **Headers (DropDownList)** - See Options.
* **Transpose (Checkbox)** - See Options.

## **Properties**

**Input**

* **Copy from (ExcelRangeRef)**\* - The range, table or sheet to copy.  
  E.g: `Excel.Table("Sheet1", "Table1")`
* **Paste to (ExcelRangeRef)**\* - The range, table or sheet to paste into, starting at its top-left cell.  
  E.g: `Excel.Range("Sheet2", "A1")`

**Options**

* **What to copy (DropDownList)** - Which parts of the cells are pasted. By default, All is selected. The drop-down contains six options, as follows:  
  ・None - Behaves like All.  
  ・Value - Values only.  
  ・Formula - Formulas.  
  ・NumberFormat - Formats only.  
  ・CellFormat - Formats only.  
  ・All - Everything (values, formulas and formats).
* **Transpose (Checkbox)** - When selected, rows and columns are swapped when pasting. By default, this check box is not selected.
* **Headers (DropDownList)** - Whether the first row of the source is copied. By default, IncludeAlways is selected. The drop-down contains four options, as follows:  
  ・IncludeAlways - Copy the first row, whatever the source is.  
  ・ExcludeAlways - Skip the first row, whatever the source is.  
  ・ExcludeFromRanges - Skip the first row only when the source is a range or a sheet.  
  ・ExcludeFromTables - Skip the header row only when the source is a table.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Copy/Paste Range
