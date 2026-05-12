---
id: export-chart
title: "Export Chart"
sidebar_label: "Export Chart"
sidebar_position: 26
description: "Export Chart activity documentation."
displayed_sidebar: activitiesSidebar
---
# Export Chart

RCA.Activities.Excel.ExcelExportChart

## **Description**

This activity allows you to export charts or graphs from a specified Excel file as images.

![image-20220505134428-1.jpeg](/img/019cc6_image-20220505134428-1.jpeg)

(\* for mandatory)

## **Properties**

**Input**

* **Image Format (DropDownList)\***- Select the file type that you want to save the exported chart/graph as. It contains 3 types: Png, Bmp and Jpg.
* **Name Contains (String)**\* - The name of the chart.  
  E.g: “Chart sale”
* **Path to Save (String)\***- Directory to save file.  
  E.g: “C:\DestinationSaveFolderName\”
* **Sheet Name (String)** - The name of the sheet that contains the chart you want to export.  
  E.g: “SheetHasChartName”

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Export Charts

**Output**

* **Files (List< String >)**- List of string that contains file names.
