---
id: introduction
title: "Introduction"
sidebar_label: "Introduction"
sidebar_position: 1
description: "Introduction to Intelligent OCR activity package"
displayed_sidebar: activitiesSidebar
---
# Introduction

The **Intelligent OCR** activity package (known in akaBot Studio as **RCA.Activities.OCR**) provides activities for optical character recognition (OCR), cloud OCR, and structured data extraction. It enables robots to digitize and extract structured data from various document types such as invoices, receipts, and forms.

By leveraging Document Understanding capabilities, the package allows you to build workflows that handle document processing from digitization to data extraction and exportation.

---

## **Package Details**

- **Package Name**: `RCA.Activities.OCR`
- **Supported Frameworks**: .NET Framework 4.5.2 and higher, .NET Framework 4.7.2 and higher.
- **Dependencies**: Includes imaging, computer vision, Azure Cognitive Services, and taxonomy libraries.

---

## **Core Activities**

To process a document and extract its data, workflows in akaBot Studio typically follow this sequence:

1. **Digitize Document**: Digitizes a document using a dropped OCR engine (such as *Tesseract OCR*), generating the Document Object Model (DOM) and the extracted document text.
2. **Data Extraction Scope**: Takes the DOM and document text, and executes the extractors nested inside its body to extract values for taxonomy fields.
3. **Form Extractor**: Extracts data from fixed-layout documents by matching fields against template layouts based on word coordinates.
4. **Regular Expression Extractor**: Extracts data by matching text against pre-configured regular expression patterns.
5. **Export Extraction Results**: Converts the final `ExtractionResult` from the scope into a standard `DataSet` (collection of tables) for use in Excel, databases, or ERP integrations.


