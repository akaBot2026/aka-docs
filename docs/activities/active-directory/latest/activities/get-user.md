---
id: get-user
title: "Get User"
sidebar_label: "Get User"
sidebar_position: 5
description: "Get User activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get User

RCA.Activities.ActiveDirectory.GetSingleUser

## **Description**

Retrieves a user from Active Directory.

![get-user](/static/img/get-user.png)

(\*For mandatory)

## **In the body of the activity**

* **SAM Account Name** - The SAM account name of the user you want to retrieve.
* **Filters** - Click to set additional filters to search for the user.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input - User Info**

* **SAM Account Name: `InArgument<String>`*** - The SAM account name of the user you want to retrieve.

**Misc**


* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Get User

**Options**

* **Filters: `Dictionary<String,Argument>`** - Additional filters to search for the user.

**Output**

* **Output User: `OutArgument<UserPrincipal>`** - The retrieved user object.

