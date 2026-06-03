---
id: get-task
title: "Get Task"
sidebar_label: "Get Task"
sidebar_position: 1
description: "get-task activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Task

RCA.Activities.Core.GetTask

## **Description**

With this activity, you can get a task from the system. Retrieves a list of Center tasks according to a custom filter, using the Center API.

The activity offers two interface modes to configure your search filters: the visual **Filter Builder** and the **Where Condition** editor.

![get-task-filter-builder](/static/img/get-task-filter-builder.png)

![get-task-where-condition](/static/img/get-task-where-condition.png)

(* for Mandatory)

## **In the body of activity**

* **Where** – Click here to specify the filter conditions used to retrieve tasks. You can use Filter Builder or Where Condition to configure the filter logic.

## **Properties**

* **Continue On Error (Boolean)**: Specifies to continue executing the remaining activities even if the current activity failed. Only boolean values (True, False) are supported
* **Timeout MS (Int32)**: The maximum time (in milliseconds) to wait for the activity to complete before throwing an error. If the timeout is reached, the activity stops execution. The default value is 30000 (milliseconds).  

**Input**

* **Page Number (Int32)** - The page number of the tasks to retrieve.
* **Size (Int32)** - The number of tasks to retrieve per page.
* **Where Condition (String)** - Specifies the filtering conditions used to retrieve tasks.

**Misc**

* **Public (Checkbox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
**Options**

* **Newest first** - Set to true to sort tasks by creation date in descending order, set to false to sort in ascending order.

**Output**

* **Result Tasks: `OutArgument<IEnumerable<TaskModel>>`** - The retrieve tasks