---
id: get-text-rect
title: "Get Text Rect"
sidebar_label: "Get Text Rect"
sidebar_position: 3
description: "Get Text Rect activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Text Rect

RCA.Activities.PCOMM.GetTextRect

## **Description**

Extracts a text string from a specified rectangular region (defined by start/end rows and columns) on the PCOMM screen.

![get-text-rect](/static/img/get-text-rect.png)

(\* is mandatory)

## **Properties**

**Input**

* **Start Row (Int32)*** - The row coordinate on the emulator screen where the rectangular selection area begins.
* **End Row (Int32)*** - The row coordinate on the emulator screen where the rectangular selection area ends.
* **Start Column (Int32)*** - The column coordinate on the emulator screen where the rectangular selection area begins.
* **End Column (Int32)*** - The column coordinate on the emulator screen where the rectangular selection area ends.
* **Reset Screen (Boolean)** - If selected, clears or resets the emulator screen before extracting the text.

**Option**

* **Wait For String (String)** - A specific text string to wait for on the screen before starting the extraction. This ensures the correct screen is loaded before reading the text.

**Output**

* **Output Text (String)** - The String variable that stores the extracted text. This variable can be reused in subsequent activities in your workflow.

**Misc**

* **Public (Checkbox)** - If selected, logs the execution details and variables of this activity. Consider data security requirements before enabling this option, as sensitive details could be written to the logs.
* **Display Name (String)** - The name displayed for this activity in the designer panel. You can edit this name to organize and structure your workflow better.  
  E.g: [3424325] Get Text Rect

