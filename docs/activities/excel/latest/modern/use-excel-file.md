---
id: modern-use-excel-file
title: "Use Excel File"
sidebar_label: "Use Excel File"
sidebar_position: 2
description: "Use Excel File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Use Excel File

RCA.Activities.Excel.Modern.UseExcelFile

## **Description**

This activity opens an Excel workbook and provides a scope for the Modern Excel activities. The workbook is published to the activities in its body under the name given in **Reference as** (by default `Excel`), so they can address it as `Excel.Sheet("Sheet1")`, `Excel.Range("Sheet1", "A1:D10")` or `Excel.Table("Sheet1", "Table1")`. See [About Modern Excel](./about-modern-excel.md) for the reference syntax.

All other Modern Excel activities must be placed inside this scope. The classic Excel activities can also be placed inside it.

When the body finishes (or fails), the workbook is closed, unless **Keep Excel file open** is selected.

**Note - System Requirements:** Microsoft Excel must be installed on the machine running akaBot Studio or Agent.

![The Use Excel File activity on the canvas showing the Excel file field, the Reference as field (value Excel) and the "Do" drop zone](/static/img/excel-modern-use-excel-file.png)

(\* is mandatory)

## **In the body of the activity**

* **Excel file (String)**\* - The path of the Excel file to open. You can type it or pick it with the browse button.  
  E.g: "C:\FolderName\Sales.xlsx"
* **Reference as (String)** - The name the activities in the body use to address this workbook. By default, this is `Excel`. If left empty, `Excel` is used.  
  E.g: Sales (the children then write `Sales.Sheet("Sheet1")`)
* **"Do"** - The activities you want to execute on the workbook.

## **Properties**

**File**

* **Workbook Path (String)**\* - The path of the Excel file to open. Same as **Excel file** in the body.  
  E.g: "C:\FolderName\Sales.xlsx"
* **Reference as (String)** - The name the activities in the body use to address this workbook. By default, this is `Excel`.
* **Password (String)** - The password required for opening a password-protected workbook, if necessary.
* **Edit Password (String)** - The password required for editing a password-protected workbook, if necessary.

**Options**

* **Create if not exists (Checkbox)** - When selected, a new workbook is created at **Workbook Path** if the file does not exist. By default, this check box is selected.
* **Read Only (Checkbox)** - Opens the workbook in read-only mode. By default, this check box is not selected.
* **Save changes (Checkbox)** - When selected, the workbook is saved after each activity that changes it. When cleared, use [Save Excel File](./save-excel-file.md) to save. By default, this check box is selected.
* **Keep Excel file open (Checkbox)** - When selected, the workbook is left open in Excel after the scope ends. By default, this check box is not selected.
* **Show Excel window (Checkbox)** - When selected, Excel is visible while the activities run. When cleared, everything is done in the background. By default, this check box is selected.
* **Read formatting (DropDownList)** - How values are read from the workbook by the activities inside this scope. [Read Range](./read-range.md) uses this setting when its own **Read formatting** is SameAsFile. By default, Default is selected. The drop-down contains three options, as follows:  
  ・Default - The default formatting Excel returns.  
  ・RawValue - Raw underlying values, ignoring all formatting. Fastest on large ranges.  
  ・DisplayValue - Values as displayed in Excel, honouring number, date and currency formats. Slower on large ranges.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Use Excel File
