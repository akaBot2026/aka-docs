---
id: for-each-list
title: "For Each List"
sidebar_label: "For Each List"
sidebar_position: 4
description: "For Each List activity documentation."
displayed_sidebar: activitiesSidebar
---
# For Each List

RCA.Activities.Office365.ForEachList

## **Description**

Performs an activity or a series of activities on each list in the specified SharePoint site.

![for-each-list.png](/static/img/for-each-list.png)

(\*For mandatory)

## **In the body of the activity**

* **Do** - The activities to execute for each SharePoint list.

## **Properties**

**Input**

* **Site Url Or Id: InArgument<String>*** - The URL or the ID of the SharePoint site.

* **Include Columns Definitions: Boolean** - Indicates whether to retrieve the information about the list columns.

**Output**

* **Current Index: OutArgument<Int32>** - The index of the current iteration.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window




