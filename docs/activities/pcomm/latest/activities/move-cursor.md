---
id: move-cursor
title: "Move Cursor"
sidebar_label: "Move Cursor"
sidebar_position: 8
description: "Move Cursor activity documentation."
displayed_sidebar: activitiesSidebar
---
# Move Cursor

RCA.Activities.PCOMM.MoveCursor

## **Description**

Moves the input cursor of the terminal emulator to a specified Row and Column coordinate on the screen.

![move-cursor](/static/img/move-cursor.png)

(\* is mandatory)

## **Properties**

**Input**

* **Reset Screen (Boolean)** - If selected, clears or resets the emulator screen before moving the cursor.

**Options**

* **Row (Int32)** - The row coordinate on the emulator screen where the cursor should be moved to.
* **Column (Int32)** - The column coordinate on the emulator screen where the cursor should be moved to.

**Misc**

* **Public (Checkbox)** - If selected, logs the execution details and variables of this activity. Consider data security requirements before enabling this option, as sensitive details could be written to the logs.
* **Display Name (String)** - The name displayed for this activity in the designer panel. You can edit this name to organize and structure your workflow better.  
  E.g: [3424325] Move Cursor

