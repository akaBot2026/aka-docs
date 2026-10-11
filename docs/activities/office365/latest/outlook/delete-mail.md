---
id: delete-mail
title: "Delete Mail"
sidebar_label: "Delete Mail"
sidebar_position: 4
description: "Delete Mail activity documentation."
displayed_sidebar: activitiesSidebar
---
# Delete Mail

RCA.Activities.Office365.DeleteMail

## **Description**

The Delete Mail activity deletes a specified email message from Microsoft Office 365 Outlook.

:::note
This activity must be placed inside the **Do** block of [Office 365 Application Scope](/docs/activities/office365/latest/office365-application-scope.md) with the `Mail` service selected. See [Connecting to Office 365](/docs/activities/office365/latest/azure-app-registration.md) for how to set up authentication and permissions.
:::

(\* is mandatory)

## **In the body of activity**

* None (Configure properties via the Properties panel).

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False  
  **- True** : allows the rest of the process to continue the execution even an error occurs within the activity.  
  **- False** : blocks the process from continuing the execution.

**Input**

* **Account (String)** - The email account containing the message. If left blank, the authenticated user account is used.
* **Message (Office365Message)\*** - The Office365Message object to be deleted.
* **Permanently Delete (Boolean)** - If True, permanently deletes the email message. If False, moves the email to the Deleted Items folder. Default value: False.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Delete Mail
