---
id: get-xml-node-attributes
title: "Get XML Node Attributes"
sidebar_label: "Get XML Node Attributes"
sidebar_position: 4
description: "Get XML Node Attributes activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get XML Node Attributes

RCA.Activities.Core.GetXMLNodeAttributes

## **Description**

The Get XMLNode Attributes activity allows you to retrieve the attributes of an XML Node.

[![get xml node attributes.jpg](/img/73e5f8_get-xml-node-attributes.jpg)](/bin/download/Activities/XML/Activities/Get%20XML%20Node%20Attributes/WebHome/get%20xml%20node%20attributes.jpg?rev=1.1)

(\* for Mandatory)

## **In the body of activity**

* **Enter a VB expression (XNode)**\* - The XML Node whose attributes you want to retrieve. XNode variable supported only.

## **Properties**

**Input**

* **Existing XML Node (XNode)**\* - The XML Node whose attributes you want to retrieve. XNode variable supported only.

**Misc**

* **Public (Checkbox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Get XML Node Attributes

**Output**

* **Attributes (IEnumerable< XAttribute >)** - The output variable in IEnumerable containing the retrieved XML node attributes.
