---
id: sap-login
title: "SAP Login"
sidebar_label: "SAP Login"
sidebar_position: 4
description: "SAP Login activity documentation."
displayed_sidebar: activitiesSidebar
---
# SAP Login

RCA.Activities.Common.SapLogin

## Description

Use this activity to sign into an SAP session window that is already open. Run a [SAP Logon](/docs/activities/sap/latest/activities/sap-logon.md) activity first to open that window, then place this activity right after it (in the same **Do** sequence) to enter the client, username, password, and language and complete the sign-in.

![1714793840785-992.png](/static/img/1d2608_1714793840785-992.png)

(\* is mandatory)

**Note:** This activity also requires SAP GUI Scripting to be enabled on both your PC and the SAP server; see the **Prerequisites** section on the [SAP Logon](/docs/activities/sap/latest/activities/sap-logon.md) page.

## In the body of the activity

* **Client\*** - The SAP client number to log into. Must be a quoted string or a String variable.  
  E.g: `"800"`
* **Username\*** - The username to log into SAP. Must be a quoted string or a String variable.
* **Password** - The password to log into SAP. Used only when **Is Secure** (in **Options**) is cleared. Must be a quoted string or a String variable.
* **Secure Password** - The password to log into SAP, as a SecureString. Used only when **Is Secure** (in **Options**) is selected — which is the default.
* **Language\*** - The language SAP uses to display screens, menus, and fields. Must be a quoted string or a String variable.  
  E.g: `"EN"` for English.
* **Multiple Logon Option** - If there is already an active logon with the same user at the same time, choose how to proceed:
  * **Single (Default)** - Continue with this logon and end any other logons.
  * **Multiple** - Continue with this logon, without ending any other logons.
  * **Terminate** - Terminate this logon attempt.

## Properties

**Common**

* **ContinueOnError (Boolean)** - Whether the workflow keeps running if this activity fails.
  * **False (Default)** - Stops the workflow and throws an error.
  * **True** - Ignores the error and continues with the next activity.

  **Note:** If this activity is placed inside a **Try Catch** and **ContinueOnError** is `True`, the **Catch** block does not run, because no error is thrown to catch.
* **Timeout MS (Int32)** - How long (in milliseconds) to wait for the login to succeed before throwing an error. Default is `5000`.

**Input**

* **Client (String)\*** - Same as **Client** above.
* **Language (String)\*** - Same as **Language** above.
* **Password (String)** - Same as **Password** above.
* **Secure Password (SecureString)** - Same as **Secure Password** above.
* **Username (String)\*** - Same as **Username** above.

**Misc**

* **Public (Checkbox)** - If selected, this activity's variable values are written to the execution log at Verbose level. Consider data security before enabling this.
* **DisplayName (String)** - The name shown for this activity in the workflow designer. You can rename it to keep your workflow organized.

**Options**

* **IsSecure (Checkbox)** - If selected (the default), the activity logs in using **Secure Password**. If cleared, it uses the plain **Password** field instead.
* **Multiple Logon Option** - Same as **Multiple Logon Option** above. Default is **Single**.
