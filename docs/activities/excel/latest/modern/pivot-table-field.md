---
id: modern-pivot-table-field
title: "Pivot Table Field"
sidebar_label: "Pivot Table Field"
sidebar_position: 41
description: "Pivot Table Field activity documentation."
displayed_sidebar: activitiesSidebar
---
# Pivot Table Field

RCA.Activities.Excel.Modern.PivotTableFieldX

## **Description**

This activity moves one field of a pivot table into the row, column, filter or value position. Use one **Pivot Table Field** activity for each field you want to add to the pivot table created by [Create Pivot Table](./create-pivot-table.md).

The activity shows an error when the field name is empty, or when the field does not exist in the pivot table.

This activity must be placed inside a **Use Excel File** scope.

(\* is mandatory)

## **In the body of the activity**

* **Pivot table (ExcelPivotTableRef)**\* - The pivot table whose field is moved. Use the variable that **Create Pivot Table** saved.  
  E.g: salesPivot
* **Field name (String)**\* - The column name to add to the pivot table.  
  E.g: "Region"
* **Field type (DropDownList)** - See Options.
* **Function (DropDownList)** - See Options.

## **Properties**

**Input**

* **Pivot table (ExcelPivotTableRef)**\* - The pivot table whose field is moved.  
  E.g: salesPivot
* **Field name (String)**\* - The column name to add to the pivot table.  
  E.g: "Region"

**Options**

* **Field type (DropDownList)** - What the field should be in the pivot table. By default, Row is selected. The drop-down contains four options, as follows:  
  ・Row  
  ・Column  
  ・Filter  
  ・Value
* **Function (DropDownList)** - When the field is a Value, the function used to summarize it. By default, Sum is selected. The drop-down contains eleven options, as follows:  
  ・Sum  
  ・Count  
  ・Average  
  ・Max  
  ・Min  
  ・Product  
  ・Count numbers  
  ・Sample standard deviation  
  ・Population standard deviation  
  ・Sample variance  
  ・Population variance

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Pivot Table Field
