---
id: find-ocr-text-position
title: "Find OCR Text Position"
sidebar_label: "Find OCR Text Position"
sidebar_position: 4
description: "Find OCR Text Position activity documentation."
displayed_sidebar: activitiesSidebar
---
# Find OCR Text Position

RCA.Activities.OCR.FindTextPosition

## **Description**

Searches for a given string in an UI element or image, and returns another UI element that has the clipping region set to the screen position of that string.

![find-ocr-text-position](/static/img/find-ocr-text-position.png)

**NOTE**

**How it works:**
Unlike standard Find Element activities that target UI elements natively, **Find OCR Text Position** works by capturing an image of the target area. It relies on the nested **OCR Engine** (Tesseract OCR is nested by default) to act as its "eyes" — scanning the image to recognize text characters and their pixel coordinates. The activity then checks if the text you specified matches any of the recognized text, and outputs a UIElement containing the position coordinates. If needed, you can replace the default engine with other OCR engines (e.g., Google Cloud OCR, akaBot OCR) from the Toolbox.

(\*For mandatory)

## **In the body of the activity**

* **Pick target element** - Click to indicate the target UI element or window on your screen to perform the search.
* **Drop OCR Engine Here** - A container block where you must drag and drop an OCR engine activity (such as *Tesseract OCR*) to perform character recognition on the target.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - Specifies to continue executing. Default is False.

**Input**

* **Occurrence (Int32)** - The occurrence index if the text appears multiple times. Default is 1.
* **Target (Target)**\* - Target container element to search within.
  * **Clipping Region (Region)** - Target clipping region on screen.
  * **Element (UIElement)** - Use the UIElement variable returned by another activity.
  * **Selector (String)** - Text property used to find a particular UI element.
  * **Timeout MS (Int32)** - Specifies the amount of time (in milliseconds) to wait for the activity to run before an error is thrown. Default is 30000.
  * **Text (String)**\* - The text you are searching for.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[796143226] Find OCR Text Position`
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

**Options**

* **CaseSensitive (Boolean)** - Performs a case-sensitive ordinal comparison. Default is True.

**Output**

* **Element (UIElement)** - The UI element where the string you were looking for is located.
