---
id: wait-queue-item
title: "Wait Queue Item"
sidebar_label: "Wait Queue Item"
sidebar_position: 10
description: "Wait Queue Item activity documentation."
displayed_sidebar: activitiesSidebar
---
# Wait Queue Item

RCA.Activities.Core.WaitQueueItem

## **Description**

This activity allows you to retrieve a queue item from a specified queue and stored it in a QueueItem variable. At run time, if the queue is empty, it sends a message to Center starting it is ready to receive a queue item and then wait for a new one to be added.

![image-20220506113715-1.png](/img/75b8ab_image-20220506113715-1.png)

(\* for mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even if an error occurs within the activity. False (default) - blocks the process from continuing the execution.  
  Eg: True
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).

**Input**

* **QueueName (String)** - The queue to which the new queue is added. String supported only.  
  E.g: “Queue akaBot 1”
* **PollTimeMS (int)** - The amount of time (in milliseconds) to wait for the activity to search for a new item again.

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Wait Queue Item.

**Output**

* **Result (QueueItem)** - The retrieved queue item, is stored in a QueueItem variable.

**Reference**

* **Filter Strategy** - You can filter data according to the reference. There are two options:  
  ・Start with: Look for items whose references start with the value indicated in the reference field.  
  ・Equals: looks for items whose references are the same as the value indicated in the reference field.  
  The default value is: StartsWith
* **Reference (String)**- Filters items based on their reference.
