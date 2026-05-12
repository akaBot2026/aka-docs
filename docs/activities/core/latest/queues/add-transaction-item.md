---
id: add-transaction-item
title: "Add Transaction Item"
sidebar_label: "Add Transaction Item"
sidebar_position: 2
description: "Add Transaction Item activity documentation."
displayed_sidebar: activitiesSidebar
---
# Add Transaction Item

RCA.Activities.Core.AddTransactionItem

## **Description**

This Add Transaction Item activity allows you to add an item in the queue, start the transaction, and sets the status to In Progress. It can also be configured to add a custom reference to each transaction.

![image-20220506113254-1.png](/img/fe03a7_image-20220506113254-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue on Error (Boolean)** - A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even if an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).

**Input**

* **QueueName (String)\***- The queue to which the new queue is added to. String supported only.  
  E.g: "queue2503".
* **Reference (String)** - This feature is used to link your transactions to other applications used within an automation project.  
  E.g: count.ToString.
* **Transaction Information(`Dictionnary<String,InArgument>`)**- A collection of additional information about the transaction which you want to add.

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Add Transaction Item

**Output**

* **Transaction Item (QueueItem)** - The added transaction item. The output data is a transaction item that is got on Center by status is InProgess. If no item can be found on the Center, output data is nothing.
