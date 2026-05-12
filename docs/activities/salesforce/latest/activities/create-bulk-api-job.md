---
id: create-bulk-api-job
title: "Create Bulk API Job"
sidebar_label: "Create Bulk API Job"
sidebar_position: 3
description: "Create Bulk API Job activity documentation."
displayed_sidebar: activitiesSidebar
---
# Create Bulk API Job

RCA.Activities.Salesforce.CreateBulkAPIJob

You may use this activity to create a bulk API job in Salesforce.

**Properties**

**Input**

* **Column Delimiter** - Specifies the symbol used as a delimiter for columns in the .csv file that contains the job data. By default, this property is set to **COMMA**. The following options are available:
  + BACKQUOTE
  + CARET
  + COMMA
  + PIPE
  + SEMICOLON
  + TAB
* **External ID Field Name** - The external ID of the object that is being upserted. This ID is required for Upsert operations. The field values must also be found in the .csv file that contains job data.
* **File Path** – The full path to the .csv file that contains the job data. Only String variables supported.
* **Line Ending -** Specifies the line ending which marks the end of a data row in job data. By default, this property is set to **LF**. The 2 below options are available:
  + LF - Linefeed character.
  + CRLF - Carriage return character followed by a linefeed character.
* **Object –** The Salesforce object on which you want to perform the operation. Only String variables supported.
* **Operation** - Specifies what type of operation you want to perform. “Insert” is default value. The following options are available:
  + Insert
  + Update
  + Upsert
  + Delete

**Misc**

* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.
* **DisplayName** - The display name of the activity.

**Options**

* **ID** -  The ID of the bulk API job. Only String variables supported.
* **Salesforce Status** – The status returned from Salesforce once the action is completed, stored in a SalesforceStatus variable.