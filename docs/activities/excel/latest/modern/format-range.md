---
id: modern-format-range
title: "Format Range"
sidebar_label: "Format Range"
sidebar_position: 39
description: "Format Range activity documentation."
displayed_sidebar: activitiesSidebar
---
# Format Range

RCA.Activities.Excel.Modern.FormatRangeX

## **Description**

This activity applies one or more cell formats to a range, in the order they are listed. Use **Add format** to add a format, and **Remove format** to remove one. The activity requires at least one format, otherwise it shows a validation error.

This activity must be placed inside a **Use Excel File** scope.

(\* is mandatory)

## **In the body of the activity**

* **Source range (ExcelRangeRef)**\* - The range, table or sheet to format. Use the **+** button to build the reference.  
  E.g: `Excel.Range("Sheet1", "C2:C100")`
* **Formats** - The formats to apply. Use **Add format** and choose a type.

## **Properties**

**Input**

* **Source range (ExcelRangeRef)**\* - The range, table or sheet to format.  
  E.g: `Excel.Range("Sheet1", "C2:C100")`

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Format Range

## **Format types**

Each format has a **Type** and the settings that belong to that type:

| Type | Settings |
|---|---|
| General | No additional settings. |
| Number | **Decimal places**, **Use thousands separator**. |
| Currency | **Currency** (the currency symbol), **Symbol at the end**, **Decimal places**, **Use thousands separator**. |
| Percentage | **Decimal places**. |
| Date | **Type**: Long date or Short date. |
| Time | **Type**: Hours and minutes, or Hours, minutes and seconds. **AM/PM**. |
| Text | No additional settings. |
| Custom | **Format string**: the Excel number format code to apply. |

## **Example: show amounts as currency**

1. Inside a **Use Excel File** scope, add **Format Range**:
   * **Source range**: `Excel.Range("Sheet1", "C2:C100")`
2. Click **Add format** and choose **Currency**. Set **Currency** to the symbol you need, set **Decimal places** to 2, and select **Use thousands separator**.
3. Run the workflow. The cells in C2:C100 are formatted as currency.
