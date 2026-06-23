---
id: form-extractor
title: "Form Extractor"
sidebar_label: "Form Extractor"
sidebar_position: 1
description: "Form Extractor activity documentation."
displayed_sidebar: activitiesSidebar
---
# Form Extractor

RCA.Activities.OCR.FormExtractor

## **Description**

Extracts, matches, and reports the required information by taking into consideration the words' position inside the document. Best suited for fixed template document types.

![form-extractor](/static/img/form-extractor.png)

(\* For Mandatory)

## **Properties**

**Input**

* **Min Overlap Percentage (Double)** - Specifies the minimum overlap area (in percentage) between a box in the document and a box in the template. Default is 65.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[539280315] Form Extractor`.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.