---
id: google-cloud-scope
title: "Google Cloud Scope"
sidebar_label: "Google Cloud Scope"
sidebar_position: 3
description: "Google Cloud Scope activity documentation."
displayed_sidebar: activitiesSidebar
---

# Google Cloud Scope

RCA.Activities.GoogleCloud.GCPScope

## Description

Creates an authenticated Google Cloud session and provides the connection context to all child activities placed within its container.

All Google Cloud activities (such as Create Bucket, Upload Object, Get Object) must be placed inside the **Do** block of this scope. The scope handles authentication and passes the credentials automatically to every nested activity.

> For a step-by-step guide on creating a Service Account and obtaining the JSON key file, see [Setting Up Google Cloud Credentials](google-cloud-credentials-setup.md).

---

## In the Body of the Activity

The scope displays a **Service Account Credentials Mode** dropdown directly in the workflow designer, letting you select the authentication method without opening the Properties panel.

* **Do** - The container block where you place the Google Cloud activities that will share this connection.

---

## Properties

### Input

* **Credentials Mode** - The method used to authenticate with Google Cloud. Select one of the following values:

  | Value | Description |
  | :--- | :--- |
  | `AutoDetect` | akaBot automatically detects credentials from the environment. It checks the `GOOGLE_APPLICATION_CREDENTIALS` environment variable or the Google Cloud metadata server (if running on a Compute Engine VM). No key file or key content needs to be provided in the activity. |
  | `ServiceAccountKey` | Authenticates using the raw JSON content of a Service Account key, provided directly as a string in the **Service Account Key** field. |
  | `ServiceAccountKeyFromFile` | Authenticates using the path to a Service Account JSON key file stored on the robot machine's local disk. |

* **Service Account Key: `InArgument<SecureString>`** - The full JSON content of the Service Account key. Required when **Credentials Mode** is set to `ServiceAccountKey`.

* **Service Account Key From File: `InArgument<String>`** - The full file path to the Service Account JSON key file on the robot machine (e.g., `"C:\akabot\credentials\gcp-key.json"`). Required when **Credentials Mode** is set to `ServiceAccountKeyFromFile`.

---

### Misc

* **Display Name (`String`)** - The display name of this activity in the workflow designer. You can rename it to make your workflow easier to read.

* **Public (Checkbox)** - If checked, this activity is marked as public. Consider data security requirements before enabling this option.
