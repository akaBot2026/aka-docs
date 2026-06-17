---
id: split-pdf
title: "Split PDF Files"
sidebar_label: "Split PDF Files"
sidebar_position: 2
description: "Split PDF Files activity documentation."
displayed_sidebar: activitiesSidebar
---
# Split PDF Files

RCA.Activities.PDF.SplitPDF

## **Description**

Split a PDF file into multiple files.

(\*For mandatory)

## **In the body of the activity**

* **PDF Path** - PDF file path.
* **Save Path** - The resulting PDF is saved in this given path.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**File**

* **PDF Path** (`InArgument<String>`)* - PDF file path.

* **Password** (`InArgument<String>`) - The user password of the PDF file, if necessary.

* **Save Path** (`InArgument<String>`)* - The resulting PDF is saved in this given path. If it exists, the file is overwritten.

**Input**

* **Select Pages** (`InArgument<String[]>`) - List pages you have specified from the original file.

* **Number of pages** (`InArgument<Int32>`) - Enables you to specify the number of pages each new file will contain. For example, you can enter 8 if you want each output file to contain only 8 pages.

**Options**

* **Split Option** (`SplitOption`) - Select one of the following options to specify how to split the PDF file: NumberOfPagesPerExtractedPDF or SingleFileWithSelectedPages.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window
