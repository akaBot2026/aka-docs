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

![invoke-power-shell](/static/img/invoke-power-shell.png)

(\* for Mandatory)

## **In the body of activity**

* **Command Text (String)**- The PowerShell command that is to be executed.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. 
   
   **True** - allows the rest of the process to continue the execution even an error occurs within the activity.   
  
  **False (default)** - blocks the process from continuing the execution.

**Input**

* **Command Text (String)**\* - The PowerShell command that is to be executed.
* **Input (PowershellObject)**- A collection of PSObjects that are passed to the writer of the pipeline used to execute the command. Can be the output of another invoke PowerShell activity.
* **Parameters** - A dictionary of PowerShell command parameters

### Input property usage

#### Input

Passes pipeline data into the PowerShell command/script.

Use this when input comes from another Invoke PowerShell activity output.

```powershell
$input | ForEach-Object {
    $_
}
```

```text
Input type: Collection<PSObject>
```

#### Parameters

Passes named parameter values to the PowerShell command/script.

Use this when the script uses `param(...)` or the command has named parameters.

```powershell
param($Path)

Get-ChildItem -Path $Path
```

```text
Path = "C:\Temp"
```

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [089089274] Invoke PowerShell
* **Is Script (Checkbox)**- Specifies if the command text is a script
* **PowerShell Variables (String)** - A dictionary of named objects that represent variables used within the current session of the command.

  Injects variables directly into the PowerShell runspace.

  Use this when the script references variables with `$variableName`.

  ```powershell
  Get-ChildItem -Path $folderPath
  ```

  ```text
  folderPath = "C:\Temp"
  ```

* **TypeArgument**- Set type for the argument

**Output**

* **Output (PowershellObject)**- A collection of TypeArgument object returned by the execution of the command.
