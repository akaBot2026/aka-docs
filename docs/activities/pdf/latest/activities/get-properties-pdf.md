---
id: get-properties-pdf
title: "Get PDF properties"
sidebar_label: "Get PDF properties"
sidebar_position: 7
description: "Get PDF properties activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get PDF properties

RCA.Activities.PDF.GetPropertiesPDF

## **Description**

Gets a property of a PDF document by the name entered.

![get-pdf-properties](/static/img/get-pdf-properties.png)

(\*For mandatory)

## **In the body of the activity**

* **File path** - File path of the document.
* **Property name** - Property name to get.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**Input**

* **Property name** (`InArgument<String>`)* - Property name to get. Supported built-in names include Title, Subject, Author, Creator, Producer, Keywords, ModificationDate, and CreationDate.

**File**

* **File path** (`InArgument<String>`)* - File path of the document.

* **Password** (`InArgument<String>`) - The password of the PDF file, if necessary.

**Output**

* **Result** (`OutArgument<String>`) - The value of the property.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window
