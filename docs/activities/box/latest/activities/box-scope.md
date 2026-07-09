---
id: box-scope
title: "Box Scope"
sidebar_label: "Box Scope"
sidebar_position: 1
description: "Box Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# Box Scope

RCA.Activities.Box.BoxScope

## **Description**

Creates a Box connection scope and provides the Box client to child Box activities.

![box-scope](/static/img/box-scope.png)

(\*For mandatory)

## **In the body of the activity**

* **Do** - The Box activities to execute within the Box connection scope.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input**

* **Authentication Type: BoxAuthenticationType** - The authentication method to use. Available values: JWT, OAuth, BoxConnection.

* **Box Client: `InArgument<BoxClient>`** - An existing Box client to use when Authentication Type is BoxConnection.

**JWT Authentication**


* **Config File Content: `InArgument<String>`** - The content of the Box JWT configuration file. Use either this property or Config File Path.

* **Config File Path: `InArgument<String>`** - The path to the Box JWT configuration file. Use either this property or Config File Content.

* **User ID: `InArgument<String>`** - The Box user ID to impersonate when using JWT authentication.

**OAuth Authentication**

* **Client ID: `InArgument<String>`** - The Box OAuth client ID.

* **Client Secret: `InArgument<SecureString>`** - The Box OAuth client secret.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Box Scope

**Output**

* **Result: `OutArgument<BoxClient>`** - The Box client created or used by the scope.
