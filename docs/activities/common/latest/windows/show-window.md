---
id: show-window
title: "Show Window"
sidebar_label: "Show Window"
sidebar_position: 10
description: "Show Window activity documentation."
displayed_sidebar: activitiesSidebar
---
# Show Window

RCA.Activities.Common.ShowWindow

## **Description**

The Show Window activity allows you to bring a specified window to the front.

![image-20230417163559-1.png](/img/image-20230417163559-1.png)

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
  Example: `[3424325] Show Window`