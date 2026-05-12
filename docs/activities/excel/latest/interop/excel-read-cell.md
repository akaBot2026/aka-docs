---
id: excel-read-cell
title: "Excel Read Cell"
sidebar_label: "Excel Read Cell"
sidebar_position: 14
description: "Excel Read Cell activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Read Cell

RCA.Activities.Excel.ExcelReadCell

## **Description**

This activity allows to read value of an Excel cell and store it in a variable. It is only be used inside the Excel Application Scope activity.

![image-20220505112903-1.jpeg](/img/600d8a_image-20220505112903-1.jpeg)

(\* is mandatory)

## **In the body of the activity**

* **“Sheet Name”** – Name of the sheet contains the cell which is aimed to be read. If there is no amendment, “Sheet1” is automatically selected.
* **“Cell”**- Specified cell need has to identify to read. If there is no amendment, “A1” is automatically selected.

## **Properties**

**Input**

* **Cell (String)**\* - The cell that you want to read. Only String variables and strings are supported.  
  E.g: “A1”
* **Sheet Name (String)**\* - Name of the Sheet contains the cell which is aimed to be read.  
  E.g: “Customer Contact”

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Read Cell

**Options**

* **Preserve Format (Checkbox)** - Selecting this check box keeps the formatting of the cell that you want to read. By default, the check box is cleared.

**Output**

* **Result (OutArgument)** - Stores the information from the specified spreadsheet cell in a variable.
