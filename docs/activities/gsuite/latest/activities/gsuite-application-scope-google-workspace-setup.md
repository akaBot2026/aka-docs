---
id: gsuite-application-scope-google-workspace-setup
title: "GSuite Application Scope Google Workspace Setup"
sidebar_label: "Google Workspace Setup"
sidebar_position: 17
description: "Google Workspace setup guide for GSuite Application Scope."
displayed_sidebar: activitiesSidebar
---

# Google Workspace Setup Guide for GSuite Application Scope

This guide explains how to configure Google Workspace authentication for akaBot `GSuiteApplicationScope`.

The activity supports these Google services:

| akaBot service | Activities covered |
| --- | --- |
| Gmail | `SendEmail`, `GetMailMessages`, `ChangeLabels` |
| Drive | Upload, download, copy, move, delete, search, file info, folder, and permission activities |
| Sheets | Read/write cells, ranges, rows, columns, sheets, and spreadsheet operations |

## 1. App: Create or Select Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Sign in with the Google account or Workspace admin account that owns the project.
3. Create a new project or select an existing project.
4. Make sure this is the project used for akaBot `GSuiteApplicationScope`.

![Google Cloud project selector](/static/img/01-project-selector.png)

## 2. APIs & Services: Enable APIs for Activities

1. In Google Cloud Console, open:

   ```text
   APIs & Services -> Enable APIs and Services
   ```

2. Search for and enable the API services required by your akaBot activities.

| akaBot activity group | API to enable |
| --- | --- |
| Gmail activities | Gmail API |
| Drive activities | Google Drive API |
| Sheets activities | Google Sheets API |

![Enable APIs and Services](/static/img/02-enable-apis-and-services.png)

![Gmail API](/static/img/03-gmail-api.png)

## 3. OAuth Consent

1. In Google Cloud Console, open:

   ```text
   APIs & Services -> OAuth consent screen
   ```

2. Choose the user type.

| User type | Use when |
| --- | --- |
| Internal | Only users in your Google Workspace domain use the app |
| External | Users outside your Google Workspace domain use the app |

3. Fill in the required app information:

   ```text
   App name
   User support email
   Developer contact email
   Authorized domains, if required
   Privacy policy URL, if required
   ```

4. Add scopes used by the current `GSuiteApplicationScope`.

   ```text
   https://mail.google.com/
   https://www.googleapis.com/auth/drive
   https://www.googleapis.com/auth/spreadsheets
   https://www.googleapis.com/auth/drive.file
   ```

| Scope | Covers |
| --- | --- |
| `https://mail.google.com/` | Gmail send, read, and label activities |
| `https://www.googleapis.com/auth/drive` | Drive file, folder, search, and permission activities |
| `https://www.googleapis.com/auth/spreadsheets` | Sheets read, write, and update activities |
| `https://www.googleapis.com/auth/drive.file` | Specific Drive files used by the app |

:::note
`https://mail.google.com/` and `https://www.googleapis.com/auth/drive` are broad or restricted scopes. For an internal Workspace app, Google verification is usually not required. For an external or public app, Google may require OAuth verification and possibly a security assessment.
:::

## 4. Authentication Type Specific``

### 4.1 OAuth Client ID

Use this option when a user signs in interactively and grants consent.

#### Google Cloud setup

1. Go to:

   ```text
   APIs & Services -> Credentials
   ```

2. Click:

   ```text
   Create Credentials -> OAuth client ID
   ```

3. Select the application type. For akaBot desktop workflows, use:

   ```text
   Desktop app
   ```

4. Create the credential.
5. Copy the generated values:

   ```text
   Client ID
   Client Secret
   ```

![Create OAuth client ID](/static/img/08-create-oauth-client-id.png)

![OAuth client credentials](/static/img/09-oauth-client-credentials.png)

#### akaBot GSuiteApplicationScope setup

Configure:

