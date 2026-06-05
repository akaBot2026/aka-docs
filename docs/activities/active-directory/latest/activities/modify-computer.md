---
id: modify-computer
title: "Modify Computer"
sidebar_label: "Modify Computer"
sidebar_position: 16
description: "Modify Computer activity documentation."
displayed_sidebar: activitiesSidebar
---
# Modify Computer

RCA.Activities.ActiveDirectory.ModifyComputer

## **Description**

Modifies an existing computer in Active Directory.

![modify-computer](/static/img/modify-computer.png)

(\*For mandatory)

## **In the body of the activity**

* **SAM Account Name** - The SAM account name of the computer you want to modify.

* **Filters** - Click to set additional filters to search for the computer.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.
**Input - Computer Info**

* **SAM Account Name: `InArgument<String>`*** - The SAM account name of the computer you want to modify.

**Input Existing Principal**

* **Existing Computer: `InArgument<ComputerPrincipal>`** - The computer you want to modify.

**Misc**


* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Modify Computer

**Modifying Info** 

* **Modifying Properties: `Dictionary<String,Argument>`** - The properties to modify for the computer.


**Options**

* **Filters: `Dictionary<String,Argument>`** - Additional filters to search for the computer.

**Output**

* **Output Computer: `OutArgument<ComputerPrincipal>`** - The modified computer object.

