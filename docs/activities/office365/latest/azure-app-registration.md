---
id: azure-app-registration
title: "Connecting to Office 365"
sidebar_label: "Connecting to Office 365"
sidebar_position: 2
description: "How to set up authentication and connect akaBot to Microsoft Office 365 using the Office 365 Application Scope activity."
displayed_sidebar: activitiesSidebar
---

# Connecting to Office 365

The **Office 365 Application Scope** activity connects akaBot to Microsoft Office 365 services (Files, Mail, Calendar, Groups, SharePoint) through the Microsoft Graph API.

Before running any Office 365 activity, you must configure the scope with a valid **Authentication Type** and the **Services** you need. This guide explains each option and what setup is required.

---

## Step 1 — Register an Application in Azure

All authentication types require an **Application ID** (Client ID) from a registered application in Microsoft Entra ID (formerly Azure Active Directory). This is a one-time setup.

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com) with a **Cloud Application Administrator** account or higher.
2. Go to **Identity > Applications > App registrations** and click **New registration**.
3. Fill in the form:
   - **Name:** A descriptive name, for example `akaBot-Office365`.
   - **Supported account types:** Select **Accounts in this organizational directory only**.
   - **Redirect URI:** Leave blank.
4. Click **Register**.
5. On the **Overview** page, copy the two values you will need in akaBot Studio:
   - **Application (client) ID** → the **Application Id** field.
   - **Directory (tenant) ID** → the **Tenant** field.

---

## Step 2 — Select Your Authentication Type

In the **Office 365 Application Scope** activity, set the **Authentication Type** property to one of the following options:

| Authentication Type | What It Does | Azure Setup Required |
| :--- | :--- | :--- |
| **InteractiveToken** | Opens a browser popup for the user to sign in to their Microsoft account. | Register an Azure app and enable **Allow public client flows** under Authentication settings. No client secret needed. |
| **IntegratedWindowsAuthentication** | Signs in using the current Windows user's credentials (Windows SSO). No user interaction required. | Register an Azure app and enable **Allow public client flows**. The robot machine must be domain-joined. |
| **UsernameAndPassword** | Signs in using a stored Office 365 username and password. | Register an Azure app and enable **Allow public client flows**. MFA must be disabled on the account. |
| **ApplicationAndSecret** | Signs in as the application itself using a Client Secret. Fully unattended — no user required. | Register an Azure app and create a **Client Secret** (see Step 3A below). |
| **ApplicationAndCertificate** | Signs in as the application itself using a certificate. The most secure option for unattended automation. | Register an Azure app and upload a **Certificate** (see Step 3B below). |

> **Which type should I use?**
>
> - For **quick testing or attended automation** where a human is present: use **InteractiveToken**.
> - For **unattended robots** running on a schedule with no user present: use **ApplicationAndSecret** or **ApplicationAndCertificate**.
> - For **domain-joined machines** in a corporate network: **IntegratedWindowsAuthentication** is the most seamless option.

---

## Step 3 — Set Up Credentials (for Unattended Types Only)

This step is only required for **ApplicationAndSecret** and **ApplicationAndCertificate**. Skip to Step 4 if you are using InteractiveToken, IntegratedWindowsAuthentication, or UsernameAndPassword.

### Option A — Create a Client Secret (for ApplicationAndSecret)

1. In your registered app, go to **Certificates & secrets**.
2. Under **Client secrets**, click **New client secret**.
3. Enter a description and select an expiration period. Click **Add**.
4. **Copy the secret Value immediately.** It is only shown once.

> **Important:** When the secret expires, your automation will stop. Set a reminder to rotate it before the expiration date.

### Option B — Upload a Certificate (for ApplicationAndCertificate)

1. In your registered app, go to **Certificates & secrets**.
2. Under **Certificates**, click **Upload certificate**.
3. Upload your `.cer` file (the public key portion). Click **Add**.

In akaBot Studio, you will provide the **Certificate As Base64** (the full encoded certificate content) and the **Certificate Password**.

---

## Step 4 — Grant API Permissions

In your registered app, grant the Microsoft Graph permissions that match the **Services** you will select in akaBot Studio:

| Services (in akaBot) | Microsoft Graph Permission to Grant |
| :--- | :--- |
| **Files** | `Files.ReadWrite.All` |
| **Mail** | `Mail.ReadWrite`, `Mail.Send` |
| **Calendar** | `Calendars.ReadWrite` |
| **Groups** | `Group.ReadWrite.All` |
| **Shared** (SharePoint) | `Sites.ReadWrite.All` |

To grant permissions:

1. In your registered app, go to **API permissions > Add a permission > Microsoft Graph**.
2. Select **Application permissions** (for ApplicationAndSecret / ApplicationAndCertificate) or **Delegated permissions** (for all other types).
3. Search for and add the permissions matching your selected Services.
4. Click **Grant admin consent for [Your Tenant]**. This requires a Global Administrator account.

---

## Step 5 — Configure the Scope in akaBot Studio

Open akaBot Studio and configure the **Office 365 Application Scope** activity properties:

| Property | Value |
| :--- | :--- |
| **Application Id** | The Application (client) ID from Step 1. |
| **Tenant** | The Directory (tenant) ID from Step 1. Leave blank to use the default `common` endpoint. |
| **Authentication Type** | Your chosen type from Step 2. |
| **Services** | Check the services your workflow needs (Files, Mail, Calendar, Groups, Shared). |
| **Environment** | `Global` for standard Microsoft 365. Change only if your organization uses a sovereign cloud (e.g., GovCloud). |
| **OAuth2 Username** | *(InteractiveToken / IntegratedWindowsAuthentication only)* The user's Office 365 email address, used to pre-fill the sign-in prompt. |
| **Application Secret** | *(ApplicationAndSecret only)* The Client Secret from Step 3A. |
| **Certificate As Base64** | *(ApplicationAndCertificate only)* The Base64-encoded certificate from Step 3B. |
| **Certificate Password** | *(ApplicationAndCertificate only)* The certificate file password. |
| **Username / Password** | *(UsernameAndPassword only)* The Office 365 account credentials. |

Place all your Office 365 activities (Upload File, Send Mail, Get List Items, etc.) inside the **Do** block. The scope handles authentication automatically for all nested activities.

---

## See Also

- [Office 365 Application Scope](office365-application-scope.md) — Full property reference.
