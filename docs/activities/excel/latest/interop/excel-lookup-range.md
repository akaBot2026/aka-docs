---
id: excel-lookup-range
title: "Excel LookUp Range"
sidebar_label: "Excel LookUp Range"
sidebar_position: 13
description: "Excel LookUp Range activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel LookUp Range

RCA.Activities.Excel.ExcelLookUpRange

## **Description**

Searches in a specified range for the coordinates of a cell with a certain value and returns them as String variables.

![image-20220505142148-1.png](/img/c5b6ab_image-20220505142148-1.png)

(\* for mandatory)

## **In the body of activity**

* **Sheet name (String)**\* - The name of the sheet in the workbook where you want to search.  
  E.g: "Sheet1"
* **Range (String)**\* - The range where you want to perform the search.  
  E.g: "A1:H5"
* **Value (String)** - The value that you want to search for.  
  E.g: "abc"

## **Properties**

**Destination**

**Input**

* **Range (String)**\* - The range where you want to perform the search.  
  E.g: "A1:H5"
* **Sheet name (String)**\* - The name of the sheet in the workbook where the change must be made.  
  E.g: "Sheet1"
* **Value (String)** - The value that you want to search for.  
  E.g: "abc"

**Misc**

* **Public (Boolean)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [759682936] Excel Lookup Range

**Option**

* **Look in (Dropdown List)**- Select type of value to look up into range that has been selected: Formulas, Values, Comments

**Output**

* **Result (String)**- The cell where the specified value is found.
