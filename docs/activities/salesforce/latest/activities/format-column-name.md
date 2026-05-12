---
id: format-column-name
title: "Format Column Names"
sidebar_label: "Format Column Names"
sidebar_position: 8
description: "Format Column Names activity documentation."
displayed_sidebar: activitiesSidebar
---
# Format Column Names

RCA.Activities.Salesforce.FormatColumnNames

This activity replaces the column names within a designated DataTable variable.

**Properties**

**Input**

* **Data:** Specifies the DataTable variable whose column names need replacement. Only DataTable variables are supported in this field.
* **Mapping:** This field requires a DataTable variable containing two columns:
  + **ColumnName:** Represents the expected column names present in the DataTable variable specified in the Data field.
  + **FieldName:** Specifies the column names intended to replace the existing ones.

**Misc**

* **DisplayName** - The display name of the activity.
* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.

**Options**

* **InvalidColumns:** The list of the column names which are unable to match with those provided in the Mapping property. It's stored in an `IEnumerable<String>` variable.