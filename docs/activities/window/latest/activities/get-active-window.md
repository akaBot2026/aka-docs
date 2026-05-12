---
id: get-active-window
title: "Get Active Window"
sidebar_label: "Get Active Window"
sidebar_position: 4
description: "Get Active Window activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Active Window

RCA.Activities.Windows.GetActiveWindow

## **Description**

The Get Active Window enables you to get the current active window and allows you to execute multiple activities inside it.

![image-20220505165437-1.png](/img/5c849a_image-20220505165437-1.png)

(\*For mandatory)

## **In the body of activity**

* **Do** - The activities you want to execute within the current active window.

## **Properties**

**Common**

* **Continue On Error (Boolean)**-A Boolean variable has two possible values: True or False  
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.  
  - False: blocks the process from continuing the execution.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: [31233] Get Active Window

**Options**

* **Automation Base (Dropdown list)**- Specify the version of Automation library. This option goes together with Process argument (UIA2 or UIA3).

**Output**

* **Output Window (WindowApp)**\* - Output of the activity with type = ‘WindowApp’. Output variable can be used in another Window Scope or Use Window property of other Window Activities. Not allow whitespace in the output’s name.
