---
title: "Create a Request with the AI Assistant"
description: "Open the AI Assistant, select the /hoa-don, /ban-ke, or /nhap-tay skill, drop in invoices or a statement, answer the form, and click Agree on the confirmation card."
id: create-draft
sidebar_label: Create a Request with the AI Assistant
sidebar_position: 2
---

# Create a Request with the AI Assistant

Open the AI Assistant, select the /hoa-don, /ban-ke, or /nhap-tay skill, drop in invoices or a statement, answer the form, and click Agree on the confirmation card.

## Before you start

- **[File upload limits](../../../reference/extraction/file-limits.md)**\
  Add from invoices supports up to 50 invoices per run; importing a document set supports up to 50 files and 100 MB; files uploaded to the assistant can be up to 10 MB each.


## Steps

1. Click the ✨ **AI Assistant** button at the top of the page (or the floating bubble, depending on your layout) to open the "What can I help you with?" chat panel.
2. Select the **Create a request from invoices** (/hoa-don), **Create a request from a statement and invoices** (/ban-ke), or **Create a request using Q&A** (/nhap-tay, when you don't have any files) suggestion; or click **+** → **Skills**, or type / in the chat panel's input field. The command is added to the input field; add a request if needed, then send it.
3. Attach files using **+** → **Attach files** or drag and drop them into the chat panel (up to 10 MB per file; files are kept temporarily for 24 hours).
4. Follow the assistant cards shown in the chat panel: files are classified (by filename, then by content if unclear), each invoice is read, and for /ban-ke, the statement is read and each invoice is matched to a row. Reply when the assistant asks for the request type, an invoice doesn't match any row, or the **Fill in missing information** form appears (click **Send** or **Skip**). The requester, organization, request date, budget period, and amount are prefilled by default, just as when you create a request from the page.
5. On the "Confirmation: Create draft request" card, check the request type, expense items (up to 50), the "Information from the application (not the assistant)" section, and any "Unmatched" values (these will be left blank for you to select again); if the button still says **Waiting for invoice processing**, wait for processing to finish. Click **Agree** to have the assistant create a draft, or **Cancel**.
6. Click **Open request** to open the draft and review it before submitting; the assistant won't submit it without your consent and will never sign it. An individual invoice card also has a **Create a request from this invoice** button.

## Troubleshooting

- "Couldn't create the request. The file may have expired" or the file is no longer available after 24 hours: drop the file into the chat panel again. "The request was created, but the invoice file couldn't be attached": upload the invoice to the request. If there are more than 50 files pending in one chat panel, attach some to a request or start a **New conversation**. See [File upload limits](../../../reference/extraction/file-limits.md).
- If a statement has more than 50 rows, the assistant will ask you to split it into multiple requests.
- "AI model not configured" or "This AI model can't run the assistant": contact your administrator ([Select an AI model for the assistant](../../admin/how-to/set-assistant-model.md)).


## Prerequisites to check

- [The AI Assistant is enabled for your role](../../../troubleshooting/assistant/tools-enabled.md) — An administrator has enabled at least one assistant tool available to your role, so the AI Assistant button is displayed.

## Features used

- [AI Assistant skills](../features/skills.md) — Predefined recipes with steps written in natural language; users invoke them with slash commands in the chat panel, and administrators manage them.

## Used in these guides

- [Ask the AI Assistant to create a request](../create-draft.md) — For users who want the assistant to read invoices or a statement (or ask questions to fill in information when there are no files) and prepare a request draft.
