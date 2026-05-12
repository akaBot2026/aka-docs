---
id: Data Service Scope
title: "Data Service Scope"
sidebar_label: "Data Service Scope"
sidebar_position: 1
description: "Data Service Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
#  Data Service Scope

RCA.Activities.DataService.DataServiceScope

## **Description**

This scope helps to run Data Service activities

## **Properties**

* **Input**
  + **Authentication Type**: Determines the method used to authenticate with the Data Service. There are two options available: Agent and ManagedToken
  + **Data Service Client:** Re-use token of previous Data Service Scope
* **Manage Token**:
  + **Authentication Token**: If the Authentication Type is set to "Managed Token," you will need to input the token in the "Authentication Token" field. This token is required for the bot to establish a secure connection and interact with the Data Service. By providing the authentication token, the bot will be able to authenticate itself and access the Data Service successfully.
* **Misc**
  + **Display Name:** The display name of the activity
  + **Public**: If selected, the values of variables and arguments will be logged at Verbose level.
* **Output**
  + **Out Data Service Client:** The DataService Scope activities following this activity attempt to use this output to avoid re-authentication

![image-20230630131823-1.png](/img/d58a92_image-20230630131823-1.png)
