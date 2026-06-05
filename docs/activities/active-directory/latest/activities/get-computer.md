---
id: get-computer
title: "Get Computer"
sidebar_label: "Get Computer"
sidebar_position: 7
description: "Get Computer activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Computer

RCA.Activities.ActiveDirectory.GetSingleComputer

## **Description**

Retrieves a computer from Active Directory.

![get-computer](/static/img/get-computer.png)

(\*For mandatory)

## **In the body of the activity**

* **SAM Account Name** - The SAM account name of the computer you want to retrieve.
* **Filters** - Click to set additional filters to search for the computer.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.
**Input - Computer Info**

* **SAM Account Name: `InArgument<String>`*** - The SAM account name of the computer you want to retrieve.

**Misc**


* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Get Computer

**Options**

* **Filters: `Dictionary<String,Argument>`** - Additional filters to search for the computer.

**Output**

* **Output Computer: `OutArgument<ComputerPrincipal>`** - The retrieved computer object.

