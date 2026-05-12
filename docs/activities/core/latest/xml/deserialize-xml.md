---
id: deserialize-xml
title: "Deserialize XML"
sidebar_label: "Deserialize XML"
sidebar_position: 1
description: "Deserialize XML activity documentation."
displayed_sidebar: activitiesSidebar
---
# Deserialize XML

RCA.Activities.Core.DeserializeXML

## **Description**

The Deserialize XML activity allows you to deserialize an XML to an XDocument object.

[![deserialize.jpg](/img/db9ffc_deserialize.jpg)](/bin/download/Activities/XML/Activities/Deserialize%20XML/WebHome/deserialize.jpg?rev=1.1)

(\* for Mandatory)

## **In the body of activity**

* **Enter a VB expression (String)**\* - Input string or a string variable containing the XML to be deserialized. String variable and Strings supported only.

## **Properties**

**Input**

* **XMLString (String)**\* - Input string or a string variable containing the XML to be deserialized. String variable and Strings supported only.

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Deserialize XML

**Output**

* **XML Document (XDocument)** - The deserialized XML document stored in a variable.
