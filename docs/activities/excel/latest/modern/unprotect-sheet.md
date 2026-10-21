---
id: modern-unprotect-sheet
title: "Unprotect Sheet"
sidebar_label: "Unprotect Sheet"
sidebar_position: 15
description: "Unprotect Sheet activity documentation."
displayed_sidebar: activitiesSidebar
---
# Unprotect Sheet

RCA.Activities.Excel.Modern.UnprotectSheetX

## **Description**

This activity removes protection from a worksheet so it can be edited. It works on a whole sheet only, so **Sheet** must be a sheet reference such as `Excel.Sheet("Sheet1")`. A range or table reference is rejected.

**Note:** This is sheet protection, not the file passwords set on **Use Excel File**. A workbook can open without a password and still have protected sheets inside it.

This activity must be placed inside a **Use Excel File** scope.

![The Unprotect Sheet activity on the canvas with Sheet = Excel.Sheet("Sheet1") and the Password field](/static/img/excel-modern-unprotect-sheet.png)

(\* is mandatory)

## **In the body of the activity**

* **Sheet (ExcelRangeRef)**\* - The sheet to unprotect. Use the **+** button to build the reference.  
  E.g: `Excel.Sheet("Sheet1")`
* **Password (String)** - See Input.

## **Properties**

**Input**

* **Sheet (ExcelRangeRef)**\* - The sheet to unprotect.  
  E.g: `Excel.Sheet("Sheet1")`
* **Password (String)** - The sheet password, if one was set. Leave empty if the sheet has no password. Prefer retrieving the password from a secure source rather than typing it into the workflow.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Unprotect Sheet
