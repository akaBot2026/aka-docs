---
id: modern-auto-fill
title: "Auto Fill"
sidebar_label: "Auto Fill"
sidebar_position: 7
description: "Auto Fill activity documentation."
displayed_sidebar: activitiesSidebar
---
# Auto Fill

RCA.Activities.Excel.Modern.AutoFillX

## **Description**

This activity extends the pattern or the formulas in a source range across a larger range, the way dragging Excel's fill handle does.

The source and the fill range must be ranges or tables (not whole sheets) on the same sheet, and the fill range must start at the source and contain it. For a source of A2:A3, a fill range of A2:A20 works; A4:A20 does not. These conditions are checked before Excel is called, so the error message says which one failed.

This activity must be placed inside a **Use Excel File** scope.

![The Auto Fill activity on the canvas with Source = Excel.Range("Sheet1", "A2:A3"), Fill range = Excel.Range("Sheet1", "A2:A20") and Fill type](/static/img/excel-modern-auto-fill.png)

(\* is mandatory)

## **In the body of the activity**

* **Source (ExcelRangeRef)**\* - The cells whose pattern or formulas are extended. Use the **+** button to build the reference.  
  E.g: `Excel.Range("Sheet1", "A2:A3")`
* **Fill range (ExcelRangeRef)**\* - The range to fill. Use the **+** button to build the reference.  
  E.g: `Excel.Range("Sheet1", "A2:A20")`
* **Fill type (DropDownList)** - See Options.

## **Properties**

**Input**

* **Source (ExcelRangeRef)**\* - The cells whose pattern or formulas are extended.  
  E.g: `Excel.Range("Sheet1", "A2:A3")`
* **Fill range (ExcelRangeRef)**\* - The range to fill. It must start at **Source** and contain it.  
  E.g: `Excel.Range("Sheet1", "A2:A20")`

**Options**

* **Fill type (DropDownList)** - How the range is filled. These are Excel's own fill types (XlAutoFillType). By default, xlFillDefault is selected. The drop-down contains the following options:  
  ・xlFillDefault - Excel decides how to fill, based on the source.  
  ・xlFillCopy - Copies the source values and formats.  
  ・xlFillSeries - Extends the source as a series.  
  ・xlFillFormats - Copies only the formats.  
  ・xlFillValues - Copies only the values.  
  ・xlFillDays - Extends day names.  
  ・xlFillWeekdays - Extends weekday names.  
  ・xlFillMonths - Extends month names.  
  ・xlFillYears - Extends years.  
  ・xlLinearTrend - Extends as a linear trend.  
  ・xlGrowthTrend - Extends as a growth trend.  
  ・xlFlashFill - Uses Flash Fill.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Auto Fill
