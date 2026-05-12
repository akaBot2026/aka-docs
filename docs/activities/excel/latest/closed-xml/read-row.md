---
id: read-row
title: "Read Row"
sidebar_label: "Read Row"
sidebar_position: 4
description: "Read Row activity documentation."
displayed_sidebar: activitiesSidebar
---
# Read Row

RCA.Activities.Excel.ReadRow

## **Description**

Reads the values from a row beginning with the cell specified in the StartingCell field, and stores it in an IEnumerable variable.

![image-20220505140253-1.png](/img/e22348_image-20220505140253-1.png)

(\*for mandatory)

## **In the body of activity**

* **Workbook Path (String)**\* - The path of the Excel file you want to read.  
  E.g: “C:\FolderName\SaleReport.xlsx”
* **Sheet name (String)**\* - The sheet you want to read.  
  E.g: "Sheet1"
* **Starting Cell (String)**\* - The cell from which to start extracting the row data. By default, this is filled in with "A1".  
  E.g: "A1"

## **Properties**

**Input**

* **Sheet name (String)**\* - The sheet you want to read.  
  E.g: "Sheet1"
* **Starting Cell (String)**\* - The cell from which to start extracting the row data. By default, this is filled in with "A1".  
  E.g: "A1"
* **Workbook Path (String)**\* - The path of the Excel file you want to read.  
  E.g: “C:\FolderName\SaleReport.xlsx”

**Misc**

* **Public (Boolean)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [841596479] Read Row

**Options**

* **Preserve Format (Boolean)**- Selecting this check box keeps the formatting of the row that you want to read. By default, the check box is cleared.

**Output**

* **Result (IEnumerable) -** Stores the information from the specified spreadsheet row in an IEnumerable variable.
