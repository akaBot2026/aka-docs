---
id: modify-group
title: "Modify Group"
sidebar_label: "Modify Group"
sidebar_position: 15
description: "Modify Group activity documentation."
displayed_sidebar: activitiesSidebar
---
# Modify Group

RCA.Activities.ActiveDirectory.ModifyGroup

## **Description**

Modifies an existing group in Active Directory.

![modify-group](/static/img/modify-group.png)

(\*For mandatory)

## **In the body of the activity**

* **Group Name** - The name of the group you want to modify.

* **Filters** - Click to set additional filters to search for the group.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input - Group Info**

* **Group Name: `InArgument<String>`*** - The name of the group you want to modify.

**Input Existing Principal**

* **Existing Group: `InArgument<GroupPrincipal>`** - The group you want to modify.

**Misc**


* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Modify Group

**Modifying Info** 

* **Modifying Properties: `Dictionary<String,Argument>`*** - The properties to modify for the group.


**Options**

* **Filters: `Dictionary<String,Argument>`** - Additional filters to search for the group.

**Output**

* **Output Group: `OutArgument<GroupPrincipal>`** - The modified group object.

