---
id: excel-close-workbook
title: "Excel Close Workbook"
sidebar_label: "Excel Close Workbook"
sidebar_position: 3
description: "Excel Close Workbook activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Close Workbook

RCA.Activities.Excel.ExcelCloseWorkbook

## **Description**

The activity allows you to close an open Workbook. This only can be used in Excel Application Scope Activity.

![image-20220505135216-1.jpeg](/img/b207ba_image-20220505135216-1.jpeg)

(\* for mandatory)

## **Properties**

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Close Workbook

**Use Workbook**

* **Workbook (WorkbookApplication)**\* - The workbook that you want to close. It can be an output from Excel Application Scope or any other activities above. Only WorkbookApplication variables are supported.
