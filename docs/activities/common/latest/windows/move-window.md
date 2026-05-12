---
id: move-window
title: "Move Window"
sidebar_label: "Move Window"
sidebar_position: 7
description: "Move Window activity documentation."
displayed_sidebar: activitiesSidebar
---
# Move Window

RCA.Activities.Common.MoveWindow

## **Description**

The Move Window activity allows you to change the position and size of a selected window.

![image-20230417163133-1.png](/img/image-20230417163133-1.png)

\* indicates required fields.

## **Properties**

**Common**

* **Continue On Error (Boolean)**: A Boolean variable that has two possible values: True or False.  
  True: Allows the rest of the process to continue execution even if an error occurs within the activity.  
  False: Stops the process from continuing execution when an error occurs.

**Input**

* **Height (Int32)**\*: The new height of the window. This property supports both positive and negative integers.  
  Example: `638`
* **Width (Int32)**\*: The new width of the window. This property supports both positive and negative integers.  
  Example: `468`
* **Window (WindowApp)**\*: The WindowApp instance used to identify the target window.
* **X (Int32)**\*: The new X position of the window. This property supports both positive and negative integers.  
  Example: `20`
* **Y (Int32)**\*: The new Y position of the window. This property supports both positive and negative integers.  
  Example: `20`

**Misc**

* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security requirements before using this property.
* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.  
  Example: `[3424325] Move Window`