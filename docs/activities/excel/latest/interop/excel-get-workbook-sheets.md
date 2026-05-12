---
id: excel-get-workbook-sheets
title: "Excel Get Workbook Sheets"
sidebar_label: "Excel Get Workbook Sheets"
sidebar_position: 8
description: "Excel Get Workbook Sheets activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Get Workbook Sheets

RCA.Activities.Excel.ExcelGetWorkbookSheets

## **Description**

This activity allows you to look for a sheet based on its index and returns its name as a String variable. This only can be used in Excel Application Scope Activity.

![image-20220505132503-1.jpeg](/img/b08820_image-20220505132503-1.jpeg)

(\* for mandatory)

## **Properties**

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Get Workbook Sheets

**Output**

* **Sheet (List< String >)**- List of string that contains sheet names. It is written by their index order. Should assign to a variable.