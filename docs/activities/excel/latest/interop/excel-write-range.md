---
id: excel-write-range
title: "Excel Write Range"
sidebar_label: "Excel Write Range"
sidebar_position: 24
description: "Excel Write Range activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Write Range

RCA.Activities.Excel.ExcelWriteRange

## **Description**

This activity allows you to write the data from a DataTable variable in a spreadsheet starting with the cell indicated in the StartingCell field. If the starting cell isn't specified, the data is written starting from the A1 cell. If the sheet does not exist, a new one is created with the value specified in the Sheetname property. All cells within the specified range are overwritten. Changes are immediately saved. Can only be used in the Excel Application Scope activities.

![image-20220505114134-2.jpeg](/img/46cc2c_image-20220505114134-2.jpeg)

(\* is mandatory)

## **In the body of activity**

* **Sheet Name**- The sheet you want to write on. By default, this is filled in with "Sheet1." Only String variables and strings are supported. E.g: “Sheet1”
* **Starting Cell**- The cell from which to start writing data. Only string variables and strings are supported.  
  E.g: “A10”

* **Data Table** - The data that you want to write to the specified range, as a DataTable variable. Only DataTable variables are supported.

## **Properties**

**Input**

* **Data Table (DataTable)**\* - The data that you want to write to the specified range, as a DataTable variable. Only DataTable variables are supported.
* **Sheet Name (String)\***- The sheet you want to write on. By default, this is filled in with "Sheet1." Only String variables and strings are supported.  
  E.g: “Clients’ Data”
* **Starting Cell (String)\***- The cell from which to start writing data. Only string variables and strings are supported.  
  E.g: “A10”

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Write Range Excel

**Options**

* **Add Headers (Checkbox)**- When selected, column headers are also written to the specified range. By default, this check box is not selected.
