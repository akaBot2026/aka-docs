---
id: window-scope
title: "Window Scope"
sidebar_label: "Window Scope"
sidebar_position: 2
description: "Window Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# Window Scope

RCA.Activities.Windows.WindowScope

## **Description**

The Window Scope activity allows you to attach to an already opened window and execute activities within the window.

![image-20220505165322-1.png](/img/68deb8_image-20220505165322-1.png)

(\*For mandatory)

## **In the body of activity**

* **Do**- The activities you want to execute within the application.

## **Properties**

**Common**

* **Continue On Error (Boolean)**-A Boolean variable has two possible values: True or False  
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.  
  - False: blocks the process from continuing the execution.

**Input**

* **Process (Process)**- Input process for the Window Scope to attach with type = ‘Process’.
* **Window (WindowApp)** - Input WindowApp for the Window Scope to attach with type = ‘WindowApp’.

**Misc**

* **Public (Checkbox)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [594703..] Window Scope

**Options**

* **Automation Base (Dropdown List)** - Specify the version of Automation library. This option goes together with Process argument.

**Output**

* **Output Window (WindowApp)**- Output of the activity with type = ‘WindowApp’. Output variable can be used in another Window Scope or Use Window property of other Window Activities. Not allow whitespace in the output’s name.
