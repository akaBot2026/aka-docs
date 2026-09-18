---
id: connection-scope
title: "Connection Scope"
sidebar_label: "Connection Scope"
sidebar_position: 1
description: "Connection Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# Connection Scope

RCA.Activities.PCOMM.ConnectionScope

## **Description**

The Connection Scope activity establishes a new session connection (or attaches to an existing one) with Personal Communications (PCOMM) and executes child activities within this scope.

![connection-scope](/static/img/connection-scope.png)

(\* is mandatory)

## **In the body of activity**

* **Do** - The sequence of activities to execute within the PCOMM connection scope.

## **Properties**

**Input**

* **Connection Name (String)*** - The unique letter identifier (A-Z) for the terminal session. This ID is used by other activities to target this specific connection.
* **Profile Path (String)** - The full path to the Personal Communications workstation profile (`.ws` file). Both String variables and absolute paths are supported.
* **Window State (WINSTATE)** - The initial display state of the emulator window.
  * `RESTORE` - Restores the window to its original size and position.
  * `MAX` - Maximizes the window to full screen.
  * `MIN` - Minimizes the window to the taskbar.
  * `HIDE` - Hides the window completely (runs the session in the background).

**Note:** To create the `.ws` profile file used in **Profile Path**, open **IBM Personal Communications**, create a new session, enter the host name (or IP address) and port, and select the terminal type (**3270** or **5250**). Then use **Save As** to save the session as a `.ws` file. In this **Connection Scope** activity, enter any unused letter (A-Z) as the **Connection Name**, and set **Profile Path** to the location of the `.ws` file you just created. For details, see [IBM Personal Communications - Creating and Configuring Sessions](https://www.ibm.com/docs/en/personal-communications/13.0.0?topic=sessions-creating-configuring).

**Option**

* **Close When Complete (Boolean)** - If selected, automatically closes the connection session when all child activities inside the scope finish executing or if an error occurs.

**Misc**

* **Public (Checkbox)** - If selected, logs the execution details and variables of this activity. Consider data security requirements before enabling this option, as sensitive details could be written to the logs.
* **Display Name (String)** - The name displayed for this activity in the designer panel. You can edit this name to organize and structure your workflow better.  
  E.g: [3424325] Connection Scope

