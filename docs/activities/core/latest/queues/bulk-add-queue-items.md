---
id: bulk-add-queue-items
title: "Bulk Add Queue Items"
sidebar_label: "Bulk Add Queue Items"
sidebar_position: 3
description: "Bulk Add Queue Items activity documentation."
displayed_sidebar: activitiesSidebar
---
# Bulk Add Queue Items

RCA.Activities.Core.BulkAddQueueItems

## **Description**

This Bulk Add Queue Items activity enables you to add a collection of items to a data table to a specific queue. Once it is added to the queue, the items’ status is changed to new.

![image-20220506113338-1.png](/img/993a2c_image-20220506113338-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.

           Eg: True

* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).

**Input**

* **Commit Type (DropDownlist)**\* - You can choose which way the items are added to the queue as well as the manner in which the errors are treated.  
  There are two options:  
  ・All or nothing: this will add all the items if there is no error occurs. Otherwise, all items are not going to be added.  
  ・ProcessAllIndependently: Adds each item individually and return with the list of all queue item that could not be added.  
  The default value is: AllOrNothing
* **Queue Items DataTable (DataTable)** - The data table that you want to add the queue into.
* **QueueName (String)**- The queue to which the new queue is added. String supported only.

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Bulk Add Queue

**Output**

* **Result (DataTable)**- This is the data table that you have added to the queue.
