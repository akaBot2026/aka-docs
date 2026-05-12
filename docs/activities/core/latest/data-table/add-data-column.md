---
id: add-data-column
title: "Add Data Column"
sidebar_label: "Add Data Column"
sidebar_position: 1
description: "Add Data Column activity documentation."
displayed_sidebar: activitiesSidebar
---
# Add Data Column

RCA.Activities.Core.AddDataColumn

## **Description**

This activity allows you to add a DataColumn to a specified DataTable.

![add data column.jpg](/img/b21ad7_add-data-column.jpg)

(\* is mandatory)

## **Properties**

**Input**

* **Column (DataColumn)**\* - A DataColumn object that is to be appended to the column collection of the DataTable.
* **Column Name (String)**\* - The name of the new column you want to add to the specified DataTable Object. String supported only.
* **Data Table (DataTable)**\* - The DataTable object in which you want to add a column. This field supports only DataTable objects.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **Eg**: Add Data Column
* **Type Argument (Type)** - A reference type that is used for the instantiation of a generic type

**Options**

* **Allow DBNull (CheckBox)** - Specifies whether new values are allowed in the new column for rows that belong to the table.
* **Allow Increment** - Specifies if the value of the column increments automatically when a new row is added.
* **Default Value (Object)** - Specifies the default value for the new column when creating new rows. The value must be of the type stated by the TypeArgument property.
* **Max Length (Int)** - Specifies the maximum length for each row of the new column. Supports only Int32 variables.
* **Unique (CheckBox)** - Specifies that the values in each row of the new column must be unique.
