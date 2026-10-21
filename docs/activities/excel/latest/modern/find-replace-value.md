---
id: modern-find-replace-value
title: "Find/Replace Value"
sidebar_label: "Find/Replace Value"
sidebar_position: 10
description: "Find/Replace Value activity documentation."
displayed_sidebar: activitiesSidebar
---
# Find/Replace Value

RCA.Activities.Excel.Modern.FindReplaceValueX

## **Description**

This activity searches a sheet, a range or a table for a value. Depending on **Operation**, it only finds it, replaces the first match, or replaces every match. For Find and Replace, the address of the cell that was found is returned.

This activity must be placed inside a **Use Excel File** scope.

![The Find/Replace Value activity on the canvas with Where to search, Value to find, Replace with, Operation, Look in, Cell found and the two match check boxes](/static/img/excel-modern-find-replace-value.png)

(\* is mandatory)

## **In the body of the activity**

* **Where to search (ExcelRangeRef)**\* - The sheet, range or table to search. Use the **+** button to build the reference.  
  E.g: `Excel.Sheet("Sheet1")`
* **Value to find (String)**\* - The value to search for.  
  E.g: "10"
* **Replace with (String)** - The replacement value. Used by Replace and ReplaceAll; ignored by Find.  
  E.g: "20"
* **Operation (DropDownList)** - See Options.
* **Look in (DropDownList)** - See Options.
* **Cell found (String)** - See Output.  
  E.g: cellAddress
* **Match case (Checkbox)** - See Options.
* **Match entire cell contents (Checkbox)** - See Options.

## **Properties**

**Input**

* **Where to search (ExcelRangeRef)**\* - The sheet, range or table to search.  
  E.g: `Excel.Range("Sheet1", "A1:D100")`
* **Value to find (String)**\* - The value to search for.  
  E.g: "10"
* **Replace with (String)** - The replacement value. Used by Replace and ReplaceAll; ignored by Find.  
  E.g: "20"

**Options**

* **Operation (DropDownList)** - What the activity does. By default, Find is selected. The drop-down contains three options, as follows:  
  ・Find - Locate the value and return the cell it is in.  
  ・Replace - Replace the first match and return the cell it was in.  
  ・ReplaceAll - Replace every match. Nothing is returned, because there is no single cell.
* **Match case (Checkbox)** - When selected, the search is case-sensitive. By default, this check box is not selected.
* **Match entire cell contents (Checkbox)** - When selected, only cells whose whole content equals the value match. When cleared, a cell matches if it contains the value. By default, this check box is not selected.
* **Look in (DropDownList)** - What is searched by Find and Replace. By default, Values is selected. The drop-down contains three options, as follows:  
  ・Formulas - Search the cell formulas.  
  ・Values - Search the cell values.  
  ・Comments - Search the cell comments.

**Output**

* **Cell found (String)** - The address of the cell found, e.g. "B5". Empty when nothing matched and for ReplaceAll.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Find/Replace Value
