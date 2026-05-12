---
id: append-range
title: "Append Range"
sidebar_label: "Append Range"
sidebar_position: 1
description: "Append Range activity documentation."
displayed_sidebar: activitiesSidebar
---
# Append Range

RCA.Activities.Excel.AppendRange

## **Description**

This activity allows you to append data from a DataTable variable to the end of a specified Excel worksheet.  
If the sheet does not exist, a new one is created with the name specified in the Sheet Name field.

![image-20220505140101-1.jpeg](/img/image-20220505140101-1.jpeg)

\* indicates required fields.

## **In the Body of Activity**

* **Workbook Path**: The full path of the Excel file to use. If the file is located in the project folder, a relative path can be used. Only string variables and strings are supported.  
  Example: `"C:\FolderName\ClientList.xlsx"`
* **Sheet Name**: The name of the sheet to append data to. Default value is `"Sheet1"`. Only string variables and strings are supported.  
  Example: `"ClientNames"`
* **Data Table**: The data to append, provided as a DataTable variable.

## **Properties**

**Input**

* **Workbook Path (String)**\*: The full path of the Excel file to use. If the file is located in the project folder, a relative path can be used. Only string variables and strings are supported.  
  Example: `"C:\FolderName\ClientList.xlsx"`
* **Sheet Name (String)**\*: The name of the sheet to append data to. Default value is `"Sheet1"`. Only string variables and strings are supported.  
  Example: `"ClientNames"`
* **Data Table (DataTable)**\*: The data to append, provided as a DataTable variable.

**Misc**

* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security requirements before using this property.
* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.  
  Example: `"Append Excel Range"`