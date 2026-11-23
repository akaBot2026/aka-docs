---
id: modern-vlookup
title: "VLookup"
sidebar_label: "VLookup"
sidebar_position: 35
description: "VLookup activity documentation."
displayed_sidebar: activitiesSidebar
---
# VLookup

RCA.Activities.Excel.Modern.VLookupX

## **Description**

This activity searches for a value in the first column of a range and returns a cell from the matching row, like the VLOOKUP function of Excel. The result is `null` when nothing matches.

This activity must be placed inside a **Use Excel File** scope.

(\* is mandatory)

## **In the body of the activity**

* **In range (ExcelRangeRef)**\* - The range, table or sheet to search in. Use the **+** button to build the reference.  
  E.g: `Excel.Range("Sheet1", "A1:D100")`
* **Value to lookup (Object)**\* - The value to search for in the first column.  
  E.g: "INV-0042"
* **Column index (Int32)** - The column of the range to read. Empty or zero reads the last column.  
  E.g: 3
* **Exact match (Checkbox)** - See Options.
* **Output to (Object)** - The variable that receives the value found.  
  E.g: foundValue

## **Properties**

**Input**

* **In range (ExcelRangeRef)**\* - The range, table or sheet to search in.  
  E.g: `Excel.Range("Sheet1", "A1:D100")`
* **Value to lookup (Object)**\* - The value to search for in the first column.  
  E.g: "INV-0042"
* **Column index (Int32)** - The column of the range to read. Empty or zero reads the last column.  
  E.g: 3

**Options**

* **Exact match (Checkbox)** - When selected, only the exact value is accepted. When cleared, Excel may fall back to the closest smaller value. By default, this check box is selected.

**Output**

* **Output to (Object)** - The value found, or null when nothing matches.  
  E.g: foundValue

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: VLookup

## **Example: read the customer name for an invoice number**

The sheet *Invoices* holds the invoice number in column A and the customer name in column C, in the range A1:D100.

1. Inside a **Use Excel File** scope, add **VLookup**:
   * **In range**: `Excel.Range("Invoices", "A1:D100")`
   * **Value to lookup**: `"INV-0042"`
   * **Column index**: `3`
   * Keep **Exact match** selected.
   * **Output to**: a new variable `customer`
2. Run the workflow. `customer` holds the value of column C on the row whose column A is `INV-0042`, or `null` when there is no such row.
