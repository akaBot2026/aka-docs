---
id: get-outlook-mail-message
title: "Get Outlook Mail Message"
sidebar_label: "Get Outlook Mail Message"
sidebar_position: 3
description: "Get Outlook Mail Message activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Outlook Mail Message

RCA.Activities.Mail.GetOutlookMailMessages

## **Description**

This activity helps you to retrieve email messages from Outlook

![image-20220505162407-1.png](/img/32e0c2_image-20220505162407-1.png)

(\* is mandatory)

## **Properties**

**Input**

* **Account (String)** - The account used to access the messages that are to be retrieved.  
  **E.g** “MyAccountName”
* **Mail Folder (String)** - The mail folder from which the messages are to be retrieved.  
  **E.g**: “FolderNameThatIWantToGet”

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **E.g**: Get Outlook Mail

**Option**

* **Filter (String)** - A string used as a filter for the messages to be retrieved. Accepts JET Queries or DASL Queries.  
  **E.g**: "[HomeAddressCountry] = 'Canada'"
* **Mark as read (CheckBox)** - Specifies whether to mark retrieved messages as read. By default, this check box is cleared.
* **Only Unread Messages (CheckBox)** - Specifies whether to retrieve only unread messages. By default, this check box is selected.
* **Order By Date (OrderByDate)** - Order mail messages by date
* **Top (Int32)** - The number of messages to be retrieved starting from either the newest or the oldest, depending on the OrderByDate parameter.

**Output**

* **Messages (MailMessage)** - The retrieved messages as a collection of MailMessage objects.
