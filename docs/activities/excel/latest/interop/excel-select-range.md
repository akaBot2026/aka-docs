---
id: excel-select-range
title: "Excel Select Range"
sidebar_label: "Excel Select Range"
sidebar_position: 19
description: "Excel Select Range activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Select Range

RCA.Activities.Excel.ExcelSelectRange

## **Description**

The activity allows you to select and execute a specified range from an Excel spreadsheet, in order to perform further actions.

![image-20220505133120-1.jpeg](/img/bc8598_image-20220505133120-1.jpeg)

(\* for mandatory)

## **Properties**

**Input**

* **Sheet name (String)**- The name of the sheet from which to select the specified range. By default, this is filled in with "Sheet1". Only String variables and strings are supported.
* **Range (String)**\* - The range to be selected. Only String variables and strings are supported.  
  E.g: “A1:K10”

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Select Range
