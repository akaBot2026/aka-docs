---
id: attach-window
title: "Attach Window"
sidebar_label: "Attach Window"
sidebar_position: 1
description: "Attach Window activity documentation."
displayed_sidebar: activitiesSidebar
---
# Attach Window

RCA.Activities.Common.AttachWindow

## **Description**

The Attach Window activity allows you to attach to an already opened window and execute activities within the window.

![image-20220505133620-1.png](/img/7cbd35_image-20220505133620-1.png)

(\* is mandatory)

## **In the body of activity**

* **Indicate window on screen** - Allows you to automatically attach an application by selecting its window.
* **Do** - The activities you want to execute within the application.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False  
  **- True** : allows the rest of the process to continue the execution even an error occurs within the activity.  
  **- False** : blocks the process from continuing the execution.
* **TimeoutMS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Selector (String)** - String of characters that identifies the location of the window.
* **Window (WindowApp)\***- Input WindowApp for the Attach Window to attach with type = ‘WindowApp’.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [3424325] Open Window

**Output**

* **Application Window (WindowApp)**\* - Output of the activity with type = ‘WindowApp’. Output variable can be used in another Attach Window or Use Window property of other Common Window Activities. Not allow whitespace in the output’s name.
