---
id: read-column
title: "Read Column"
sidebar_label: "Read Column"
sidebar_position: 2
description: "Read Column activity documentation."
displayed_sidebar: activitiesSidebar
---
# Read Column

RCA.Activities.Excel.ReadColumn

## **Description**

Reads the values from a column beginning with the cell specified in the StartingCell field, and stores it in an IEnumerable variable.

![image-20220505140503-2.png](/static/img/b6579d_image-20220505140503-2.png)

(\* for mandatory)

## **In the body of activity**

* **Workbook Path (String)**\* - The path of the Excel file you want to read.  
  E.g: “C:\FolderName\SaleReport.xlsx”
* **Sheet name (String)**\* - The sheet you want to read.  
  E.g: "Sheet1"
* **Starting Cell (String)**\* - The cell from which to start extracting the column data. By default, this is filled in with "A1".  
  E.g: "A1"

## **Properties**

**Input**

* **Sheet name (String)**\* - The sheet you want to read.  
  E.g: "Sheet1"
* **Starting Cell (String)**\* - The cell from which to start extracting the column data. By default, this is filled in with "A1".  
  E.g: "A1"
* **Workbook Path (String)**\* - The path of the Excel file you want to read.  
  E.g: “C:\FolderName\SaleReport.xlsx”

**Misc**

* **Public (Boolean)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [482156710] Read Column

**Options**

* **Preserve Format (Boolean)**- Selecting this check box keeps the formatting of the column that you want to read. By default, the check box is cleared.

**Output**

* **Result (IEnumerable)**- Stores the information from the specified spreadsheet column in an IEnumerable variable.
