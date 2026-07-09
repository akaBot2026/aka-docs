---
id: start-process
title: "Start Process"
sidebar_label: "Start Process"
sidebar_position: 5
description: "start-process activity documentation."
displayed_sidebar: activitiesSidebar
---
# Start Process

RCA.Activities.Core.StartProcess

## **Description**

The Start Process activity starts an application from a file name and can pass additional arguments to the started process. The activity can run synchronously and wait for the process to exit, or run asynchronously and finish immediately after starting the process.

![start process](/static/img/start-process.png)

(\* for Mandatory)

## **In the body of activity**

* **File Name** - The file name of the application to be started.
* **Arguments** - Optional parameters used to start the process.

## **Properties**

**Common**

* **Continue On Error (Boolean)**- This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False.  
  **- True** : allows the rest of the process to continue the execution even an error occurs within the activity.  
  **- False (default)** : blocks the process from continuing the execution.

**Input**

* **Arguments (String)** - Optional string that represents the list of parameters used to start the process.
* **File Name (String)\*** - File name of the application to be started.  
  E.g: C:\Windows\System32\notepad.exe

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Start Process 

**Options**

* **Start Type (StartProcessType)** - Specifies whether the activity should wait for the application to exit or finish immediately after starting it. Supported values:  
  **- Synchronously** : waits for the started process to exit.  
  **- Asynchronously** : finishes immediately after starting the process.  
  Default value: Synchronously.
* **Timeout (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to run. If the timeout expires, the activity will terminate. 
* **Working Directory: `InArgument<String>`** - Sets the working directory for the started application. 

**Output**

* **Exit Code (Int32)** - Code returned when the started process ends (Synchronously Start Type Only).