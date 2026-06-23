---
id: tesseract-ocr
title: "Tesseract OCR"
sidebar_label: "Tesseract OCR"
sidebar_position: 5
description: "Tesseract OCR engine activity documentation."
displayed_sidebar: activitiesSidebar
---
# Tesseract OCR

RCA.Activities.OCR.TesseractOCR

## **Description**

Extracts a string and its information from an indicated UI element or image using Tesseract OCR Engine. It can be used as an OCR engine inside other OCR container activities.

![tesseract-ocr](/static/img/tesseract-ocr.png)

(\* For Mandatory)

## **Properties**

**Input**

* **Image (Image)** - Image object to be processed.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[3424325] Tesseract OCR`.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

**Options**

* **Language (String)** - The language used by the OCR engine to extract the text. Default is English. E.g: "eng", "vie".
* **Scale (Double)** - The scaling factor of the selected UI element or image. Default is 1.0.

**Output**

* **Text (String)** - The extracted string.
