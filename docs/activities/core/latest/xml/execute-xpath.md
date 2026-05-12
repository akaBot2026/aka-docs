---
id: execute-xpath
title: "Execute XPath"
sidebar_label: "Execute XPath"
sidebar_position: 2
description: "Execute XPath activity documentation."
displayed_sidebar: activitiesSidebar
---
# Execute XPath

RCA.Activities.Core.ExecuteXPath

## **Description**

The Execute XPath activity allows you to execute the specified XPath expression on a given XML document.

[![execute path.jpg](/img/8f4688_execute-path.jpg)](/bin/download/Activities/XML/Activities/Execute%20XPath/WebHome/execute%20path.jpg?rev=1.1)

(\* for Mandatory)

**In the body of activity**

* **Existing XML (XDocument)**- An XDocument variable containing the XML to be processed. This field supports only XDocument variables.
* **XPath Expression (String)**\* - A string or string variable that contains an XPath expression. This field supports only strings and string variables.

## **Properties**

**Input**

* **Existing XML (XDocument)**- An XDocument variable containing the XML to be processed. This field supports only XDocument variables.
* **XMLString (String)**\* - Input string or a string variable containing the XML to be processed. String variable supported only.

**Notes**: Completing Existing XML property makes the XMLString field unusable.

* **XPath Expression (String)**\* - A string or string variable that contains an XPath expression. This field supports only strings and string variables.

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Execute XPath

**Output**

* **Result (Object)**- The read or extracted XML document stored in an Object variable.
