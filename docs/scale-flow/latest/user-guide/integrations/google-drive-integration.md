---
id: google-drive-integration
title: "Google Drive"
sidebar_label: "Google Drive"
sidebar_position: 3
description: "Guide to connect Google Drive to ScaleFlow through Google OAuth, use Knowledge, and work with AI agents (MCP)."
displayed_sidebar: scaleFlowSidebar
---

# Google Drive Integration

Connecting **Google Drive** lets ScaleFlow access **only the files you select** through Google Picker. You can:

- Sync documents into **Knowledge** so AI can read content (FAQs, catalogs, policies).
- Attach Drive to an **AI Agent** so the agent can **list files** and **view metadata** through MCP tools.

Use this integration when you want to:

- Let your team store documents on Drive and have Smart Assistant answer based on those files.
- Let agents find the right file or folder on Drive in operational workflows.
- Avoid granting access to all of Drive — only explicitly selected files are opened.

---

## Google Drive vs Google Sheets

| | Google Drive | Google Sheets |
|---|--------------|---------------|
| Primary purpose | Documents (PDF, Word, and more) | Spreadsheets, row/column data |
| Read content for AI | Through **Knowledge** (file sync) | Through MCP `read_rows` or Knowledge |
| MCP tools | `list_files`, `get_file` (metadata) | `read_rows`, `append_row`, and more |
| Dedicated doc | This guide | [Google Sheets Integration](./google-sheets-integration) |

---

## Before You Start

Prepare the following:

- A **Google** or **Google Workspace** account with the files you need.
- Permission to manage integrations in **ScaleFlow**.
- Files already uploaded to Google Drive (PDF, DOCX, TXT, and more).
- About **5-10 minutes** for the first connection.

> **Access scope (drive.file):** ScaleFlow does **not** see your entire Drive. It can only access files you **select through Google Picker** when creating Knowledge or configuring an agent. Files that were not selected cannot be read.

---

## Step Overview

| Step | Where | What to do |
|------|-------|------------|
| 1 | ScaleFlow | **Integrations -> Google Drive -> Connect** |
| 2 | Google | Sign in and **Allow** access |
| 3 | ScaleFlow | Run **Test connection** and confirm **Connected** status |
| 4 | ScaleFlow | Create a **Knowledge** source from Google Drive **or** attach Drive to an **AI Agent** |
| 5 | ScaleFlow | Select files through **Google Picker** -> sync / test |

---

## Step 1 - Connect Google Drive in ScaleFlow

1. Open the left menu -> **Integrations**.

   ![ScaleFlow Integrations menu](/static/img/integration-connection.png)

2. Find the **Google Drive** card -> click **Connect**.
3. On the setup screen, review **Permissions required**:
   - **Access only the files and folders you choose in Google Picker** — only the files you select for automation and knowledge sync.

   ![Google Drive setup permissions](/static/img/google-drive-setup-permissions.png)

4. Click **Continue with Google**.

5. Select your Google account and click **Allow**.

   ![Google Drive OAuth consent](/static/img/connect-google-drive-1.png)

6. After authentication, the connection appears with **Connected** status.

   ![Google Drive connections list](/static/img/google-drive-connections-list.png)

---

## Step 2 - Manage the Connection

Open **Integrations -> Google Drive** and select a connection.

### Display tab

- **Connection name** — rename the connection (for example: `Google Drive — Marketing`, `Google Drive — Support`).
- **Google account metadata** (read-only): Account name, Google email, Connected on.

![Google Drive Display tab](/static/img/google-drive-display-tab.png)

### AI and Automation tab

- An overview of Drive workflows with AI.
- **Google Drive actions** — MCP tools.
- **Recommended setup flows**: Document Discovery, Metadata Sync, Knowledge Source Sync.

![Google Drive AI and Automation tab](/static/img/google-drive-ai-automation-tab.png)

### Quick actions

| Action | When to use it |
|--------|----------------|
| **Test connection** | After connecting, or when you suspect the token expired |
| **Reconnect** | Google revoked access |
| **Disconnect** / **Delete** | Stop or remove the connection |

---

## Step 3 - Use Google Drive as Knowledge (Read Document Content)

This is the most common approach: AI **reads file content** (FAQ, catalog) through Knowledge, not through Drive MCP.

1. Open **AI -> Knowledge** -> **Add knowledge**.
2. Select **Source type: Google Drive**.
3. Choose the **Google Drive connection** (with Connected status).
4. Click **Select files** and choose one or more files through Google Picker.
5. Click **Add knowledge**.
6. On the Knowledge detail page, click **Sync knowledge** / **Synchronize** so ScaleFlow ingests the content.

![Knowledge Google Drive source](/static/img/knowledge-google-drive.png)

7. Attach the Knowledge source to an **AI Agent** (Capabilities tab -> Knowledge).
8. The agent uses the `queryKnowledge` tool to answer based on synced documents.

See also: [Knowledge Usage](../scaleflow-ai/knowledge-usage).

> **Note:** The Picker in Knowledge selects **files** (not folders). Each time you add new files, sync Knowledge again.

---

## Step 4 - Attach Google Drive to an AI Agent (MCP)

Use this when the agent needs to **find files** or **view metadata** (name, type, last modified date, link) — **not** read PDF/DOC content directly through MCP.

1. Open **AI -> Agents** and select an agent.
2. Open the **Capabilities** tab -> add the **Google Drive** integration.
3. Click **Select files** and choose files or folders through Google Picker.

   ![Agent select Google Drive files](/static/img/google-drive-agent-picker.png)

4. Click **Save Draft** -> **Test Version**.

> Drive MCP does **not** replace Knowledge: if you want the agent to answer from document content, use Knowledge (Step 3). MCP only supports discovery and metadata.

