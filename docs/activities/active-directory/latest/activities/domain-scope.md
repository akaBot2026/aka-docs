---
id: domain-scope
title: "Domain Scope"
sidebar_label: "Domain Scope"
sidebar_position: 1
description: "Domain Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# Domain Scope

RCA.Activities.ActiveDirectory.DomainScope

## **Description**

A container that enables you to define a scope for Active Directory activities.

![domain-scope](/static/img/domain-scope.png)

(\*For mandatory)

## **In the body of the activity**

* **Do** - The activities you want to execute within the domain.

## **Properties**

**Input - Domain Context**

* **Domain Context: InArgument`PrincipalContext`** - The domain context to be used

**Input - Domain Info**

* **Container: InArgument<String>** - The distinguished name (DN) of the container or Organizational Unit (OU) (e.g., `OU=Sales,DC=domain,DC=com`).

* **Domain Name: InArgument<String>*** - The name of the Active Directory domain to connect to.

* **Domain Password: InArgument<String>** - The password for the user credential used to connect to the domain.

* **Domain Username: InArgument<String>** - The username credential used to connect to the domain.

**Misc**


* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Domain Scope

**Options**

* **Dispose On Completed Or Faulted: Boolean** - Specifies whether the domain connection context should be disposed automatically when the activity run finishes or fails.

**Output**

* **Output Context: OutArgument`PrincipalContext`** - The created Active Directory connection context output, which can be passed to other Active Directory activities.
