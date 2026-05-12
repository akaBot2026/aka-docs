---
id: download-file
title: "Download File"
sidebar_label: "Download File"
sidebar_position: 5
description: "Download File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Download File

RCA.Salesforce.Salesforce.Activities.DownloadFile

This activity enables the downloading of a file from Salesforce based on its unique ID. It is designed to operate exclusively within a Salesforce Application Scope activity.

**In the body of activity**

* **FolderName:** Sets the complete path to the local folder where the file will be downloaded. It can also be configured through the Configure wizard by navigating to the file on the local machine. Only string values and String variables are supported.

**Properties**

**Input**

* **FileName:** Specifies the desired name for the downloaded file. If left empty, Salesforce's original filename is retained. The file extension remains unchanged. Only string values and String variables supported.
* **FolderName:** Sets the complete path to the local folder where the file will be downloaded. It can also be configured through the Configure wizard by navigating to the file on the local machine. Only string values and String variables are supported.
* **Id:** Identifies the file to be downloaded using its unique ID. Only string values and String variables supported.

**Misc**

* **DisplayName** - The display name of the activity.
* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.

**Output**

* **Description:** Provides the description of the file sourced from Salesforce. Only string values and String variables supported.

* **SalesforceStatus:** The status returned from Salesforce once the action is completed, stored in a SalesforceStatus variable.
* **Title:** The title of the file downloaded from Salesforce. Only string values and String variables supported.