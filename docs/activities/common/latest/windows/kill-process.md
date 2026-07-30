---
id: kill-process
title: "Kill Process"
sidebar_label: "Kill Process"
sidebar_position: 11
description: "Kill Process activity documentation."
displayed_sidebar: activitiesSidebar
---
# Kill Process

RCA.Activities.Common.KillProcess

## **Description**

The Kill Process activity terminates a specified Windows process. You can target a process by a Process object or by process name. When using Process Name, you can also limit which matching processes are terminated by user, session, or desktop.

![image-kill-process.png](/static/img/image-kill-process.png)

(\*For Mandatory)

## **In the body of activity**

* **Process (Process)** - A Process type object describing the process to be closed.
* **Process Name (String)** - The name of the process to be closed. You can enter the name with or without the `.exe` extension.  
  E.g: `"notepad"` or `"notepad.exe"`

**Note:** At least one of **Process** or **Process Name** must be provided.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.

**Input**

* **Apply On (KillProcessApplyOn)** - Specifies the scope for process termination when using Process Name. Available options:
  * **All** (default) - Terminates matching processes regardless of user, session, or desktop.
  * **OnlyCurrentUser** - Terminates only processes owned by the current user.
  * **OnlyCurrentSession** - Terminates only processes in the current Windows session.
  * **OnlyCurrentDesktop** - Terminates only processes running on the current desktop.
* **Process (Process)** - A Process type object describing the process to be closed.
* **Process Name (String)** - The name of the process to be closed.  
  E.g: `"chrome"`

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.