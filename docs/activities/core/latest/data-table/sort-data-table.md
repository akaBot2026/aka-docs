---
id: sort-data-table
title: "Sort Data Table"
sidebar_label: "Sort Data Table"
sidebar_position: 16
description: "Sort Data Table activity documentation."
displayed_sidebar: activitiesSidebar
---
# Sort Data Table

RCA.Activities.Core.SortDataTables

## **Description**

This activity allows you to sort data tables in ascending or descending order, based on the values of a specified column.

[![sort data table.jpg](/img/d4f5f2_sort-data-table.jpg)](/bin/download/Activities/Data%20Table/Activities/Sort%20Data%20Table/WebHome/sort%20data%20table.jpg?rev=1.1)

(\* is mandatory)

## **Properties**

**Input**

* **Data Table (DataTable)\***- The data table variable you want to sort. This field supports only DataTable variables

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Sort Data table

**Output**

* **Output Data Table (DataTable)**- The DataTable variable after it has been sorted. Placing the same variable as the one in the Input field will replace the initial variable while adding a new variable leaves the initial one unaffected. This field supports only DataTable variables.

**Sorting Column**

* **Column Index (Int)**- The index of the column you want to sort.  
  Eg: 3
* **Column Name (String)** - Name of the sorting column.  
  Eg: “Column name here”.
* **Data Column (DataColumn)** - The variable containing the column you want to sort. This field supports only DataColumn variables. Setting a variable in this property field disables the other two properties.
* **Order (DropDownList)** - Scroll down with 2 options: Ascending or descending.
