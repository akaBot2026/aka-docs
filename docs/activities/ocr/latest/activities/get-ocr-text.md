---
id: get-ocr-text
title: "Get OCR Text"
sidebar_label: "Get OCR Text"
sidebar_position: 1
description: "Get OCR Text activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get OCR Text

RCA.Activities.Core.GetOCRText

## **Description**

This activity allows you to get text from a UI element or image using the OCR screen scraping method. This activity is valid inside “OCR Scope” only.

![image-20220513104515-1.png](/static/img/252a2f_image-20220513104515-1.png)

(\* For Mandatory)

## **In the body of activity**

* **Take a Screenshot** – The Image Selector. You can get a screenshot by clicking to this option. Text will be extracted using this screenshot.

## **Properties**

**Input**

* **Delay MS (Int32)** – The amount of time after the execution. The default value is 300 milliseconds.
* **Image Path (String)** – The path of the image which the text will be attracted from.
* **Template (String)** – Template-based systems come into play.

**Notes**: You can only choose to either input an Image Path or use the Image Selector.

**Misc**

* **Display Name (String)** – The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[135838676] Get OCR Text`.
* **Public (Checkbox)** – Check if you want to public the activity. Remember to consider data security requirement before using this property.

**Options**

* **Confident (Double)** – The ratio that the bot recognizes the image. The higher the value, the more precise the image must be for the bot to get the text content. The default value is 0.7.
* **Use image advanced search (Boolean)** – This tool allows you to use image as an advanced search (e.g., blurry/scale out image).

**Output**

* **Text (String)** – The extracted text.

**Target**

* **Height (Int32)** – The height of the position. Default is 0.
* **OffsetX (Int32)** – The horizontal displacement of the position (in pixels). Default is 0.
* **OffsetY (Int32)** – The vertical displacement of the position (in pixels). Default is 0.
* **Width (Int32)** – The width of the position. Default is 0.
