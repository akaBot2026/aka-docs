---
id: excel-write-cell
title: "Excel Write Cell"
sidebar_label: "Excel Write Cell"
sidebar_position: 23
description: "Excel Write Cell activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Write Cell

RCA.Activities.Excel.ExcelWriteCell

## **Description**

This activity allows writing a value or formula into a specified spreadsheet cell or a range. If the sheet does not exist, a new one is created with the name specified in the Sheet Name property. If a value exists, it is overwritten. Changes are immediately saved. Can only be used in the Excel Application Scope activities.

![image-20220505113619-1.jpeg](/img/3ef866_image-20220505113619-1.jpeg)

(\* is mandatory)

## **In the body of activity**

* **Sheet Name**- The name of the sheet in which to add the specified cell to. By default, this is filled in with "Sheet1". Only String variables and strings are supported. E.g: “ClientName”

* **Cell** - The Excel cell or range that you want to write to. If the range isn't specified, the whole spreadsheet is read. If the range is specified as a cell, the whole spreadsheet starting from that cell is read. Only string variables and strings are supported.  
  E.g: “A1:K10”
* **Value**- The value or formula that you want to be written to a cell or range. Only string variables, generic variables and strings are supported.  
  E.g: “Hello world” or “=B1+C2”

## **Properties**

**Input**

* **Cell (String)**\* - The Excel cell or range that you want to write to. If the range isn't specified, the whole spreadsheet is read. If the range is specified as a cell, the whole spreadsheet starting from that cell is read. Only string variables and strings are supported.  
  E.g: “A1:K10”
* **Sheet Name (String)**\* - The name of the sheet in which to add the specified cell to. By default, this is filled in with "Sheet1". Only String variables and strings are supported.  
  E.g: “ClientName”
* **Value (String)\***- The value or formula that you want to be written to a cell or range. Only string variables, generic variables and strings are supported.  
  E.g: “Hello world” or “=B1+C2”

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **E.g**: Excel Write Cell
