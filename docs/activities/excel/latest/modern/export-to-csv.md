---
id: modern-export-to-csv
title: "Export to CSV"
sidebar_label: "Export to CSV"
sidebar_position: 49
description: "Export to CSV activity documentation."
displayed_sidebar: activitiesSidebar
---
# Export to CSV

RCA.Activities.Excel.Modern.ExportExcelToCsvX

## **Description**

This activity exports a range, table, pivot table or sheet to a CSV file.

The activity fails with an error when the file name is empty or when the folder of the file does not exist.

This activity must be placed inside a **Use Excel File** scope.

(\* is mandatory)

## **In the body of the activity**

* **Export to file (String)**\* - The name of the new CSV file.  
  E.g: "C:\Reports\Sales.csv"
* **Data to export (ExcelRangeRef)**\* - The range, table or sheet to export. Use the **+** button to build the reference.  
  E.g: `Excel.Sheet("Sheet1")`

## **Properties**

**Input**

* **Export to file (String)**\* - The name of the new CSV file.  
  E.g: "C:\Reports\Sales.csv"
* **Data to export (ExcelRangeRef)**\* - The range, table or sheet to export.  
  E.g: `Excel.Table("Sheet1", "Table1")`

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Export to CSV

## **Example: export a sheet to CSV**

1. Inside a **Use Excel File** scope, add **Export to CSV**:
   * **Export to file**: `"C:\Reports\Sales.csv"`
   * **Data to export**: `Excel.Sheet("Sheet1")`
2. Run the workflow. The CSV file is created at the given path. The folder must already exist; otherwise the activity fails with an error.
