---
id: set-agent-credential
title: "Set Agent Credential"
sidebar_label: "Set Agent Credential"
sidebar_position: 5
description: "Set Agent Credential activity documentation."
displayed_sidebar: activitiesSidebar
---
# Set Agent Credential

RCA.Core.Activities.SetAgentCredential

## **Description**

This activity allows you to update a specified akaBot Center credential value that is already available on the Center by using a provided Asset Name. Notes that the Agent needs to have Edit permission.

![image-20220506112758-1.png](/img/86f21c_image-20220506112758-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even if an error occurs within the activity. False (default) - blocks the process from continuing the execution.

**Input**

* **Asset Name (String)**\* - The name of the asset to be retrieved.  
  E.g: “Test\_Integer”.
* **Password (String)**\* – The new password for the mentioned credential asset. This property accepts both String value and String variable  
  E.g: “Password@123” or strPassword.
* **Username (String)**\* – The new username for the mentioned credential asset. This property accepts both the String value and the String variable.  
  E.g : “AgentName” or strAgent.

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Set Agent Credential.

**Output**

* **Set Success (Boolean)** – This property specifies the result of the action. Only have two possible values: True or False. Return True if the Agent Credential has been successfully set; Return False if the Agent Credential has not been set successfully.
