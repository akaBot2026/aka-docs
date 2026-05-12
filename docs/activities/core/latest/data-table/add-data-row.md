---
id: add-data-row
title: "Add Data Row"
sidebar_label: "Add Data Row"
sidebar_position: 2
description: "Add Data Row activity documentation."
displayed_sidebar: activitiesSidebar
---
# Add Data Row

RCA.Activities.Core.AddDataRow

## **Description**

This activity allows you to add a Data Row to a specified DataTable.

[![add data row.jpg](/img/32fa4e_add-data-row.jpg)](/bin/download/Activities/Data%20Table/Activities/Add%20Data%20Row/WebHome/add%20data%20row.jpg?rev=1.1)

(\* is mandatory)

## **Properties**

**Input**

* **Array row (Object[])**- An array of objects to be added to the DataTable. The type of each object should map to the type of its corresponding column in the DataTable.
* **Data row (DataRow)** - The DataRow object to be added to the DataTable. If this property is set, then the ArrayRow property is ignored.
* **Data Table (DataTable)**\* - The DataTable object in which you want to add a column. This field supports only DataTable objects.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Add Data Row
