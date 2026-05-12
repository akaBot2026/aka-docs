---
id: set-agent-asset
title: "Set Agent Asset"
sidebar_label: "Set Agent Asset"
sidebar_position: 4
description: "Set Agent Asset activity documentation."
displayed_sidebar: activitiesSidebar
---
# Set Agent Asset

RCA.Core.Activities.SetAgentAsset

## **Description**

This activity allows you to update a specified Asset value that is already available on the Center by using a provided Asset Name. Notes that the Agent needs to have Edit permission to perform this activity when Set Agent Asset is triggered, the authentication context of the Agent under which it runs is being used.

![image-20220506112725-1.png](/img/6097d3_image-20220506112725-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even if an error occurs within the activity. False (default) - blocks the process from continuing the execution.

**Input**

* **Asset Name (String)**\* - The name of the asset to be retrieved.  
  E.g: “Test\_Integer”
* **Asset Value (String)**\* - The new value you want the asset to have.

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Set Agent Asset

**Output**

* **Set Success (Boolean)** – This property specifies the result of the action. Only have two possible values: True or False. Return True if the Asset value has been successfully updated; Return False if the Asset value has not been updated successfully.
