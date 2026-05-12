---
id: execute-soql
title: "Execute SOQL"
sidebar_label: "Execute SOQL"
sidebar_position: 7
description: "Execute SOQL activity documentation."
displayed_sidebar: activitiesSidebar
---
# Execute SOQL

RCA.Activities.Salesforce.ExecuteSOQL

You may use this activity to execute a Salesforce Object Query Language (SOQL) command in Salesforce and store the query results in a DataTable. This activity only functions inside a **Salesforce Application Scope** activity.

**Properties**

**Input**

* **SOQL Command** – The valid SOQL command that you want to run. Only strings and String variables supported.

**Note**: You may include the special characters in your SOQL command by using escape characters in your command. Please refer to the official guide for Escape sequence [here](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_quotedstringescapes.htm).

**Misc**

* **DisplayName** - The display name of the activity.
* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.

**Output**

* **Result** - The result of running the SOQL command in Salesforce, stored in a DataTable variable. Only Data Table variable supported.
* **Salesforce Status** – The status returned from Salesforce once the action is completed, stored in a SalesforceStatus variable.