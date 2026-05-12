---
id: for-each-row
title: "For Each Row"
sidebar_label: "For Each Row"
sidebar_position: 6
description: "For Each Row activity documentation."
displayed_sidebar: activitiesSidebar
---
# For Each Row

RCA.Activities.Core.ForEachRow

## **Description**

This activity allows you to execute an action once for each row in a specified DataTable variable.

[![for each row.jpg](/img/b95036_for-each-row.jpg)](/bin/download/Activities/Data%20Table/Activities/For%20Each%20Row/WebHome/for%20each%20row.jpg?rev=1.1)

(\* is mandatory)

## **In the body of activity**

**Foreach** - Set loop variable name

**in** - Data table to loop

**Body**- Add activities that you want to execute in loop

## **Properties**

**Input**

* **Data Table (DataTable)**\* - The DataColumn object whose value is to be retrieved from the DataRow.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: For Each Row.

**Output**

* **Current Index (Int)** - A zero-based index that specifies what element of the current collection is being iterated, stored in an Int32 variable.
