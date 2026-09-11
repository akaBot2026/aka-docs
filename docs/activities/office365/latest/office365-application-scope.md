---
id: office365-application-scope
title: "Office 365 Application Scope"
sidebar_label: "Office365 Application Scope"
sidebar_position: 3
description: "Office 365 Application Scope activity documentation."
displayed_sidebar: activitiesSidebar
---

# Office365 Application Scope

`RCA.Activities.Office365.Office365ApplicationScope`

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

* **Authentication Type: AuthenticationType** - The method used to authenticate with Microsoft Office 365. Default: `InteractiveToken`. Select one of the following values:

  | Value | Description |
  | :--- | :--- |
  | `InteractiveToken` *(default)* | Opens a browser popup for the user to sign in interactively with their Microsoft account. |
  | `IntegratedWindowsAuthentication` | Authenticates using the current Windows user's credentials (Windows SSO). Requires the machine to be domain-joined and a **Tenant** ID. |
  | `UsernameAndPassword` | Authenticates using a stored Office 365 username and password. Requires **Tenant**, **Username**, and **Password** (or **Secure Password**). MFA must be disabled on the account. |
  | `ApplicationIdAndSecret` | Authenticates as the registered application using a Client Secret. Designed for unattended automation. Requires **Tenant** and **Application Secret** (or **Secure Application Secret**). |
  | `ApplicationIdAndCertificate` | Authenticates as the registered application using a certificate. The most secure unattended option. Requires **Tenant**, **Certificate As Base64**, and **Certificate Password** (if protected). |

* **Services: MicrosoftService\*** - The Microsoft 365 services that this scope is authorized to access. Select one or more of the following values (cannot be `Unselected`):

  | Value | Service Accessed |
  | :--- | :--- |
  | `Files` | OneDrive and SharePoint file operations (Upload, Download, Copy, Move, Delete, etc.) |
  | `Mail` | Outlook mailbox operations (Send Mail, Get Mail, Move Mail, etc.) |
  | `Calendar` | Outlook calendar operations |
  | `Groups` | Microsoft 365 Groups operations |
  | `Shared` | Access to shared resources across services (e.g. shared mailboxes, shared calendars, SharePoint sites) |

* **Tenant: `InArgument<String>`\*** - The Azure directory (tenant) ID or tenant domain name (e.g., `yourcompany.onmicrosoft.com` or a GUID).
  - For `InteractiveToken`, if left blank, the scope defaults to the `common` endpoint.
  - For `IntegratedWindowsAuthentication`, `UsernameAndPassword`, `ApplicationIdAndSecret`, and `ApplicationIdAndCertificate`, **Tenant is mandatory**.

* **Environment: HostingEnvironment** - The Microsoft cloud environment to connect to. Default: `Global`. Options include `Default`, `Global`, `China`, `Germany`, `USGovernment`, `USGovernmentDOD`. Change this only if your organization uses a sovereign or national cloud deployment.

* **OAuth2 Username: `InArgument<String>`** - The Office 365 email address of the user. Used by `InteractiveToken` to pre-fill the username in the authentication prompt.

---

### Application Certificate And Secret

These properties apply when **Authentication Type** is set to `ApplicationIdAndCertificate`.

* **Certificate As Base64: `InArgument<String>`\*** - The content of the `.pfx` certificate file encoded as a Base64 string. Required for `ApplicationIdAndCertificate`.

* **Certificate Password: `InArgument<SecureString>`** - The password protecting the certificate file, stored as a `SecureString`.

---

### Application ID And Secret

These properties apply when **Authentication Type** is set to `ApplicationIdAndSecret`.

* **Application Secret: `InArgument<String>`\*** - The Client Secret string generated in your Azure app registration. Required if **Secure Application Secret** is not provided.

---

### Secure Application Secret

These properties apply when **Authentication Type** is set to `ApplicationIdAndSecret`.

* **Secure Application Secret: `InArgument<SecureString>`\*** - The Client Secret stored as a `SecureString` variable for enhanced security. Required if **Application Secret** is not provided.

---

### Username And Password

These properties apply when **Authentication Type** is set to `UsernameAndPassword`.

* **Username: `InArgument<String>`\*** - The Office 365 email address of the account (e.g., `robot@yourcompany.com`). Required for `UsernameAndPassword`.

* **Password: `InArgument<String>`\*** - The account password as plain text. Required if **Secure Password** is not provided.

* **Secure Password: `InArgument<SecureString>`\*** - The account password stored as a `SecureString` variable. Required if **Password** is not provided.

---

### Common

* **Continue On Error: `InArgument<Boolean>`** - Specifies whether execution should continue if this activity throws an error.
  - `True`: The workflow continues executing the next activity even if an error occurs within the scope.
  - `False` *(default)*: The workflow stops and reports the error.

* **Timeout: `InArgument<Int32>`** - The maximum time, in **milliseconds**, to wait for authentication and Microsoft Graph API requests before throwing a timeout error. Default: `30000` ms (30 seconds) if unset or `<= 0`.

---

### Misc

* **Display Name (`String`)** - The display name of this activity in the workflow designer. You can rename it to make your workflow easier to read. Default: `Office365 Application Scope`.

---

## See Also

* [Connecting to Office 365](azure-app-registration.md) - Step-by-step guide to registering an Azure application and setting up authentication.