---
id: get-queue-items
title: "Get Queue Items"
sidebar_label: "Get Queue Items"
sidebar_position: 5
description: "Get Queue Items activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Queue Items

RCA.Activities.Core.GetQueueItems

## **Description**

This activity allows you to retrieve a list of transactions up to 100 from an indicated queue according to multiple filters such as creation date, priority state, and reference.

![image-20220506113443-1.png](/img/9c8ca1_image-20220506113443-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue on Error (Boolean)** - A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.  
  Eg: True
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).

**Input**

* **QueueName (String)\***- The name of Queue is created on Center. String supported only.  
  Eg: “akB\_123”.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Get Queue Items.

**Options**

* **Duration (Int32)**- Filter transactions by the minimum time they spent in the previous attempt.
* **From (DateTime)** - Filters the transactions by the minimum creation date
* **Priority (DropDownlist)** - Filters the transactions by their priority. Integers variables supported only. The priorities are: - 0 – High - 1 – Normal - 2 – Low. The default value is: (null)
* **Queue Item States (DropDownlist)** - Filters the state of the item. The following options are: All, New, InProgress, Failed, Successful, Abandoned, Retried, Deleted. The default value is: New.
* **To (DateTime)**- Filters transaction by the maximum creation date.

**Output**

* **Queue Items (INumerable< QueueItem >)** - This is the data table that you have added the queue.

**Pagination**

* **Skip (Int32)** - This allows you to skip the first amount of items. Integers variables only
* **Top (Int32)**- Return a specified number of items out of the total. The maximum value is 100. Integers variables supported only.

**Reference**

* **Filter Strategy (DropDownlist)**- You can filter data according to the reference. There are two options:  
  ・Start with: Look for items whose references start with the value indicated in the reference field.  
  ・Equals: looks for items whose references are the same as the value indicated in the reference field.  
  The default value is StartWith.
* **Reference (String)** - Filters items based on their reference.
