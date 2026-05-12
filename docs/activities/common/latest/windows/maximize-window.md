---
id: maximize-window
title: "Maximize Window"
sidebar_label: "Maximize Window"
sidebar_position: 5
description: "Maximize Window activity documentation."
displayed_sidebar: activitiesSidebar
---
# Maximize Window

RCA.Activities.Common.MaximizeWindow

## **Description**

The Maximize Window activity allows you to select a window and maximize it.

![image-20220505134246-1.png](/img/image-20220505134246-1.png)

\* indicates required fields.

## **Properties**

**Common**

* **Continue On Error (Boolean)**: A Boolean variable that has two possible values: True or False.  
  True: Allows the rest of the process to continue execution even if an error occurs within the activity.  
  False: Stops the process from continuing execution when an error occurs.

**Input**

* **Window**: Use a WindowApp variable as input.

**Misc**

* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security requirements before using this property.
* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.  
  Example: `[3424325] Maximize Window`