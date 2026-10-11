---
id: get-outlook-accounts
title: "Get Outlook Account Information"
sidebar_label: "Get Outlook Account Information"
sidebar_position: 2
description: "Get Outlook Account Information activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Outlook Account Information

RCA.Activities.Mail.GetAccounts

## **Description**

This activity returns the email addresses of the accounts set up in the Outlook desktop app on the machine.

![image-20220505162330-1.png](/static/img/4595ad_image-20220505162330-1.png)

(\* is mandatory)

## **Properties**

**Misc**

* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security requirements before using this property.
* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.  
  **Example**: Get Outlook Accounts

**Output**

* **Output Account Names (String[])**: The email addresses of all accounts in Outlook.

## **See also: Exchange activities**

The Exchange activities are part of the Mail package (in akaBot Studio: **Mail** > **Exchange**). If your mailbox is on your company's own Exchange Server, use them instead:

* [Exchange activities](/docs/activities/exchange/latest/introduction.md) - Overview of all Exchange activities.
* [Setup Exchange (EWS)](/docs/activities/exchange/latest/user-guide/exchange-ews-configuration.md) - How to collect the connection details and configure Exchange Scope.
