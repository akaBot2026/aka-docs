---
id: hover-ocr-text
title: "Hover OCR Text"
sidebar_label: "Hover OCR Text"
sidebar_position: 2
description: "Hover OCR Text activity documentation."
displayed_sidebar: activitiesSidebar
---
# Hover OCR Text

RCA.Activities.OCR.HoverText

## **Description**

Searches for a given string in an indicated UI element or image using OCR technology and hovers over it.

![hover-ocr-text](/static/img/hover-ocr-text.png)

**NOTE**

**How it works:**
Unlike standard Hover activities that target UI elements natively, **Hover OCR Text** works by capturing an image of the target area. It relies on the nested **OCR Engine** (Tesseract OCR is nested by default) to act as its "eyes" — scanning the image to recognize text characters and their pixel coordinates. The activity then uses these coordinates to hover the cursor over the matched text. If needed, you can replace the default engine with other OCR engines (e.g., Google Cloud OCR, akaBot OCR) from the Toolbox.

(\* For Mandatory)

## **In the body of the activity**

* **Pick target element** - Click to indicate the target UI element or window on your screen to perform the search.
* **Text** - Enter the string you want to search and hover over (must be enclosed in quotation marks). (Corresponds to **Text must be quoted** textbox inside the designer body).
* **Drop OCR Engine Here** - A container block where you must drag and drop an OCR engine activity (such as *Tesseract OCR*) to perform character recognition on the target.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - Specifies to continue executing if failed. Default is False.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity. Default is 200 ms.
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins. Default is 300 ms.

**Input**

* **Occurrence (Int32)** - The occurrence index if the text appears multiple times. Default is 1.
* **Target (Target)**\* - Target container element to search within.
* **Text (String)**\* - The string that you want to hover over.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[399858786] Hover OCR Text`.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

**Options**

* **CaseSensitive (Boolean)** - Performs a case-sensitive comparison. Default is True.
* **Cursor Position (CursorPosition)** - Position offsets relative to the text.
