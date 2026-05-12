---
id: get-xml-nodes
title: "Get XML Nodes"
sidebar_label: "Get XML Nodes"
sidebar_position: 5
description: "Get XML Nodes activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get XML Nodes

RCA.Activities.Core.GetXMLNodes

## **Description**

The Get Nodes activity allows you to retrieve an XML Node from a XML document.

![get xml nodes.jpg](/img/8d91ed_get-xml-nodes.jpg)

(\* for Mandatory)

## **In the body of activity**

* **Enter a VB expression (XDocument)**\*- An XDocument variable containing the XML.

## **Properties**

**Input**

* **Existing XML (XDocument)**\* - An XDocument variable containing the XML.
* **XMLString (String)**- A string or string variable containing the XML.

**Notes**: Fill in the Existing XML property makes the XMLString property unusable.

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Get XML Nodes

**Output**

* **XML Nodes (IEnumerable)**- An variable containing the retrieved XML nodes.
