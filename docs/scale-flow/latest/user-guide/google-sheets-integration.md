---
id: google-sheets-integration
title: "Google Sheets Integration"
sidebar_label: "Google Sheets"
sidebar_position: 16
description: "Guide to connect Google Sheets to ScaleFlow through Google OAuth and use spreadsheets via AI agents (MCP)."
displayed_sidebar: scaleFlowSidebar
---

# Google Sheets Integration

Connecting **Google Sheets** lets ScaleFlow and AI agents read, write, and manage spreadsheet data you have granted access to. Agents can **read ranges**, **append rows**, **update cells**, or **create new spreadsheets** through MCP tools.

Use this integration when you want to:

- Save leads, tickets, or conversation notes to a shared spreadsheet.
- Let AI agents read pricing tables, inventory, or FAQ data stored in sheets.
- Automate periodic reporting (read a range -> summarize -> write results).

---

## Before You Start

Prepare the following:

- A **Google** account (Gmail or Google Workspace) with access to the spreadsheets you need.
- Permission to manage integrations in **ScaleFlow** (you can see the **Integrations** menu and click **Connect**).
- A spreadsheet already created in Google Sheets (or let the agent create a new one through MCP).
- About **5-10 minutes** for the first connection.

> **File access:** ScaleFlow uses the **Google Drive file** scope — it can only access spreadsheets you **select through Google Picker** when configuring an agent, or files **created by the integration**. Spreadsheets that were not selected or shared will return permission errors.

---

## Step Overview

| Step | Where | What to do |
|------|-------|------------|
| 1 | ScaleFlow | **Integrations -> Google Sheets -> Connect** |
| 2 | Google | Sign in and **Allow** read/write access to sheets |
| 3 | ScaleFlow | Confirm the connection is **Connected** and run **Test connection** |
| 4 | ScaleFlow | (Optional) Open the **Display** tab and rename the connection |
| 5 | ScaleFlow | Attach the connection to an **AI Agent** and select spreadsheets |
| 6 | ScaleFlow | Write Instructions and run **Test Version** |

---

## Step 1 - Connect Google Sheets in ScaleFlow

1. In ScaleFlow, open the left menu -> **Integrations**.

   ![ScaleFlow Integrations menu](/static/img/integration-connection.png)

2. Find the **Google Sheets** card under **Third-party Integrations** -> click **Manage Integration**.

   ![Google Sheets integration card](/static/img/open-google-sheets.png)

3. On the setup screen, review **Permissions required**:
   - **Read spreadsheet rows** — read data for workflows and agents.
   - **Append new rows** — add rows from automation.

   ![Google Sheets setup permissions](/static/img/required-googl-sheets.png)

4. Click **Continue with Google**.

5. In the Google window, select the Google account used for your spreadsheets.

6. Click **Allow** to grant ScaleFlow the requested permissions.

7. After authentication, you are redirected to ScaleFlow. The connection appears with **Connected** status.

   ![Google Sheets connections list](/static/img/list-connect-google-sheets.png)

---

## Step 2 - Manage the Connection

Open **Integrations -> Google Sheets** and select a connection.

### Display tab

- **Connection name** — change the display name (for example: `Google Sheets — Sales`, `Google Sheets — Ops`).
- **Google account metadata** (read-only):
  - **Account name**
  - **Google email**
  - **Connected on**

![Google Sheets Display tab](/static/img/display-google-sheets.png)

### AI and Automation tab

This tab shows:

- An overview of spreadsheet workflows with AI.
- **Google Sheets actions** — the list of MCP tools.
- **Recommended setup flows** — lead capture, AI reporting, human review queue.

![Google Sheets AI and Automation tab](/static/img/google-sheets-ai-automation-tab.png)

### Quick actions

| Action | When to use it |
|--------|----------------|
| **Test connection** | After connecting, or when you suspect the token expired |
| **Reconnect** | Google revoked access or you need to sign in again |
| **Disconnect** | Temporarily stop the connection |
| **Delete** | Remove the connection from ScaleFlow |

![Google Sheets connection actions](/static/img/google-sheets-connection-actions.png)

---

## Step 3 - Attach Google Sheets to an AI Agent

1. Open **AI -> Agents** and select an agent (or create a new one).
2. In the right sidebar, open the **Capabilities** tab.
3. Under **Integrations**, add the **Google Sheets** connection.
4. Click **Select spreadsheets** and choose one or more spreadsheets through **Google Picker**.

   ![Agent select Google Sheets spreadsheets](/static/img/google-sheets-agent-picker.png)

5. Click **Save Draft** -> **Test Version**.

   ![Test Google Sheets](/static/img/test-google-sheet.png)

> **Important:** The agent can only work with spreadsheets selected in step 4 (or spreadsheets the agent creates through MCP). If you skip file selection, many tools will return *No spreadsheet ID provided or configured*.

---

## Step 4 - Write Instructions to Test the Agent

Paste the following into the **Runbook / Instructions** field (keep your existing tone/format and add this block):

```markdown
#GoogleSheets: You can access Google Sheets through MCP tools.

## Rules
- When the user asks for spreadsheet data -> use google_sheets__read_rows with an A1 notation range (for example Sheet1!A1:D20).
- When the user provides information to save -> use google_sheets__append_row with sheetName and values.
- Only use google_sheets__update_values, google_sheets__clear_values, and google_sheets__delete_sheet when the user explicitly requests it.
- Do not invent data — always read from the sheet before answering questions about numbers.

## Default sheet for testing
- spreadsheetId: (fill in the ID from the Google Sheets URL, or let the agent use the spreadsheet selected in Capabilities)
- sheetName: Sheet1
- test read range: Sheet1!A1:C10
```

