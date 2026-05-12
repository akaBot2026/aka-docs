---
id: set-transaction-status
title: "Set Transaction Status"
sidebar_label: "Set Transaction Status"
sidebar_position: 9
description: "Set Transaction Status activity documentation."
displayed_sidebar: activitiesSidebar
---
# Set Transaction Status

RCA.Activities.Core.SetTransactionStatus

## **Description**

You can set the status of a transaction item to Failed or Successful.

![image-20220506113646-1.png](/img/ae433c_image-20220506113646-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - Specifies if the automation should continue even when the activity throws an error. This field only supports Boolean values (True, False). True - allows the rest of the process to continue the execution even if an error occurs within the activity. False (default) - blocks the process from continuing the execution.  
  Eg: True
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).

**Input**

* **Analytics (`Dictionnary<String, InArgument>`)** - A collection of analytics information about the specific TransactionItem whose status is to be updated.
* **Output (`Dictionnary<String, InArgument>`)** - A collection of additional information about the specific transaction item whose status is updated.
* **Status (DropDownlist)** - The status that is to be set to the transaction item. Successful | Fail
* **Transaction Item (QueueItem)**- The items you want to update status

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Set Transaction Status

**TransactionError**

* **Details (String)** - Details of the failed Transaction. String supported only.
* **ErrorType (DropDownlist)** - The error type that the failed transaction has thrown.  
  ・Application: a technical issue (e.g. a file that cannot be found), this type of error will retry the transaction according to the settings in Center.  
  ・Business: an error regarding an external factor. (e.g. an invoice that could not be paid).  
  The default value is: Application
* **Reason (String)** - The reasons why the transaction failed. String supported only.
