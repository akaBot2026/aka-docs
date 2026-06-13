---
id: for-each-list-item
title: "For Each List Item"
sidebar_label: "For Each List Item"
sidebar_position: 3
description: "For Each List Item activity documentation."
displayed_sidebar: activitiesSidebar
---
# For Each List Item

RCA.Activities.Office365.ForEachListItem

## **Description**

Performs an activity or a series of activities on each list item in the specified SharePoint list.

![for-each-list-item.png](/static/img/for-each-list-item.png)

(\*For mandatory)

## **In the body of the activity**

* **Do** - The activities to execute for each SharePoint list item.

## **Properties**

**Input**

* **List: `InArgument<Office365SharepointList>`*** - The SharePoint list on which the operation is performed.

* **Filter: `InArgument<String>`** - An optional OData filter.

**Output**

* **Current Index: `OutArgument<Int32>`** - The index of the current iteration.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window




