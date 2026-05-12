---
id: remove-data-row
title: "Remove Data Row"
sidebar_label: "Remove Data Row"
sidebar_position: 14
description: "Remove Data Row activity documentation."
displayed_sidebar: activitiesSidebar
---
# Remove Data Row

RCA.Activities.Core.RemoveDataRow

## **Description**

This activity allows you to remove a Data Row to a specified DataTable.

![remove data row.jpg](/img/28cc5b_remove-data-row.jpg)

(\* is mandatory)

## **Properties**

**Input**

* **Data Row (DataRow)**\* - The DataRow object which is to be removed.
* **Data Table (DataTable)**\* - The DataTable object from which the row is removed.
* **Row Index (Int)**\* - The index of the row to be removed.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Remove data row.
