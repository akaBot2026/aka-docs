---
id: get-table
title: "Get Table"
sidebar_label: "Get Table"
sidebar_position: 4
description: "Get Table activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Table

RCA.Activities.Word.GetTable

## **Description**

This activity allows you to retrieve a table from a Word Document and return it as a DataTable Variable for future use. The activity can only be used inside a Word Application Scope activity.

![image-20220506111810-1.png](/img/98c634_image-20220506111810-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even an error occurs within the activity. False (default): blocks the process from continuing the execution.

**Input**

* **Index (Int32)**\* – The index number of the table you want to retrieve. The index starts at 1.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Get the data table
* **Public (Checkbox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.

**Output**

* **Data Table (DataTable)**- The Table is extracted from the Word Document and stored in the DataTable variable.
