---
id: get-group
title: "Get Group"
sidebar_label: "Get Group"
sidebar_position: 6
description: "Get Group activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Group

RCA.Activities.ActiveDirectory.GetSingleGroup

## **Description**

Retrieves a group from Active Directory.

![get-group](/static/img/get-group.png)

(\*For mandatory)

## **In the body of the activity**

* **Group Name** - The name of the group you want to retrieve.
* **Filters** - Click to set additional filters to search for the group.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input - Group Info**

* **Group Name: InArgument<String>*** - The name of the group you want to retrieve.

**Misc**


* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Get Group

**Options**

* **Filters: Dictionary<String,Argument>** - Additional filters to search for the group.

**Output**

* **Output Group: OutArgument<GroupPrincipal>** - The retrieved group object.

