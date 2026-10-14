---
id: overview
title: AkaXtract
sidebar_label: Overview
sidebar_position: 1
description: Extract structured data from documents with AI, review the results, and deliver them to your systems.
displayed_sidebar: akaXtractSidebar
---

# AkaXtract

AkaXtract turns document content into structured data. You upload a document, AI classifies it and extracts the data, you review the result, and you export it or send it to another system.

## How It Works

1. **Set up** a [Pipeline](./user-guide/pipelines/create-a-pipeline.md) that defines what to extract.
2. **Test and publish** it.
3. **Upload** documents manually, or receive them through [ScaleConnect](./user-guide/integrations/scaleconnect.md) or the [API](./user-guide/integrations/api-integration.md).
4. **Review** results that need a person to confirm them.
5. **Export** the data, or let a [Webhook](./user-guide/integrations/webhooks.md) deliver it.

## Key Concepts

| Term | Meaning |
| --- | --- |
| Pipeline | The processing rules: AI model, classification instructions, extraction instructions for each document type, and approval rules |
| Document | A source file and the review status of its result |
| Job | One processing run, with its own ID, Pipeline version, status, and errors |
| Human Review | A reviewer compares the extracted data with the source document and confirms it |
| Webhook | An automatic notification sent to a receiving system |

## Choose Your Path

| I am… | Start with |
| --- | --- |
| New to AkaXtract | [Quick Start](./user-guide/getting-started/quick-start.md) |
| Setting up document processing | [Create a Pipeline](./user-guide/pipelines/create-a-pipeline.md), then [Test and Publish](./user-guide/pipelines/test-and-publish.md) |
| Learning how AkaXtract is configured and how to improve accuracy | [Learning Method](./user-guide/pipelines/learning-method.md) |
| Uploading or reviewing documents | [Upload and Track](./user-guide/documents/upload-and-track.md), then [Review and Export](./user-guide/documents/review-and-export.md) |
| Connecting another system | [Webhooks](./user-guide/integrations/webhooks.md) and [API Integration](./user-guide/integrations/api-integration.md) |
| Managing users and quota | [Users and Roles](./user-guide/administration/users-and-roles.md) and [Quota and Retention](./user-guide/administration/quota-and-retention.md) |
| Stuck on an error | [Troubleshooting](./user-guide/troubleshooting.md) |

:::note
Menu and button names follow the English interface. The interface is also available in Vietnamese, Japanese, and Traditional Chinese. The menus you see depend on your permissions.
:::
