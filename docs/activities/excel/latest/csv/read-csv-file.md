---
id: read-csv-file
title: "Read CSV File"
sidebar_label: "Read CSV File"
sidebar_position: 2
description: "Read CSV File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Read CSV File

RCA.Activities.CSV.ReadCSVFile

## **Description**

This activity allows you to read all entries from a specified CSV File.

![read-csv-file.png](/static/img/read-csv-file.png)

(\* is mandatory)

## **In the body of activity**

* **File Path (String)** - You can add the file path of the CSV here. String supported only.

## **Properties**

**File**

* **File Path (String)**\* - The file path of the CSV file  
  E.g: “C:\CSVFolder\clientList.csv”

**Misc**

* **Public (CheckBox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Read CSV

**Options**

* **Delimiter (DropDownList)**- Specifies the delimiter in the CSV file. The options are: Tab, Comma, Semicolon
* **Encoding (String)** - The type of encoding you want to use. To specified the encoding type to be used, used the value from the Name field. Strings variables only.  
  E.g: “utf-8”
* **Include Column Names (Checkbox)**- Specifies if the first row in the CSV file should be considered a header row. If unselected, the output DataTable will have columns with default names. By default, it is selected.

**Output**

* **Data Table (DataTable)** - Represents the output DataTable that contains the information obtained from the CSV file.
