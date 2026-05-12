---
id: excel-insert-columns-table
title: "Excel Insert Columns Table"
sidebar_label: "Excel Insert Columns Table"
sidebar_position: 9
description: "Excel Insert Columns Table activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Insert Columns Table

RCA.Activities.Excel.ExcelInsertColumnsTable

## **Description**

Adds a specified column at a certain position in the table.

![image-20220505141633-1.png](/img/d68299_image-20220505141633-1.png)

(\* for mandatory)

## **In the body of activity**

* **Sheet name (String)**\* - The name of the sheet in the workbook where the change must be made.  
  E.g: "Sheet1"
* **Table name (String)** - Table name you want to insert.  
  E.g: "Table1"
* **Column name (String)** - Name of column you want to insert.  
  E.g: "Column1"

## **Properties**

**Input**

* **Column name (String)** - Name of column you want to insert.  
  E.g: "Column1"
* **Position (Int32)** - Position you want to add.
* **Sheet name (String)**\* - The name of the sheet in the workbook where the change must be made.  
  E.g: "Sheet1"
* **Table name (String)** - Table name you want to insert.  
  E.g: "Table1"

**Misc**

* **Public (Boolean)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [028225900] Excel Insert Columns Table
