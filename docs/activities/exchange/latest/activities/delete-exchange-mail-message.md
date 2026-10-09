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

* **Email Auto discover (String)**\* - Searches automatically for an Exchange server by using an email address from that server. This works only if the Exchange server has Autodiscover enabled.  
  E.g: "http(s)://autodiscover.domain/EWS/Exchange.asmx"
* **Exchange Version (DropDownlist)** – Specifies the lowest version of the Exchange server that is used. The options displayed in this field range from 2007 to the 2013 version. Please note that the version number indicates the lowest level of service you support. This means that if you have a 2016 exchange server, you can select the Exchange2013 option.
* **Server (String)**\* - The email server host that is to be used and the format should be like the example below  
  E.g: "https://outlook.office365.com/EWS/Exchange.asmx"

**Mail**

* **Mail Message (MailMessage)**\* - The MailMessage object retrieved from the Get Exchange Email Messages activity that is to be deleted.

**Logon**

* **Domain (String)**\* - The Active Directory domain to connect to.  
  E.g: Mydomain.com
* **Password (String)**\* - The Password of the Exchange account to be used.
* **User (String)**\* - The User of the Exchange account to be used.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Delete Exchange Mail Message

**Options**

* **Delete Mode (DropDownlist)** - Specifies how the message is deleted. It contains: HardDelete, SoftDelete, MoveToDeletedItems.
  * **HardDelete** - The message is permanently deleted.
  * **SoftDelete** - Similar to sending the item to the Recycle Bin and then emptying it.
  * **MoveToDeletedItems** - Similar to sending the item to the Recycle Bin.
