---
id: get-bulk-api-job
title: "Get Bulk API Job"
sidebar_label: "Get Bulk API Job"
sidebar_position: 10
description: "Get Bulk API Job activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Bulk API Job

RCA.Activities.Salesforce.GetBulkAPIJob

You may use this activity to get the details of a bulk API job from Salesforce.

**Properties**

**Input**

* **ID** – The ID of the bulk API job that you want to get the details. Only strings and String variables supported.

**Misc**

* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.
* **DisplayName** - The display name of the activity.

**Output**

* **NumberRecordsFailed** - The number of records that were failed to processed in the specified job, stored in an Int32 variable. Only Int32 variables supported.
* **NumberRecordsProcessed** - The number of records that were successfully processed in the specified job, stored in an Int32 variable. Only Int32 variables supported.
* **Object** - The Salesforce object on which you want to perform the operation in the job. Only Strings and String variables supported.
* **Operation** - The bulk API operation that was performed by the job, stored in a BulkApiOperation variable. Only BulkApiOperation variables supported
* **Retries** - The number of times that Salesforce attempted to save the results of an operation, stored in an Int32 variable. Consider the number because repeated attempts may be due to an issue. Only Int32 variables supported.
* **SalesforceStatus** - The status that is returned from Salesforce once the action is completed, stored in a SalesforceStatus variable. Only SalesforceStatus variables supported
* **State** - The current state of processing for the specified job. Only strings and String variables. Supported values for this field are:
  + Open
  + UploadComplete
  + Aborted
  + Failed
  + JobComplete
  + Closed