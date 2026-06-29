---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 2
description: "Release Notes for OCR Local Server activity package."
displayed_sidebar: activitiesSidebar
---
# Release Notes

## **v3.1.1.7**

**Added**
* Added support for .NET Framework v4.7.2 runtime compatibility.
* Integrated the latest version of the **akaBot OCR** engine to optimize speed and character recognition accuracy for low-resolution screen captures.
* Added the new **Get OCR Text With Anchor** activity to allow robust text extraction relative to target labels/anchors.
* Added support for `Grab Region` under **Get OCR Text With Anchor** options to fine-tune extraction zones.

**Bugs Fixed**
* Fixed a bug in **Find OCR Text Position** where special characters in search queries caused incorrect coordinate offset calculation.
* Resolved memory leaks in the **Load Image** activity when reading multiple high-resolution files sequentially.
* Fixed UI rendering issues for the **Tesseract OCR** engine configuration properties panel in akaBot Studio.

---

## **v3.1.0.0**

**Added**
* Added the **Microsoft Windows 10 OCR** engine support as a default offline alternative.
* Improved search accuracy for the **Text Exists OCR** activity when matching multi-line strings.

---

## **v2.0.0.0**

**Added**
* Added compatibility with cloud-based OCR providers: **Google Cloud OCR** and **Microsoft Azure OCR**.
* Introduced key modifiers (Ctrl, Alt, Shift, Win) in the **Click OCR Text** activity.

---

## **v1.0.0.0**

**Added**
* Initial release of the OCR Local Server activity package (**RCA.Activities.OCRLocalServer**).
* Core activities introduced:
  * **OCR Scope** (context container)
  * **Load Image** (image loader)
  * **Get OCR Text** (scraping text)
  * **Find OCR Text Position** (coordinate search)
  * **Click OCR Text** (click-to-text integration)
  * **Hover OCR Text** (hover-to-text integration)
  * **Text Exists OCR** (logical text validation)
* Default local engines:
  * **Tesseract OCR** (integrated offline OCR engine)