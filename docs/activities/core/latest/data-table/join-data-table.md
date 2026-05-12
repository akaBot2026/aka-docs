---
id: join-data-table
title: "Join Data Tables"
sidebar_label: "Join Data Tables"
sidebar_position: 9
description: "Join Data Tables activity documentation."
displayed_sidebar: activitiesSidebar
---
# Join Data Tables

RCA.Activities.Core.JoinDataTables

## **Description**

This activity allows you to add different data from different tables using common values with each other.

[![join data table.jpg](/img/432c4f_join-data-table.jpg)](/bin/download/Activities/Data%20Table/Activities/Join%20Data%20Table/WebHome/join%20data%20table.jpg?rev=1.1)

(\* is mandatory)

## **In the body of activity**

**Join Table Wizard -** set join condition and join type

![image-20230419151628-1.png](/img/a0e548_image-20230419151628-1.png)

## **Properties**

**Input**

* **Data Table1 (DataTable)**\* - The first table that you want to use in the Join operation, is stored in a DataTable variable. This field supports only DataTable variables.
* **Data Table2 (DataTable)\***- The second table that you want to use in the Join operation, is stored in a DataTable variable. This field supports only DataTable variables.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Join Data Table\

**Option**

* **Join Type (JoinType)** - INNER/LEFT/FULL.

**Output**

* **Output Data Table (DataTable)** - The output in the type of DataTable.
