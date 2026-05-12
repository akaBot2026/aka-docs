---
id: delete-queue-items
title: "Delete Queue Items"
sidebar_label: "Delete Queue Items"
sidebar_position: 4
description: "Delete Queue Items activity documentation."
displayed_sidebar: activitiesSidebar
---
# Delete Queue Items

RCA.Activities.Core.DeleteQueueItems

## **Description**

This activity allows you to delete items in a specific queue. Notes: In order to use this activity in Studio, the Agent has to be connected to akaBot Center and it needs to edit, create and delete permissions on queue and delete permissions on transactions.

![image-20220506113413-1.png](/img/a347ce_image-20220506113413-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even if an error occurs within the activity. False (default) - blocks the process from continuing the execution.

  Eg: True
* **Timeout MS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).

**Input**

* **Queue Items (`IEnumerable<Queue.Item>`)**\* - You need to use Get Queue Items activity to get all items that the user wants to delete and the value of this property is the output items of Get Queue Items activity. Set status of all Queue items specified in [Queue Items] as Deleted except Queue items has status is InProgress can not change to Deleted.

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Delete Queue Item.