```text
AuthenticationType = OAuthClientID
CredentialID = <Client ID>
CredentialSecret = <Client Secret>
Services = Gmail / Drive / Sheets
User = optional token cache user name
```

When the workflow runs, Google sign-in opens and the token is stored locally under:

```text
Datastore.GSuite
```

### 4.2 Service Account Key

Use this option for unattended automation with Drive or Sheets files that are shared directly with the service account.

#### Google Cloud setup

1. Go to:

   ```text
   APIs & Services -> Credentials
   ```

2. Click:

   ```text
   Create Credentials -> Service account
   ```

3. Create the service account.
4. Open the service account.
5. Go to `Keys`.
6. Click:

   ```text
   Add Key -> Create new key -> JSON
   ```

7. Download the JSON key file.

![Create service account](/static/img/10-create-service-account.png)

![Create JSON service account key](/static/img/11-service-account-json-key.png)


#### akaBot GSuiteApplicationScope setup

Configure:

```text
AuthenticationType = ServiceAccountKey
KeyType = JSON
KeyPath = <path to JSON key>
HasDomainWideAccesss = false
Services = Drive / Sheets
```

:::note
Gmail does not work with service account authentication unless Domain-Wide Delegation is enabled.
:::

### 4.3 Service Account Key with Domain-Wide Delegation

Use this option for Workspace-wide automation, especially Gmail with service account authentication.

#### Google Cloud setup

1. Open the service account.
2. Expand `Advanced settings`.
3. Copy the numeric `Client ID`.

#### Google Admin setup

1. Go to [Google Admin Console](https://admin.google.com/).
2. Sign in as a Super Admin.
3. Open:

   ```text
   Security -> Access and data control -> API controls
   ```

4. Click:

   ```text
   Manage Domain Wide Delegation
   ```

5. Click `Add new`.
6. Paste the service account numeric Client ID.
7. Add scopes as a comma-separated list:

   ```text
   https://mail.google.com/,https://www.googleapis.com/auth/drive,https://www.googleapis.com/auth/spreadsheets,https://www.googleapis.com/auth/drive.file
   ```

8. Click `Authorize`.

Changes can take up to 24 hours to propagate, but usually complete faster.

#### akaBot GSuiteApplicationScope setup

Configure:

```text
AuthenticationType = ServiceAccountKey
KeyType = JSON
KeyPath = <path to JSON key>
HasDomainWideAccesss = true
UserEmail = <workspace-user@company.com>
Services = Gmail / Drive / Sheets
```

`UserEmail` must be an actual user in the Google Workspace domain. The service account impersonates this user when calling Google APIs.

### 4.4 API Key

Use this option only for limited or public API scenarios.

:::important
In the current akaBot code, API key authentication is blocked for Gmail and Drive. Use API key only for limited Sheets or public-data scenarios.
:::

#### Google Cloud setup

1. Go to:

   ```text
   APIs & Services -> Credentials
   ```

2. Click:

   ```text
   Create Credentials -> API key
   ```

3. Copy the generated API key.

![Create API key](/static/img/17-create-api-key.png)

#### akaBot GSuiteApplicationScope setup

Configure:

```text
AuthenticationType = ApiKey
ApiKey = <API key>
Services = Sheets
```

## Recommended Setup

| Scenario | Recommended authentication type |
| --- | --- |
| User signs in and grants consent | OAuth Client ID |
| Internal unattended Drive or Sheets automation | Service Account Key |
| Internal Workspace-wide automation, including Gmail | Service Account Key with Domain-Wide Delegation |
| Public or limited data only | API Key |

## Official References

- [Google Workspace credentials guide](https://developers.google.com/workspace/guides/create-credentials)
- [OAuth consent and scopes guide](https://developers.google.com/workspace/guides/configure-oauth-consent)
- [Domain-wide delegation guide](https://knowledge.workspace.google.com/admin/apps/control-api-access-with-domain-wide-delegation)
- [OAuth scopes for Google APIs](https://developers.google.com/identity/protocols/oauth2/scopes)
