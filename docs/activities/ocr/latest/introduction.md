---
id: introduction
title: "Introduction"
sidebar_label: "Introduction"
sidebar_position: 1
description: "Introduction to OCR Local Server activity package (RCA.Activities.OCRLocalServer)."
displayed_sidebar: activitiesSidebar
---
# Introduction

The **OCR Local Server** activity package (known in akaBot Studio as **RCA.Activities.OCRLocalServer**) provides activities and engines for optical character recognition (OCR) and text extraction. It enables robots to perform OCR-based screen scraping, locate text on screens or inside images, and interact with user interface elements using localized or cloud-based OCR technologies.

---

## **Core Activities**

Workflows in akaBot Studio utilize this package to locate, extract, and interact with text via OCR. The package includes:

### **OCR Scope**
- **OCR Scope**: A container activity that establishes the OCR context and configuration (such as the default OCR Engine) for all nested OCR activities.

### **OCR Text Extraction & Search**
- **Load Image**: Loads an image file from a specified path so that other activities can perform OCR operations on it.
- **Get OCR Text**: Extracts text from an indicated UI element or image using the OCR screen scraping method.
- **Get OCR Text With Anchor**: Extracts text relative to an anchor string from an indicated UI element or image.
- **Find OCR Text Position**: Searches for a string and returns a UIElement representing its position on the screen.
- **Text Exists OCR**: Checks if a specific text string exists within a target UI element or image.

### **OCR Mouse Interactions**
- **Click OCR Text**: Searches for a specific string using OCR and performs a mouse click on it.
- **Hover OCR Text**: Searches for a specific string using OCR and hovers the mouse cursor over it.

### **Nested OCR Engines**
OCR-based activities (such as *Click OCR Text*, *Get OCR Text*, etc.) rely on nested OCR engines to scan images and recognize characters. The following engines can be dragged and dropped into the OCR activities:
- **akaBot OCR**: akaBot's proprietary OCR engine optimized for structured text extraction.
- **Tesseract OCR**: An open-source local OCR engine integrated by default.
- **Google Cloud OCR**: A cloud-based engine leveraging Google Cloud Vision API.
- **Microsoft Azure OCR**: A cloud-based engine utilizing Azure Cognitive Services Computer Vision API.
- **Microsoft Windows 10 OCR**: A local OCR engine built into the Windows 10/11 operating system.
