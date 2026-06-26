---
id: sap-logon
title: "SAP Logon"
sidebar_label: "SAP Logon"
sidebar_position: 1
description: "SAP Logon activity documentation."
displayed_sidebar: activitiesSidebar
---
# SAP Logon

RCA.Activities.Common.SapLogon

## **Description**

Use the connection name from the SAP Logon window to log on to your SAP system natively.

![sap-logon.png](/static/img/sap-logon.png)

(\* For mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - Specifies if the workflow should continue running even when this activity encounters an error. Only Boolean values (`True`, `False`) or variables are supported.
  * **True** - Allows the workflow to ignore the error and continue executing subsequent activities.
  * **False (Default)** - Stops the workflow execution and throws an error if this activity fails.

**Input**

* **Connection Name (String)*** - The specific connection name from your SAP Logon pad used to log on to the SAP system.
* **Number of retries (Int32)** - The maximum number of attempts to connect to the SAP Scripting interface. Default is `5`.
* **Retry Interval MS (Int32)** - The wait time (in milliseconds) between each retry attempt. Default is `500`.
* **SAP Logon Path (String)*** - The file path to the `saplogon.exe` program. This is a mandatory field (leaving it blank throws an error). The default installation path is typically `C:\Program Files (x86)\SAP\FrontEnd\SAPgui\saplogon.exe` or `C:\Program Files\SAP\FrontEnd\SAPgui\saplogon.exe`.

**Misc**

* **Display Name (String)** - The name displayed for this activity in the designer panel. You can edit this name to organize and structure your workflow better.  
  E.g: [066936106] SAP Logon
* **Public (Checkbox)** - If selected, logs the execution details and variables of this activity. Consider data security requirements before enabling this option, as sensitive details could be written to the logs.

**Output**

* **SAP Login Window (WindowApp)** - The WindowApp variable that stores the newly opened SAP login window. This variable can be reused in subsequent SAP activities.
