---
id: remove-data-column
title: "Remove Data Column"
sidebar_label: "Remove Data Column"
sidebar_position: 13
description: "Remove Data Column activity documentation."
displayed_sidebar: activitiesSidebar
---
# Remove Data Column

RCA.Activities.Core.RemoveDataColumn

## **Description**

This activity allows you to remove a Data Column to a specified DataTable.

[![remove data column.jpg](/img/3567e7_remove-data-column.jpg)](/bin/download/Activities/Data%20Table/Activities/Remove%20Data%20Column/WebHome/remove%20data%20column.jpg?rev=1.1)

(\* is mandatory)

## **Properties**

**Input**

* **Column (DataColumn)**\* - A DataColumn object to be removed from the column collection of the DataTable. If this property is set the ColumnName and ColumnIndex properties are ignored.
* **Column Index(Int)**\* - The index of the column to be removed from the column collection of the DataTable.  
  Eg: 12.
* **Column Name (String)**\* - The name of the column to be removed from the column collection of the DataTable. If this property is set then the ColumnIndex property is ignored.  
  Eg: “Phone Number”.
* **Data table (DataTable)**\* - The DataTable object from which the column is to be removed.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: “Remove Data Column”
