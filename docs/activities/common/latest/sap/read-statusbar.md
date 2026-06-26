---
id: read-statusbar
title: "Read Statusbar"
sidebar_label: "Read Statusbar"
sidebar_position: 6
description: "Read Statusbar activity documentation."
displayed_sidebar: activitiesSidebar
---
# Read Statusbar

RCA.Activities.Common.ReadStatusbar

## **Description**

Reads the message displayed in the Statusbar on the bottom of the SAP GUI window.

![read-statusbar.png](/static/img/read-statusbar.png)

(\* For mandatory)

## **In the body of activity**

* **Indicate on screen** - Enables to select a UI element or region on screen while running the workflow.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - Specifies if the workflow should continue running even when this activity encounters an error. Only Boolean values (`True`, `False`) or variables are supported.
  * **True** - Allows the workflow to ignore the error and continue executing subsequent activities.
  * **False (Default)** - Stops the workflow execution and throws an error if this activity fails.

**Target**

* **CvElement (CvElement)** - The Computer Vision element to target. Supports variables of type CvElement.
* **CvType (CvType)** - The type of Computer Vision element.
* **Element (UiElement)** - An existing UI element variable to use as the target, instead of using a selector.
* **FuzzySelector (String)** - An alternate selector that uses fuzzy matching logic to locate the target element.
* **SearchSteps (SearchSteps)** - Specifies the strategy for finding the target element.
* **Selector (String)*** - The XML selector fragment used to locate the target SAP Statusbar UI element. If you select the statusbar on the screen, this is generated automatically.
* **Timeout MS (Int32)** - The maximum time (in milliseconds) to wait for the Statusbar element to appear before throwing an error. Default is `30000` (30 seconds).
* **Wait For Ready (WaitType)** - Specifies whether the activity should wait for the target element to become interactive before performing the action. Options include `None`, `Interactive`, or `Complete`.

**Misc**

* **Display Name (String)** - The name displayed for this activity in the designer panel. You can edit this name to organize and structure your workflow better.  
  E.g: [462266326] Read Statusbar
* **Public (Checkbox)** - If selected, logs the execution details and variables of this activity. Consider data security requirements before enabling this option, as sensitive details could be written to the logs.

**Output**

* **Message Data (String[])** - Stores any extra parameters or data arguments extracted from the status message as an array of strings.
* **Message Id (String)** - Stores the technical ID of the status message.
* **Message Number (String)** - Stores the number associated with the status message.
* **Message Text (String)** - Stores the actual text content of the status message (e.g. `"Document 100000012 has been posted"`).
* **Message Type (String)** - Stores the type of status message (e.g., `S` for Success, `E` for Error, `W` for Warning, `I` for Information).


