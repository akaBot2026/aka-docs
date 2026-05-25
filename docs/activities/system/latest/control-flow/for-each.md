---
id: for-each
title: "For Each"
sidebar_label: "For Each"
sidebar_position: 2
description: "For Each activity documentation."
displayed_sidebar: activitiesSidebar
---
# For Each

RCA.Activities.Core.ForEach

## **Description**

This activity allows you to iterate through arrays, lists, DataTables, or other types of collections.

![for-each.png](/static/img/for-each.png)

\* indicates required fields.

## **Properties**

**Input**

* **Values (IEnumerable)**\*: The collection to iterate through. Each item in the collection is processed individually. Supports variables or direct values.

**Misc**

* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.  
  Example: `[389861710] For Each <T>`
* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security before using this property.
* **Type Argument (Dropdown List)**\*: Specifies the data type of the items in the collection. Default value is `Object`.

**Output**

* **Current Index (Int32)**: A zero-based index indicating the current position in the collection.