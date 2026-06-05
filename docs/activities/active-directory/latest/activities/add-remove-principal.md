---
id: add-remove-principal
title: "Add/Remove Principal"
sidebar_label: "Add/Remove Principal"
sidebar_position: 17
description: "Add/Remove Principal activity documentation."
displayed_sidebar: activitiesSidebar
---
# Add/Remove Principal

RCA.Activities.ActiveDirectory.AddRemovePrincipal

## **Description**

Adds or removes a principal from a group in Active Directory.

![add-remove-principal](/static/img/add-remove-principal.png)

(\*For mandatory)

## **In the body of the activity**

* **Group** - The name of the group you want to add or remove a principal from.

* **Removing Principal** - The name of the principal you want to add or remove from the group.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input**

* **Group: InArgument<GroupPrincipal>*** - The group to add the principal to or remove the principal from

* **Principal: InArgument<Principal>*** - The principal to be added or removed

**Misc**


* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Add/Remove Principal

**Options**

* **Action: AddRemoveType** - The action to perform on the principal.

**Output**

* **Remove Success: OutArgument<Boolean>** - Specifies the result of the remove operation. If Action is Add, false is returned

