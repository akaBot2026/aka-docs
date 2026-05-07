# Start or Abort Bulk API Job - akaBot Docs

Content
:   RCA.Activities.Salesforce.UpdateBulkAPIJob

    You may use this activity to start or abort a bulk API job in Salesforce.

    **Properties**

    **Input**

    * **Action** - Specifies the action you want to take on the bulk API job.
      + Start: to start the job
      + Abort: to abort the job
    * **ID** - The ID of the bulk API job that you want to take action on. Only strings and String variables supported.

    **Misc**

    * **DisplayName** - The display name of the activity.
    * **Public** - If selected, the values of variables and arguments will be logged at Verbose level.

    **Output**

    * **Salesforce Status**– The status returned from Salesforce once the action is completed, stored in a SalesforceStatus variable.