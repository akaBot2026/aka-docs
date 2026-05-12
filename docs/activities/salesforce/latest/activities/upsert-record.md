---
id: upsert-record
title: "Upsert Record"
sidebar_label: "Upsert Record"
sidebar_position: 20
description: "Upsert Record activity documentation."
displayed_sidebar: activitiesSidebar
---
# Upsert Record

RCA.Activities.Salesforce.UpsertRecord

You may use this activity to upsert an existed record in Salesforce. This activity only functions inside a Salesforce Application Scope activity.

**In the body of activity**

* **Configure** – Configures value of the record you want to upsert in Salesforce by using Salesforce Object Configuration wizard

**Properties**

**Advanced**

* **Additional Fields** – Additional set of fields to be set in Salesforce Objects, stored in a DataRow variable. If a field is configured in Salesforce Objects Configuration Wizard, that value will override the value specified in this field. ** Note**: The column name must be valid in the Salesforce object you want to insert.

**Misc**

* **DisplayName** - The display name of the activity.
* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.

**Output**

* **Multiple Choices** – The `IEnumerable<String>` variable to store the records in case that multiple records are found matching with the external ID field.
* **Result** – Indicate the result of the performed action. 4 below values are possible:
  + INSERTED: Returned in case of successful inserting action.
  + UPDATED: Returned in case of successful updating action
  + MULTIPLE: Returned in case that multiple records are found matching with the external ID field.
  + Empty: Returned in case that an error is thrown.
* **Salesforce Status** – The status returned from Salesforce once the action is completed, stored in a SalesforceStatus variable.