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

![image-20220513104515-1.png](/img/252a2f_image-20220513104515-1.png)

(\* for Mandatory)

## **In the body of activity**

* **Take a Screenshot** – The Image Selector. You can get a screenshot by clicking to this option. Text will be extracted using this screenshot.

## **Properties**

**Input**

* **Delay MS (Int32)** - The amount of time after the execution. The default value is 300 milliseconds.
* **Image Path (String)** – The path of the image which the text will be attracted from.
* **Template (String)** - Template-based systems come into play

**Notes**: You can only choose to either input an Image Path or use the Image Selector.

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [586133740] Get OCR Text

**Options**

* **Confident (Double)** - The ratio that the bot recognizes the image. The higher the value, the more precise the image must be for the bot to get the text content. The default value is 0.7
* **Use Image Advance Search (Boolean)** - This tool allows you to use image as an advance search: blurry/ scale out image...

**Target**

* **Height (Int32)** - The height of the position.
* **OffsetX (Int32)** - The horizontal displacement of the position (in pixels)
* **OffsetY (Int32)** - The vertical displacement of the position. (in pixels)
* **Width (Int32)** – The width of the position
