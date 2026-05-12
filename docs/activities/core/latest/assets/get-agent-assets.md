---
id: get-agent-assets
title: Get Agent Assets
sidebar_label: Get Agent Assets
sidebar_position: 2
description: The introduction of the activity package.
displayed_sidebar: activitiesSidebar
---

# Get Agent Asset

RCA.Core.Activities.GetAgentAsset

## **Description**

This activity allows you to retrieve a specific akaBot Center asset by using a provided Asset Name.

![image-20220506112627-1.png](/img/abb503_image-20220506112627-1.png)

\* indicates required fields.

## **Properties**

**Common**

* **Continue On Error (Boolean)**: Specifies whether the automation should continue even if an error occurs. Only True or False values are available.  
  True: Continues the remaining process execution even if an error occurs within the activity.  
  False (default): Stops the process execution when an error occurs.
* **Timeout (Int32)**: The maximum time (in milliseconds) to wait for the activity to complete before throwing an error. If the timeout is reached, the activity stops execution. The default value is 30000 (milliseconds).  
  Example: 30000

**Input**

* **Asset Name (String)**\*: The name of the asset to be retrieved.  
  Example: "Asset_group1"

**Others**

* **Private (Checkbox)**: If selected, the activity data will not be logged. Use this option to protect sensitive information.
* **Display Name (String)**: The name of the activity. You can edit it to better organize and structure your workflow.  
  Example: Get Agent Asset

**Output**

* **Asset Value (OutArgument)**: The retrieved asset stored in a variable.
