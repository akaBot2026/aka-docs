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

## Description

Establishes an authenticated connection to Microsoft Office 365 services through the Microsoft Graph API and provides the connection context to all child activities placed within its container.

All Office 365 activities (such as Upload File, Send Mail, Get List Items) must be placed inside the **Do** block of this scope. The scope manages the authentication token and passes it automatically to every nested activity.

![office-application-scope.png](/static/img/office-application-scope.png)

(\*For mandatory)

> For a step-by-step guide on setting up credentials and connecting to Office 365, see [Connecting to Office 365](azure-app-registration.md).

---

## In the Body of the Activity

* **Do** - The container block where you place the Office 365 activities that will share this connection context.

---

## Properties

### Authentication

* **Application Id: `InArgument<String>`\*** - The Azure application (client) ID of your registered Microsoft Entra application. Required for all authentication types.

* **Authentication Type** - The method used to authenticate with Microsoft Office 365. Select one of the following values:

  | Value | Description |
  | :--- | :--- |
  | `InteractiveToken` | Opens a browser popup for the user to sign in interactively with their Microsoft account. |
  | `IntegratedWindowsAuthentication` | Authenticates using the current Windows user's credentials (Windows SSO). Requires the machine to be domain-joined. |
  | `UsernameAndPassword` | Authenticates using a stored Office 365 username and password. MFA must be disabled on the account. |
  | `ApplicationAndSecret` | Authenticates as the registered application using a Client Secret. Suitable for unattended automation. |
  | `ApplicationAndCertificate` | Authenticates as the registered application using a certificate. The most secure option for unattended automation. |

* **Services: MicrosoftService** - The Microsoft 365 services that this scope is authorized to access. Select one or more of the following values:

  | Value | Service Accessed |
  | :--- | :--- |
  | `Files` | OneDrive and SharePoint file operations (Upload, Download, Copy, Move, Delete, etc.) |
  | `Mail` | Outlook mailbox operations (Send Mail, Get Mail, Move Mail, etc.) |
  | `Calendar` | Outlook calendar operations |
  | `Groups` | Microsoft 365 Groups |
  | `Shared` | SharePoint shared resources and sites |

* **Tenant: `InArgument<String>`** - The Azure tenant ID or tenant domain name (e.g., `yourcompany.onmicrosoft.com`). If left blank, the scope uses the `common` endpoint, which supports both personal and work accounts.

* **Environment: HostingEnvironment** - The Microsoft cloud environment to connect to. Default value: `Global`. Change this only if your organization uses a sovereign cloud deployment.

* **OAuth2 Username: `InArgument<String>`** - The Office 365 email address of the user. Used by `InteractiveToken` and `IntegratedWindowsAuthentication` to identify which account to authenticate.

---

### Application Certificate And Secret

These properties apply when **Authentication Type** is set to `ApplicationAndCertificate`.

* **Certificate As Base64: `InArgument<String>`** - The content of the `.pfx` certificate file encoded as a Base64 string.

* **Certificate Password: `InArgument<SecureString>`** - The password protecting the certificate file.

---

### Application ID And Secret

These properties apply when **Authentication Type** is set to `ApplicationAndSecret`.

* **Application Secret: `InArgument<String>`** - The Client Secret generated in your Azure app registration.

* **Secure Application Secret: `InArgument<SecureString>`** - A secure version of the Client Secret, stored as a SecureString variable for better security.

---

### Username And Password

These properties apply when **Authentication Type** is set to `UsernameAndPassword`.

* **Username: `InArgument<String>`** - The Office 365 email address of the account (e.g., `robot@yourcompany.com`).

* **Password: `InArgument<String>`** - The account password.

* **Secure Password: `InArgument<SecureString>`** - A secure version of the password, stored as a SecureString variable.

---

### Common

* **Continue On Error (`Boolean`)** - Specifies whether execution should continue if this activity throws an error.
  - `True`: The workflow continues even if an error occurs within the scope.
  - `False` *(default)*: The workflow stops and reports the error.

* **Timeout: `InArgument<Int32>`** - The maximum time, in seconds, to wait for a Microsoft Graph API call to complete before throwing a timeout error.

---

### Misc

* **Display Name (`String`)** - The display name of this activity in the workflow designer. You can rename it to make your workflow easier to read.
  E.g: `[131861867] Office365 Ap...`

* **Public (Checkbox)** - If checked, this activity is marked as public. Consider data security requirements before enabling this option.
