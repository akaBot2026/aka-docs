---
id: get-secure-credential
title: "Get Secure Credential"
sidebar_label: "Get Secure Credential"
sidebar_position: 4
description: "Get Secure Credential activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Secure Credential

RCA.Activities.Core.GetSecureCredential

## **Description**

The Get Secure Credential activity allows you to retrieve the credentials from a specified target from the Windows Credential Manager based on Credential and Persistence Type. As it is a Secure Credential, it always retrieves a secure string password and a string username. And it stores the success/fail result along with the username and password.

![image-20220505152006-1.png](/img/561e25_image-20220505152006-1.png)

(\* for Mandatory)

## **Properties**

**Input**

* **Credential Type**  
  **・None**: No credential type is applied.  
  **・Generic**: Stores any credential. Credential is stored under Generic Credential section in Windows Credential Manager.  
  **・DomainPassword**: Specific to Microsoft authentication packages and can be stored under Windows Credential section in Windows Credential Manager.  
  **・DomainCertificate**: Stores the credential for Certificates only and can be stored under “Certificate based Credential” section in Credential Manager.  
  **・DomainVisiblePassword**: A password credential specific to Microsoft authentication packages (Passport).
* **Credential Name(String)**\* - Name of the credentials stored in windows credentials.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: “Credential function”

**Output**

* **Password (String)** - Output password that you can declare the variables with type = ‘String’ for further uses.
* **Username (String)** - Output username that you can declare the variables with type = ‘String’ for further uses.
* **Result (Boolean)** - Result of the activity as a Boolean variable: True or False.
