---
id: add-queue-item
title: "Add Queue Item"
sidebar_label: "Add Queue Item"
sidebar_position: 1
description: "Add Queue Item activity documentation."
displayed_sidebar: activitiesSidebar
---
# Add Queue Item

RCA.Activities.Core.AddQueueItem

## **Description**

This activity enables you to add a new item to the queue. The status of the item will be new.

![image-20220506113229-1.png](/img/257b51_image-20220506113229-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even if an error occurs within the activity. False (default): blocks the process from continuing the execution.

           Eg: True.

* **TimeOut MS (Number)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds)

**Input**

* **Deadline (DateTime)** - The date right before the queue item is processed.
* **Item Information** - The additional information about the new queue that you add to. The information is stored in the item and is used during transaction processing.
* **Item Information Collection (`Dictionary<String, Object>`)** - This allows you to import the entire dictionary of information for a queue item. String supported only.
* **Postpone (DateTime)**- The date after the queue item may be processed.
* **Priority (DropDownlist)**\* - The priority level of the queue. You can choose: low, normal, high level. The default value is: Normal.
* **QueueName (String)**\* - The queue to which the new queue item is added. String supported only.
* **Reference (String)** - This feature is used to link your transactions to other applications used within an automation project. Limit 255 characters.

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Add Queue Item.
