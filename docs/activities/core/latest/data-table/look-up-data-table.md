---
id: look-up-data-table
title: "Look Up Data Table"
sidebar_label: "Look Up Data Table"
sidebar_position: 10
description: "Look Up Data Table activity documentation."
displayed_sidebar: activitiesSidebar
---
# Look Up Data Table

RCA.Activities.Core.LookupDataTable

## **Description**

This activity enables you to search for a provided value in a specified DataTable and return the RowIndex at which it was found. This activity can also help you return the value found in the cell that has the row specified in the RowIndex property and the column specified in the Target Column property category.

[![look up data table.jpg](/img/864a58_look-up-data-table.jpg)](/bin/download/Activities/Data%20Table/Activities/Look%20Up%20Data%20Table/WebHome/look%20up%20data%20table.jpg?rev=1.1)

(\* is mandatory)

## **Properties**

**Input**

* **Lookup Value (String)**\* - The value you want to search for in the specified DataTable variable. This field supports only strings and String variables.  
  E.g: “WordIWantToSearch”
* **Data Table (DataTable)**\* - The DataTable variable in which you want to perform the lookup. This field supports only DataTable variables.

**Lookup Column**

* **Column Index (Int)** - The index of the column you want to search for. This field supports only Int32 variables.  
  Eg: 1
* **Column Name (String)** - The name of the column you want to search for. This field supports only strings and String variables.  
  Eg: “Name of column”
* **Data Column (DataColumn)** - The variable containing the column you want to search for. This field supports only DataColumn variables.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Look up the data table

**Output**

* **Cell Value** - Optional. The value found in the cell that has the Row coordinates specified in the RowIndex property and the Column coordinates specified in the Target Column property category. Object variables only.
* **Row Index** - The Row index of the found cell, stored in an Int32 variable. This field supports only Int32 variables.

**Target Column**

* **Column Index** - Specifying a Column index here returns the value of the cell found at the coordinates between this column and the value from the RowIndex property. This field supports only Int32 variables.  
  Eg: 1
* **Column Name (String)** - Specifying a Column name here returns the value of the cell found at the coordinates between this column and the value from the RowIndex property. This field supports only strings and String variables.  
  Eg: “Name of targeted column”
* **Data Column (DataColumn)** - Specifying a DataColumn variable here returns the value of the cell found at the coordinates between this column and the value from the RowIndex property. This field supports only DataColumn variables.
