---
id: get-exchange-email-messages
title: "Get Exchange Email Messages"
sidebar_label: "Get Exchange Email Messages"
sidebar_position: 2
description: "Get Exchange Email Messages activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Exchange Email Messages

RCA.Activities.Mail.GetExchangeEmailMessage

## **Description**

Retrieves an email message from Exchange.

![image-20220505160859-1.png](/img/34f167_image-20220505160859-1.png)

(\* is mandatory)

## **Properties**

**Connection**

* **Email Auto discover (String)**\* - Searches automatically for an Exchange server by using an email address from that server. This works only if the Exchange server has Autodiscover enabled.  
  E.g: “http(s)://autodiscover.domain/EWS/Exchange.asmx”
* **Exchange Version (DropDownlist)** – Specifies the lowest version of the Exchange server that is used. The options displayed in this field range from 2007 to the 2013 version. Please note that the version number indicates the lowest level of service you support. This means that if you have a 2016 exchange server, you can select the Exchange2013 option.
* **Server (String)**\* - The email server host that is to be used and the format should be like like the example below  
  E.g: “[https://outlook.office365.com/EWS/Exchange.asmx”](https://outlook.office365.com/EWS/Exchange.asmx%E2%80%9D)

EWS

Please refer to these link to know more about EWS

1. https://docs.microsoft.com/en-us/exchange/client-developer/exchange-web-services/how-to-set-the-ews-service-url-by-using-the-ews-managed-api
2. https://docs.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2010/dd877045(v=exchg.140)

**Host**

* **Mail Folder (String)** - The mail folder from which the messages are to be retrieved.  
  E.g: “Inbox”

**Logon**

* **Domain (String)**\* - The Active Directory domain to connect to.  
  E.g: Mydomain.com
* **Password (String)**\* - The password of the Exchange account to be used.
* **User (String)**\* - The User of the Exchange account to be used.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Get Mail Exchange

**Options**

* **Get Attachments(Checkbox)**- Specifies whether to retrieve the attachments in the email message. By default, this check box is cleared.
* **Is Body Html(Checkbox)**- Specifies whether the body of the message is written in HTML format.
* **Mark as Read(Checkbox)**- Specifies whether to mark retrieved messages as read. By default, this check box is cleared.
* **Only Unread Messages (Checkbox)**- Specifies whether to retrieve only unread messages. By default, this check box is selected.
* **Order By Date (OrderByDate)** - Order mail messages by date
* **Top (Int)** - The number of messages to be retrieved starting from the top of the list.

**Output**

* **Messages (`List<MailMessage>`)** - The retrieved messages as a collection of MailMessage objects.
