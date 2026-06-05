---
id: create-user
title: "Create User"
sidebar_label: "Create User"
sidebar_position: 2
description: "Create User activity documentation."
displayed_sidebar: activitiesSidebar
---
# Create User

RCA.Activities.ActiveDirectory.CreateUser

## **Description**

Creates a new user in Active Directory.

![create-user-active-directory](/static/img/create-user-active-directory.png)

(\*For mandatory)

## **In the body of the activity**

* **SAM Account Name** - The SAM account name of the user.
* **First Name** - The first name of the user.
* **Last Name** - The last name of the user.
* **Additional Properties** - Click to set additional properties for the user.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.



**Input - User Info**

* **Additional Properties: Dictionary<String,Argument>** - Additional properties for the user.

* **Description: InArgument<String>** - The description of the user.

* **Display Name: InArgument<String>** - The display name of the user.

* **First Name: InArgument<String>** - The first name of the user.

* **Last Name: InArgument<String>** - The last name of the user.

* **Password: InArgument<String>** - The password for the user account.

* **SAM Account Name: InArgument<String>** - The SAM account name of the user.

**Misc**


* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Create User
