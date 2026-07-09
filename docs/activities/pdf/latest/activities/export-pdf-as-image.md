---
id: export-pdf-as-image
title: "Export PDF Page As Image"
sidebar_label: "Export PDF Page As Image"
sidebar_position: 4
description: "Export PDF Page As Image activity documentation."
displayed_sidebar: activitiesSidebar
---
# Export PDF Page As Image

RCA.Activities.PDF.ExportPDFAsImage

## **Description**

Export a single PDF page as an image.

![export-pdf-page](/static/img/export-pdf-page.png)

(\*For mandatory)

## **In the body of the activity**

* **File Name** - The full path of the PDF file to be read.
* **Output File Name** - The output image file path.
* **Option** - Select the page range option to export.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**File**

* **File Name** (`InArgument<String>`)* - The full path of the PDF file to be read.

* **Password** (`InArgument<String>`) - The user password of the PDF file, if necessary.

* **Output File Name** (`InArgument<String>`)* - The output image file path. The file name must end in a valid image extension.

**Input**

* **Target Image Dpi** (`ImageDpi`) - Image dpi used for OCR. Values: Low (96), Medium (150), High (300).

* **Range Page** (`InArgument<String>`) - The range page of the PDF file's page to extract.

**Options**

* **Option** (`ExportOption`) - Select one of the following options to specify the range of the PDF extract to image: All or ByRange.

* **Minimum Width** (`InArgument<Int32>`) - The minimum width used when rendering pages to image.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window
