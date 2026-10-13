---
id: send-mail
title: "Send Mail"
sidebar_label: "Send Mail"
sidebar_position: 1
description: "Send Mail activity documentation."
displayed_sidebar: activitiesSidebar
---
# Send Mail

RCA.Activities.Office365.SendMail

## **Description**

The Send Mail activity allows you to send an email message using Microsoft Office 365 Outlook.

![send-mail-office.png](/static/img/send-mail-office.png)

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

* **Account (String)** - The email address / account used to send the message. If left empty, the currently authenticated user's account in Office365ApplicationScope will be used.  
  E.g: "user@example.com"

**Email**

* **Body (String)** - The body content of the email message.  
  E.g: "Hello, please find the attached report."
* **Subject (String)** - The subject line of the email.  
  E.g: "Monthly Report"

**Recipients**

* **To (String[])** - An array of email addresses for the primary recipients. At least one recipient must be set in **To**, **Cc** or **Bcc**.  
  E.g: `{"receiver@example.com"}`
* **Cc (String[])** - An array of email addresses for the secondary recipients (Carbon Copy).  
  E.g: `{"manager@example.com"}`
* **Bcc (String[])** - An array of email addresses for hidden recipients (Blind Carbon Copy).  
  E.g: `{"audit@example.com"}`

**Attachments**

* **Attachments (`List<String>`)** - A list of file paths to attach to the email.
* **Attachments Collection (`IEnumerable<String>`)** - An IEnumerable collection of file paths representing the attachments to send with the email.  
  E.g: `{"C:\Reports\MonthlyReport.xlsx"}`

**Options**

* **From (String)** - The email address to send the email from (used when sending on behalf of a shared mailbox).  
  E.g: "shared@example.com"
* **Reply To (String[])** - An array of email addresses that replies should be sent to.
* **Importance (DropDownlist)** - The priority level of the email: Low, Normal, High. Default value: Normal.
* **Is Body Html (Boolean)** - Specifies whether the email body contains HTML content. Default value: False.
* **Is Draft (Boolean)** - If True, saves the email as a draft without sending it. Default value: False.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Send Mail
