---
id: modern-save-excel-file-as
title: "Save Excel File As"
sidebar_label: "Save Excel File As"
sidebar_position: 18
description: "Save Excel File As activity documentation."
displayed_sidebar: activitiesSidebar
---
# Save Excel File As

RCA.Activities.Excel.Modern.SaveExcelFileAsX

## **Description**

This activity saves the workbook opened by the enclosing **Use Excel File** as a different file, optionally in a different format. A relative path is resolved to a full path. If a file already exists at the path and **Replace existing** is cleared, the activity fails instead of overwriting it.

This activity must be placed inside a **Use Excel File** scope.

![The Save Excel File As activity on the canvas with Save to = "C:\copy.xlsx", Format and Replace existing](/static/img/excel-modern-save-excel-file-as.png)

(\* is mandatory)

## **In the body of the activity**

* **Save to (String)**\* - The path of the new file.  
  E.g: "C:\FolderName\copy.xlsx"
* **Format (DropDownList)** - See Options.
* **Replace existing (Checkbox)** - See Options.

## **Properties**

**Input**

* **Save to (String)**\* - The path of the new file.  
  E.g: "C:\FolderName\copy.xlsx"

**Options**

* **Format (DropDownList)** - The file format to save in. By default, KeepCurrent is selected. The drop-down contains six options, as follows:  
  ・KeepCurrent - Keep the format the workbook already has.  
  ・Workbook - Excel Workbook (.xlsx).  
  ・BinaryWorkbook - Excel Binary Workbook (.xlsb).  
  ・MacroEnabledWorkbook - Excel Macro-Enabled Workbook (.xlsm).  
  ・Excel97To2003Workbook - Excel 97-2003 Workbook (.xls).  
  ・Csv - CSV (.csv).
* **Replace existing (Checkbox)** - When selected, an existing file at the path is overwritten. When cleared, an existing file is an error. By default, this check box is selected.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Save Excel File As
