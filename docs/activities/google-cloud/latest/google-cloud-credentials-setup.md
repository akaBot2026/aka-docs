---
id: google-cloud-credentials-setup
title: "Setting Up Google Cloud Credentials"
sidebar_label: "Google Cloud Credentials Setup"
sidebar_position: 2
description: "Step-by-step guide to creating a Google Cloud Service Account and obtaining the JSON key required to connect akaBot to Google Cloud services."
displayed_sidebar: activitiesSidebar
---

# Setting Up Google Cloud Credentials

To connect akaBot to Google Cloud services (such as Google Cloud Storage), the **Google Cloud Scope** activity requires a **Service Account** and its associated **JSON key file**. This guide walks you through creating a Service Account on the Google Cloud Console and configuring it in akaBot Studio.

> **Prerequisites:** You need access to a [Google Cloud project](https://console.cloud.google.com/) with the **IAM & Admin** permissions required to create Service Accounts. The required role is **Project IAM Admin** or higher.

---

## Overview of Authentication Modes

The **Google Cloud Scope** activity supports three **Credentials Mode** options. Before starting, choose the one that fits your environment:

| Credentials Mode | How It Works | When to Use |
| :--- | :--- | :--- |
| **AutoDetect** | akaBot automatically detects credentials from the environment — for example, from the `GOOGLE_APPLICATION_CREDENTIALS` environment variable or the Google Cloud metadata server. | Use this when running akaBot on a Google Cloud virtual machine (Compute Engine) that already has a Service Account attached, or in a CI/CD environment where credentials are pre-configured. |
| **ServiceAccountKey** | Authenticates using the raw JSON content of a Service Account key, provided directly as a secure string in the activity. | Use this when you want to embed the key content directly in the workflow without relying on a local file. Suitable for robot machines where the JSON is stored in a secrets manager. |
| **ServiceAccountKeyFromFile** | Authenticates using the path to a Service Account JSON key file stored on the robot's local disk. | Use this when the JSON key file is deployed to the robot machine and you want to reference it by its file path. |

---

## Step 1 — Create a Service Account

1. Sign in to the [Google Cloud Console](https://console.cloud.google.com/).
2. Select the project you want to use for automation from the project dropdown at the top of the page.
3. In the left navigation menu, go to **IAM & Admin > Service Accounts**.
4. Click **Create Service Account** at the top of the page.
5. Fill in the service account details:
   - **Service account name:** Enter a descriptive name (e.g., `akabot-automation`).
   - **Service account ID:** This is auto-filled based on the name. It will form the service account's email address (e.g., `akabot-automation@your-project.iam.gserviceaccount.com`).
   - **Service account description:** Optional. Describe the purpose of this account.
6. Click **Create and Continue**.

---

## Step 2 — Grant a Role to the Service Account

The service account must be granted a role that gives it permission to access the Google Cloud resources your automation needs.

1. In the **Grant this service account access to project** step, click the **Role** dropdown.
2. Select the appropriate role for your use case. Common roles for akaBot workflows include:

   | akaBot Use Case | Recommended Role |
   | :--- | :--- |
   | Read and write files in Google Cloud Storage | **Storage Object Admin** |
   | Read files from Google Cloud Storage only | **Storage Object Viewer** |
   | Upload files to a specific bucket | **Storage Object Creator** |
   | Full access to Storage (buckets + objects) | **Storage Admin** |

3. Click **Continue**, then click **Done** to finish creating the service account.

---

## Step 3 — Create and Download the JSON Key

The JSON key is the credential file that akaBot uses to authenticate as the Service Account.

1. On the **Service Accounts** list page, find the service account you just created and click on its email address to open its details.
2. Go to the **Keys** tab.
3. Click **Add Key > Create new key**.
4. In the dialog, select **JSON** as the key type.
5. Click **Create**. The JSON key file will be automatically downloaded to your computer.

> **Security Warning:** The JSON key file contains a private key that grants full access to any Google Cloud resource the service account has been given permission for. Store it securely and never commit it to source control (e.g., Git). Treat it with the same level of care as a password.

**What is this JSON file?**
The downloaded file contains the cryptographic keys and identifiers that akaBot uses to securely authenticate with Google Cloud on your behalf. It will look similar to this structure:

```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----\n",
  "client_email": "akabot-automation@your-project.iam.gserviceaccount.com",
  "client_id": "123456789",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token"
}
```

---

## Step 4 — Configure the Google Cloud Scope in akaBot

Once you have the JSON key file, open akaBot Studio, add the **Google Cloud Scope** activity, and set the **Credentials Mode** property. Depending on the mode selected, configure the corresponding properties:

### ServiceAccountKeyFromFile

This mode authenticates using a JSON file stored on the local machine.
* **Service Account Key From File** - The absolute path to the downloaded JSON key file. The path must be provided as a string literal (enclosed in double quotes), for example: `"C:\akabot\credentials\gcp-key.json"`.

### ServiceAccountKey

This mode authenticates using the JSON key content provided directly as a `SecureString`. It is typically used when retrieving credentials from akaBot Center (Orchestrator) Assets.
* **Service Account Key** - The JSON key content converted to a `SecureString`. 

> **Note:** Do not paste raw JSON directly into the Expression Editor, as unescaped double quotes will cause VB.NET/C# syntax errors. To configure this property, retrieve the JSON string from an Asset into a `String` variable (e.g., `strJsonKey`), and use the following expression to convert it:
> `new System.Net.NetworkCredential("", strJsonKey).SecurePassword`

### AutoDetect

This mode relies on the system environment to provide the credentials. No additional properties need to be configured in the activity. Ensure that one of the following conditions is met:
* The `GOOGLE_APPLICATION_CREDENTIALS` environment variable on the host machine points to a valid JSON key file path.
* The robot is running on a Google Cloud virtual machine (Compute Engine) that has a Service Account attached.

---

## See Also

- [Google Cloud Scope](google-cloud-scope.md) — Full property reference for the scope activity.
