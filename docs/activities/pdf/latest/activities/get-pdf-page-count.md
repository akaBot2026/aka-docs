---
id: get-pdf-page-count
title: "Get PDF Page Count"
sidebar_label: "Get PDF Page Count"
sidebar_position: 3
description: "Get PDF Page Count activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get PDF Page Count

RCA.Activities.PDF.GetPDFPageCount

## **Description**

Get the PDF file page count.

![get-pdf-page-count](/static/img/get-pdf-page-count.png)
(\*For mandatory)

## **In the body of the activity**

* **File Name** - The full path of the PDF file to be read.
* **Password** - The user password of the PDF file, if necessary.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**File**

* **File Name** (`InArgument<String>`)* - The full path of the PDF file to be read.

* **Password** (`InArgument<String>`) - The user password of the PDF file, if necessary.

**Output**

* **Page Count** (`OutArgument<Int32>`) - The page count of the PDF file.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window
