---
id: office365-application-scope
title: "Office 365 Application Scope"
sidebar_label: "Office365 Application Scope"
sidebar_position: 3
description: "Office 365 Application Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# Office365 Application Scope

RCA.Activities.Office365.Office365ApplicationScope

## **Description** 
Establishes an authenticated connection to Microsoft Office 365 services via Microsoft Graph API and provides the connection context to all child activities placed within its container.

![office-application-scope.png](/static/img/office-application-scope.png)

(\*For mandatory)


## **In the body of the activity**


  * **Do** - The sequence container block where you place the Office 365 activities that share the connection context.

## **Properties**

**Application Certificate And Secret**

* **Certificate As Base64: `InArgument<String>`** - The certificate content encoded as Base64 for certificate-based authentication.

* **Certificate Password: `InArgument<SecureString>`** - The password for the certificate used in certificate-based authentication.

**Application ID And Secret**

* **Application Secret: `InArgument<String>`** - The application secret used with ApplicationIdAndSecret authentication.

* **Secure Application Secret: `InArgument<SecureString>`** - The secure application secret used with ApplicationIdAndSecret authentication.

**Common**

* **Continue On Error (`Boolean`)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

* **Timeout: `InArgument<Int32>`** - The timeout, in seconds, for Microsoft Graph requests made inside the scope.

**Authentication**

* **Application Id: `InArgument<String>`*** - The Azure application/client ID used for authentication.

* **Tenant: `InArgument<String>`** - The Azure tenant ID or tenant name. Default tenant is common when applicable.

* **Authentication Type** - The authenticatio method used to connect to Microsoft Office 365.

* **Services: MicrosoftService** - The Microsoft services enabled for this scope.

* **Environment: HostingEnvironment** - The Microsoft cloud environment. Default value: Global.

* **OAuth2 Username: `InArgument<String>`** - The username used by OAuth2 authentication flows.

**Username And Password**

* **Username: `InArgument<String>`** - The username used for Username and Password authentication.

* **Password: `InArgument<String>`** - The password used for Username and Password authentication.

* **Secure Password: `InArgument<SecureString>`** - The secure password used for Username and Password authentication.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window


