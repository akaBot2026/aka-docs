---
id: learning-method
title: How AkaXtract Learns Your Documents
sidebar_label: Learning Method
sidebar_position: 4
description: AkaXtract does not train a model. It is configured with prompts and schemas. Learn how to set it up and improve accuracy.
displayed_sidebar: akaXtractSidebar
---

# How AkaXtract Learns Your Documents

AkaXtract does **not** train or fine-tune a model on your documents. You do not prepare a training data set, and you do not wait for a training run. You describe what to extract in a [Pipeline](./create-a-pipeline.md), and a change takes effect when you publish a new version.

## What You Configure

| Setting | What it controls |
| --- | --- |
| AI model | The model that processes your documents. Accuracy, language coverage, and page limits can differ between models |
| Classification prompt and schema | How each page is assigned to a document type, and how pages are grouped into documents |
| Extraction prompt (per document type) | Which fields to find, how to treat missing values, and how to read tables |
| Extraction JSON schema (per document type) | Field names, data types, and the structure of the result, such as header fields and line items |
| Post-process script (optional) | Corrections to values after extraction |
| Approval rules | Which results finish automatically and which go to a reviewer |

## Improve Accuracy

1. Create the Pipeline from a sample that represents your real documents.
2. Check that the generated fields, names, and types match what your receiving system needs.
3. [Test](./test-and-publish.md) with sample documents and compare the data with the source.
4. If a field is wrong or missing, change the extraction prompt or schema of that document type. Describe the required fields, how to handle missing values, and table data more precisely. Use a post-process script for simple fixes. If results are still weak, select a different AI model and test again.
5. Test again, then publish.
6. Keep `Auto-Approve Results` off while you validate. Turn it on, with a threshold, when you trust the results. See [Approval Rules](./create-a-pipeline.md#approval-rules).

## What Review Corrections Do

A correction in [Review](../documents/review-and-export.md) fixes the result of that one document. It does not train the model and does not change the Pipeline. To apply a fix to future documents, change the prompt or schema in a new Draft, then test and publish it.
