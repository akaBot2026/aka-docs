---
id: excel-application-scope
title: "Excel Application Scope"
sidebar_label: "Excel Application Scope"
sidebar_position: 2
description: "Excel Application Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Application Scope

RCA.Activities.Excel.ExcelApplicationScope

## **Description**

This activity allows to open an Excel workbook and provides a scope for Excel Activities.

![image-20220505111836-1.jpeg](/img/9060a7_image-20220505111836-1.jpeg)

(\* for mandatory)

## **In the body of the activity**

* **Workbook Path (String)** - The path of the Excel file you want to read.  
  E.g: “C:\FolderName\Contacts.xlsx”
* **“Do” -** The activities you want to execute within the application.

## **Properties**

**File**

* **Edit password (String)** - The password required for editing password protected Excel workbooks, if necessary. Only String variables and strings are supported.
* **Workbook Path (String)**\* - The path of the Excel file you want to read.  
  E.g: “C:\FolderName\Contacts.xlsx”
* **Password (String)**\* - The password required for opening password protected Excel workbooks, if necessary. Only String variables and strings are supported.  
  E.g: “AlphaPower123”

**Misc**

* **Public (CheckBox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Excel Application Scope

**Options**

* **Break Links (Checkbox)** - Break link to remote references. Default unchecked.
* **Auto Save (Checkbox)** - Indicate if excel will save the file immediately after executing the activity or not. Default checked.
* **Excel Properties**- List of InterOp.Excel.\_Application's properties to be set and their values
* **Macro setting (DropDownList)** - Specifies the macro level for the current Excel file. By default, EnableAll is selected. The drop-down contains three options, as follows:  
  ・EnableAll - All macros are enabled and can be run.  
  ・DisableAll - All macros are disabled in the specified Excel file. No macros can be run.  
  ・ReadFromExcelSettings - Reads the current Excel Macro settings
* **Read Only (Checkbox)**: Opens the specified workbook in Read-Only mode. Selecting this check box enables you to perform data extraction operations in an Excel file which is locked for editing or has an edit password. By default, this check box is not selected.
* **Visible (Checkbox )**- When selected, the Excel file is opened in the foreground while performing actions on it. When it is cleared, all operations are done in the background. By default, this checkbox is selected.

**Output**

* **Workbook (WorkbookApplication)**- The entire information from the Excel spreadsheet stored in a WorkbookApplication variable. This variable can be used in another Excel Application Scope activity. Only WorkbookApplication variables are supported.

**Use Existing Workbook**

* **Existing Workbook (WorkbookApplication)**- Use the data from an Excel file that was previously stored in a WorkbookApplication variable. Only WorkbookApplication variables are supported.
