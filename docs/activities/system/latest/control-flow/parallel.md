---
id: parallel
title: "Parallel"
sidebar_label: "Parallel"
sidebar_position: 5
description: "Parallel activity documentation."
displayed_sidebar: activitiesSidebar
---
# Parallel

System.Activities.Statements.Parallel

## **Description**

This activity allows you to execute multiple child activities simultaneously and asynchronously.  
When the activity runs, a separate job is created for each child activity.

If a child process is invoked but not found, an error is logged with the process name.  
If an error occurs within a child process after it has started, the parent process is not affected and continues execution.

![Core_Parallel](/img/parallel-foreach.png)

\* indicates required fields.

## **Properties**

**Misc**

* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security before using this property.
* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.  
  Example: `Parallel`
* **Completion Condition (Boolean)**\*: Specifies the condition that determines when the activity completes.  
  Example: `varA = varB`