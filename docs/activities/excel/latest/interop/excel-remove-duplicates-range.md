---
id: excel-remove-duplicates-range
title: "Excel Remove Duplicates Range"
sidebar_label: "Excel Remove Duplicates Range"
sidebar_position: 16
description: "Excel Remove Duplicates Range activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Remove Duplicates Range

RCA.Activities.Excel.ExcelRemoveDuplicatesRange

## **Description**

Deletes all the rows that are duplicated in a specified range.

![image-20220505141832-1.png](/img/1a55d0_image-20220505141832-1.png)

(\*for mandatory)

## **In the body of activity**

* **Sheet name (String)**\* - The name of the sheet in the workbook where the change must be made.  
  E.g: "Sheet1"
* **Range (String)** - The range from which you want to remove duplicate rows.  
  E.g: "A1:H5"

## **Properties**

**Input**

* **Range (String)** - The range from which you want to remove duplicate rows.  
  E.g: "A1:H5"
* **Sheet name (String)**\* - The name of the sheet in the workbook where the change must be made.  
  E.g: "Sheet1"

**Misc**

* **Public (Boolean)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [464936660] Excel Remove Duplicates Range
