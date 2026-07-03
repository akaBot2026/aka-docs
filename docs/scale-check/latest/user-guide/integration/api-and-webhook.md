---
id: api-and-webhook
title: API Integration and Webhook
sidebar_label: API and Webhook
sidebar_position: 1
---

# API Integration and Webhook
Scale Check supports integration with external systems through API and Webhook. This helps businesses automate request submission, receive processing results, and synchronize invoice data with internal systems such as ERP, accounting software, or operational management systems.

## API Integration
An API allows the customer system to call Scale Check directly to send processing requests or retrieve data. Instead of working manually on the user interface, an external system can call APIs to trigger supported business actions in Scale Check.

Common use cases include:
- Send invoice information for lookup or verification.
- [Start a configured invoice processing flow](../main-features/processing-flows.md).
- Retrieve invoice processing results into the internal system.
- Synchronize invoice status between Scale Check and accounting or ERP software.

You can view integration information at Integration Management > API Documentation.

## Webhook
Webhook allows Scale Check to send notifications or processing results back to the customer system when an event occurs. The customer configures a receiving URL, and Scale Check sends data to that URL when new results are available.

Webhook can be used for events such as:
- An invoice is downloaded successfully.
- A tax authority invoice lookup succeeds or fails.
- A processing flow is completed, partially completed, or failed.
- A status change needs to be synchronized to the customer system.

You can configure and monitor Webhook at Integration Management > Webhook Configuration and Integration Management > Webhook History.
