---
id: excel-copy-sheet
title: "Excel Copy Sheet"
sidebar_label: "Excel Copy Sheet"
sidebar_position: 5
description: "Excel Copy Sheet activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Copy Sheet

RCA.Activities.Excel.ExcelCopySheet

## **Description**

This activity allows you to copy a sheet from a specified workbook and paste it into another specified workbook.

![image-20220505131921-1.jpeg](/img/8a46c2_image-20220505131921-1.jpeg)

(\* for mandatory)

## **Properties**

**Destination**

* **Destination File Path (String)\***- The workbook where you want to copy the sheet. If this field is left empty, the sheet is copied in the current scope workbook. This field supports only strings and String variables.  
  E.g: “C:\FolderName\FileExcel.xlsx”
* **Destination Sheet Name (String)**\* - The name you want to use for the pasted sheet. This field supports only strings and String variables.  
  E.g: “New Employee Data”

**Input**

* **Sheet Name (String)**- The name of the sheet you want to copy. By default, this is filled in with "Sheet1." Only String variables and strings are supported.  
  E.g: “Old Data”

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Copy Sheet
