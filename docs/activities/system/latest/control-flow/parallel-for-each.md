---
id: parallel-for-each
title: "Parallel ForEach"
sidebar_label: "Parallel ForEach"
sidebar_position: 4
description: "Parallel ForEach activity documentation."
displayed_sidebar: activitiesSidebar
---
# Parallel ForEach

System.Activities.Statements.ParallelForEach

## **Description**

Enables you to iterate through all elements of a collection and execute a set of activities for each element in parallel.

![Core_ParallelForEach](/img/parallel.png)

\* indicates required fields.

## **Properties**

**Misc**

* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security requirements before using this property.
* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.  
  Example: `Parallel ForEach`
* **Completion Condition (Boolean)**\*: Specifies the condition that determines when the activity completes.
* **Type Argument (Dropdown List)**: Specifies the data type of elements in the collection.
* **Values (IEnumerable)**\*: The collection of data that the activity will iterate over.