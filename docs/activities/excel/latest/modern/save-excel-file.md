---
id: modern-save-excel-file
title: "Save Excel File"
sidebar_label: "Save Excel File"
sidebar_position: 17
description: "Save Excel File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Save Excel File

RCA.Activities.Excel.Modern.SaveExcelFileX

## **Description**

This activity saves the workbook opened by the enclosing **Use Excel File**. You only need it when **Save changes** is cleared on the scope, or when something other than the Excel activities (for example UI automation) has changed the file.

This activity must be placed inside a **Use Excel File** scope.

![The Save Excel File activity on the canvas showing its explanatory note](/static/img/excel-modern-save-excel-file.png)

## **In the body of the activity**

The activity body shows only a note explaining when the activity is needed. There are no fields to fill in.

## **Properties**

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Save Excel File
