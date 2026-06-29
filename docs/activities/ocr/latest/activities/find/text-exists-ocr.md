---
id: text-exists-ocr
title: "Text Exists OCR"
sidebar_label: "Text Exists OCR"
sidebar_position: 1
description: "Text Exists OCR activity documentation."
displayed_sidebar: activitiesSidebar
---
# Text Exists OCR

RCA.Activities.OCR.TextExists

## **Description**

Checks if a text is found in a given UI element or image by using OCR technology.

![text-exists-ocr](/static/img/text-exists-ocr.png)

**NOTE**

**How it works:**
Unlike standard element existence activities that target UI elements natively, **Text Exists OCR** works by capturing an image of the target area. It relies on the nested **OCR Engine** (Tesseract OCR is nested by default) to act as its "eyes" — scanning the image to recognize text characters. The activity then checks if the text you specified matches any of the recognized text, and outputs a Boolean value (`True` or `False`) to the `Exists` property. If needed, you can replace the default engine with other OCR engines (e.g., Google Cloud OCR, akaBot OCR) from the Toolbox.

(\* For Mandatory)

## **In the body of the activity**

* **Pick target element** - Click to indicate the target UI element or window on your screen to perform the search.
* **Text** - Enter the string you want to search for (must be enclosed in quotation marks). (Corresponds to **Text must be quoted** textbox inside the designer body).
* **Drop OCR Engine Here** - A container block where you must drag and drop an OCR engine activity (such as *Tesseract OCR*) to perform character recognition on the target.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - Specifies to continue executing. Default is False.

**Input**

* **Occurrence (Int32)** - The occurrence index to search. Default is 1.
* **Target (Target)**\* - Target container element to search within.
* **Text (String)**\* - The text you are searching for.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[903352906] Text Exists OCR`.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

**Options**

* **CaseSensitive (Boolean)** - Performs a case-sensitive comparison. Default is True.

**Output**

* **Exists (Boolean)** - Indicates if the text exists or not.
