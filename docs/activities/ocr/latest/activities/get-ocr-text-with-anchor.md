---
id: get-ocr-text-with-anchor
title: "Get OCR Text With Anchor"
sidebar_label: "Get OCR Text With Anchor"
sidebar_position: 3
description: "Get OCR Text With Anchor activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get OCR Text With Anchor

RCA.Activities.OCR.GetTextAnchor

## **Description**

Extracts a string and its information from an indicated UI element or image relative to an anchor string using the OCR screen scraping method.

![get-ocr-text-with-anchor](/static/img/get-ocr-text-with-anchor.png)

**NOTE**

**How it works:**
Unlike standard Get Text activities that target UI elements natively, **Get OCR Text With Anchor** works by capturing an image of the target area. It relies on the nested **OCR Engine** (Tesseract OCR is nested by default) to act as its "eyes" — scanning the image to recognize text characters and their pixel coordinates relative to an anchor. The activity then uses these coordinates to extract the text. If needed, you can replace the default engine with other OCR engines (e.g., Google Cloud OCR, akaBot OCR) from the Toolbox.

(\*For mandatory)

## **In the body of the activity**

* **Pick target element** - Click to indicate the target UI element or window on your screen to perform the search.
* **Drop OCR Engine Here** - A container block where you must drag and drop an OCR engine activity (such as *Tesseract OCR*) to perform character recognition on the target.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - Specifies to continue executing the remaining activities even if the current activity failed. Only boolean values (True, False) are supported. Default is False.

**Input**

* **Target (Target)**\* - Target container element.
  * **Clipping Region (Region)** - Target clipping region on screen.
  * **Element (UIElement)** - Use the UIElement variable returned by another activity.
  * **Selector (String)** - Text property used to find a particular UI element.
  * **Timeout MS (Int32)** - Specifies the amount of time (in milliseconds) to wait for the activity to run before an error is thrown. Default is 30000.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[511248435] Get OCR Text With Anchor`
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

**Options**

* **Grab Region (Region)** - The region of the screen from which the text is grabbed, defined relative to the target or anchor.

**Output**

* **Text (String)** - The string extracted from the indicated UI element relative to the anchor.
* **Words Info (TextInfo)** - The screen coordinates of each word found in the indicated UI element.
