---
id: generate-data-table
title: "Generate Data Table"
sidebar_label: "Generate Data Table"
sidebar_position: 7
description: "Generate Data Table activity documentation."
displayed_sidebar: activitiesSidebar
---
# Generate Data Table

RCA.Activities.Core.GenerateDataTable

## **Description**

Generates a DataTable variable from the structured text. This activity enables you to select column and row separators according to which the table is generated.

[![generate data table.jpg](/img/aca851_generate-data-table.jpg)](/bin/download/Activities/Data%20Table/Activities/Generate%20Data%20Table/WebHome/generate%20data%20table.jpg?rev=1.1)

(\* is mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.

**Fixed formatting options**

* **Column Sizes (IEnumerable< Int32 >)** - Specifies the size of the columns that are to be created in the table. This field supports only IEnumerable variables.

**Formatting Options**

* **Column Separators (String)**\* - Specifies the character that is to be used as a column separator. This field supports only String variables.  
  Eg: If we want to use “|” as a separator … type in “|”
* **CSV Parsing (Boolean)**\* - select if you want to parse the input data as a CSV. This field only supports Boolean values (True, False). The default value is False.  
  Eg: True
* **New Line Separator (String)**\* - Specifies the character that is to be used as a newline separator. This field supports only String variables.

**Input**

* **Input (String)**\* - The field that you add unstructured data to convert into a table. Only String are supported.  
  Eg: “John | Frank | Levi”
* **Positions** - If OCR is used, the Get Words Info check box is selected, this field contains the IEnumerable.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Generate Data Table

**Output**

* **Output Data Table (DataTable)** - The Data Table variable that contains the generated table.

**Table Options**

* **Auto Detect Types (Checkbox)** - If you select this option, akaBot will automatically detect the column or row type.
* **Use Column Header (Checkbox)** - If you select this option, the first identify column will be chosen as the column header.
* **Use Row Header (Checkbox)** - If you select this option, the first identify row will be chosen as the row header.
