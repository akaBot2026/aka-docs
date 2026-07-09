---
id: set-text-rect
title: "Set Text Rect"
sidebar_label: "Set Text Rect"
sidebar_position: 5
description: "Set Text Rect activity documentation."
displayed_sidebar: activitiesSidebar
---
# Set Text Rect

RCA.Activities.PCOMM.SetTextRect

## **Description**

Writes a text string into a specific rectangular area defined by coordinates on the terminal emulator screen.

![set-text-rect](/static/img/set-text-rect.png)

(\* is mandatory)

## **Properties**

**Input**

* **Text (String)*** - The text string to be entered inside the specified rectangular region.
* **Start Row (Int32)*** - The row coordinate on the emulator screen where the rectangular input area begins.
* **End Row (Int32)*** - The row coordinate on the emulator screen where the rectangular input area ends.
* **Start Column (Int32)*** - The column coordinate on the emulator screen where the rectangular input area begins.
* **End Column (Int32)*** - The column coordinate on the emulator screen where the rectangular input area ends.
* **Reset Screen (Boolean)** - If selected, clears or resets the emulator screen before entering the text.

**Misc**

* **Public (Checkbox)** - If selected, logs the execution details and variables of this activity. Consider data security requirements before enabling this option, as sensitive details could be written to the logs.
* **Display Name (String)** - The name displayed for this activity in the designer panel. You can edit this name to organize and structure your workflow better.  
  E.g: [3424325] Set Text Rect

