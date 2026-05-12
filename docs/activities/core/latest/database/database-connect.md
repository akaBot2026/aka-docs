---
id: database-connect
title: "Database Connect"
sidebar_label: "Database Connect"
sidebar_position: 1
description: "Database Connect activity documentation."
displayed_sidebar: activitiesSidebar
---
# Database Connect

RCA.Activities.Core.DatabaseConnect

## **Description**

This activity allows you to connect to a database by using a standard connection string.

![https://files.readme.io/609ba23-DB.PNG](/img/56d212_609ba23-db.png)

(\* for Mandatory)

## **In the body of activity**

**Configure Connection**- Set connection string, data source, data provider.

![image-20230419153435-1.png](/img/3e2525_image-20230419153435-1.png)

## **Properties**

**Connection Configuration**

* **Connection String (String)**\* - The connection string used to establish a database connection.  
  E.g: “Server=myServerAddress;Database=myDataBase;UserId=myUsername;Password=myPassword;”
* **Provider Name (String)**\* - The name of the database provider used to access the database.  
  E.g: “System.Data.SqlClient”

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Database Connect

**Output**

* **Database Connection**- The database connection variable returned by the activity. This can be subsequently used for other database operations.
