---
id: excel-read-range
title: "Excel Read Range"
sidebar_label: "Excel Read Range"
sidebar_position: 15
description: "Excel Read Range activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Read Range

RCA.Activities.Excel.ExcelReadRange

## **Description**

This activity allows you to read the value of an Excel range and store it in a DataTable variable. If the range is not specified, the whole spreadsheet is read. If the range is specified as a cell, the whole spreadsheet starting from that cell is read. Can only be used in the Excel Application Scope activity.

![image-20220505113128-1.jpeg](/img/d727f3_image-20220505113128-1.jpeg)

(\* is mandatory)

## **In the body of activity**

* **Sheet name (String)**\* - The name of the sheet in the workbook where the change must be made.  
  E.g: "Sheet1"
* **Range (String)** - The range from which you want to remove duplicate rows.  
  E.g: "A1:H5"

## **Properties**

**Input**

* **Range (String)**\* - The range that you want to read. If the range isn't specified, the whole spreadsheet is read. If the range is specified as a cell, the whole spreadsheet starting from that cell is read. Only string variables and strings are supported.  
  E.g: “A1:B2”
* **Sheet Name (String)**\* - The name of the sheet you want to read. By default, this is filled in with "Sheet1". Only String variables and strings are supported.  
  E.g: “Client list”

**Misc**

* **Public (CheckBox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **E.g**: Read Range
