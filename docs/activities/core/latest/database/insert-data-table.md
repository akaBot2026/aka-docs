---
id: insert-data-table
title: "Insert Data Table"
sidebar_label: "Insert Data Table"
sidebar_position: 6
description: "Insert Data Table activity documentation."
displayed_sidebar: activitiesSidebar
---
# Insert Data Table

RCA.Activities.Core.InsertDataTable

## **Description**

This activity allows you to insert a compatible DataTable variable in an existing Table. Returns the number of rows affected. If the constraints on the table aren't met, the activity will fail and all the written rows will be saved.

![image-20220506105511-1.png](/img/bcb9f9_image-20220506105511-1.png)

(\* for Mandatory)

## **In the body of activity**

* **Configure Connection**- Set connection string, data source, data provider.

![image-20230419153435-1.png](/img/3e2525_image-20230419153435-1.png)

* **Data Table** - The DataTable variable that will be inserted into the Table. The DataTable columns' names and descriptions must match the ones from the database table.
* **Table Name**- The SQL table in which the data is to be inserted.  
  E.g: “TargetedTable”

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even if an error occurs within the activity. False (default) - blocks the process from continuing the execution.

  Eg: True

**Connection Configuration**

* **Connection String (String)**\* - The connection string used to establish a database connection.  
  E.g: “Server=myServerAddress;Database=myDataBase;UserId=myUsername;Password=myPassword;”
* **Existing DbConnection (DatabaseConnection)** - An already opened database connection obtained from the Connect or Start Transaction activities. This property and the ConnectionString and ProviderName properties are mutually exclusive; if this property is set, the others can no longer be set.
* **Provider Name**\* - The name of the database provider used to access the database.  
  E.g: “System.Data.SqlClient”

**Input**

* **Data Table (DataTable)**\* - The DataTable variable that will be inserted into the Table. The DataTable columns' names and descriptions must match the ones from the database table.
* **Table Name (String)**\*- The SQL table in which the data is to be inserted.  
  E.g: “TargetedTable”

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Insert Data Table

**Output**

* **Affected Records (Int32)** - Stores the number of affected rows into an Int32 variable.
