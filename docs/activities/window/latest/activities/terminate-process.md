---
id: terminate-process
title: "Terminate Process"
sidebar_label: "Terminate Process"
sidebar_position: 29
description: "Terminate Process activity documentation."
displayed_sidebar: activitiesSidebar
---
# Terminate Process

RCA.Activities.Windows.TerminateProcess

## **Description**

The Terminate Process activity allows you to cause a process to exit.

![image-20220505171406-1.png](/img/f2b58d_image-20220505171406-1.png)

(\*For mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**-A Boolean variable has two possible values: True or False  
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.  
  - False: blocks the process from continuing the execution.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [45454544] Terminate Process

**Target**

* **Process (Process)**- A Process type object describing the process to be closed.
* **Process Name (String)**\* - Name of the process.  
  E.g: Invoke
