---
id: set-text
title: "Set Text"
sidebar_label: "Set Text"
sidebar_position: 4
description: "Set Text activity documentation."
displayed_sidebar: activitiesSidebar
---
# Set Text

RCA.Activities.PCOMM.SetText

## **Description**

Fills a specified text string directly at the designated row and column coordinates on the PCOMM screen.

![set-text](/static/img/set-text.png)

(\* is mandatory)

## **Properties**

**Input**

* **Text (String)*** - The text string to be entered onto the emulator screen.
* **Reset Screen (Boolean)** - If selected, clears or resets the emulator screen before entering the text.

**Options**

* **Row (Int32)** - The row coordinate on the emulator screen where the text should be entered. If left blank, the text is entered at the current cursor position.
* **Column (Int32)** - The column coordinate on the emulator screen where the text should be entered. If left blank, the text is entered at the current cursor position.

**Misc**

* **Public (Checkbox)** - If selected, logs the execution details and variables of this activity. Consider data security requirements before enabling this option, as sensitive details could be written to the logs.
* **Display Name (String)** - The name displayed for this activity in the designer panel. You can edit this name to organize and structure your workflow better.  
  E.g: [3424325] Set Text

