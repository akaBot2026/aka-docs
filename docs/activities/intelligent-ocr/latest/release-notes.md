---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 2
description: "Release Notes for Intelligent OCR activity package."
displayed_sidebar: activitiesSidebar
---
# Release Notes

## **v3.1.0.1**

**Added**
* Added support for .NET Framework v4.7.2 runtime.
* Improved digitization performance and memory management during large document processing in the **Digitize Document** activity.
* Enhanced template matching accuracy and layout alignment rules in the **Form Extractor** activity.
* Updated OpenCV dependencies to improve image preprocessing for OCR engines.

**Bugs Fixed**
* Fixed configuration string parsing validation errors in the **Regular Expression Extractor** activity when handling escaped JSON characters.
* Resolved UI threading lock issues when configuring taxonomy fields in akaBot Studio.

---

## **v2.1.0.2**

**Bugs Fixed**
* Fixed a schema verification bug in the **Export Extraction Results** activity when exporting confidence scores to a DataTable.
* Resolved occasional NullReferenceException inside **Data Extraction Scope** when receiving corrupted DOM output from the digitization step.

---

## **v2.1.0.1**

**Added**
* Added support for custom confidence thresholds per field in the **Data Extraction Scope** activity.
* Enhanced error messaging for invalid document paths inside **Digitize Document**.

---

## **v2.1.0**

**Added**
* Initial release of the Intelligent OCR activity package (**RCA.Activities.OCR**).
* Core activities introduced:
  * **Digitize Document** (to extract DOM and text using OCR engines)
  * **Data Extraction Scope** (to coordinate data extraction)
  * **Export Extraction Results** (to convert extraction results to a standard DataSet)
* Core extractors introduced:
  * **Form Extractor** (coordinates-based extraction for fixed layouts)
  * **Regular Expression Extractor** (pattern-based extraction)