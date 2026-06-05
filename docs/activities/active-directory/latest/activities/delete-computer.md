---
id: delete-computer
title: "Delete Computer"
sidebar_label: "Delete Computer"
sidebar_position: 13
description: "Delete Computer activity documentation."
displayed_sidebar: activitiesSidebar
---

# Delete Computer

RCA.Activities.ActiveDirectory.DeleteSingleComputer

## **Description**

Deletes a computer from Active Directory.

![delete-computer-active](/static/img/delete-computer-active.png)

(\*For mandatory)

## **In the body of the activity**

- **SAM Account Name** - The SAM account name of the computer you want to delete.
- **Filters** - Click to set additional filters to search for the computer.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input - Computer Info**

* **SAM Account Name: `InArgument<String>`** - The SAM account name of the computer you want to delete.

**Input - Existing Principal**

* **Existing Computer: `InArgument<ComputerPrincipal>`** - An existing ComputerPrincipal object.

**Misc**


* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Delete Computer

**Options**

* **Filters: `Dictionary<String,Argument>`** - Additional filters to search for the computer.

**Output**

* **Delete Success: `OutArgument<Boolean>`** - True if the computer was deleted successfully, False otherwise.
