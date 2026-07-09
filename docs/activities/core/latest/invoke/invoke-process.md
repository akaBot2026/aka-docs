---
id: invoke-process
title: "Invoke Process"
sidebar_label: "Invoke Process"
sidebar_position: 6
description: "invoke-process activity documentation."
displayed_sidebar: activitiesSidebar
---
# Invoke Process

RCA.Activities.Core.InvokeProcess

## **Description**

With this activity, you can invoke a process using process directory of process name. 

![invoke-process](/static/img/invoke-process.png)

(\* for Mandatory)

## **In the body of activity**

* **Process Directory** - The directory of the process to be invoked.
* **Process Name** - The name of the published or downloaded process to be invoked.

## **Properties**

**Common**

* **Continue On Error (Boolean)**- This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False.  
  **True** - allows the rest of the process to continue the execution even an error occurs within the activity.  
  **False (default)** - blocks the process from continuing the execution.
* **Timeout (TimeSpan)** - Maximum amount of time to wait for the invoked process to finish before throwing an error.  
  E.g: 00:05:00

**Input**

* **Process Directory (String)** - Process directory of the process to be invoked. Use this when you want to invoke a process by its local directory.
* **Process Name (String)** - Process name of the process to be invoked. Use this when you want to invoke a published or downloaded process by name.

**Misc**


* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Invoke Process

**Options**

* **Arguments (Dictionary\<String, Argument\>)** - A dictionary of arguments to be passed into or returned from the invoked process. In and In/Out arguments are sent to the invoked process. Out and In/Out arguments can receive values returned by the invoked process.
* **Throws On Process Exception (Boolean)** - Specifies whether the activity should throw an exception when an exception occurs within the invoked process. Default value: True.

**Output**

* **Exception Message (String)** - Exception message from process execution.
* **Exit Code (Int32)** - Integer code returned from process execution.
