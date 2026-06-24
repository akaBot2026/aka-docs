---
id: microsoft-azure-ocr
title: "Microsoft Azure OCR"
sidebar_label: "Microsoft Azure OCR"
sidebar_position: 4
description: "Microsoft Azure OCR engine activity documentation."
displayed_sidebar: activitiesSidebar
---
# Microsoft Azure OCR

RCA.Activities.OCR.MicrosoftAzureOCR

## **Description**

Extracts a string and its information from an indicated UI element or image by using the Microsoft Azure Computer Vision OCR API.

![microsoft-azure-ocr](/static/img/microsoft-azure-ocr.png)

(\* For Mandatory)

## **Properties**

**Input**

* **Image (Image)** - Image object to be processed.

**Logon**

* **API Key (String)**\* - The API key used to provide access to Microsoft Azure Computer Vision OCR.
* **Endpoint (String)**\* - The endpoint URL associated with your Microsoft Azure Computer Vision OCR.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[3424325] Microsoft Azure OCR`.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

**Options**

* **Language (Dropdown List)** - Language used for OCR extraction. Default is English.
* **Scale (Double)** - The scaling factor of the selected UI element or image. Default is 1.0.

**Output**

* **Text (String)** - The extracted string.
