---
id: works-with-box-using-http-client
title: "Works with Box using Http Client"
sidebar_label: "Works with Box using Http Client"
sidebar_position: 1
description: "Works with Box using Http Client documentation."
displayed_sidebar: activitiesSidebar
---

This sample uses the akaBot `Http Client` activity and Box Client Credentials
Grant (CCG) authentication to work with the root folder of an existing Box
Managed User. It lists content, creates and renames a folder, uploads and updates
files, downloads a file, pauses for inspection, and then removes the test data.

## Prerequisites

- A Box developer or enterprise account with access to the Box Developer Console.
- A Box Admin who can authorize the application.
- Multi-factor authentication (2FA) enabled for the account that reveals or
  copies the Client Secret.
- akaBot Studio with the Core activities installed.

## Create a New App

1. Sign in to Box and open the
   [Box Developer Console](https://app.box.com/developers/console).
2. Select **Platform Apps**, then select **New App**.
3. Enter an application name. For example, `DemoApp`.
4. Select **Server** as the application type.

![Create New App](/static/img/01-box-create-new-app.png)

## Configure access to the default account

Open the application's **Configuration** tab and configure these settings:

1. Under **App Access Level**, select **App + Enterprise Access**. This permits
   the app to access existing Managed Users instead of only its Service Account.
2. Under **Application Scopes**, enable:
   - **Read all files and folders stored in Box**.
   - **Write all files and folders stored in Box**.
3. Under **Additional Configuration**, enable
   **Generate User Access Tokens**. This is required because the workflow sends
   `box_subject_type=user` and authenticates as a Managed User.
4. Click **Save** button.

![App + Enterprise Access](/static/img/02-box-app-enterprise-access.png)

![Application scopes](/static/img/03-box-file-folder-scopes.png)

![Generate user access tokens](/static/img/04-box-generate-user-access-tokens.png)

## Build config file

In the application's **Configuration** tab, find **App Details** pane:

1. Under **Access** group, copy **Client ID**. This becomes `clientID`.
2. Click button **Fetch Secret** to get **Client Secret**. Box may require a 2FA verification. This
   becomes `clientSecret`.
3. Under **Properties** group, copy **Enterprise ID**. This becomes `enterpriseID`.

Update the config file `HttpBoxDefaultAccount/data/box-config.json` with above values.

```json
{
  "boxAppSettings": {
    "clientID": "PUT_YOUR_CLIENT_ID_HERE",
    "clientSecret": "PUT_YOUR_CLIENT_SECRET_HERE"
  },
  "enterpriseID": "PUT_YOUR_ENTERPRISE_ID_HERE"
}
```

![Client secrets](/static/img/05-box-client-id-and-secret.png)

4. Under **Properties** group, copy **User ID**. 

Set the `UserId` input in akaBot Studio, or update its default value in `Main.xaml`.

![Workflow argument](/static/img/07-box-user-id-argument.png)

5. Authorization (if required)

A server-authenticated Box Platform App must be authorized before it can call
the Box API.

![Authorization](/static/img/06-box-authorize-application.png)

## Run

Open `Main.xaml` in akaBot Studio and run it.

The workflow displays a Message Box after it creates, uploads, updates, and
downloads the test content. Inspect the generated folder in Box, then select
**OK** to allow the workflow to delete the downloaded local file and move the
remote test file and folder to Box Trash.

**[Click here](https://ws3.akabot.com/s/MH2fVsHjrP81KHs)** to download full workflow.

![Execution result](/static/img/08-box-execute-result.png)

## Operations

The workflow:

1. Reads `data/box-config.json` once and deserializes it to a `JObject`.
2. Requests a Managed User access token with `box_subject_type=user`.
3. Calls `GET /users/me` and verifies that the returned ID equals `UserId`.
4. Lists the user's root folder.
5. Creates, reads, and renames a folder.
6. Uploads two files, lists the folder, reads file information, renames one file,
   and downloads it.
7. Pauses so the user can inspect the test content on Box.
8. Deletes the local download, the second remote file, and the test folder
   recursively. Box API deletions move the remote items to Trash.

Activity Core 3.4's `OAuth2Token` property sends the `OAuth` authorization scheme. Box
requires `Bearer`, so this workflow explicitly supplies
`Authorization: Bearer <token>` in each API request's Headers dictionary.

## Troubleshooting

- `invalid_client`: Verify Client ID and Client Secret, and confirm they belong
  to the same application.
- `invalid_grant`: Verify **App + Enterprise Access**, **Generate User Access
  Tokens**, the numeric `UserId`, and application authorization.
- `403 Forbidden`: Verify the required read/write scopes and re-authorize the
  app after changing its configuration.
- The workflow accesses the wrong account: Verify `UserId`; changing
  `enterpriseID` does not select a Managed User for this sample.

## Box documentation

- [Set up Client Credentials Grant](https://developer.box.com/guides/authentication/client-credentials/client-credentials-setup/)
- [Use Client Credentials Grant](https://developer.box.com/guides/authentication/client-credentials/)
- [Box application authorization](https://developer.box.com/guides/authorization/)
- [Create folder](https://developer.box.com/reference/post-folders/)
- [Upload file](https://developer.box.com/reference/post-files-content/)
