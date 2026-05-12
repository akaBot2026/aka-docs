---
id: send-exchange-mail
title: "Send Exchange Mail"
sidebar_label: "Send Exchange Mail"
sidebar_position: 4
description: "Send Exchange Mail activity documentation."
displayed_sidebar: activitiesSidebar
---
# Send Exchange Mail

RCA.Activities.Mail.SendExchangeMail

## **Description**

This activity allows you to send email messages from Exchange.

![image-20220505161016-1.png](/img/30f03f_image-20220505161016-1.png)

(\* is mandatory)

## **Properties**

**Attachments**

* **Attachments Collection (`IEnumerable<String>`)** - An IEnumerable object that specifies a list of files which you want to send as attachments.
* **Attachment** - A list of string arguments that represent the attachments you want to send alongside the email.

**Connection**

* **Email Auto discover (String)**\* - Searches automatically for an Exchange server by using an email address from that server. This works only if the Exchange server has Autodiscover enabled.  
  E.g: “http(s)://autodiscover.domain/EWS/Exchange.asmx”
* **Exchange Version (DropDownlist)** – Specifies the lowest version of the Exchange server that is used. The options displayed in this field range from the 2007 to the 2013 version. Please note that the version number indicates the lowest level of service you support. This means that if you have a 2016 exchange server, you can select the Exchange2013 option.
* **Server (String)**\* - The email server host that is to be used and the format should be like like the example below  
  E.g: “[https://outlook.office365.com/EWS/Exchange.asmx”](https://outlook.office365.com/EWS/Exchange.asmx%E2%80%9D)

  EWSPlease refer to these link to know more about EWS

  1. https://docs.microsoft.com/en-us/exchange/client-developer/exchange-web-services/how-to-set-the-ews-service-url-by-using-the-ews-managed-api
  2. https://docs.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2010/dd877045(v=exchg.140)

**Forward**

* **Mail Message (MailMessage)**- The message to be forwarded. This field only supports MailMessage objects.

**Logon**

* **Domain (String)\***- The Active Directory domain to connect to.  
  E.g: Mydomain.com
* **Password (String)**\* - The Password of the Exchange account to be used.
* **User (String)**\* - The User of the Exchange account to be used.

**Mail**

* **Body (String)**- The body of the email message.
* **Subject(String)** - The subject of the email message.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Send Exchange Mail

**Options**

* **Is Body Html (Checkbox)** - Specifies whether the body of the message is written in HTML format.
* **Is Draft (Checkbox)**- Specifies whether the message should be saved as a draft.
* **Save Copy (Checkbox)** - Specifies whether to save a copy of the email in the Sent folder. By default, this check box is cleared.

**Receiver**

* **Bcc (String)**- The hidden recipients of the email message.
* **Cc (String)** - The secondary recipients of the email message.
* **To (String)**\* - The main recipients of the email message.
