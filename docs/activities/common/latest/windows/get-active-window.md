---
id: get-active-window
title: "Get Active Window"
sidebar_label: "Get Active Window"
sidebar_position: 3
description: "Get Active Window activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Active Window

RCA.Activities.Common.GetActiveWindow

## **Description**

The Get Active Window enables you to get the current active window and allows you to execute multiple activities inside it.

![image-20220505133724-1.png](/img/23ec41_image-20220505133724-1.png)

(\* is mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False  
  **- True** : allows the rest of the process to continue the execution even an error occurs within the activity.  
  **- False** : blocks the process from continuing the execution.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [3424325] Get Active Window

**Output**

* **Application Window:** Output of the activity with type = ‘WindowApp’. Output variable can be used in another Attach Window or Use Window property of other Window Common Activities. Not allow whitespace in the output’s name.
