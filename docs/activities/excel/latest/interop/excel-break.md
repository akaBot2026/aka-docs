---
id: excel-break
title: "Excel Break"
sidebar_label: "Excel Break"
sidebar_position: 4
description: "Excel Break activity documentation."
displayed_sidebar: activitiesSidebar
---
# Excel Break

RCA.Activities.Excel.ExcelBreak

## **Description**

This activity stops the execution of the enclosing Excel loop. It can only be used inside a **For Each Excel Row** (or any Excel For-Each loop); the remaining activities in the current row are not executed and no further rows are processed.

![Excel Break](/static/img/excel-break.png)

## **Properties**

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Excel Break
* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
