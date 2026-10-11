---
id: delete-exchange-mail-message
title: "Delete Exchange Mail Message"
sidebar_label: "Delete Exchange Mail Message"
sidebar_position: 5
description: "Delete Exchange Mail Message activity documentation."
displayed_sidebar: activitiesSidebar
---
# Delete Exchange Mail Message

RCA.Activities.Mail.DeleteExchangeMailMessage

## **Description**

This activity allows you to delete an email message from Exchange.

![delete-mail-message](/static/img/delete-mail-message.png)

(\* is mandatory)

## **Properties**

**Connection**

Leave these properties empty when the activity is inside [Exchange Scope](/docs/activities/exchange/latest/activities/exchange-scope.md). Outside a scope, fill in **Server** or **Email Auto discover** (not both).

* **Email Auto discover (String)** - An email address on the Exchange server. akaBot finds the server automatically (the server must have Autodiscover enabled).  
  E.g: "user@company.com"
* **Exchange Version (DropDownlist)** – The lowest Exchange version you need to support. For Exchange 2013 or later, select Exchange2013_SP1.
* **Server (String)** - The EWS address of the Exchange server.  
  E.g: "https://mail.company.com/EWS/Exchange.asmx"

**Mail**

* **Mail Message (MailMessage)**\* - The MailMessage object retrieved from the Get Exchange Email Messages activity that is to be deleted.

**Logon**

Leave these properties empty when the activity is inside Exchange Scope.

* **Domain (String)** - The Windows domain of the account.  
  E.g: MYDOMAIN
* **Password (String)** - The password of the Exchange account. Required outside Exchange Scope.
* **User (String)** - The user name of the Exchange account. Required outside Exchange Scope.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Delete Exchange Mail Message

**Options**

* **Delete Mode (DropDownlist)** - Specifies how the message is deleted. It contains: HardDelete, SoftDelete, MoveToDeletedItems.
  * **HardDelete** - The message is permanently deleted.
  * **SoftDelete** - The message is removed from all folders, but your IT administrator can still recover it for a limited time.
  * **MoveToDeletedItems** (default) - The message is moved to the Deleted Items folder.
