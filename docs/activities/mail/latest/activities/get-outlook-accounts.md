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

This activity returns a list of Outlook accounts currently logged in on the machine.

![image-20220505162330-1.png](/img/4595ad_image-20220505162330-1.png)

\* indicates required fields.

## **Properties**

**Misc**

* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security requirements before using this property.
* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.  
  **Example**: Get Outlook Account Information

**Output**

* **Account Names (String)**: An array of strings representing the Outlook accounts.
