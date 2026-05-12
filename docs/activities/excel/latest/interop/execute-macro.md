---
id: execute-macro
title: "Execute Macro"
sidebar_label: "Execute Macro"
sidebar_position: 25
description: "Execute Macro activity documentation."
displayed_sidebar: activitiesSidebar
---
# Execute Macro

RCA.Activities.Excel.ExecuteMacro

## **Description**

This activity allows you to execute the macro within a workbook. The Workbook file needs to be a Macro-Enabled Workbook. Changes are immediately saved. Can only be used in the Excel Application Scope activity.

![image-20220505134614-1.jpeg](/img/460a39_image-20220505134614-1.jpeg)

(\* for mandatory)

## **Properties**

**Common**

* **ContinueOnError (Boolean)** - Specifies if the automation should continue even when the activity throws an error. Boolean values (True, False) are supported only.  
  ・True - The execution of the process continues regardless of any error.  
  ・False (default) - Stops the process from continuing the execution.

**Input**

* **Macro Name (String)** - The name of the macro to be executed. Only String variables and strings are supported.  
  E.g: “Marco Number 1”
* **Macro Parameters (IEnumberable< Object >)** - Enables you to pass parameters when executing the macro. This field supports only IEnumerable variables.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: “Marco Execute”

**Output**

* **Macro Output (Object)** - The value returned by the execution of the macro, if any. This output is retrieved as Object variables.
