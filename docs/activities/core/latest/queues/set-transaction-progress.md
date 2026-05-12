---
id: set-transaction-progress
title: "Set Transaction Progress"
sidebar_label: "Set Transaction Progress"
sidebar_position: 8
description: "Set Transaction Progress activity documentation."
displayed_sidebar: activitiesSidebar
---
# Set Transaction Progress

RCA.Activities.Core.SetTransactionProgress

## **Description**

This activity allows you to create custom progress statuses for your In Progress transaction.

![image-20220506113615-1.png](/img/17265d_image-20220506113615-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even if an error occurs within the activity. False (default) - blocks the process from continuing the execution.

           Eg: True

* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).

**Input**

* **Progress (String)\***- The custom progress status that you want to set to the TransactionItems. String supported only.
* **Transaction Item (QueueItem)**\* -  The items you want to set progress

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Set Transaction Progress.
