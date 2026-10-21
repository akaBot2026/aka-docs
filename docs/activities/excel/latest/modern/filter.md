---
id: modern-filter
title: "Filter"
sidebar_label: "Filter"
sidebar_position: 9
description: "Filter activity documentation."
displayed_sidebar: activitiesSidebar
---
# Filter

RCA.Activities.Excel.Modern.FilterX

## **Description**

This activity applies an AutoFilter to one column of a table, a range or a sheet, either by a set of values (**Basic** mode) or by comparison criteria (**Advanced** mode, like Excel's Custom AutoFilter). It can also remove the filter from the column.

This activity must be placed inside a **Use Excel File** scope.

![The Filter activity on the canvas with What to filter = Excel.Table("Sheet1", "Table1"), Column, Mode, Values, Criteria 1, Combine with and Criteria 2](/static/img/excel-modern-filter.png)

(\* is mandatory)

## **In the body of the activity**

* **What to filter (ExcelRangeRef)**\* - The table, range or sheet to filter. Use the **+** button to build the reference.  
  E.g: `Excel.Table("Sheet1", "Table1")`
* **Column (String)**\* - The column to filter on. See **Column** under Input.  
  E.g: "Region"
* **Mode (DropDownList)** - See Options.
* **Values (String[])** - See Input.  
  E.g: `{"North", "South"}`
* **Criteria 1 (String)** - See Input.  
  E.g: `">100"`
* **Combine with (DropDownList)** - See Options.
* **Criteria 2 (String)** - See Input.  
  E.g: `"<500"`
* **Clear filter (Checkbox)** - See Options.

## **Properties**

**Input**

* **What to filter (ExcelRangeRef)**\* - The table, range or sheet to filter.  
  E.g: `Excel.Table("Sheet1", "Table1")`
* **Column (String)**\* - The column to filter on. For a table, use the table column name. For a range or a sheet, use a header from the first row (matched without regard to case), a column letter, or a column number counted from column A of the sheet. The column must lie within the range being filtered.  
  E.g: "Region", "C" or "3"
* **Values (String[])** - The values to keep, in **Basic** mode.  
  E.g: `{"North", "South"}`
* **Criteria 1 (String)** - The first comparison, in **Advanced** mode.  
  E.g: `">100"`
* **Criteria 2 (String)** - An optional second comparison, in **Advanced** mode.  
  E.g: `"<500"`

**Options**

* **Mode (DropDownList)** - How the filter criteria are expressed. By default, Basic is selected. The drop-down contains two options, as follows:  
  ・Basic - Show rows matching one of the **Values**.  
  ・Advanced - Show rows matching **Criteria 1** and/or **Criteria 2**, as Excel's Custom AutoFilter does.
* **Combine with (DropDownList)** - How **Criteria 1** and **Criteria 2** combine in Advanced mode. By default, And is selected. The drop-down contains two options, as follows:  
  ・And - Both criteria must match.  
  ・Or - Either criterion may match.
* **Clear filter (Checkbox)** - When selected, the filter on the column is removed instead of applied, and the mode, values and criteria are ignored. By default, this check box is not selected.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Filter
