---
id: composite-request
title: "Composite Request"
sidebar_label: "Composite Request"
sidebar_position: 2
description: "Composite Request activity documentation."
displayed_sidebar: activitiesSidebar
---
# Composite Request

RCA.Activities.Salesforce.CompositeRequest

You may use this activity to provide a working scope for record manipulation operations in Salesforce, example: Insert Record, Update Record, Delete Record. These activities will be batched (max 25 actions per batch) when used in Composite Request activity. Composite Request activity only functions inside a Salesforce Application Scope activity.

**In the body of activity**

* **Configure** – Configures value of the record you want to perform the manipulation operation on Salesforce records by using Salesforce Object Configuration wizard.

**Properties**

**Advanced**

* **AllOrNone** – Configure the way to handle the commitment if an error is thrown. If set to **True**, all of the operations in this scope are not committed. If set to **False**, all of the operations that throw errors are not committed but everything that works is. The status of each operation is logged in the output variable provided in the **Result** field.

**Misc**

* **DisplayName** - The display name of the activity.
* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.

**Output**

* **Result** - The result of performing operation for each record, stored in a DataTable variable. The DataTable variable contains the following fields: Command, Id, Status, Error Message. Only DataTable variables supported.
* **Salesforce Status** – The status returned from Salesforce once the action is completed, stored in a SalesforceStatus variable.