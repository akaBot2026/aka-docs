---
id: assign-file
title: "Assign File"
sidebar_label: "Assign File"
sidebar_position: 1
description: "Assign File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Assign File

RCA.Activities.Salesforce.AssignFile

You may use this activity to attache a file to a record, allowing for customized sharing and visibility. It reports the operation status and works only within Salesforce Application Scope.

**Properties**

**Input**

* **Id:** This field accepts string values and String variables for specifying the file ID to attach to the Salesforce Object record.
* **Record Id:** It accepts string values and String variables for specifying the Salesforce Object record ID to attach the file to.
* **Share Type:** This field accepts string values and String variables, requiring a valid Salesforce-supported value to determine the sharing type of the file. 3 options available:
  + V: Viewer
  + C: Collaborator
  + I: Internal
* **Visibility:** Specifies the user group that can access the file. 3 options available:
  + All users: All users can access the file.
  + Internal users: Users in the company can access the file.
  + Shared users: Shared users can access the file.

**Misc**

* **DisplayName** - The display name of the activity.
* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.

**Options**

* **SalesforceStatus:** The status returned from Salesforce once the action is completed, stored in a SalesforceStatus variable.