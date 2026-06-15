---
id: read-pdf-text
title: "Read PDF Text"
sidebar_label: "Read PDF Text"
sidebar_position: 8
description: "Read PDF Text activity documentation."
displayed_sidebar: activitiesSidebar
---
# Read PDF Text

RCA.Activities.PDF.ReadPDFText

## **Description**

Reads all characters from a specified PDF file and stores them in a string variable.

(\*For mandatory)

## **In the body of the activity**

* **File Name** - The full path of the PDF file to be read.

## **Properties**

**File**

* **File Name: InArgument<String>*** - The full path of the PDF file to be read.

* **Password: InArgument<String>** - The password of the PDF file, if necessary. Only String variables and strings are supported.

**Input**

* **Range: InArgument<String>** - The range of pages that you want to read. You can specify a single page (e.g. "7"), a range of pages (e.g. "7-12"), or a complex range (e.g. "2-5, 7, 15-End" or "All"). Default value: "All".

**Output**

* **Text: OutArgument<String>** - The extracted string. This field supports only String variables.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window
