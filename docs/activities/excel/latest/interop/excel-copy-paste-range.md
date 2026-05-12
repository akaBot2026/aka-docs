---
id: excel-copy-paste-range
title: "Excel Copy Paste Range"
sidebar_label: "Excel Copy Paste Range"
sidebar_position: 4
description: "Excel Copy Paste Range activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Copy Paste Range

RCA.Activities.Excel.ExcelCopyPasteRange

## **Description**

This activity allows to copy a range or sheet (including values, formulas, table format, and cell format) and pastes it to another location in the current workbook or to a different workbook.

![image-20220505131502-1.jpeg](/img/711470_image-20220505131502-1.jpeg)

(\* for mandatory)

## **Properties**

**Copy to SpeadSheet**

* **Destination Cell (String)\***- The starting cell where you want to paste the copied data. This field supports only strings and String variables.  
  E.g: “E10”
* **Destination Sheet (String)**\* - The sheet you want to paste the copied data into. This field supports only strings and String variables  
  E.g: “TargetSheetName”

**Input**

* **Sheet Name (String)**\* - The name of the sheet where the data you want to copy located. By default, this is filled in with "Sheet1." Only String variables and strings are supported.  
  E.g: “Sheet name”
* **Source Range (String)**\* - The range of the data you want to copy. This field supports only strings and String variables.  
  E.g: “Source range”

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Copy Range

**Options**

* **Copy Items (Dropdown checkboxes)** - A dropdown specifying what additional data to copy for the specified range. You can select between Value, Formula, Number Format, Cell Format and All.
