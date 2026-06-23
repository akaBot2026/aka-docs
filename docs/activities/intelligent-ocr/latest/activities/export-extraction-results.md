---
id: export-extraction-results
title: "Export Extraction Results"
sidebar_label: "Export Extraction Results"
sidebar_position: 14
description: "Export Extraction Results activity documentation."
displayed_sidebar: activitiesSidebar
---
# Export Extraction Results

RCA.Activities.OCR.ExportExtractionResults

## **Description**

Gives you easy access to extraction results by exporting results from an ExtractionResult variable to a DataSet variable which can be further processed. The ExtractionResult variable can be obtained from the Data Extraction Scope activity.

![export-extraction-results](/static/img/export-extraction-results.png)

(\* For Mandatory)

## **Properties**

**Input**

* **Extraction Result (ExtractionResult)**\* - The results of an extraction process that you exported.
* **Include Confidence (Boolean)** - If selected, the output DataSet includes confidence information for each reported value.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[897624653] Export Extraction Results`.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

**Output**

* **DataSet (DataSet)** - DataSet that contains all values from the ExtractionResults, in a collection of Tables.
