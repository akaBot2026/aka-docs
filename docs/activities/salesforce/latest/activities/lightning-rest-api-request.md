---
id: lightning-rest-api-request
title: "Lightning REST API Request"
sidebar_label: "Lightning REST API Request"
sidebar_position: 14
description: "Lightning REST API Request activity documentation."
displayed_sidebar: activitiesSidebar
---
# Lightning REST API Request

RCA.Activities.Salesforce.LightningRESTAPIRequest

You may use this activity to invoke a Salesforce Lightning REST API which is not implemented as an activity in the Salesforce activity package.

**Properties**

**Input**

* **AcceptFormat** - Specifies the format of the response that is acceptable. Default value is ANY. 3 options available:
  + ANY
  + JSON
  + XML
* **Method** - The request method to be used when calling the API. The following HTTP methods available: GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH and MERGE. Default method is GET.
* **Resource** - The full path to the REST resource you want to use. Only strings and String variables supported.

**Misc**

* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.
* **DisplayName** - The display name of the activity.

**Options**

* **Body** - The body of the request. Only strings and String variables supported.
* **BodyFormat** - The format in which you want the body of the request to be. Most Lightning API requests accept body formats such as **applicaton/json** or **application/xml**. Only strings and String variables supported.
* **Headers** - Enables you to include custom headers in the HTTP request. Only Collection variable supported.
* **ResultPath** – Specifies the path to where you want to save the result response of the request. Only strings and String variables supported.

**Output**

* **Result** - The response received from the API endpoint. This property is set only when the **ResultPath** property field is left empty. Only String variables supported.
* **SalesforceStatus** - The status returned from Salesforce once the action is completed, stored in a SalesforceStatus variable.
* **StatusCode** - The HTTP Status Code returned by the request, stored in an Int32 variable. Only Int32 variables supported.