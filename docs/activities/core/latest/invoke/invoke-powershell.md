---
id: invoke-powershell
title: "Invoke PowerShell"
sidebar_label: "Invoke PowerShell"
sidebar_position: 4
description: "Invoke PowerShell activity documentation."
displayed_sidebar: activitiesSidebar
---
# Invoke PowerShell

RCA.Activities.Core.InvokePowerShell

## **Description**

With this activity, you can synchronously invoke Powershell Command, optionally passing it a list of input arguments.

![image-20220505161911-1.png](/img/101339_image-20220505161911-1.png)

(\* for Mandatory)

## **In the body of activity**

* **Command Text (String)**- The PowerShell command that is to be executed.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.

**Input**

* **Command Text (String)**\* - The PowerShell command that is to be executed.
* **Input (PowershellObject)**- A collection of PSObjects that are passed to the writer of the pipeline used to execute the command. Can be the output of another invoke PowerShell activity.
* **Parameters** - A dictionary of PowerShell command parameters

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [089089274] Invoke PowerShell
* **Is Script (Checkbox)**- Specifies if the command text is a script
* **PowerShell Variables (String)** - A dictionary of named objects that represent variables used within the current session of the command.
* **TypeArgument**- Set type for the argument

**Output**

* **Output (PowershellObject)**- A collection of TypeArgument object returned by the execution of the command.
