---
id: sap-logon
title: "SAP Logon"
sidebar_label: "SAP Logon"
sidebar_position: 5
description: "SAP Logon activity documentation."
displayed_sidebar: activitiesSidebar
---
# SAP Logon

RCA.Activities.Common.SapLogon

## Description

Use this activity to open the SAP Logon window and connect to an SAP system, using a connection already saved in your SAP Logon Pad. This is normally the **first** activity in your SAP automation — after it runs, use [SAP Login](/docs/activities/sap/latest/activities/sap-login.md) to enter the client, username, password, and language and complete the sign-in.

![1714791370040-272.png](/static/img/5443fe_1714791370040-272.png)

(\* is mandatory)

## Prerequisites

Before this activity can connect, SAP GUI Scripting must be turned on for both your PC and the SAP server — if it isn't, the activity fails with a connection or scripting error.

1. **On your PC (client-side):** Open **SAP Logon** > **Options** > **Accessibility & Scripting** > **Scripting**, and clear the **Notify when a script attaches to SAP GUI** checkbox. Make sure scripting itself is not disabled.
2. **On the SAP server (server-side):** Ask your SAP Basis administrator to set the profile parameter `sapgui/user_scripting = TRUE` (via transaction `RZ11`).

## In the body of the activity

* **SAP Logon Path\*** - The full file path to your local `saplogon.exe` program. Must be a quoted string or a String variable.
  E.g: `"C:\Program Files (x86)\SAP\FrontEnd\SAPgui\saplogon.exe"`
* **Connection name\*** - The exact connection name as it appears in your SAP Logon Pad (the list of saved connections you see when you open SAP Logon). Must be a quoted string or a String variable.

## Properties

**Common**

* **ContinueOnError (Boolean)** - Whether the workflow keeps running if this activity fails.
  * **False (Default)** - Stops the workflow and throws an error.
  * **True** - Ignores the error and continues with the next activity.

  **Note:** If this activity is placed inside a **Try Catch** and **ContinueOnError** is `True`, the **Catch** block does not run, because no error is thrown to catch.

**Input**

* **Connection Name (String)\*** - Same as **Connection name** above: the exact connection name from your SAP Logon Pad.
* **NumberOfRetries (Int32)** - How many times the activity retries connecting if the first attempt fails. Default is `5`.
* **RetryInterval (Int32)** - How long to wait (in milliseconds) between each retry. Default is `500`.
* **SAP Logon Path (String)\*** - Same as **SAP Logon Path** above: the path to `saplogon.exe`.

**Misc**

* **Public (Checkbox)** - If selected, this activity's variable values are written to the execution log at Verbose level. Consider data security before enabling this.
* **DisplayName (String)** - The name shown for this activity in the workflow designer. You can rename it to keep your workflow organized.

**Output**

* **SAP Login Window (Window)** - The SAP window that this activity just opened, stored in a `Window` variable. Pass this into the [SAP Login](/docs/activities/sap/latest/activities/sap-login.md) activity (or other SAP activities) so they know which window to act on.
