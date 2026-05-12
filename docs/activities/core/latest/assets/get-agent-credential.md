---
id: get-agent-credential
title: "Get Agent Credential"
sidebar_label: "Get Agent Credential"
sidebar_position: 2
description: "Get Agent Credential activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Agent Credential

RCA.Core.Activities.GetAgentCredential

## **Description**

This activity allows you to get a specified akaBot Center credential by using a provided Asset Name and returns a username and a secure password.

![image-20220506112654-1.png](/img/6ac24b_image-20220506112654-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**- This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even if an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Asset Name (String)**\* - The name of the asset to be retrieved.  
  E.g: “Test\_Integer”

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Get Agent Credential

**Output**

* **Password (SecureString)** – The secure password of the retrieved credential.
* **Username (String)** - The username of the retrieved credential.
