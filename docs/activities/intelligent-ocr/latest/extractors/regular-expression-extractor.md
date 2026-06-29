---
id: regular-expression-extractor
title: "Regular Expression Extractor"
sidebar_label: "Regular Expression Extractor"
sidebar_position: 2
description: "Regular Expression Extractor activity documentation."
displayed_sidebar: activitiesSidebar
---
# Regular Expression Extractor

RCA.Activities.OCR.RegexBasedExtractor

## **Description**

An extractor using regular expressions to extract structured fields from documents.

![regular-expression-extractor](/static/img/regular-expression-extractor.png)

(\* For Mandatory)

## **Properties**

**Input**

* **Configuration (String)**\* - The configuration value for the extractor as a JSON escaped string.
* **Timeout MS (Int32)** - The timeout value for any Regex search in milliseconds. Default is `2000` (infinite if set to 0).

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[354086666] Regular Expression Extractor`.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
