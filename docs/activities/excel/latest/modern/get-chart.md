---
id: modern-get-chart
title: "Get Chart"
sidebar_label: "Get Chart"
sidebar_position: 47
description: "Get Chart activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Chart

RCA.Activities.Excel.Modern.CopyChartToClipboardX

## **Description**

This activity saves an Excel chart to an image file, or copies it to the clipboard for use in other activities.

When **Action** is SaveAsPicture, a file name is required. The folder of the file must exist, and if the file already exists, **Replace existing** must be selected; otherwise the activity fails with an error.

This activity must be placed inside a **Use Excel File** scope.

(\* is mandatory)

## **In the body of the activity**

* **Chart (ExcelChartRef)**\* - The chart to use. Use the variable that [Insert Chart](./insert-chart.md) saved.  
  E.g: salesChart
* **Action (DropDownList)** - See Input.
* **File name (String)** - See Input.
* **Replace existing (Checkbox)** - See Input.

## **Properties**

**Input**

* **Chart (ExcelChartRef)**\* - The chart to use.  
  E.g: salesChart
* **Action (DropDownList)** - The action to apply to the selected chart. By default, Copy to clipboard is selected. The drop-down contains two options, as follows:  
  ・Copy to clipboard - Copies the chart to the clipboard.  
  ・Save as picture - Saves the chart as an image file.
* **File name (String)** - The file where the chart is saved. Required when **Action** is Save as picture.  
  E.g: "C:\Reports\sales-chart.png"
* **Replace existing (Checkbox)** - When selected, a file with the same name is replaced. When cleared, an error occurs if the file already exists. By default, this check box is selected.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Get Chart

## **Example: save a chart as a picture**

1. Inside a **Use Excel File** scope, after [Insert Chart](./insert-chart.md) has saved the chart in `salesChart`, add **Get Chart**.
2. Set **Chart** to `salesChart` and **Action** to Save as picture.
3. Set **File name** to `"C:\Reports\sales-chart.png"`. Keep **Replace existing** selected so that a new run overwrites the previous file.
4. Run the workflow. The picture of the chart is saved to the file. The folder `C:\Reports` must already exist.
