---
id: insert-record
title: "Insert Record"
sidebar_label: "Insert Record"
sidebar_position: 13
description: "Insert Record activity documentation."
displayed_sidebar: activitiesSidebar
---
# Insert Record

RCA.Activities.Salesforce.InsertRecord

You may use this activity to insert a new record into Salesforce. This activity only functions inside a **Salesforce Application Scope** activity.

**In the body of activity**

* **Configure** – Configures value of the record you want to insert into Salesforce by using Salesforce Object Configuration wizard.

**Properties**

**Advanced**

* **Reference** – When this activity is used inside, you may use an optional Reference string. Its value is returned in the ** Reference** column of the Result property of the Composite Request. Only strings and String variables supported.

**Advanced Property Group**

* **Additional Fields** – Additional set of fields to be inserted in Salesforce Objects, stored in a DataRow variable. If the field is configured in Salesforce Objects Configuration Wizard, that value will override the value specified in this field.

**Note**: The column name must be valid in the Salesforce object you want to insert.

**Misc**

* **DisplayName** - The display name of the activity.
* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.

**Output**

* **Salesforce Status** – The status returned from Salesforce once the action is completed, stored in a SalesforceStatus variable.