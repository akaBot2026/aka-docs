---
id: akabot-ocr
title: "akaBot OCR"
sidebar_label: "akaBot OCR"
sidebar_position: 1
description: "akaBot OCR engine activity documentation."
displayed_sidebar: activitiesSidebar
---
# akaBot OCR

RCA.Activities.OCR.akaBotOCR

## **Description**

Local OCR engine developed by akaBot, supporting offline processing.

![akabot-ocr](/static/img/akabot-ocr.png)

(\* For Mandatory)

## **Properties**

**Input**

* **Image (Image)** - Image object to be processed.

**Logon**

* **API Key (String)** - The API key used to access akaBot OCR when running in online mode.
* **Endpoint (String)** - The URL of the online akaBot OCR service.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[420316221] akaBot OCR`.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

**Options**

* **Language (Dropdown List)** - Language used for OCR extraction. Default is English.
* **Scale (Double)** - The scaling factor of the selected UI element or image. Default is 1.0.
* **Use Local Server (Boolean)** - Enable local processing mode using local server. Default is False.

**Output**

* **Text (String)** - The extracted text.
