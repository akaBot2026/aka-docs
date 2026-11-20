---
id: modern-sort
title: "Sort"
sidebar_label: "Sort"
sidebar_position: 36
description: "Sort activity documentation."
displayed_sidebar: activitiesSidebar
---
# Sort

RCA.Activities.Excel.Modern.SortX

## **Description**

This activity sorts a range, table or sheet by one or more columns, each with its own direction. The sort keys are given by **Sort Column** activities placed in the body of **Sort**. The first **Sort Column** is the first key.

The activity requires at least one **Sort Column** in its body, otherwise it shows a validation error. **Sort Column** can only be used inside **Sort**.

This activity must be placed inside a **Use Excel File** scope.

(\* is mandatory)

## **In the body of the activity**

* **Range (ExcelRangeRef)**\* - The range, table or sheet to sort. Use the **+** button to build the reference.  
  E.g: `Excel.Table("Sheet1", "Table1")`
* **Has headers (Checkbox)** - See Options.
* **Columns to sort** - The **Sort Column** activities. Use **Add column**, **Add ascending column** or **Add descending column** to add a sort key.

## **Properties**

**Input**

* **Range (ExcelRangeRef)**\* - The range, table or sheet to sort.  
  E.g: `Excel.Range("Sheet1", "A1:D100")`

**Options**

* **Has headers (Checkbox)** - When selected, the first row stays in place and column names are resolved against it. By default, this check box is selected.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Sort

## **Sort Column**

RCA.Activities.Excel.Modern.SortColumnX

**Sort Column** is one sort key of a **Sort** activity: which column and which direction.

* **Column (String)**\* - A table column name, a header from the first row, a column letter or a position.  
  E.g: "Amount"
* **Sort order (DropDownList)** - Ascending or descending. By default, Ascending is selected. The drop-down contains two options, as follows:  
  ・Ascending  
  ・Descending

## **Example: sort a table by two columns**

This example sorts the table *Table1* on *Sheet1* by **Region** (A to Z) and then by **Amount** (largest first).

1. Inside a **Use Excel File** scope, add **Sort**:
   * **Range**: `Excel.Table("Sheet1", "Table1")`
   * Keep **Has headers** selected.
2. In the body of **Sort**, click **Add ascending column** and set **Column** to `"Region"`.
3. Click **Add descending column** and set **Column** to `"Amount"`.
4. Run the workflow. The rows are ordered by Region first. Rows with the same Region are ordered by Amount, from the largest to the smallest.
