---
id: knowledge-usage
title: Knowledge Usage
sidebar_label: Knowledge Usage
sidebar_position: 15
description: Beginner-friendly guide to create Knowledge so AI can answer from trusted business information.
displayed_sidebar: scaleFlowSidebar
---

# Knowledge Usage

Knowledge is the trusted information your AI uses to answer customers. It can include FAQs, product details, delivery rules, refund policy, warranty policy, price lists, help documents, or website pages.

Without good Knowledge, AI may not know your business. With good Knowledge, your [AI Agent](./ai-agent-usage) can answer more accurately and your [AI Assistant](./ai-assistant) can support customers in Inbox.

## When to use Knowledge

Use Knowledge when:

- Customers often ask questions that already have standard answers.
- Your team wants AI to answer from approved company information.
- You need AI to follow business rules, such as return windows or delivery timelines.
- You want staff to find answers faster.

Example: A store uploads a return policy PDF, a delivery FAQ, and a product catalog. When a customer asks, "Can I return an item after 10 days?" AI checks the return policy before answering.

## Open Knowledge from the menu

![Open knowledge](/static/img/open-knowledge.png)

1. In the left sidebar, open **AI**.
2. Select **Knowledge**.
3. You will see the knowledge base list page.

If action buttons such as **Add knowledge**, **Upload**, **Synchronize**, **Crawl Web**, or **Test Knowledge** are missing, ask your admin to check your Knowledge access.

## Knowledge list page

![Knowledge list page](/static/img/list-knowledge.png)

On the **Knowledge** page, you can:

- Search by source name with **Search by data source name**
- Filter by status with **All statuses**
- Use **Reset filters** to clear search and status filters
- Open one knowledge base by clicking its card
- Create a new knowledge base with **Add knowledge** (if authorized)

Each card shows the name, source type, current status, and last update time.

## Create a Knowledge base

![Create a new knowledge](/static/img/button-add-knowledge.png)

1. Click **Add knowledge**.
2. Enter:
   - **Name** (required)
   - **Description** (optional)
3. Select **Source type**:
   - **File Upload**
   - **Google Drive**
   - **Crawl Web**
4. Complete source-specific fields.
5. Click **Add knowledge**.

After creation, the UI opens the knowledge detail page automatically.

## Choose the right source type

### File Upload

![Create a new knowledge](/static/img/create-knowledge.png)

Use **File Upload** when your information is in documents on your computer.

Good examples:

- FAQ PDF
- Product catalog
- Price list spreadsheet
- Warranty document
- Store policy document

After creating the Knowledge base, click **Upload** and add files. Supported file types include PDF, Word, text, CSV, JSON, and Excel files.

After files appear in the document list, run **Sync knowledge** (or **Synchronize** from the actions menu) so ScaleFlow ingests them. Until sync finishes successfully, AI may not use the new content. See [Upload documents](#upload-documents) for step-by-step flow and a screenshot of the sync control.

### Google Drive

![Google Drive](/static/img/knowledge-google-drive.png)

Use **Google Drive** when your team already keeps business documents in Google Drive.

Before using it, connect Google Drive in [Integration Usage](./integration-usage). Then choose the files you want ScaleFlow to read.

### Crawl Web

![Crawl Web](/static/img/web-crawl.png)

Use **Crawl Web** when your information is already published on a website, such as a help center or policy page.

Enter the page address and let ScaleFlow read the selected website pages. Start with a small set of pages first so you can check the results easily.

## Knowledge detail page

![Knowledge detail page](/static/img/action-knowledge-1.png)

Inside one knowledge base, you can:

- Search documents with **Search documents...**
- Filter documents by status
- Select one or many rows in the document table
- Download document files
- Delete documents (if authorized)
- Open action menu for edit/test/delete options

When ScaleFlow is reading or updating documents, you may see a progress notice. Wait until the work is finished before testing.

## Upload, sync, or crawl

Depending on the source type, you will see one of these main actions:

- **Upload**: add files from your computer.
- **Sync knowledge** or **Synchronize**: refresh information from the selected source.
- **Crawl Web**: read or refresh website pages.

Use these actions whenever your business information changes.

## Upload documents

![Upload documents](/static/img/upload-document.png)

1. Open a File Upload knowledge base.
2. Click **Upload**.
3. Choose one or more files.
4. Click **Upload** in the dialog.
5. Wait for upload to complete and review rows in the document table.
6. Click **Sync knowledge** on the knowledge detail page (or open the actions menu and choose **Synchronize**) so uploaded files are processed and become available to AI. Watch the status column until documents move out of **Pending** / **Syncing** into **Ready** when processing succeeds.

![Sync knowledge after uploading documents](/static/img/sync-document.png)

If a file fails, check the file type and try again.

## Test Knowledge before using it with AI

![Test Knowledge](/static/img/test-document.png)

Use **Test Knowledge** to ask sample questions before connecting the Knowledge to an AI Agent.

Practical test questions:

- "What is our refund policy?"
- "How long does delivery take?"
- "What documents are needed for registration?"
- "What warranty do we offer?"

If answers are missing or unclear, update the document, upload a better file, or improve the website page, then sync again.

## Understand document statuses

You may see statuses such as:

- **Ready**: AI can use this information.
- **Pending**: waiting to be processed.
- **Syncing**: ScaleFlow is reading or updating the content.
- **Failed**: something went wrong and needs attention.

For best results, connect only Knowledge that is ready and accurate.

## Delete a knowledge base

![Delete Knowledge](/static/img/action-knowledge.png)

1. Open the knowledge detail page.
2. Open the action menu.
3. Click **Delete**.
4. Confirm in the dialog.

This removes the knowledge source from the library. Confirm carefully before deleting.

## Connect Knowledge to AI

After your Knowledge is ready:

1. Open [AI Agent Usage](./ai-agent-usage).
2. Create or open an agent.
3. Add this Knowledge in the agent's **Knowledge** section.
4. Test the agent.
5. Publish the agent.
6. Turn it on in [AI Assistant](./ai-assistant).

## Real-world workflow

1. A clinic uploads an appointment FAQ and pricing document.
2. The manager tests: "How do I book an appointment?"
3. The answer is clear, so the manager connects the Knowledge to an AI Agent.
4. Smart Assistant starts answering appointment questions in Inbox.
5. If a customer asks for a doctor recommendation, AI creates a ticket for staff.

## Recommended beginner checklist

1. Start with one Knowledge base.
2. Add only the most important documents first.
3. Test with real customer questions.
4. Fix unclear documents before publishing AI.
5. Review Knowledge monthly or whenever policies change.

## Quick troubleshooting

### I cannot see the Knowledge page

- Ask your admin for Knowledge view access.

### I can view but cannot create/edit/upload/delete

- Ask your admin for Knowledge management access.

### I cannot run Sync, Crawl, or Test

- Ask your admin to allow Knowledge updates.

### Sync stays in progress too long

1. Check the ingestion alert on top of the detail page.
2. Use **Cancel** if needed.
3. Start sync again.

### Test Knowledge returns no useful answer

- Verify documents were uploaded/synced successfully.
- Check document statuses and sync errors in the table.
- Re-run sync or crawl after fixing data source issues.
