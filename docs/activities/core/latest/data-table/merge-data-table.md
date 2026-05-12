---
id: merge-data-table
title: "Merge Data Table"
sidebar_label: "Merge Data Table"
sidebar_position: 11
description: "Merge Data Table activity documentation."
displayed_sidebar: activitiesSidebar
---
# Merge Data Table

RCA.Activities.Core.MergeDataTable

## **Description**

This activity allows you to merge DataTable with the current DataTable whether to preserve changes or handle missing schema in the current DataTable.

[![merge data table.jpg](/img/eeb7af_merge-data-table.jpg)](/bin/download/Activities/Data%20Table/Activities/Merge%20Data%20Table/WebHome/merge%20data%20table.jpg?rev=1.1)

(\* is mandatory)

## **Properties**

**Input**

* **Destination (DataTable)**\* - The data table that takes the data from the source data table and handles the changes and missing schema.
* **Source (DataTable)**\*- The data table to be merged with the destination data table.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **Eg**: Merge Data Table.

**Option**

* **Missing Schema Action (DropDownList)** - You can have various options to choose to add action to the current table. This contains Add, Ignore, Error, Addwithkey.
