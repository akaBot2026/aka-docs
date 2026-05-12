---
id: write-range
title: "Write Range"
sidebar_label: "Write Range"
sidebar_position: 6
description: "Write Range activity documentation."
displayed_sidebar: activitiesSidebar
---
# Write Range

RCA.Activities.Excel.WriteRange

## **Description**

This activity allows you to write data from a DataTable variable into a spreadsheet, starting from the cell specified in the Starting Cell field.  
If the starting cell is not specified, the data is written starting from cell `A1`.

![image-20220505135914-1.jpeg](/img/image-20220505135914-1.jpeg)

\* indicates required fields.

## **In the Body of Activity**

* **Workbook Path**: The path of the Excel file to write to.  
  Example: `"C:\FolderName\ClientList.xlsx"`
* **Sheet Name**: The name of the sheet where the data will be written. Default value is `"Sheet1"`.  
  Example: `"ClientNames"`
* **Starting Cell**: The cell from which to start writing data. Only string variables and strings are supported.
* **Data Table**: The data to write to the specified range, provided as a DataTable variable.

## **Properties**

**Input**

* **Workbook Path (String)**\*: The path of the Excel file to write to.  
  Example: `"C:\FolderName\ClientList.xlsx"`
* **Sheet Name (String)**\*: The name of the sheet where the data will be written. Default value is `"Sheet1"`.  
  Example: `"ClientNames"`
* **Starting Cell (String)**\*: The cell from which to start writing data. Only string variables and strings are supported.
* **Data Table (DataTable)**\*: The data to write to the specified range, provided as a DataTable variable.

**Options**

* **Add Headers (Checkbox)**: If selected, column headers are included when writing data. By default, this option is selected (`True`).

**Misc**

* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security requirements before using this property.
* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.  
  Example: `Write Range`