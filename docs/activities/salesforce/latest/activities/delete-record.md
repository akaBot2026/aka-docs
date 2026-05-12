---
id: delete-record
title: "Delete Record"
sidebar_label: "Delete Record"
sidebar_position: 4
description: "Delete Record activity documentation."
displayed_sidebar: activitiesSidebar
---
# Delete Record

RCA.Activities.Salesforce.DeleteRecord

You may use this activity to delete a record from Salesforce. This activity only functions inside a **Salesforce Application Scope** activity.

**In the body of activity**

* **Configure** – Select Salesforce Object of the record you want to remove from Salesforce.

**Properties**

**Advanced**

* **Salesforce Object** – The object to which the record you want to delete belongs to. Only strings and String variables supported.

**Advanced Property Group**

* **Id -** The ID of the record you want to delete from Salesforce. Only strings and String variables supported.

**Misc**

* **DisplayName** - The display name of the activity.
* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.

**Output**

* **Salesforce Status** – The status returned from Salesforce once the action is completed, stored in a SalesforceStatus variable.