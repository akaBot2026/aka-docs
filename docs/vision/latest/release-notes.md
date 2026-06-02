---
id: release-notes
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 2
description: What's new, improved, and fixed in each version of Akabot Vision.
displayed_sidebar: visionSidebar
---

# Akabot Vision — Release Notes

## v3.2.0 — April 2026

**New features**
- **Generative extraction** — Use a large language model to extract fields from documents without a predefined template — just describe the fields in plain text.
- **Handwritten text support** — OCR engine now handles cursive and mixed print/handwritten content with a new HTR (Handwritten Text Recognition) model.
- **Batch processing queue** — Submit hundreds of documents in a single API call; Vision processes them asynchronously and posts results to a webhook.

**Improvements**
- Table detection accuracy on complex invoices with nested headers improved from 87% to 94%.
- Validation station UI redesigned: keyboard-only navigation, bulk-accept for high-confidence pages.
- Model training now requires 30% fewer labeled samples to reach production-ready accuracy.

**Bug fixes**
- Fixed confidence scores displaying as 0% for multi-page PDFs after the 10th page.
- Resolved an issue where rotating a document 180° in preprocessing broke the field coordinate mapping.
- Fixed extraction template editor not saving changes when switching document types without explicit save.

---

## v3.1.0 — January 2026

**New features**
- **Document splitting** — Automatically detect and split multi-document PDF bundles into individual files before classification.
- **Signature detection** — New field type that detects the presence or absence of a signature in a defined region.
- **REST API v2** — Synchronous extraction endpoint for documents under 5 MB; no polling required.

**Improvements**
- Vietnamese language model accuracy improved by 18% after retraining on expanded corpus.
- Processing throughput increased to 500 pages/minute per tenant (up from 200).
- Extraction results now include bounding box coordinates for each extracted value.

**Bug fixes**
- Fixed an intermittent failure when processing TIFF files with CCITT Group 4 compression.
- Corrected field extraction on documents with right-to-left (RTL) text mixed with LTR content.

---

## v3.0.0 — September 2025

**New features**
- **Akabot Vision v3 launch** — Rebuilt on a transformer-based OCR and extraction pipeline.
- **No-code template editor** — Draw field zones on a document image and label them — no configuration files required.
- **Human-in-the-loop station** — Embedded web UI for reviewers to validate and correct uncertain extractions before they flow downstream.

**Breaking changes**
- Vision v2 template format (`.vtemplate`) is not compatible with v3. Re-create templates using the new editor.
- The v2 Python SDK for Vision is deprecated; use the REST API or the new Studio activity pack.

**Bug fixes**
- Resolved a memory exhaustion issue when processing PDF files larger than 100 MB.
