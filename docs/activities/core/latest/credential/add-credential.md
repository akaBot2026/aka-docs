---
id: add-credential
title: "Add Credential"
sidebar_label: "Add Credential"
sidebar_position: 1
description: "Add Credential activity documentation."
displayed_sidebar: activitiesSidebar
---
# Add Credential

RCA.Activities.Core.AddCredential

## **Description**

The activity allows you to stores a specified credential in the Windows Credential Manager with a custom persistence type, and returns a boolean value to let you know if the process was successful or not.

![image-20220505151253-1.png](/img/651c75_image-20220505151253-1.png)

(\* for Mandatory)

## **Properties**

**Input**

* **Credential Type** - The type of credential to be added. The following options are available:  
  **・None**: No credential type is applied.  
  **・Generic**: Stores any credential. Credential is stored under Generic Credential section in Windows Credential Manager.  
  **・DomainPassword**: A password credential that is specific to Microsoft authentication packages and can be stored under Windows Credential section in Windows Credential Manager.  
  **・DomainCertificate**: Stores the credential for Certificates only and can be stored under “Certificate based Credential” section in Credential Manager.  
  **・DomainVisiblePassword**: A password credential specific to Microsoft authentication packages (Passport).
* **PersistanceType** - Defines the rules according to which the given credentials are stored. The following options are available:  
  **・Session**: The credentials are stored in the Windows Credential Manager only for the life of the current logon session. They are not visible to other logon sessions of this same user. They do not exist after this user logs off and back on.  
  **・Local Computer**: The credentials persists for all subsequent logon sessions on this same computer. They are visible to other logon sessions of this same user on the same machine, but not to logon sessions for this user on other machines.  
  **・Enterprise**: The credentials persists for all subsequent logon sessions on the same machine. They are visible to other logon sessions of this same user on the same machine and to logon sessions for this user on other computers.
* **Credential Name (String)**\* - Name of the credentials stored in windows credentials.
* **Username (String)**\* - Username for the credential.
* **Password (String)**\* - Password for the credential.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Add Credentials

**Output**

* **Result (Boolean)** - A Boolean variable that indicates whether the given credentials were successfully stored in the Windows Credential Manager.
