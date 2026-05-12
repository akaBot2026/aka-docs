---
id: excel-get-workbook-sheet
title: "Excel Get Workbook Sheet"
sidebar_label: "Excel Get Workbook Sheet"
sidebar_position: 7
description: "Excel Get Workbook Sheet activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Get Workbook Sheet

RCA.Activities.Excel.ExcelGetWorkbookSheet

## **Description**

This activity allows you to look for a sheet based on its index and returns its name as a String variable. be used in Excel Application Scope Activity.

![image-20220505132249-2.jpeg](/img/71bc9c_image-20220505132249-2.jpeg)

(\* for mandatory)

## **Properties**

**Input**

* **Index (Int)\***- The index of the sheet that you want to retrieve. This field supports only integers and Int32 variables.  
  E.g: 2

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Get Workbook Sheet

**Output**

* **Sheet (String)** - List of string that contains sheet names. It is written by their index order.
