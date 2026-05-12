---
id: database-transaction
title: "Database Transaction"
sidebar_label: "Database Transaction"
sidebar_position: 3
description: "Database Transaction activity documentation."
displayed_sidebar: activitiesSidebar
---
# Database Transaction

RCA.Activities.Core.DatabaseTransaction

## **Description**

This activity allows you to connect to a database and features a Sequence that can perform multiple transactions with the database. If UseTransaction is set to true, the contained operations are executed in a single transaction and applied at the end if none of them failed. If UseTransaction is set false, all operations are committed individually. When this activity ends, the connection to the database is closed. This activity returns a DatabaseConnection variable.

![image-20220506105232-1.png](/img/0a60cb_image-20220506105232-1.png)

(\* for Mandatory)

## **In the body of activity**

* **Configure Connection**- Set connection string, data source, data provider.

![image-20230419153435-1.png](/img/3e2525_image-20230419153435-1.png)

* **Do** - The activities you want to execute within the application

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.

  Eg: True

**Connection Configuration**

* **Connection String (String)**\* - The connection string used to establish a database connection.  
  E.g: “Server=myServerAddress;Database=myDataBase;UserId=myUsername;Password=myPassword;”
* **Provider Name**\* - The name of the database provider used to access the database.  
  E.g: “System.Data.SqlClient”

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Database Transaction
* **Use Transaction (Checkbox)**

**Output**

* **Database Connection (DatabaseConnection)** - The database connection variable returned by the activity. This can be subsequently used for other database operations.
