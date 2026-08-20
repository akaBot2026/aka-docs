---
id: for-each-excel-row
title: "For Each Excel Row"
sidebar_label: "For Each Excel Row"
sidebar_position: 3
description: "For Each Excel Row activity documentation."
displayed_sidebar: activitiesSidebar
---
# For Each Excel Row

RCA.Activities.Excel.ExcelForEachRow

## **Description**

This activity executes the activities in its body once for each row of a range, table, or sheet. Each row is exposed to the body as a live, writable **CurrentRow** reference together with a zero-based **CurrentIndex**.

This activity must be placed inside an **Excel Application Scope**. To stop the loop early or skip to the next row, use the **Excel Break** and **Excel Continue** activities inside the body.

![For Each Excel Row](/static/img/for-each-excel-row.png)

(\* is mandatory)

## **In the body of the activity**

* **CurrentRow** - The loop variable that represents the row currently being processed (default name `CurrentRow`). See [Using the CurrentRow delegate](#using-the-currentrow-delegate). You can rename it.
* **CurrentIndex** - The zero-based index of the current iteration (default name `CurrentIndex`). You can rename it.
* **Sheet (String)**\* - The worksheet to iterate. E.g: "Sheet1".
* **Range (String)** - The range, table, or named range to iterate. Leave empty to use the whole used range of the sheet. E.g: "A1:D50".
* **Body** - Add the activities that you want to execute for each row.

## **Properties**

**Input**

* **Sheet Name (String)**\* - The worksheet to iterate. E.g: "Sheet1".
* **Range (String)** - The range, table, or named range to iterate. Leave empty to use the sheet's used range. E.g: "A1:D50".

**Options**

* **Has Headers (Checkbox)** - When selected, the first row is treated as column headers, so cells can be addressed by column name (e.g. `CurrentRow("Name")`). When cleared, cells are addressed by column letter (e.g. `CurrentRow("D")`) or zero-based index (e.g. `CurrentRow(3)`). By default, this check box is selected.
* **Empty Row Behavior (DropDownList)** - Controls how empty rows are handled while iterating. By default, StopAfterThreeConsecutiveEmptyRows is selected. The drop-down contains four options, as follows:  
  ・StopAfterThreeConsecutiveEmptyRows - Stop once three consecutive empty rows are encountered.  
  ・Stop - Stop at the first empty row.  
  ・Skip - Skip empty rows and continue.  
  ・Process - Process empty rows like any other row.
* **Save After Each Row (Checkbox)** - When selected, the workbook is saved after every row (safer against interruption, but slower). When cleared, changes are saved once at the end of the loop if the parent Excel Application Scope has **Auto Save** enabled. By default, this check box is not selected.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: For Each Excel Row.

## **Using the CurrentRow delegate**

`CurrentRow` is a **live reference** to the row currently being processed. It is available to every activity placed inside the body. Reading a cell reads the workbook; assigning a cell writes it back to the workbook.

### **Reading a cell**

* **By header name** (when *Has Headers* is selected):  
  `CurrentRow("Total")`
* **By column letter** (when *Has Headers* is cleared):  
  `CurrentRow("D")`
* **By zero-based column index**:  
  `CurrentRow(3)`
* **Explicit accessors**:  
  `CurrentRow.ByField("Total")` (by name) / `CurrentRow.ByIndex(3)` (by index)

A cell returns an **ExcelValue** that converts automatically when used in an expression (to `String`, `Int32`, `Int64`, `Double`, `Decimal`, `Boolean`, or `DateTime`). Use it directly, call `.ToString`, or cast it:

```vb
' text
myName = CurrentRow("Name").ToString

' number (cast for arithmetic)
qty = CInt(CurrentRow("Qty"))
```

### **Writing a cell**

Assigning to a cell of `CurrentRow` persists the value to the workbook immediately (see the saving behavior in **Save After Each Row** / the scope's **Auto Save**):

```vb
CurrentRow("Total") = CInt(CurrentRow("Qty")) * CDbl(CurrentRow("Price"))
```

### **Row information**

* **`CurrentRow.RowIndex`** - The 1-based physical worksheet row of the current row.
* **`CurrentRow.Address`** - The A1 address of the current row across the range's columns, e.g. `"B5:F5"`.
* **`CurrentRow.FirstCell`** - The address of the first cell of the current row, e.g. `"B5"`.
* **`CurrentIndex`** - The zero-based count of rows processed so far.

### **Using CurrentRow with other Excel activities**

Because `CurrentRow` can produce a cell **address**, you can target the current row from any address-based activity (for example **Excel Write Cell** or **Excel Set Range Color**):

* **Excel Write Cell** → *Cell*: `CurrentRow("Status").Address`, *Value*: `"Done"`

### **Notes**

* Row addressing is absolute, so hidden or filtered rows do not shift the index.
* `CurrentRow` and `CurrentIndex` can be renamed in the activity body; if you rename them, update the expressions in child activities to use the new names.
