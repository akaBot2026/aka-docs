---
id: excel-insert-or-delete-rows
title: "Excel Insert Or Delete Rows"
sidebar_label: "Excel Insert Or Delete Rows"
sidebar_position: 11
description: "Excel Insert Or Delete Rows activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Insert Or Delete Rows

RCA.Activities.Excel.ExcelInsertOrDeleteRows

## **Description**

Adds or removes a specified number of rows at a certain position.

![image-20220505140814-1.png](/img/16ee74_image-20220505140814-1.png)

(\* for mandatory)

## **In the body of activity**

* **Number of row (Int32)** - The number of rows you wish to add or remove.  
  E.g: 1
* **Position (Int32)** - The row where the insertion or removal begins. By default, this is filled in with 1.  
  E.g: 2
* **Sheet name (String)**\* - The name of the sheet in the workbook where the change must be made.  
  E.g: "Sheet1"

## **Properties**

**Destination**

* **Number of rows (Int32)** - The number of rows you wish to add or remove.  
  E.g: 1
* **Row Position (Int32)** - The row where the insertion or removal begins. By default, this is filled in with 1.  
  E.g: 2

**Input**

* **Change Mode (Dropdown List)**- Selects whether the activity adds or removes rows.  
  **・Add**: Add rows to the document.  
  **・Delete**: Remove rows from the document.
* **Sheet name (String)**\* - The name of the sheet in the workbook where the change must be made.  
  E.g: "Sheet1"

**Misc**

* **Public (Boolean)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [038325762] Excel Insert Or Delete Rows

**Options**

* **CopyOrigin (Dropdown List)**- There are two opitons for you to format the rows: xlFormatFromLeftOrAbove or xlFormatFromRightOrBelow
