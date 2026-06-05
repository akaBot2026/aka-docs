---
id: delete-group
title: "Delete Group"
sidebar_label: "Delete Group"
sidebar_position: 12
description: "Delete Group activity documentation."
displayed_sidebar: activitiesSidebar
---
# Delete Group

RCA.Activities.ActiveDirectory.DeleteSingleGroup

## **Description**

Deletes a group from Active Directory.

![delete-group-active](/static/img/delete-group-active.png)

(\*For mandatory)

## **In the body of the activity**

* **Group Name** - The name of the group you want to delete.
* **Filters** - Click to set additional filters to search for the group.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.


**Input - Existing Principal**

* **Existing Group: InArgument<GroupPrincipal>** - An existing group you want to delete.

**Input - Group Info**

* **Group Name: InArgument<String>** - The group name you want to delete.

**Misc**


* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Delete Group

**Options**

* **Filters: Dictionary<String,Argument>** - Additional filters to search for the group.

**Output**

* **Delete Success: OutArgument<Boolean>** - True if the group was deleted successfully, False otherwise.

