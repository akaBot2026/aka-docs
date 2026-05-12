---
id: delay
title: "Delay"
sidebar_label: "Delay"
sidebar_position: 2
description: "Delay activity documentation."
displayed_sidebar: activitiesSidebar
---
# Delay

System.Activities.Statements.Delay

## **Description**

Enables you to wait for a specific amount of time before continuing with the workflow.

![image-20220506113006-1.png](/img/c869ac_image-20220506113006-1.png)

(\* for Mandatory)

## **Properties**

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Delay
* **Duration (TimeSpan)\*** - The amount of time you want to wait before continuing the execution. The format is hh:mm:ss.  
  E.g: 00:00:10
* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
