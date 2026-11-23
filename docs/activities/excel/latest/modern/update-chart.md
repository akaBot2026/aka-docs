---
id: modern-update-chart
title: "Update Chart"
sidebar_label: "Update Chart"
sidebar_position: 46
description: "Update Chart activity documentation."
displayed_sidebar: activitiesSidebar
---
# Update Chart

RCA.Activities.Excel.Modern.UpdateChartX

## **Description**

This activity updates the properties of an existing chart. The changes are given as modifications added to the body of the activity, and they are applied in the order they are listed.

The activity requires at least one modification in its body, otherwise it shows a validation error.

This activity must be placed inside a **Use Excel File** scope.

(\* is mandatory)

## **In the body of the activity**

* **Chart (ExcelChartRef)**\* - The chart to update. Use the variable that [Insert Chart](./insert-chart.md) saved.  
  E.g: salesChart
* **Modifications** - The changes to apply. Use **Add Modification** and choose one of the modifications below.

## **Properties**

**Input**

* **Chart (ExcelChartRef)**\* - The chart to update.  
  E.g: salesChart

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Update Chart

## **Modifications**

* **Change data range** - Changes the data range of the chart.
  * **Data range (ExcelRangeRef)** - The chart's data range.  
    E.g: `Excel.Range("Sheet1", "A1:C10")`
* **Modify chart title** - Sets or hides the title of the chart.
  * **Show title (Checkbox)** - Indicates whether the title of the chart is shown.
  * **Title (String)** - The chart title to display. Set a title, or clear **Show title**; otherwise the activity shows a validation error.  
    E.g: "Sales by region"
* **Show/Hide data labels** - Shows or hides the data labels.
  * **Show data labels (Checkbox)** - Choose if data labels are shown on the chart.
* **Show/Hide legend** - Shows or hides the legend.
  * **Show legend (Checkbox)** - Choose if the legend of the chart is shown.
* **Update axis bounds** - Changes the minimum and maximum of an axis.
  * **Axis (DropDownList)** - Which axis to update: Horizontal or Vertical.
  * **Min bound** - The minimum bound of the axis. Leave blank for "Auto".
  * **Max bound** - The maximum bound of the axis. Leave blank for "Auto".
* **Update axis title** - Sets or hides the title of an axis.
  * **Axis (DropDownList)** - Which axis to update: Horizontal or Vertical.
  * **Show axis title (Checkbox)** - Indicates whether the title of the axis is shown.
  * **Axis title (String)** - The displayed axis title. The activity shows a validation error if the axis title is not set.

## **Example: hide the legend and name the axes**

1. Inside a **Use Excel File** scope, after [Insert Chart](./insert-chart.md) has saved the chart in `salesChart`, add **Update Chart** with **Chart** set to `salesChart`.
2. Click **Add Modification** and choose **Show/Hide legend**. Clear **Show legend**.
3. Add the modification **Update axis title**. Set **Axis** to Horizontal, select **Show axis title**, and set **Axis title** to `"Month"`.
4. Add another **Update axis title**. Set **Axis** to Vertical and **Axis title** to `"Amount"`.
5. Run the workflow. The chart has no legend and shows the two axis titles.
