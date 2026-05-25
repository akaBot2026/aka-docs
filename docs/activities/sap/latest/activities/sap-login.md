---
id: sap-login
title: "SAP Login"
sidebar_label: "SAP Login"
sidebar_position: 4
description: "SAP Login activity documentation."
displayed_sidebar: activitiesSidebar
---
# SAP Login

**SAP Login**

RCA.Activities.Common.SAPLogin

You may use this activity to directly log into an SAP system.

![1714793840785-992.png](/static/img/1d2608_1714793840785-992.png)

**In the body of activity:**

* **Client** - The SAP client number that you want to log into. Text must be quoted.
* **Username -** The username to log into SAP. Text must be quoted.
* **Password** – The password to log into SAP. You need to remove the check in option “Is Secure” to use this password. Text must be quoted.
* **Secure Password** – The secure text to be written in the Password field. You need to check the option “Is Secure” to use this text.
* **Language** - Language the SAP uses to display screens, menus, and fields. Text must be quoted.
* **Mutiple Logon Options** – If there are multiple logons to the same account at the same time, you need to specify the way to continue by selecting one of below 3 options:
  + Single - Continue with this logon and end any other logons.
  + Multiple - Continue with this logon, without ending any other logons.
  + Terminate - Terminate this logon.

**Properties**

**Common**

* **ContinueOnError** - Specifies if the automation should continue even when the activity encounters an error. Only Boolean values (True, False) supported. The default value is False. As a result, if the value is blank or False and an error is thrown, the execution of the project stops. If the value is set to True, the project continues to execute regardless of any error.

**Note:** If this activity is included in **Try Catch** and the value of the **ContinueOnError** property is True, no error is caught when the project is executed.

* **Timeout MS** - Specifies the amount of time (in milliseconds) to wait for the successful login before throwing an error. The default value is 5000 milliseconds.

**Input**

* **Client** - The SAP client number that you want to log into. Text must be quoted.
* **Language** - Language the SAP uses to display screens, menus, and fields. Text must be quoted.
* **Password** – The password to log into SAP. You need to remove the check in option “Is Secure” to use this password. Text must be quoted.
* **Secure Password** – The secure text to be written in the Password field. You need to check the option “Is Secure” to use this text.
* **Username -** The username to log into SAP. Text must be quoted.

**Misc**

* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.
* **DisplayName** - The display name of the activity.

**Options**

* **IsSecure** -  If selected, the **Secure** **Password** field will be used to input to Password Field in SAP, otherwise, the **Password** field.
* **Mutiple Logon Options** – If there are multiple logons to the same account at the same time, you need to specify the way to continue by selecting one of below 3 options:
  + Single - Continue with this logon and end any other logons.
  + Multiple - Continue with this logon, without ending any other logons.
  + Terminate - Terminate this logon.