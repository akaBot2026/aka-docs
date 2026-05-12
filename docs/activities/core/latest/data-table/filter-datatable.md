---
id: filter-datatable
title: "Filter Data Table"
sidebar_label: "Filter Data Table"
sidebar_position: 5
description: "Filter Data Table activity documentation."
displayed_sidebar: activitiesSidebar
---
# Filter Data Table

RCA.Activities.Core.FilterDataTable

## **Description**

This activity allows you to filter a DataTable variable by specifying conditions in the Filter Wizard window. The activity can keep or delete rows or columns according to the logical conditions that are specified in the wizard. The body of the activity contains a Filter Wizard button so that you can access the wizard and customize your settings at any time.

[![filter data table.jpg](/img/2e3424_filter-data-table.jpg)](/bin/download/Activities/Data%20Table/Activities/Filter%20DataTable/WebHome/filter%20data%20table.jpg?rev=1.1)

(\* is mandatory)

## **In the body of activity**

**Filter Wizard**- Set filter for rows, set output columns

![image-20230419143358-1.png](/img/4cae76_image-20230419143358-1.png)

## **Properties**

**Input**

* **Data Table (DataTable)**\* - The DataTable variable that you want to filter. This field supports only DataTable variables.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Filter DataTable

**Options**

* **Filter Rows Mode** - Specifies whether to filter the table by keeping or removing the target rows.
* **Select Columns Mode** – Specifies whether to filter the table by keeping or removing the target columns.

**Output**

* **Data table (DataTable)** - the filtered Data table as an output of the activity, stored in a DataTable variable. Using the same variable as the one in the Input field overwrites the initial variable while adding a new variable leaves the initial one unaffected. This field supports only DataTable variables.
