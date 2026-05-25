---
id: gsuite-application-scope
title: "GSuite Application Scope"
sidebar_label: "GSuite Application Scope"
sidebar_position: 12
description: "GSuite Application Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# GSuite Application Scope

RCA.Activities.GSuite.GsuiteApplicationScope

## **Description**

This activity allows you to handle the connection client and authentication for GSuite activities. The GSuite activities work with the account specified in the Application Scope. Multiple authentication types are available.

![image-20220505160344-1.png](/static/img/a63f7e_image-20220505160344-1.png)

(\*For mandatory)

## **Properties**

**Api Key**

* **ApiKey (String)** - The account API key. This property supports String variables and string formatted values.

**Input**

* **Authentication Type (Dropdown List)** - A drop-down list that specifies the type of authentication you want to use to access GSuite services. The available property values are: **ApiKey, OAuthClientID**, and **ServiceAccountKey**. Depending on the authentication type selection, additional property fields may be required.
* **Services (GoogleServices)** - Available services including: Gmail and Drive. Choose a proper one to fit with activity purpose.

**OAuth Client ID (\*only if AuthenticationType value is OAuthClientID)**

* **ClientID (String)**\* - The credential ID for the user account. String variables and Strings are supported.
* **ClientSecret (String)**\* - The credential secret for the user account. String variables and Strings are supported.
* **User (String)** - The identifier assigned to an authorized user. A unique response token is generated for each identifier that can be stored for future use. String variables and Strings are supported.  
  ・This property is only applicable if the selected AuthenticationType is OAuthClientID.

**Service Account Key (\*only if AuthenticationType value is ServiceAccountKey)**

* **HasDomainWideAccount (Checkbox)**- If checked, the activity grants domain-wide access to the service account.
* **KeyPath (String)** - The path to the service account key file. This property supports String variables and string formatted values
* **KeyType (Dropdown List)** - A drop down list of JSON and P12
* **Password (String)** - Password is required if KeyType is P12. String variables and Strings are supported
* **Service Email Account (String)** - If P12 is chosen at KeyType, the email address is generated automatically.
* **User Email (String)** - If HasDomainWideAccess is checked, the service account impersonates a user from the domain; use this field to enter the impersonated user's email address.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **E.g**: [4523423424] GSuite Application Scope
