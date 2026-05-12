---
id: upload-file
title: "Upload File"
sidebar_label: "Upload File"
sidebar_position: 19
description: "Upload File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Upload File

RCA.Activities.Salesforce.UploadFile

This activity exclusively operates within a Salesforce Application Scope activity, facilitating the uploading of new files or new versions for existing files in Salesforce.

**Properties**

**Input**

* **Description:** Description of the file you intend to upload. Only string values and String variables supported.
* **File Path:** Specifies the full path of the file you want to upload. You can also use the Configure wizard to locate the file on your local machine. Only string values and String variables supported
* **Id:** If provided, it represents the ID of an existing file on Salesforce to update with a new version. It is optional, leaving it empty uploads a new file. Only string values and String variables supported.
* **Title:** Specifies the title of the file you want to upload. Only string values and String variables supported.

**Misc**

* **DisplayName:** The name displayed for the activity.
* **Public:** If selected, variable and argument values will be logged at the Verbose level.

**Output**

* **Output Id:** This field contains the ID of the file created in Salesforce. If an ID is specified in the InputId property, this field mirrors that ID. If a new object is uploaded, its newly generated ID appears here. Only string values and String variables supported.
* **SalesforceStatus:** The status returned from Salesforce once the action is completed, stored in a SalesforceStatus variable.
* **Version Id:** This field holds the ID of the newly created version of the file. Only string values and String variables supported.