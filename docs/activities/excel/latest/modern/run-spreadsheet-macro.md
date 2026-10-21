---
id: modern-run-spreadsheet-macro
title: "Run Spreadsheet Macro"
sidebar_label: "Run Spreadsheet Macro"
sidebar_position: 16
description: "Run Spreadsheet Macro activity documentation."
displayed_sidebar: activitiesSidebar
---
# Run Spreadsheet Macro

RCA.Activities.Excel.Modern.RunSpreadsheetMacroX

## **Description**

This activity runs a macro in the workbook opened by the enclosing **Use Excel File**, which must be macro-enabled (for example an .xlsm file). The macro's return value can be stored in a variable.

The macro must be in the scope's own workbook. To run a macro stored in another workbook, open that workbook in its own **Use Excel File** scope.

This activity must be placed inside a **Use Excel File** scope.

![The Run Spreadsheet Macro activity on the canvas with Macro name = "Module1.MyMacro", and the Properties panel showing Macro parameters and Macro output](/static/img/excel-modern-run-spreadsheet-macro.png)

(\* is mandatory)

## **In the body of the activity**

* **Macro name (String)**\* - The name of the macro to run.  
  E.g: "Module1.MyMacro"

## **Properties**

**Input**

* **Macro name (String)**\* - The name of the macro to run.  
  E.g: "Module1.MyMacro"
* **Macro parameters (`IEnumerable<Object>`)** - The arguments passed to the macro, in order. Leave empty for a macro without parameters.  
  E.g: `New Object() {"North", 2024}`

**Output**

* **Macro output (Object)** - The value returned by the macro.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Run Spreadsheet Macro
