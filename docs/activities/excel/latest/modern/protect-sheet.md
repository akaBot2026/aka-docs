---
id: modern-protect-sheet
title: "Protect Sheet"
sidebar_label: "Protect Sheet"
sidebar_position: 14
description: "Protect Sheet activity documentation."
displayed_sidebar: activitiesSidebar
---
# Protect Sheet

RCA.Activities.Excel.Modern.ProtectSheetX

## **Description**

This activity protects a worksheet against editing, with or without a password. It works on a whole sheet only, so **Sheet** must be a sheet reference such as `Excel.Sheet("Sheet1")`. A range or table reference is rejected. To remove the protection, use [Unprotect Sheet](./unprotect-sheet.md).

This activity must be placed inside a **Use Excel File** scope.

![The Protect Sheet activity on the canvas with Sheet = Excel.Sheet("Sheet1") and the Password field](/static/img/excel-modern-protect-sheet.png)

(\* is mandatory)

## **In the body of the activity**

* **Sheet (ExcelRangeRef)**\* - The sheet to protect. Use the **+** button to build the reference.  
  E.g: `Excel.Sheet("Sheet1")`
* **Password (String)** - See Input.

## **Properties**

**Input**

* **Sheet (ExcelRangeRef)**\* - The sheet to protect.  
  E.g: `Excel.Sheet("Sheet1")`
* **Password (String)** - The password to protect the sheet with. Leave empty to protect without a password. Prefer retrieving the password from a secure source rather than typing it into the workflow.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Protect Sheet
