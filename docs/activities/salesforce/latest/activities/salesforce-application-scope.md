---
id: salesforce-application-scope
title: "Salesforce Application Scope"
sidebar_label: "Salesforce Application Scope"
sidebar_position: 15
description: "Salesforce Application Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# Salesforce Application Scope

RCA.Activities.Salesforce.SalesforceApplicationScope

It initiates a connection to a designated Salesforce Organization and provides the scopes for all subsequent activities.

Firstly, you need to configure the connection parameters to connect to Salesforce Organization by using Configure button.

![1715509316358-757.png](/static/img/f708ac_1715509316358-757.png)

Then, start to drop your activities to make the workflow.

![1715509336328-842.png](/static/img/6935db_1715509336328-842.png)

1. **Configure the connection**

When selecting Configure on the body of the activity, a connection wizard will shown up allowing to configure the connection in an easy way.

![1715509378485-784.png](/static/img/af8989_1715509378485-784.png)

* **Server** – The type of server instance you want to connect to. The three supported values for this field are **Live** (https://login.salesforce.com), **Test** (https://test.salesforce.com), and **Custom**. Only strings and String variables supported.
* **ConsumerKey** - The consumer key of your Salesforce Connected App. Only strings and String variables supported.
* **ConsumerSecret** - The consumer Secret of your Salesforce Connected App, stored in a SecureString variable encrypted by using the **Microsoft .NET Data Protection API** (DPAPI) and stored in the workflow file itself. Only SecureString variables supported.
* **Username** - The username you want to use to log into Salesforce. Only strings and String variables supported.
* **Password** - The password of the user you want to log in with, stored in a SecureString variable. Only SecureString variables supported.
* **SecurityToken** - The security token of the user whose credentials are used to log into Salesforce, stored in a SecureString variable encrypted by using the **Microsoft .NET Data Protection API** (DPAPI) and stored in the workflow file itself. Only SecureString variables supported. This property is optional, depending on the settings of your Salesforce Organization.
* **CustomServer** - The custom Salesforce instance to connect to when Server is set to **Custom**. Used when logging in via the standard domain https://login.salesforce.com or https://test.salesforce.com is restricted.

**Proxy Settings**

* **Proxy Address** - The address of the proxy server. If the protocol is not specified in the address, it automatically defaults to http. Only strings and String variables supported.
* **Proxy Port** - The port of the proxy server. Only strings and String variables supported.
* **Proxy User** - The username to submit to the proxy server for authentication. This field is optional. Only strings and String variables supported.
* **Proxy User Password** - The password of the proxy user. This field is optional. This field supports only SecureStrings and SecureString variables.

**IMPORTANT:** The **ConsumerSecret** and **SecurityToken** can be decrypted only by opening the workflow on the same user account and on the same machine. If the workflow is opened by another user or on another machine, an error message appears, and the two properties must be reconfigured.

When you click "Test Connection," it confirms the validity of the entered credentials and reports the outcome. This connection serves solely for design time purposes. Once the connection is validated, you can proceed to configure all child activities within the sequence activity in the body.

**2. Drag and drop the activities from Toolbox panel to make the workflow.**

**3. Properties**

**Misc**

* **DisplayName** - The display name of the activity.
* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.

**New Connection**

* **ConsumerKey** - The consumer key of your Salesforce Connected App. Only strings and String variables supported.
* **ConsumerSecret** - The consumer Secret of your Salesforce Connected App, stored in a SecureString variable encrypted by using the **Microsoft .NET Data Protection API** (DPAPI) and stored in the workflow file itself. Only SecureString variables supported.
* **CustomServer** - The custom Salesforce instance to connect to when Server is set to **Custom**. Used when logging in via the standard domain https://login.salesforce.com or https://test.salesforce.com is restricted.
* **Password** - The password of the user you want to log in with, stored in a SecureString variable. Only SecureString variables supported.
* **SecurityToken** - The security token of the user whose credentials are used to log into Salesforce, stored in a SecureString variable encrypted by using the **Microsoft .NET Data Protection API** (DPAPI) and stored in the workflow file itself. Only SecureString variables supported. This property is optional, depending on the settings of your Salesforce Organization.
* **Server Type** - The type of server instance you want to connect to. The three supported values for this field are **Live** (https://login.salesforce.com), **Test** (https://test.salesforce.com), and **Custom**. Only strings and String variables supported.
* **Username** - The username you want to use to log into Salesforce. Only strings and String variables supported.

**Options**

* **Report API Error as Exception:** When selected, API error responses are reported in Salesforce Exception by all child activities.

**Proxy Settings**

* **ProxyPort** - The port of the proxy server. Only strings and String variables supported.
* **Proxy Password** - The password of the proxy user. This field is optional. This field supports only SecureStrings and SecureString variables.
* **Proxy Server**- The address of the proxy server. If the protocol is not specified in the address, it automatically defaults to http. Only strings and String variables supported.
* **Proxy User** - The username to submit to the proxy server for authentication. This field is optional. Only strings and String variables supported.

**Use Existing Connection**

* **Existing Connection** – Reuses an existing connection which is already established, stored in an IConnectionService variable.