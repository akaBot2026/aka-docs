---
id: write-csv-file
title: "Write CSV File"
sidebar_label: "Write CSV File"
sidebar_position: 3
description: "Write CSV File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Write CSV File

RCA.Activities.CSV.WriteCSVFile

## **Description**

This activity allows you to overwrite a specified DataTable to a CSV File.

![append-csv-file.png](/static/img/append-csv-file.png)

(\* is mandatory)

## **In the body of activity**

* **File Path (String)** - You can add the file path of the CSV here. String supported only.
* **Data Table (DataTable)** - Specifies the DataTable to be written in the CSV file.

## **Properties**

**Input**

* **Data Table (DataTable)**\* - Specifies the DataTable to be written in the CSV file.

**File**

* **File Path (String)\***- The file path of the CSV file.  
  E.g: “C:\CSVFolder\clientList.csv”

**Misc**

* **Public (CheckBox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: “Write CSV”

**Options**

* **Delimiter (DropDownList)** - Specifies the delimiter in the CSV file. The options are: Tab, Comma, Semicolon
* **Encoding (String)** - The type of encoding you want to use. To specified the encoding type to be used, used the value from the Name field. Strings variables only.  
  E.g: “utf-8”
* **Add Headers (CheckBox)** - Boolean that specifies if the column names from the DataTable will be added to the output CSV file.
