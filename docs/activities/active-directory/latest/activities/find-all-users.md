---
id: find-all-users
title: "Find All Users"
sidebar_label: "Find All Users"
sidebar_position: 8
description: "Find All Users activity documentation."
displayed_sidebar: activitiesSidebar
---
# Find All Users

RCA.Activities.ActiveDirectory.FindAllUsers

## **Description**

Retrieves a list of users from Active Directory.

![find-all-users](/static/img/find-all-users.png)

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

* **SAM Account Name: InArgument<String>*** - The SAM account name of the user you want to retrieve.

**Misc**


* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Find All Users

**Options**

* **Filters: Dictionary<String,Argument>** - Additional filters to search for the user.

**Output**

* **Output Users: OutArgument<IEnumerable<UserPrincipal>>** - The retrieved list of users.

