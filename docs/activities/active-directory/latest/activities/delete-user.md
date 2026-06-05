---
id: delete-user
title: "Delete User"
sidebar_label: "Delete User"
sidebar_position: 11
description: "Delete User activity documentation."
displayed_sidebar: activitiesSidebar
---
# Delete User

RCA.Activities.ActiveDirectory.DeleteSingleUser

## **Description**

Deletes a user from Active Directory.

![delete-user-active](/static/img/delete-user-active.png)

(\*For mandatory)

## **In the body of the activity**

* **SAM Account Name** - The SAM account name of the user you want to delete.
* **Filters** - Click to set additional filters to search for the user.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input - Existing Principal**

* **Existing User: InArgument<UserPrincipal>** - The existing user you want to delete.

**Input - User Info**

* **SAM Account Name: InArgument<String>** - The existing user name you want to delete.

**Misc**


* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Delete User

**Options**

* **Filters: Dictionary<String,Argument>** - Additional filters to search for the user.

**Output**

* **Delete Success: OutArgument<Boolean>** - True if the user was deleted successfully, False otherwise.

