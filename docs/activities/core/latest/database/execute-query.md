---
id: execute-query
title: "Execute Query"
sidebar_label: "Execute Query"
sidebar_position: 5
description: "Execute Query activity documentation."
displayed_sidebar: activitiesSidebar
---
# Execute Query

RCA.Activities.Core.ExecuteQuery

**akaBot version 2.0.5.3 and later.**

## **Description**

This activity allows you to execute a query on a database and returns the query result in a Datatable.

![image-20220506105340-1.png](/img/18223c_image-20220506105340-1.png)

 (\* for Mandatory)

## **In the body of activity**

* **Configure Connection**- Set connection string, data source, data provider.

![image-20230419153435-1.png](/img/3e2525_image-20230419153435-1.png)

* **Edit Query** - SQL command to be executed. This field must be completed according to the selection from the CommandType property.  
  E.g: “SELECT \* FROM ContactList”

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **TimeoutMS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds). **( This property is only available starting from akaBot version 2.0.5.3)**

**Connection Configuration**

* **Connection String (String)**\*- The connection string used to establish a database connection.  
  E.g: “Server=myServerAddress;Database=myDataBase;UserId=myUsername;Password=myPassword;”
* **Existing DbConnection (DatabaseConnection)** - An already opened database connection obtained from the Connect or Start Transaction activities. This property and the ConnectionString and ProviderName properties are mutually exclusive; if this property is set, the others can no longer be set.
* **Provider Name**\* - The name of the database provider used to access the database.  
  E.g: “System.Data.SqlClient”

**Input**

* **Parameters** - A dictionary of named parameters that are bound to the sql command. The binding is done by specifying the '@parameterName' statement in the sql command. At runtime the parameterName will be replaced with its value from the dictionary.
* **SQL Query (String)**\* - SQL command to be executed. This field must be completed according to the selection from the CommandType property.  
  E.g: “SELECT \* FROM ContactList”

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Execute Query
* **Command Type** - Specifies how a command string is interpreted. The following options are available:  
  ・Text - Executes the query given in the SQL parameter.  
  ・StoredProcedure - Invokes the procedure name specified in the SQL parameter.  
  ・TableDirect - Invokes all records from a table.

**Output**

* **Data Table (DataTable)**- Stores the output of the SQL query in a DataTable variable.
