---
id: get-mail-message
title: "Get Mail Message"
sidebar_label: "Get Mail Message"
sidebar_position: 11
description: "Get Mail Message activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Mail Message

RCA.Activities.GSuite.GetMailMessages

## **Description**

This activity allows you to search for and get emails from a specified Gmail account.

![image-20220505160309-1.png](/img/65d081_image-20220505160309-1.png)

(\*For mandatory)

## **In the body of the activity**

* **Search Messages (String)**\* - Supported as parameter to help searching email quicker.

## **Properties**

**Input**

* **Labels (String)** - Specifies the labels that you want to include in your search parameters. This property supports a Collection labels.
* **MaxResults (Int32)** - The maximum number of emails that you want to return. This property supports Int32 variables and Int32 formatted values. The default value is 30.
* **SearchExpression (String)** - The search parameters that you want to use to get mail messages. This property supports String variables and string formatted values

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [5082342394] Get Mail Messages

**Options**

* **MarkAsRead (Checkbox)** - If checked, emails are set as read when received.

**Output**

* **Emails (GmailMessages)** - The search results. This property supports GmailMessages[] array variables
