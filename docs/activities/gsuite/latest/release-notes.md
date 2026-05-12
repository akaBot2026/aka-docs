---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 2
description: "Release Notes activity documentation."
displayed_sidebar: activitiesSidebar
---
# Release Notes

**RCA.Activities.Gsuite Version 2.2.1.0**

This release brings more new activities:

### **1.  Sheets sub-package**

* Add Delete Column: Adds blank columns or removes existing columns from a specified sheet.
* Add Delete Rows: Adds empty rows or removes existing rows from a specified sheet.
* Add New Sheets: Creates a new sheet inside a specified Google spreadsheet
* Append Row: Appends a row to an existing spreadsheet.
* Auto Fill Range: Fulfills the auto-fill functionality from the Google Sheets user interface.
* Clear Range: Uses the Microsoft Graph Clear range API to clear values, format, fill, border, etc. of a range from the specified sheet
* Copy Paste Range: Copies and pastes a range of specified cells into a specified sheet. You can copy from sheet and paste into a different one, or copy and paste it within the same sheet.
* Copy Sheet: Copies a sheet from a specified workbook and pastes it to another specified workbook. If no other workbook is specified, it is copied to the source file.
* Delete Range: Uses the Microsoft Graph Clear range (when **Shift** is *None*) or Delete range (when **Shift** is *Up* or *Left*) API to delete a range of cell data (**Range** ) from a specified workbook (**Workbook** ) worksheet (**SheetName** ).
* Delete Sheet: Deletes the specified sheet from the specified spreadsheet.
* Download spreadsheet: Download a copy of a Google spreadsheet file.
* Get Cell Color: Extracts the background color of a cell and saves it as a Color variable
* Get sheets: Uses the Microsoft Graph Get worksheet API to retrieve and return an array of worksheets (**Sheets** ) from a specified workbook (**Workbook** ).
* Read Cell: Reads the value of an Excel cell and stores it in a variable. Can only be used inside the **Excel Application Scope** or ** Use Excel File** activities.
* Read Column: Reads the values from a column beginning with the cell specified in the **StartingCell** property field, and stores them in an `IEnumerable<Object>` variable.
* Read Range: Reads and saves the information from a specified Excel workbook cell range for use in other activities, such as Write Range.
* Read Row: Reads the values from a row beginning with the cell specified in the StartingCell field, and stores it in an `IEnumerable<object>` variable.
* Rename sheet: Renames a sheet in an Excel file
* Write Cell: Enters a text or a formula in a cell. The activity can be used with an Excel file selected for a parent Use Excel File activity or with the Project Notebook.
* Write Range: Writes a DataTable variable to a specified Excel workbook cell range.

### **2.  Drive sub-package**

Create New Spreadsheet: Creates a new spreadsheet in Google Drive.
