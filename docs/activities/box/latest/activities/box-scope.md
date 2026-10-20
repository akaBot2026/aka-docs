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

**Note:** Before using this activity, you must create an app in the [Box Developer Console](https://app.box.com/developers/console) that matches your chosen **Authentication Type**:
* **JWT** - Create a **Custom App**, choose **Server Authentication**, then select **JSON Web Token (JWT)** as the authentication method. Box generates a public/private key pair and a `config.json` file containing your **Client ID**, **Client Secret**, and key information — download this file and use its content or path in **Config File Content**/**Config File Path**. Setting **User ID** is optional: if provided, the activity impersonates that user; if left empty, it connects with the Service Account (Enterprise Admin).
* **OAuth** - Currently not implemented in the runtime (`NotImplementedException`). Use **JWT** or pass an existing `Box Client` instead.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Box Scope

**Output**

* **Result: `OutArgument<BoxClient>`** - The Box client created or used by the scope.
