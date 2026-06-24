---
id: google-cloud-ocr
title: "Google Cloud OCR"
sidebar_label: "Google Cloud OCR"
sidebar_position: 2
description: "Google Cloud OCR engine activity documentation."
displayed_sidebar: activitiesSidebar
---
# Google Cloud OCR

RCA.Activities.OCR.GoogleCloudOCR

## **Description**

Extracts a string and its information from an indicated UI element or image using the Google Cloud Vision OCR engine.

![google-cloud-ocr](/static/img/google-cloud-ocr.png)

(\* For Mandatory)

## **Properties**

**Input**

* **Image (Image)** - Image object to be processed.

**Logon**

* **API Key (String)**\* - The API key used to provide access to Google Cloud Vision API.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[3424325] Google Cloud OCR`.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

**Options**

* **Language (Dropdown List)** - Language used for OCR extraction. Default is English.
* **Scale (Double)** - The scaling factor of the selected UI element or image. Default is 1.0.

**Output**

* **Text (String)** - The extracted string.
