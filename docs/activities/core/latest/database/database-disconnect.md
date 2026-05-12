---
id: database-disconnect
title: "Database Disconnect"
sidebar_label: "Database Disconnect"
sidebar_position: 2
description: "Database Disconnect activity documentation."
displayed_sidebar: activitiesSidebar
---
# Database Disconnect

RCA.Activities.Core.DatabaseDisconnect

## **Description**

This activity allows you to close a connection to a database.

![image-20220506105152-1.png](/img/3518fd_image-20220506105152-1.png)

(\* for Mandatory)

## **Properties**

**Connection**

* **Database Connection (DatabaseConnection)**\* - The database connection to be closed  
  E.g: “Server=myServerAddress;Database=myDataBase;UserId=myUsername;Password=myPassword;”

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Datatable Disconnect
