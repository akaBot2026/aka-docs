---
id: get-record
title: "Get Record"
sidebar_label: "Get Record"
sidebar_position: 12
description: "Get Record activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Record

**Get Record**

RCA.Activities.Salesforce.GetRecord

You may use this activity to retrieve a record from Salesforce. This activity only functions inside a Salesforce Application Scope activity.

**In the body of activity**

* **Configure** – Configures value of the record you want to retrieve from Salesforce by using Salesforce Object Configuration wizard.

**Properties**

**Advanced**

* **Additional Fields** – Additional set of fields to be updated in Salesforce Objects, stored in a DataRow variable. If a field is configured in Salesforce Objects Configuration Wizard, that value will override the value specified in this field.

**Note**: The column name must be valid in the Salesforce object you want to insert.

**Misc**

* **DisplayName** - The display name of the activity.
* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.

**Output**

* **Salesforce Status** – The status returned from Salesforce once the action is completed, stored in a SalesforceStatus variable.