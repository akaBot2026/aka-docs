---
id: hide-window
title: "Hide Window"
sidebar_label: "Hide Window"
sidebar_position: 4
description: "Hide Window activity documentation."
displayed_sidebar: activitiesSidebar
---
# Hide Window

RCA.Activities.Common.HideWindow

## **Description**

The Hide Window activity allows you to make a window completely invisible.

![image-20230417162304-1.png](/img/image-20230417162304-1.png)

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
  Example: `[3424325] Hide Window`