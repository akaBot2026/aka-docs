---
id: restore-window
title: "Restore Window"
sidebar_label: "Restore Window"
sidebar_position: 9
description: "Restore Window activity documentation."
displayed_sidebar: activitiesSidebar
---
# Restore Window

RCA.Activities.Common.RestoreWindow

## **Description**

The Restore Window activity allows you to restore a window to its previous size and position (the size before it was minimized or maximized).

![image-20230417163410-1.png](/img/image-20230417163410-1.png)

\* indicates required fields.

## **Properties**

**Common**

* **Continue On Error (Boolean)**: A Boolean variable that has two possible values: True or False.  
  True: Allows the rest of the process to continue execution even if an error occurs within the activity.  
  False: Stops the process from continuing execution when an error occurs.

**Input**

* **Window (WindowApp)**\*: The WindowApp instance used to identify the target window.

**Misc**

* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security requirements before using this property.
* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.  
  Example: `[3424325] Restore Window`