---
id: read-pdf-with-ocr
title: "Read PDF With OCR"
sidebar_label: "Read PDF With OCR"
sidebar_position: 9
description: "Read PDF With OCR activity documentation."
displayed_sidebar: activitiesSidebar
---
# Read PDF With OCR

RCA.Activities.PDF.ReadPDFWithOCR

## **Description**

Reads all characters from a specified PDF file and stores it in a string variable by using OCR technology.

(\*For mandatory)

## **In the body of the activity**

* **File Name** - The full path of the PDF file to be read.

## **Properties**

**File**

* **File Name: InArgument<String>*** - The full path of the PDF file to be read.

* **Password: InArgument<String>** - The password of the PDF file, if necessary. Only String variables and strings are supported.

**Input**

* **Range: InArgument<String>** - The range of pages that you want to read. If the range is not specified, the whole file is read. You can specify a single page (e.g. "7"), a range of pages (e.g. "7-12"), or a complex range (e.g. "2-5, 7, 15-End" or "All"). Default value: "All".

* **Degree Of Parallelism: InArgument<Int32>*** - Specifies how many pages are analyzed in parallel. The -1 value uses the maximum number of logical processors on the machine. Default value: -1.

* **Target Image Dpi: ImageDpi** - The DPI used for the OCR process. Default value: Medium (150). Values: Low (96), Medium (150), High (300).

**Output**

* **Text: OutArgument<String>** - The extracted string. This field supports only String variables.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window
