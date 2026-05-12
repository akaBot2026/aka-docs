---
id: get-nodes
title: "Get Nodes"
sidebar_label: "Get Nodes"
sidebar_position: 3
description: "Get Nodes activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Nodes

RCA.Activities.Core.GetNodes

## **Description**

The Get XML Nodes activity allows you to retrieve a list of first-level XML Nodes from a XML document.

[![get nodes.jpg](/img/eb2f92_get-nodes.jpg)](/bin/download/Activities/XML/Activities/Get%20Nodes/WebHome/get%20nodes.jpg?rev=1.1)

(\* for Mandatory)

## **In the body of activity**

* **Enter a VB expression (XDocument)**- An XDocument variable containing the XML node to be processed.

## **Properties**

**Input**

* **Existing XML (XDocument)**- An XDocument variable containing the XML node to be retrieved.
* **XMLString (String)**\* - A string or string variable containing the XML node to be retrieved.

**Notes**: Fill in the Existing XML property makes the XMLString property unusable.

**Misc**

* **Public (Checkbox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Get Nodes

**Output**

* **XML Nodes (XNode)**- An variable containing the retrieved XML nodes.
