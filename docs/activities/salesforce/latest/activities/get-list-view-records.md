---
id: get-list-view-records
title: "Get List View Records"
sidebar_label: "Get List View Records"
sidebar_position: 11
description: "Get List View Records activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get List View Records

RCA.Activities.Salesforce.GetListViewRecords

You may use this activity to get the list of records of a Salesforce Object from Salesforce and store in a DataTable variable.

**In the body of activity**

* **Configure** – Configures the Salesforce Object and the list view to retrieve the records by using Salesforce Object Configuration wizard.

![1715142092864-482.png](/img/d561c7_1715142092864-482.png)

​**Properties**

**Misc**

* **DisplayName** - The display name of the activity.
* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.

**Output**

* **Result** - The result of performing operation for each record, stored in a DataTable variable. The DataTable variable contains the following fields: Command, Id, Status, Error Message. Only DataTable variables supported.
* **Salesforce Status** – The status returned from Salesforce once the action is completed, stored in a SalesforceStatus variable.