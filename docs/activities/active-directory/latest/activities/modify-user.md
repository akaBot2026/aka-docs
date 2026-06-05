---
id: modify-user
title: "Modify User"
sidebar_label: "Modify User"
sidebar_position: 14
description: "Modify User activity documentation."
displayed_sidebar: activitiesSidebar
---
# Modify User

RCA.Activities.ActiveDirectory.ModifyUser

## **Description**

Modifies an existing user in Active Directory.

![modify-user-active](/static/img/modify-user-active.png)

(\*For mandatory)

## **In the body of the activity**

* **SAM Account Name** - The SAM account name of the user you want to modify.
* **First Name** - The first name of the user you want to modify.

* **Last Name** - The last name of the user you want to modify.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input - User Info**

* **SAM Account Name: InArgument<String>*** - The SAM account name of the user you want to modify.

**Input Existing Principal**

* **Existing User: InArgument<UserPrincipal>** - The user you want to modify.

**Misc**


* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Modify User

**Modifying Info** 

* **Modifying Properties: Dictionary<String,Argument>** - The properties to modify for the user.


**Options**

* **Filters: Dictionary<String,Argument>** - Additional filters to search for the user.

**Output**

* **Output User: OutArgument<UserPrincipal>** - The modified user object.

