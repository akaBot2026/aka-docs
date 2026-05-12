---
id: get-running-process
title: "Get Running Process"
sidebar_label: "Get Running Process"
sidebar_position: 28
description: "Get Running Process activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Running Process

RCA.Activities.Windows.GetRunningProcess

## **Description**

The Get Running Process allows you to get the processes that are running in your Windows computer.

![image-20220505171317-1.png](/img/a2092b_image-20220505171317-1.png)

(\*For mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**-A Boolean variable has two possible values: True or False  
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.  
  - False: blocks the process from continuing the execution.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [12312] Get Running Process

**Output**

* **Output processes (Collection)** - The output processes. This property supports variables with type =“Collection”. Not allow whitespace in the output’s name.
