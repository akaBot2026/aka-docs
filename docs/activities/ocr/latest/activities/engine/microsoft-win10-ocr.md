---
id: microsoft-win10-ocr
title: "Microsoft Win10 OCR"
sidebar_label: "Microsoft Win10 OCR"
sidebar_position: 3
description: "Microsoft Win10 OCR engine activity documentation."
displayed_sidebar: activitiesSidebar
---
# Microsoft Win10 OCR

RCA.Activities.OCR.MicrosoftUWPOCR

## **Description**

Extracts a string and its information from the provided image using Windows 10 built-in OCR engine.

![microsoft-win-ocr](/static/img/microsoft-win-ocr.png)

(\* For Mandatory)

## **Properties**

**Input**

* **Image (Image)** - Image object to be processed.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[3424325] Microsoft Win10 OCR`.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

**Options**

* **Language (Dropdown List)** - Language code to use. Default is English.
* **Scale (Double)** - The scaling factor of the selected UI element or image. Default is 1.0.

**Output**

* **Text (String)** - The extracted string.
