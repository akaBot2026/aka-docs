---
id: excel-insert-or-delete-columns
title: "Excel Insert Or Delete Columns"
sidebar_label: "Excel Insert Or Delete Columns"
sidebar_position: 10
description: "Excel Insert Or Delete Columns activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Insert Or Delete Columns

RCA.Activities.Excel.ExcelInsertOrDeleteColumns

## **Description**

Adds or removes a specified number of columns at a certain position.

![image-20220505141134-1.png](/img/74b4c9_image-20220505141134-1.png)

(\* for mandatory)

## **In the body of activity**

* **Number of columns (Int32)** - The number of columns you wish to add or remove.  
  E.g: 1
* **Position (Int32)** - The column where the insertion or removal begins.  
  E.g: 2
* **Sheet name (String)**\* - The name of the sheet in the workbook where the change must be made.  
  E.g: "Sheet1"

## **Properties**

**Destination**

* **Number of column (Int32)** - The number of columns you wish to add or remove.  
  E.g: 1
* **Position (Int32)** - The column where the insertion or removal begins.  
  E.g: 2

**Input**

* **Change Mode (Dropdown List)**- Selects whether the activity adds or removes columns.  
  **・Add**: Add columns to the document.  
  **・Delete**: Remove columns from the document.
* **Sheet name (String)**\* - The name of the sheet in the workbook where the change must be made.  
  E.g: "Sheet1"

**Misc**

* **Public (Boolean)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [038325762] Excel Insert Or Delete Columns

**Options**

* **CopyOrigin (Dropdown List)**- There are two opitons for you to format the columns: xlFormatFromLeftOrAbove or xlFormatFromRightOrBelow.
