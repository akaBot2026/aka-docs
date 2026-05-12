---
id: get-row-item
title: "Get Row Item"
sidebar_label: "Get Row Item"
sidebar_position: 8
description: "Get Row Item activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Row Item

RCA.Activities.Core.GetRowItem

## **Description**

This activity allows you to get a value from a DataRow variable according to a specified column.

[![get row item.jpg](/img/c01fdd_get-row-item.jpg)](/bin/download/Activities/Data%20Table/Activities/Get%20Row%20Item/WebHome/get%20row%20item.jpg?rev=1.1)

(\* is mandatory)

**In the body of activity**

* **DataTable row (DataRow)**\* - The DataRow object from which a value is to be retrieved.

## **Properties**

**Input**

* **Column (DataColumn)**\* - The DataColumn object whose value is to be retrieved from the DataRow. If this property is set, the ColumnName and ColumnIndex properties are ignored.
* **Column Index (Int)**\* - The index of the column whose value is to be retrieved from the DataRow.  
  Eg: 11
* **Column Name (String)**\* - The name of the column whose value is to be retrieved from the DataRow. If this property is set, then the ColumnIndex property is ignored.  
  Eg: “ColumnNameThatNeed”.
* **Data Row**\* - The DataRow object from which a value is to be retrieved.

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Get row item

**Output**

* **Value** - The column value from the specified DataRow.
