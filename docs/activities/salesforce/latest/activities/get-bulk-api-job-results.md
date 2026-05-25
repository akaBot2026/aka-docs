---
id: get-bulk-api-job-results
title: "Get Bulk API Job Results"
sidebar_label: "Get Bulk API Job Results"
sidebar_position: 9
description: "Get Bulk API Job Results activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Bulk API Job Results

RCA.Activities.Salesforce.GetBulkAPIJobResults

You may use this activity to get the results of a bulk API job in Salesforce.

**Properties**

**Input**

* **ID** - The ID of the bulk API job that you want to get the results. Only strings and String variables supported.
* **Type** - The type of results you want to retrieve for the specified bulk API job. By default, this field is set to **Successful**. The 3 below options are available:
  + Successful
  + Failed
  + Unprocessed

**Misc**

* **DisplayName** - The display name of the activity.
* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.

**Output**

* **Results** - Results of the specified type that are found in the bulk API job, stored in a DataTable variable. Only DataTable variables.
* **Salesforce Status** – The status returned from Salesforce once the action is completed, stored in a SalesforceStatus variable.