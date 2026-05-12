---
id: excel-append-range
title: "Excel Append Range"
sidebar_label: "Excel Append Range"
sidebar_position: 1
description: "Excel Append Range activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Append Range

RCA.Activities.Excel.ExcelAppendRange

## **Description**

This activity allows adding information stored in a Data Table variable to the end of a specified Excel spreadsheet.

![image-20220505131238-1.jpeg](/img/ef8ea0_image-20220505131238-1.jpeg)

(\* is mandatory)

## **In the body of activity**

* **Sheet Name** - The name of the sheet in which to add the specified range. By default, this is filled in with "Sheet1". Only String variables and strings are supported.  
  E.g: “ClientNames”
* **Data Table** - The data to be added. This field supports only DataTable variables.

## **Properties**

**Input**

* **Sheet Name (String)**\* - The name of the sheet in which to add the specified range. By default, this is filled in with "Sheet1." Only String variables and strings are supported.  
  E.g: “ClientNames”
* **Data Table (DataTable)**\* - The data to be added. This field supports only DataTable variables.

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Excel Append Range
