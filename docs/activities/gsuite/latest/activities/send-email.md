---
id: send-email
title: "Send Email"
sidebar_label: "Send Email"
sidebar_position: 14
description: "Send Email activity documentation."
displayed_sidebar: activitiesSidebar
---
# Send Email

RCA.Activities.GSuite.SendEmail

## **Description**

This activity allows sending an email using Gmail platform

![image-20220505160452-1.png](/img/3873e9_image-20220505160452-1.png)

(\*For mandatory)

## **In the body of activity**

* **To (String)**\* - Main recipients of the email. String array variables and string array are supported.  
  E.g: [[email protected]](/cdn-cgi/l/email-protection)
* **Subject (String)** - Subject of email. String variables and String are supported.  
  E.g: Hello
* **Body (String)**\* - Content of email (Can be HTML). String variables and String are supported.  
  E.g: Hi

## **Properties**

**Attachments**

* **Attachment Collection (String)** - Path of items which could be attached and sent out.
* **Attachments (String)** - The path to the items that you want to attach in the email. This property supports a Collection of file paths.

**Input**

* **Bcc (String)**\* - Hidden recipients of the email. String array variables and string array are supported.
* **Body (String)**\* - Content of email. String variables and String are supported.  
  E.g: Hi
* **CC (String)**\* - Secondary recipients of the email. String array variables and string array are supported.
* **Subject (String)** - Subject of email. String variables and String are supported.  
  E.g: Hello
* **To (String)**\* - Main recipients of the email. String array variables and string array are supported.  
  **E.g**: [[email protected]](/cdn-cgi/l/email-protection)

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [968123123] Send Email

**Options**

* **IsDraft (Checkbox)** - If this is checked, Body is saved as a draft instead of being sent.
* **IsHTML (Checkbox)** - If this is checked, Body is need to be valid with HTML.
