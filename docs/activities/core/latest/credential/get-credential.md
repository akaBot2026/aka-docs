---
id: get-credential
title: "Get Credential"
sidebar_label: "Get Credential"
sidebar_position: 3
description: "Get Credential activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Credential

RCA.Activities.Core.GetCredential

## **Description**

This activity allows you to retrieve the credentials from a specified target from the Windows Credential Manager as a secure string (password) and a string (username). Additionally, a boolean value is returned to let you know if the process was successful or not.

![image-20220505151742-1.png](/img/4e589c_image-20220505151742-1.png)

(\* for Mandatory)

## **Properties**

**Input**

* **Credential Type** - The type of credential that your want to retrieve. The following options are available:  
  **・None**: No credential type is applied.  
  **・Generic**: Retrieve any credential. Credential is retrieve from Generic Credential section in Windows Credential Manager.  
  **・DomainPassword**: A password can be retrieved from Windows Credential section in Windows Credential Manager.  
  **・DomainCertificate**: Retrieves the credential for Certificates only from “Certificate based Credential” section in Credential Manager.  
  **・DomainVisiblePassword**: A password credential specific to Microsoft authentication packages (Passport).
* **Credential Name (String)**\* - The name of the credentials that you want to retrieve from windows credentials.

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Get Credentials

**Output**

* **Password (String)**\* - The password retrieved for the specified target, as a secureString variable.
* **Username (String)**\* - The username retrieved for the specified target, as a string variable.
* **Result (Boolean)** - A Boolean variable that indicates whether the given credentials were successfully get from Windows Credential Manager.
