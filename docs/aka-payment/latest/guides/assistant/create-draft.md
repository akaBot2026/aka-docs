---
title: "Ask the AI Assistant to Create a Request"
description: "Users want the assistant to read invoices or a statement (or ask questions to fill in details when no file is available) and prepare a draft request."
id: create-draft
sidebar_label: Ask the AI Assistant to Create a Request
sidebar_position: 2
---

# Ask the AI Assistant to Create a Request

Users want the assistant to read invoices or a statement (or ask questions to fill in details when no file is available) and prepare a draft request.

**When to use:**

- The user has multiple invoices or a statement and wants AI to prepare a request.
- The user wants to answer a few questions in chat instead of filling out the form themselves.
- The user wants the AI assistant to prepare a draft request from existing files.


Use the chat window and the /hoa-don, /ban-ke, and /nhap-tay skills to create a draft instead of filling it out manually.


## Ways to do this

- [Create a request with the AI assistant](how-to/create-draft.md) — Open the AI Assistant, select the /hoa-don, /ban-ke, or /nhap-tay skill, drop in invoices or a statement, answer the form, and click Agree on the confirmation card.

## Used in these guides

- [Create a payment request](../requests/create-draft.md) — The user wants to create a new payment request and save it as a draft.
- [AkaPayment](../../index.md) — Create, approve, and track payment requests; receive incoming invoices, reconcile documents, and manage budgets, with an AI assistant.

## Before you start

- **[Document upload limits](../../reference/extraction/file-limits.md)**\
  Add from invoices: up to 50 invoices at a time; import a document set: up to 50 files and 100 MB; files uploaded to the assistant: up to 10 MB.

## Steps

[Create a request with the AI assistant](how-to/create-draft.md)

1. Check that the [AI Assistant is enabled for your role](../../troubleshooting/assistant/tools-enabled.md).
   The top of the page has a ✨ "AI Assistant" button (or a floating bubble in the corner of the screen). If neither is present, the assistant is not enabled for you.
   If this is not set up, follow the steps in [Enable assistant tools](../admin/how-to/enable-assistant-tools.md) below.
2. [Enable assistant tools](../admin/how-to/enable-assistant-tools.md) — only if the [AI Assistant is enabled for your role](../../troubleshooting/assistant/tools-enabled.md) check is not met
   1. In the sidebar, under **Admin**, open **AI Settings** (administrators only, on desktop) and select the **Assistant** tab.
   2. Open **Assistant tools** (grouped into Requests and tasks, Read files, Lookup, Reports, Notification center, Compose requests, and Approvals). Use the **Search tools** field (2) to filter; hover over a tool name to see what it does and which roles it is for.
      ![Assistant tools section expanded (38 tools): (2) Search tools field, (3) Select all tools checkbox and Sensitive labels, the Requests and tasks, Read files, Lookup, Reports, Notification center, Compose requests, and Approvals groups; (4) Save button next to Discard changes](/static/img/aka-payment-latest-admin-enable-assistant-tools.webp)
   3. Select individual tools, a group checkbox, or **Select all tools** (3). Tools labeled **Sensitive** (3) change data and always ask the user for confirmation in the chat window; **Reconcile requests** is only for operators and administrators.
   4. Click **Save** (4) ("Assistant tools saved."), or **Discard changes** to discard unsaved selections.
3. [Create a request with the AI assistant](how-to/create-draft.md)
   1. Click the ✨ **AI Assistant** button at the top of the page (or the floating bubble, depending on the layout) to open the chat window, "How can I help you?".
   2. Select the **Create request from invoices** (/hoa-don), **Create request from statement and invoices** (/ban-ke), or **Create request through Q&A** (/nhap-tay, when no files are available) suggestion; or click **+** → **Skills**, or type / in the chat input. The command is added to the input; add more instructions if needed, then send.
   3. Attach files using **+** → **Attach files**, or drag and drop them into the chat window (up to 10 MB per file; files are kept temporarily for 24 hours).
   4. Follow the assistant cards displayed in the chat window: file classification (by filename, then by content if unclear), reading each invoice, and for /ban-ke, reading the statement and matching each invoice to a row. Reply when the assistant asks for the request type, an invoice does not match any row, or the **Fill in missing information** form appears (click **Send** or **Skip**). The requester, unit, request date, budget period, and default values are filled in automatically, as when creating a request from the page.
   5. On the "Confirm: Create draft request" card, review the request type, expenses (up to 50), the "Information from the application (not from the assistant)" section, and any "Unmatched" values (these will be left blank for you to select again). If the button still says **Waiting for invoice reading**, wait for reading to finish. Click **Agree** to have the assistant create the draft, or **Cancel**.
   6. Click **Open request** to open and review the draft before submitting; the assistant will not submit it without your approval and will never sign it. An individual invoice card also has a **Create request from this invoice** button.

## Troubleshooting

### [Enable assistant tools](../admin/how-to/enable-assistant-tools.md)

- "Could not load assistant tools": the assistant service is not responding or you do not have permission to manage it; click **Retry**.
- Enabling a tool does not grant anyone additional permissions: the application still checks each user's permissions for every action.

### [Create a request with the AI assistant](how-to/create-draft.md)

- "Could not create the request. The file may have expired" or the file is no longer available after 24 hours: drop the file into the chat window again. "Request created, but the invoice file could not be attached": upload the invoice to the request. More than 50 files are pending in a chat window: attach some to a request or start a **New conversation**. See [Document upload limits](../../reference/extraction/file-limits.md).
- If the statement has more than 50 rows, the assistant asks you to split it into multiple requests.
- "AI model not configured" or "This AI model cannot run the assistant": contact your administrator ([Choose an AI model for the assistant](../admin/how-to/set-assistant-model.md)).
