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

## **Description**

Creates a Google Cloud scope and provides the Google Cloud command context to child activities.

![google-cloud-scope.png](/static/img/google-cloud-scope.png)

(\*For mandatory)

## **In the body of the activity**

* **Do** - Google Cloud activities to execute inside the scope.

## **Properties**

**Input**

* **Credentials Mode (Dropdown List)** - Specifies the authentication method to connect to Google Cloud. Select one of the following options:
  * **AutoDetect** - Automatically detects credentials from environment variables or Google Cloud environment metadata.
  * **ServiceAccountKey** - Authenticates using a service account key directly. 
  * **ServiceAccountKeyFromFile** - Authenticates using a service account key file.

* **Service Account Key: `InArgument<SecureString>`** - The Google Cloud service account key data.

* **Service Account Key From File: `InArgument<String>`** - The path to the Google Cloud service account key file. The service account key is stored in a file.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window