**Suggested test prompts:**

| Goal | Test question |
|------|---------------|
| Read data | *"Read the first 10 rows in Sheet1 and summarize them for me."* |
| Append row | *"Add a new row: Name=John A, Email=test@example.com, Source=Chat."* |
| Metadata | *"What tabs (sheets) does this spreadsheet have?"* |

---

## MCP Tools - What Can an Agent Do?

![Google Sheets MCP actions](/static/img/google-sheet-action.png)

### Read Rows (`google_sheets__read_rows`)

Reads data from an A1 notation range.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `range` | Yes | For example: `Sheet1!A1:D20`, `Leads!A:E` |
| `spreadsheetId` | No | Spreadsheet ID; leave empty if already selected in agent Capabilities |

### Append Row (`google_sheets__append_row`)

Adds a new row at the bottom of a sheet.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `sheetName` | Yes | Tab name, for example `Sheet1`, `Leads` |
| `values` | Yes | Array of column values, for example `["John A", "test@example.com", "Chat"]` |
| `spreadsheetId` | No | As above |

### Update Values (`google_sheets__update_values`)

Overwrites values in a range.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `range` | Yes | A1 notation range |
| `values` | Yes | 2D array, for example `[["A1", "B1"], ["A2", "B2"]]` |
| `spreadsheetId` | No | As above |

### Clear Values (`google_sheets__clear_values`)

Clears content in a range (keeps the sheet structure).

| Parameter | Required | Description |
|-----------|----------|-------------|
| `range` | Yes | A1 notation range |
| `spreadsheetId` | No | As above |

### Get Spreadsheet (`google_sheets__get_spreadsheet`)

Returns metadata: file name, tab list, sheet IDs.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `spreadsheetId` | No* | *Required if not configured in the agent |

### Create Spreadsheet (`google_sheets__create_spreadsheet`)

Creates a new spreadsheet (ScaleFlow has access because the app created it).

| Parameter | Required | Description |
|-----------|----------|-------------|
| `title` | Yes | New file name |

### Add Sheet (`google_sheets__add_sheet`)

Adds a new tab to an existing spreadsheet.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `title` | Yes | New tab name |
| `spreadsheetId` | No | As above |

### Delete Sheet (`google_sheets__delete_sheet`)

Deletes a tab from a spreadsheet.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `sheetId` | Yes | Numeric tab ID (from **Get Spreadsheet**) |
| `spreadsheetId` | No | As above |

---

## Get the Spreadsheet ID from a Google URL

Open the spreadsheet in your browser. The URL looks like:

```text
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
```

The part between `/d/` and `/edit` is the **spreadsheetId**:

```text
1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
```

In most cases, you **do not need** to copy this manually — selecting spreadsheets through **Select spreadsheets** in agent Capabilities is enough.

---

## Recommended Workflows

### 1. Lead capture to sheet

Customer chats -> agent collects name, email, and source -> **Append Row** to the `Leads` tab.

### 2. AI reporting workspace

Agent **Read Rows** from a KPI table -> summarizes for the user -> **Update Values** in the end-of-month report cell.

### 3. Human review queue

Agent prepares a data row -> writes it to a review sheet -> the team approves directly in Google Sheets.

---

## Real-World Workflow

1. An admin connects Google Sheets with the Sales team's Google account.
2. The admin creates a `Lead Capture` agent and selects the `Leads 2026` spreadsheet in Capabilities.
3. The admin writes Instructions: append a row whenever a new lead appears.
4. The admin runs **Test Version** -> **Publish** -> attaches the agent to Smart Assistant.
5. When Google revokes access, the admin **Reconnects** and runs **Test connection**.

---

## Quick Troubleshooting

### Error: No spreadsheet ID provided or configured

- In the agent -> **Capabilities** -> select at least one spreadsheet through **Select spreadsheets**.
- Or pass `spreadsheetId` explicitly in Instructions or the tool call.

### Error: Insufficient permissions / 403

- The spreadsheet was not selected through Google Picker in the agent.
- Or the file belongs to a different Google account — reconnect with the correct account.
- Try **Reconnect** on the integration and select the spreadsheet again.

### Error: Spreadsheet not found / 404

- Confirm the spreadsheetId is correct.
- The file may have been deleted or the user lost access.

### Error: Google OAuth did not return a refresh token

- Go to [Google Account -> Security -> Third-party apps](https://myaccount.google.com/permissions) and remove ScaleFlow access.
- **Reconnect** and accept all permissions again (Google will issue a new refresh token).

### Agent does not call Sheets tools

- Confirm the **Capabilities** tab includes the Google Sheets connection.
- Instructions must clearly state when to use read/append tools.
- Click **Save Draft** before running Test Version.

### Integrations menu is missing

- Ask your administrator for permission to manage integrations.

---

## Best Practices

- Use clear connection names by team or purpose (`Google Sheets — Marketing`).
- Use dedicated tabs (`Leads`, `Report`) instead of overwriting the default `Sheet1`.
- Enable write/delete tools (`update`, `clear`, `delete sheet`) only when truly needed.
- Test on a spreadsheet copy before using a production file.
- Reconnect periodically if the team changes Google Workspace accounts.

---

## Read Next

- [Integration Usage](./integration-usage) — manage integrations in ScaleFlow.
- [AI Agent Usage](./ai-agent-usage) — create, test, and publish agents.
- [Knowledge Usage](./knowledge-usage) — if you need to read documents from Google Drive instead of spreadsheets.
