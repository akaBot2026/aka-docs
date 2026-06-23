---
id: digitize-document
title: "Digitize Document"
sidebar_label: "Digitize Document"
sidebar_position: 12
description: "Digitize Document activity documentation."
displayed_sidebar: activitiesSidebar
---
# Digitize Document

RCA.Activities.OCR.Intelligent.DigitizeDocument

## **Description**

Digitizes a document, extracting its Document Object Model (DOM) and text and storing them in their corresponding variable types.

![digitize-document](/static/img/digitize-document.png)

(\* For Mandatory)

## **In the body of the activity**

* **Document Path** - The file path of the document you want to digitize. (Corresponds to **File Name. Text Must Be Set** placeholder inside the designer body).
* **Drop OCR Engine Here** - A container block where you must drag and drop an OCR engine activity (such as *Tesseract OCR*) to perform the optical character recognition on the document.

## **Properties**

**Input**

* **Document Path (String)**\* - The file path of the document you want to digitize.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[185433725] Digitize Document`.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

**Output**

* **Document Object Model (Document)** - The Document Object Model (DOM) of the file, stored in a Document variable.
* **Document Text (String)** - The text extracted from the specified document.
