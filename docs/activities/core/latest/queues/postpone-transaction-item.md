---
id: postpone-transaction-item
title: "Postpone Transaction Item"
sidebar_label: "Postpone Transaction Item"
sidebar_position: 7
description: "Postpone Transaction Item activity documentation."
displayed_sidebar: activitiesSidebar
---
# Postpone Transaction Item

RCA.Activities.Core.PostponeTransactionItem

## **Description**

This activity allows you to add time parameters between which a transaction must be processed.

![image-20220506113548-1.png](/img/886660_image-20220506113548-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.

  Eg: True.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).

**Input**

* **Deadline (DateTime)**\*- The date right before the queue item is processed.
* **Postpone (DateTime)**\* - The date after which the queue item may be processed. This can be filled with relative dates such as  
  DateTime.Now.AddHours(),DateTime.Now.AddDays()
* **Transaction Item (QueueItem)**\* - The items you want to postpone

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Postpone Transaction Item.
