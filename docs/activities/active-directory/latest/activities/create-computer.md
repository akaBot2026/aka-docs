---
id: create-computer
title: "Create Computer"
sidebar_label: "Create Computer"
sidebar_position: 4
description: "Create Computer activity documentation."
displayed_sidebar: activitiesSidebar
---
# Create Computer

RCA.Activities.ActiveDirectory.CreateComputer

## **Description**

Creates a new computer in Active Directory.

![create-computer](/static/img/create-computer.png)

(\*For mandatory)

## **In the body of the activity**

* **SAM Account Name** - The SAM account name of the computer you want to create.
* **Additional Properties** - Click to set additional properties for the computer.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input - Computer Info**

* **Additional Properties: `Dictionary<String,Argument>`** - Additional properties for the computer.

* **Password: `InArgument<String>`** - The password for the computer account.

* **SAM Account Name: `InArgument<String>`*** - The SAM account name of the computer.

**Misc**


* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Create Computer
