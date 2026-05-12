---
id: exchange-scope
title: "Exchange Scope"
sidebar_label: "Exchange Scope"
sidebar_position: 1
description: "Exchange Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# Exchange Scope

RCA.Activities.Mail.ExchangeScope

## **Description**

Connects to Exchange and provides a scope for other Exchange activities.

![image-20220505160823-1.png](/img/5d0b4d_image-20220505160823-1.png)

(\* is mandatory)

## **Properties**

**Existing Connection**

* **Existing Exchange Service (ExchangeService)**- Allows connecting through a pre-existing ExchangeService object from another Exchange Scope. This field supports only ExchangeService objects.

**Logon**

* **Domain (String)** - The Active Directory domain to connect to.
* **Password (String)** - The password of the Exchange account to be used.
* **User (String)** - The user of the Exchange account to be used.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Scope for Exchange activities

**New Connection**

* **Email Auto discover (String)**- Searches automatically for an Exchange server by using an email address from that server. This works only if the Exchange server has Autodiscover enabled.  
  E.g: “http(s)://autodiscover.domain/EWS/Exchange.asmx”
* **Exchange Version (DropDownlist)\***– Specifies the lowest version of the Exchange server that is used. The options displayed in this field range from 2007 to the 2013 version. Please note that the version number indicates the lowest level of service you support. This means that if you have a 2016 exchange server, you can select the Exchange2013 option.
* **Server (String)** - The email server host that is to be used and the format should be like like the example below  
  E.g: “[https://outlook.office365.com/EWS/Exchange.asmx”](https://outlook.office365.com/EWS/Exchange.asmx%E2%80%9D)

EWS

Please refer to these link to know more about EWS

1. https://docs.microsoft.com/en-us/exchange/client-developer/exchange-web-services/how-to-set-the-ews-service-url-by-using-the-ews-managed-api
2. https://docs.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2010/dd877045(v=exchg.140)

**Output**

* **Exchange Service (ExchangeService)** – The ExchangeServer object that contains the connection to the server.
