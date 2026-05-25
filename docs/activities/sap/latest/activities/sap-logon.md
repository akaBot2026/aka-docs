---
id: sap-logon
title: "SAP Logon"
sidebar_label: "SAP Logon"
sidebar_position: 5
description: "SAP Logon activity documentation."
displayed_sidebar: activitiesSidebar
---
# SAP Logon

**SAP Logon**

RCA.Activities.Common.SAPLogon

You may use this activity to directly logon to an SAP system.

![1714791370040-272.png](/static/img/5443fe_1714791370040-272.png)

**In the body of activity:**

* **SAP Logon Path** - The path to your SAP Logon program on your computer. Text must be quoted.
* **Connection name**- SAP connection name as displayed in the SAP Logon window used for logging onto your SAP system. Text must be quoted.

**Properties**

**Common**

* **ContinueOnError** - Specifies if the automation should continue even when the activity encounters an error. Only Boolean values (True, False) supported. The default value is False. As a result, if the value is blank or False and an error is thrown, the execution of the project stops. If the value is set to True, the project continues to execute regardless of any error.

**NOTE:** If this activity is included in **Try Catch** and the value of the **ContinueOnError** property is True, no error is caught when the project is executed.

**Input**

* **Connection Name** - The exact SAP connection name from the SAP Logon window used to log on to your SAP system.
* **NumberOfRetries** - The number of times (5 in default) that the activity tries to log onto SAP.
* **RetryInterval** - The amount of time (in milliseconds) between each retry to log on. The default amount of time is 5000 milliseconds.
* **SAP Logon Path** - The path to your SAP Logon program on your computer.

**Misc**

* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.
* **DisplayName** - The display name of the activity.

**Output**

* **SAP Login Window** - The newly opened SAP login window in Window variable.