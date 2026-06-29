---
id: introduction
title: "Introduction"
sidebar_label: "Introduction"
sidebar_position: 1
description: "Introduction to IDP activity package"
displayed_sidebar: activitiesSidebar
---
# Introduction

The **IDP (Intelligent Document Processing) activities** package offers seamless integration with the **akaBot IDP** platform, enabling you to automate document digitizing, data extraction, and classification processes. 

These activities allow the robot to handle complex document processing workflows by connecting directly to your akaBot IDP server using API credentials.

These activities enable the robots to:

* **Connect to akaBot IDP**: Establish a secure connection context using an API key and server endpoint via the **IDP Scope** container.
* **Import & Upload Documents**: Submit various file types (such as invoices, receipts, purchase orders, PDFs, or images) to the IDP server for automated data extraction and digitization.
* **Monitor Document Status**: Query the processing status (e.g., Processing, Completed, Pending review) of uploaded documents in real-time.
* **Retrieve & Update Metadata**: Fetch lists of documents, reload documents for reprocessing, and update document processing status.
* **Export Structured Data**: Retrieve and export the finalized, high-accuracy extracted data from processed documents for use in downstream automation tasks.

---

## **Key Requirements**

To use the IDP activities in your workflow:

1. **IDP Scope Container**: All other IDP activities (such as *Import Document*, *Export Document*, etc.) must be placed inside the [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) container to inherit connection credentials.
2. **akaBot IDP Account**: A valid **Server Endpoint** URL and **API Key** are required to authorize connections to the server.
