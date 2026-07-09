---
id: pipeline-setting
title: Pipeline Setting
sidebar_label: Pipeline Setting
sidebar_position: 1
description: Configure dynamic and flexible AP matching rules with Scale Pay pipelines, from workflow creation to outbound delivery.
displayed_sidebar: scalePaySidebar
---

# Pipeline Setting

This guide shows you how to build a matching pipeline in Scale Pay. A pipeline lets you configure mapping and matching rules that are dynamic and flexible. Scale Pay already includes several common pipelines with basic default settings, so you can start quickly or customize an existing one to fit your business.

## Open the Pipeline tab

1. In the header bar, click **Pipeline**.
2. The left panel shows your existing pipelines.
3. The right panel is the workspace for creating and editing pipelines.


![Open Pipeline](/static/img/open_pipeline.png)

## Step 1: Create a pipeline

You can start a pipeline in two ways:

1. Click **New** to build a pipeline from scratch.
2. **Clone** an existing pipeline and adjust it to your needs.

Choose **New** if you want full control from the beginning. Choose **Clone** if a similar pipeline already exists and you only need to change a few rules.

![Create Pipeline](/static/img/create_pipeline.png)

## Step 2: Set up rules

### Step 2.1: Create workflow

Start by defining the basic information for your pipeline:

- **Name**: a clear label for your pipeline.
- **Description**: explain what this pipeline reconciles.
- **Workflow type**: choose **2-way**, **3-way**, or **4-way** matching.
- **Documents**: select the document types used for reconciliation.

![Create Pipeline](/static/img/workflow.png)

### Step 2.2: Set up inbound

Configure how Scale Pay receives and extracts data from each document type:

- **Source**: select the data source for each document type.

![Create Pipeline](/static/img/input_source.png)

- **Required fields for extraction**: choose which fields Scale Pay must extract from each file.

![Create Pipeline](/static/img/require_fields.png)

- **AI extraction engine**:
  - Choose the model.
  - Choose accepted file types (CSV, PDF, image, and so on).
  - Customize the extraction prompt to improve accuracy for your document format.

![Create Pipeline](/static/img/ai_extraction_engine.png)

### Step 2.3: Configure mapping rule

Mapping rules organize individual documents into a matching set.

- The default key is usually **PO number**.
- You can replace it with other keys such as **invoice number**, **vendor ID**, or **reference number** depending on your document structure.

![Create Pipeline](/static/img/mapping_rule.png)

### Step 2.4: Configure matching rule

You can turn on/off the toggle **Auto-approval**. 
- If the toggle **ON**, the matching result will be automatically approved when all documents are matched with the others. 
- If the toggle **OFF**, the matching result status will be "pending_approval" even though the all documents are matched with others. It means users need to review and approve or reject to finalize the result.

![Create Pipeline](/static/img/toggle_approval.png)

Matching rules compare fields across documents at two levels:

- **Header level**: match high-level fields such as Seller name, Buyer name, Seller tax code, Buyer tax code...
- **Line item level**: match detailed fields such as quantity, unit price, or tax amount.

For each level, you can add or remove fields to match.

Scale Pay also lets you control which document types participate in each comparison. For example, you can compare **tax ID** between PO and invoice only, without involving the payment document.

![Create Pipeline](/static/img/matching_fields.png)

You can apply the **global LLM engine** for all matching fields. Especially, you can also customize the engine and prompt for each individual field, making the process dynamic and flexible.

![Create Pipeline](/static/img/customize_engine.png)

### Step 2.5: Notifications

Configure when and how users are notified:

- Trigger events such as match success, exception found, or pipeline completed.
- Choose notification channels such as **in-app**, **email**, or other methods.

![Create Pipeline](/static/img/noti.png)

### Step 2.6: Outbound configuration

Define where Scale Pay delivers matched results:

- Push results to multiple destinations in parallel, such as ERP, accounting software, or data warehouses.
- Expose a **Pull API** so downstream systems can fetch matched data on demand.

![Create Pipeline](/static/img/outbound.png)

### Step 2.7: Review and activate

After completing all configuration steps, review every setting before activation. Scale Pay shows a summary of your workflow, inbound config, mapping rules, matching rules, notifications, and outbound config. Confirm that everything is correct, then activate the pipeline.

![Create Pipeline](/static/img/review.png)

## After publishing

Once a pipeline is active, you can still:
- **Archive** the pipeline if it is no longer needed
- **Edit** the pipeline to update rules or document types.

## What to do next

If you are setting up Scale Pay for the first time, go to [Import documents](./documents.md) next to learn how to add your invoices, purchase orders, and payment files.

If you want to review and manage matched results, go to [Manage matching sets](./auto-mapping-matching.md).
