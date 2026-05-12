---
id: get-transaction-item
title: "Get Transaction Item"
sidebar_label: "Get Transaction Item"
sidebar_position: 6
description: "Get Transaction Item activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Transaction Item

RCA.Activities.Core.GetTransactionItem

## **Description**

This activity allows you to get an item from the queue so that you can process and sets its status to In Progress. Note: the bot needs to have Edit permissions on queues.

![image-20220506113519-1.png](/img/3b0665_image-20220506113519-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**- Specifies if the automation should continue even when the activity throws an error. This field only supports Boolean values (True, False). True - allows the rest of the process to continue the execution even if an error occurs within the activity. False (default) - blocks the process from continuing the execution.  
  **Eg**: True
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).

**Input**

* **QueueName (String)**\* - The queue to which the new queue is added. String supported only.  
  E.g: “Queue\_koBot01”

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Get Transaction Item.

**Output**

* **Transaction Item (QueueItem)**- The retrieved Transaction Item, is stored in a queue variable.

**Reference**

* **Filter Strategy** - You can filter data according to the reference. There are two options:  
  ・Start with: Look for items whose references start with the value indicated in the reference field.  
  ・Equals: looks for items whose references are the same as the value indicated in the reference field.  
  The default value is StartsWith.
* **Reference (String)** - Filters items based on their reference.
