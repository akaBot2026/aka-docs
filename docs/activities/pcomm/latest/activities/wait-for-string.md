---
id: wait-for-string
title: "Wait For String"
sidebar_label: "Wait For String"
sidebar_position: 10
description: "Wait For String activity documentation."
displayed_sidebar: activitiesSidebar
---
# Wait For String

RCA.Activities.PCOMM.WaitForString

## **Description**

Pauses the workflow execution until a specified text string appears at the designated coordinates on the emulator screen within a timeout period.

![wait-for-string](/static/img/wait-for-string.png)

(\* is mandatory)

## **Properties**

**Input**

* **Reset Screen (Boolean)** - If selected, clears or resets the emulator screen before starting the wait.
* **Column (Int32)** - The column coordinate on the emulator screen to check for the text. If left blank, the entire screen is checked.
* **Ignore Case (Boolean)** - If selected, ignores case differences when searching for the text string.
* **Row (Int32)** - The row coordinate on the emulator screen to check for the text. If left blank, the entire screen is checked.
* **Timeout (Int32)** - The maximum time to wait (in milliseconds) for the text string to appear before throwing an error. Default is `10000` (10 seconds).
* **Wait For Input Ready (Boolean)** - If selected, waits for the terminal input to be ready before verifying the string.
* **Wait String (String)*** - The expected text string to wait for on the emulator screen.

**Misc**

* **Public (Checkbox)** - If selected, logs the execution details and variables of this activity. Consider data security requirements before enabling this option, as sensitive details could be written to the logs.
* **Display Name (String)** - The name displayed for this activity in the designer panel. You can edit this name to organize and structure your workflow better.  
  E.g: [3424325] Wait For String