![Test Google Drive files](/static/img/test-google-drive.png)

---

## Step 5 - Sample Runbook to Test the Agent

Paste the following into the **Runbook** field (after selecting files in Capabilities):

```markdown
#GoogleDrive: You can look up Google Drive through google_drive_list_files and google_drive_get_file.

## Rules
- When the user asks "what files are there" or "find a document" -> use google_drive_list_files (pageSize: 10).
- When the user asks for details about a file -> use google_drive_get_file with fileId.
- When the user asks for DOCUMENT CONTENT (FAQ, policy) -> use queryKnowledge from attached Knowledge, do NOT guess from Drive metadata.
- Do not invent file names or links.

## Test prompts
- "List the Drive files I connected"
- "When was [file name] last modified?"
```

**Suggested test prompts:**

| Goal | Question |
|------|----------|
| List files | *"Show me the list of Google Drive files I connected."* |
| Metadata | *"What type is [file name] and what is the view link?"* |
| Document content | *"According to the FAQ document, what is the return policy?"* -> requires synced Knowledge |

---

## MCP Tools - What Can an Agent Do?

![Google Drive MCP actions](/static/img/action-googlr-drive.png)

### List Files (`google_drive_list_files`)

Lists files and folders the connection can access.

| Parameter | Description |
|-----------|-------------|
| `query` | Search query (for example: `name contains "FAQ"`). Default: `trashed = false` |
| `pageSize` | Number of results (default: 10) |
| `pageToken` | Pagination token for the next page |

Returns: `files` (id, name, mimeType, size, modifiedTime), `nextPageToken`.

### Get File Metadata (`google_drive_get_file`)

Returns metadata for one file or folder.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `fileId` | Yes | File ID on Drive |

Returns: `id`, `name`, `mimeType`, `size`, `modifiedTime`, `webViewLink`, `iconLink`.

> **There is no MCP tool to read file content.** To let AI read PDF/Word files, use Knowledge sync.

---

## Get the File ID from Google Drive

Open the file in your browser. The URL usually looks like:

```text
https://drive.google.com/file/d/1ABC...xyz/view
```

The part between `/d/` and `/view` is the **fileId**.

In most cases, the agent gets `fileId` from **List Files** results — you do not need to copy it manually.

---

## Recommended Workflows

### 1. Document Discovery Assistant

The agent calls **List Files** to find files by name or conversation context -> returns the `webViewLink` to the user.

### 2. Document Metadata Sync

The agent reads **Get File Metadata** (last modified date, file type) -> records it in a ticket or another sheet.

### 3. Knowledge Source Sync

An admin selects FAQ files or folders on Drive -> creates Knowledge -> syncs periodically -> Smart Assistant answers through `queryKnowledge`.

---

## Real-World Workflow

1. An admin connects Google Drive (Marketing account).
2. The admin creates Knowledge `Gym FAQ` — selects 5 PDF files from Drive -> **Sync knowledge**.
3. The admin creates a `Gym Sales` agent, attaches Knowledge and (optionally) the Drive integration.
4. The agent answers product questions from Knowledge; when a source file link is needed, it uses MCP metadata.
5. When a new FAQ file is added -> add it to Knowledge and sync again.

---

## Quick Troubleshooting

### Google Picker does not open

- Confirm the Drive connection is **Connected**.
- Try **Reconnect** and accept permissions again.
- Check that the browser is not blocking popups.

### Agent/Knowledge cannot see a file

- The file must be **selected through Picker** — not every file on Drive is visible automatically.
- Select the file again in Knowledge or agent Capabilities.

### Knowledge sync fails

- The file may be too large or in an unsupported format — try PDF/DOCX/TXT.
- Access to the file was lost -> **Reconnect** and select the file again.

### MCP list files returns empty

- No files were selected in agent Capabilities, or no files have been opened through Picker yet.
- Try a specific `query`, such as `name contains "FAQ"`.

### Refresh token error

- Go to [Google Account permissions](https://myaccount.google.com/permissions), remove ScaleFlow access, then **Reconnect**.

### Agent answers document content incorrectly

- Drive MCP only provides metadata — you need **synced Knowledge** and Instructions that use `queryKnowledge`.

---

## Best Practices

- Name connections by team: `Google Drive — Support`.
- Split Knowledge by topic (FAQ, Pricing, Policy) instead of one oversized knowledge source.
- Re-sync Knowledge after updating files on Drive.
- Use Drive MCP for **finding files / metadata**; use Knowledge for **reading content**.
- Select only the files you need — this reduces risk and makes access easier to audit.

---

## Suggested Screenshot List

| File | What to capture |
|------|-----------------|
| `google-drive-integration-card.png` | Google Drive card + Connect |
| `google-drive-setup-permissions.png` | Setup screen + Continue with Google |
| `google-drive-connections-list.png` | Connected connections list |
| `google-drive-display-tab.png` | Display tab |
| `google-drive-ai-automation-tab.png` | AI and Automation tab |
| `google-drive-agent-picker.png` | Agent Capabilities + Select files |
| `google-drive-mcp-tools.png` | List Files / Get File Metadata |

Reusable images: `integration-connection.png`, `connect-google-drive.png`, `knowledge-google-drive.png`.

---

## Read Next

- [Knowledge Usage](../scaleflow-ai/knowledge-usage) — create and sync Knowledge from Drive.
- [Google Sheets Integration](./google-sheets-integration) — work with spreadsheets.
- [AI Agent Usage](../scaleflow-ai/ai-agent-usage) — configure and test agents.
- [Integration Usage](./integration-usage) — manage integrations in ScaleFlow.
