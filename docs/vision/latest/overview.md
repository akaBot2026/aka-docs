---
id: overview
title: Akabot Vision
sidebar_label: Overview
sidebar_position: 1
description: Extract and understand information from documents, images, and unstructured content.
displayed_sidebar: visionSidebar
---

# Akabot Vision

Akabot Vision is the intelligent document processing (IDP) module that reads, classifies, and extracts structured data from unstructured sources — scanned invoices, contracts, forms, emails, and images. It combines OCR, machine learning, and configurable extraction templates to turn paper-based and digital documents into actionable data for your workflows.

![Akabot Vision](/static/img/akabot-vision-01.png)

## Key features

- **OCR engine** — High-accuracy text extraction from scanned PDFs, images (PNG, JPEG, TIFF), and digital documents.
- **Document classification** — Automatically route incoming documents to the correct extraction template based on content.
- **Field extraction** — Define extraction rules with a visual template editor; no ML expertise required.
- **Table detection** — Identify and extract multi-row tables from invoices, purchase orders, and reports.
- **Confidence scores** — Every extracted field carries a confidence score so low-confidence items can be routed for human review.
- **Human-in-the-loop** — Built-in validation station for operators to review and correct uncertain extractions before data enters downstream systems.

## Supported document types

- Invoices and purchase orders
- Identity documents (passports, national IDs)
- Contracts and legal agreements
- Bank statements and financial reports
- Medical records and forms
- Custom document types via template training

## Getting started

1. Upload sample documents to the Vision portal.
2. Create a document type and label fields using the template editor.
3. Train the model and validate extraction accuracy.
4. Use the **Vision** activities in Studio to send documents and retrieve extracted data.

## Next steps

- [Activities reference](/docs/vision/latest/document-automation/rpa-reference.md) — Vision activity catalog.
- [Data Service](/docs/data-service/latest/installation/installation.md) — Persist extracted data for downstream processes.
