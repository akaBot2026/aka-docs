---
id: execute-report
title: "Execute Report"
sidebar_label: "Execute Report"
sidebar_position: 6
description: "Execute Report activity documentation."
displayed_sidebar: activitiesSidebar
---
# Execute Report

RCA.Activities.Salesforce.ExecuteReport

You may use this activity to execute a report in Salesforce and store the report results in a DataTable. This activity only functions inside a **Salesforce Application Scope** activity.

**Properties**

**Input**

* **Report ID** –  ID of the report in Salesforce you want to execute. Only strings and String variables supported.

**Misc**

* **DisplayName** - The display name of the activity.
* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.

**Output**

* **Result** - The result of report execution, stored in a DataTable variable. Only DataTable variables supported.
* **Salesforce Status** – The status returned from Salesforce once the action is completed, stored in a SalesforceStatus variable.