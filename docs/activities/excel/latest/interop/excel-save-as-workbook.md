---
id: excel-save-as-workbook
title: "Excel Save As Workbook"
sidebar_label: "Excel Save As Workbook"
sidebar_position: 17
description: "Excel Save As Workbook activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Save As Workbook

RCA.Activities.Excel.ExcelSaveAsWorkbook

## **Description**

The activity allows you to save changes as a new file. This only can be used in Excel Application Scope Activity.

![image-20220505135028-1.jpeg](/img/8ba165_image-20220505135028-1.jpeg)

(\* for mandatory)

## **In the body of activity**

* **File Path (String)**\* - Input the full path of the file or click “…” button to choose an existed file that you want to write over it. This field accepts only strings and String variables. E.g: “C:\FolderName\ContactList.xlsx”

## **Properties**

**Input**

* **File Path (String)**\* - Input the full path of the file or click “…” button to choose an existed file that you want to write over it. This field accepts only strings and String variables.  
  E.g: “C:\FolderName\ContactList.xlsx”

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Save as Workbook

**Options**

* **File Format (DropDown list box)**- You can choose different formats that are appropriate with your computer.
