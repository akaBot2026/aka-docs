---
id: append-csv-file
title: "Append CSV File"
sidebar_label: "Append CSV File"
sidebar_position: 1
description: "Append CSV File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Append CSV File

RCA.Activities.CSV.AppendCSVFile

## **Description**

This activity allows you to append the specific DataTable to a CSV file, creating the file if it does not already exist.

![write-csv-file.png](/static/img/write-csv-file.png)

(\* is mandatory)

## **In the body of activity**

* **File path (String)** - You can add the file path of the CSV here. String supported only.
* **Data Table (DataTable)** - The data table you want to append.

## **Properties**

**File**

* **File Path (String)**\* - The file path of the CSV file  
  E.g: “C:\CSVFolder\clientList.csv”

**Input**

* **Data Table (DataTable)**\* - Specifies the DataTable to be appended to the CSV file. The value needs to be a variable in DataTable type.

**Misc**

* **Public (CheckBox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Append CSV

**Options**

* **Delimiter (DropDownList)** - Specifies the delimiter in the CSV file. The options are: Tab, Comma, Semicolon
* **Encoding (String)** - The type of encoding you want to use. To specified the encoding type to be used, used the value from the Name field. Strings variables only.  
  E.g: “utf-8”
