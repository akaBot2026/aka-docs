---
id: make-integration
title: "Make"
sidebar_label: "Make"
sidebar_position: 5
description: "Introduction to Make and a step-by-step guide to connect Make to ScaleFlow with an API token and use scenarios through AI agents (MCP)."
displayed_sidebar: scaleFlowSidebar
---

# Make Integration

Connecting **Make** (a visual automation platform, formerly Integromat) lets ScaleFlow work with **scenarios** in your Make organization. AI agents can **discover**, **inspect**, and **run** scenarios through MCP (Model Context Protocol) tools.

Use this integration when you want to:

- Let ScaleFlow AI agents orchestrate workflows already built in Make.
- Combine customer conversations (Inbox, Smart Assistant) with multi-app automation in Make (CRM, messaging, operations, and more).
- Leverage Make's 3,000+ ready-made integrations without building custom connectors.

---

## What is Make?

**Make** (formerly **Integromat**) is a cloud-based visual automation platform. You drag and drop **modules** on a canvas to connect apps, services, and APIs together without writing code.

In Make, each automation flow is called a **scenario**. A scenario can:

- Receive events from an app (for example: a new form submission, incoming email, or webhook).
- Process or transform data (filter, map fields, if/else conditions).
- Send results to another app (CRM, Google Sheets, Slack, email, database, and more).

Make supports **3,000+ apps and services** out of the box. Businesses commonly use Make to:

- Sync data between CRM, ERP, and marketing tools.
- Automatically create tickets, send internal alerts, or email customers.
- Process orders, invoices, and scheduled reports.
- Connect internal systems through HTTP, webhooks, or custom APIs.

### Make terminology to know

| Term | Meaning |
|------|---------|
| **Scenario** | A visual automation flow in Make, made up of connected modules. |
| **Module** | One step in a scenario (for example: read a Google Sheet, send Slack, call a webhook). |
| **Organization** | Your workspace in Make, containing scenarios, teams, and access permissions. |
| **API token** | An authentication credential that lets external systems (such as ScaleFlow) call the Make API on behalf of an organization. |
| **Cloud instance** | The Make server region (for example `eu1`, `us1`), depending on your account or organization. |

> **Note:** Make does **not** replace ScaleFlow. Make is strong at multi-app automation; ScaleFlow is strong at customer conversations, Inbox, AI agents, and support team coordination.

---

## What do Make and ScaleFlow do together?

The two platforms complement each other:

| | **ScaleFlow** | **Make** |
|---|---------------|----------|
| **Primary role** | Bring together multi-channel messages, Inbox, AI agents, tickets, and contacts | Automate workflows across many apps and APIs |
| **Typical data** | Customer conversations, support context, Knowledge | CRM, sheets, email, Slack, ERP, webhooks |
| **Who acts** | Support staff, AI Assistant, AI Agent | Scenarios running automatically or triggered by an agent |

When Make is connected to ScaleFlow:

1. **ScaleFlow** handles customer conversations (LINE, WhatsApp, Facebook, and more).
2. The **AI Agent** in ScaleFlow decides when an external action is needed.
3. The agent calls **MCP tools** to list, inspect, or **run Make scenarios**.
4. **Make** performs automation in CRM, sheets, email, Slack, or other systems.
5. Results return so the agent can continue replying to the customer or update internal work.

```text
Customer → ScaleFlow (Inbox / AI Agent)
                    │
                    ▼
              MCP tools (List / Inspect / Run Scenario)
                    │
                    ▼
              Make scenario → CRM / Sheet / Slack / Email / ...
                    │
                    ▼
              Result → Agent / staff continue handling the request
```

**Real-world examples:**

- A customer asks about order status on LINE -> the AI agent collects the order ID -> runs a Make scenario to look up Shopify/ERP -> replies in Inbox.
- A new ticket is created -> the agent triggers a Make scenario to send a Slack alert to the operations team.
- A customer confirms an appointment -> a Make scenario creates a Google Calendar event and writes the contact to HubSpot.

This integration is especially useful when your business **already has Make scenarios** and wants ScaleFlow AI to reuse them instead of rebuilding from scratch.

---

## Before You Start

Prepare the following:

- A **Make** account with access to the organization you want to connect.
- Permission to manage integrations in **ScaleFlow** (you can see the **Integrations** menu and click **Connect**).
- A Make **API token** — ScaleFlow uses token authentication, **not** OAuth.
- About **5-10 minutes** for the first connection.

> **Note:** Each ScaleFlow connection is tied to **one Make organization**. If you have Production, Staging, or multiple teams/regions, create a **separate connection** for each organization.

---

## Step Overview

| Step | Where | What to do |
|------|-------|------------|
| 1 | Make | Create and copy an **API token** |
| 2 | ScaleFlow | Open the Make page under **Integrations** and click **Connect** |
| 3 | ScaleFlow | Paste the token and confirm the connection |
| 4 | ScaleFlow | Review workspace details and **Test connection** |
| 5 | ScaleFlow | (Optional) Attach the Make connection to an **AI Agent** to use MCP tools |

---

## Step 1 - Get an API Token in Make

1. Sign in to Make at [https://make.com](https://make.com).
2. Click your **avatar** in the top-right corner -> select **Profile**.

   ![Make Profile menu](/static/img/profile-make.png)

3. In the left sidebar, select **API access** (or **API**, depending on your UI version).

   ![Make API access sidebar](/static/img/make-api-access.png)

4. Click **Add token** and give it a clear name, such as `ScaleFlow Production`.

   ![Make Add token dialog](/static/img/add-token-make.png)

5. Copy the token immediately after creation — Make usually **shows it only once**.

   ![Make copy API token](/static/img/copy-token-make.png)

> **Security:** The token grants access to your Make organization. Do not share it publicly or paste it into unencrypted chat or email. If the token is exposed, delete the old token in Make, create a new one, then **Reconnect** in ScaleFlow.

---

## Step 2 - Connect Make in ScaleFlow

1. In ScaleFlow, open the left menu -> **Integrations**.

   ![ScaleFlow Integrations menu](/static/img/open-make.png)

2. Find the **Make** card under **Third-party Integrations** -> click **Connect**.

   ![Make integration card](/static/img/add-connection-make.png)

3. On the setup screen:
   - Read **How to get your Make API token** (you can expand it directly on the form).
   - Paste your **API token** into the **API token** field.

   ![Make setup form in ScaleFlow](/static/img/paste-token-make.png)

4. Click **Connect**.

ScaleFlow will:

- Validate the token with the Make API.
- Automatically detect the **cloud instance** (for example `eu1`, `eu2`, `us1`, `us2`).
- Fetch **organization** and **user** details and set the **workspace label** from the Make organization name.

After a successful connection, you are redirected to the Make connections list.

![Make connections list](/static/img/list-make-connection.png)

---

## Step 3 - Manage the Connection

Open **Integrations -> Make** and select a connection to view its details. There are two main tabs:

### Display tab

Use this tab to:

- **Change the workspace label** in ScaleFlow (for example: `Make Production`, `Make Staging EU`).
- View **read-only** information from Make:
  - **Organization** and **Organization ID**
  - **Cloud instance** (Make host, for example `eu1.make.com`)
  - **API token owner** (the user who created the token)
  - **Connected on** (connection timestamp)

![Make connection Display tab](/static/img/display-make.png)

Organization and instance fields come from the authenticated token and cannot be edited directly in ScaleFlow.

### AI and Automation tab

This tab shows:

- An overview of how to use Make with AI agents.
- **Scenario tools for AI agents** — the MCP tools Make provides.
- **Recommended automation patterns** — suggested flows such as scenario discovery, webhook bridge, and multi-app agent orchestration.

![Make connection AI and Automation tab](/static/img/ai-automation-make.png)

Click **Build an AI agent** to create a new agent and attach the integration.

### Quick actions on the connection list

| Action | When to use it |
|--------|----------------|
| **Test connection** | After connecting, or when you suspect the token expired or was revoked |
| **Reconnect** | When you need to enter a new Make token |
| **Disconnect** | Temporarily stop the connection (status becomes Disconnected) |
| **Delete** | Permanently remove the connection from ScaleFlow (with a confirmation dialog) |

![Make connection quick actions](/static/img/action-make.png)

---

## Step 4 - Attach Make to an AI Agent

For an agent to actually call Make scenarios, add the connection to the agent:

1. Open **AI -> Agents** and select an agent (or create a new one).
2. In the **Integrations** section, click to add a connection.
3. Select the active **Make** connection.

   ![AI Agent Integrations section with Make](/static/img/add-make.png)

4. Click **Save Draft** -> **Test Version** and confirm the agent calls the correct scenario.

   ![Test AI Agent with Make tools](/static/img/test-make.png)

5. Click **Publish Version** when you are satisfied.

See also: [AI Agent Usage](../scaleflow-ai/ai-agent-usage) and [Integration Usage](./integration-usage).

---

## MCP Tools - What Can an Agent Do with Make?

When the Make connection is active, ScaleFlow exposes the following tools to AI agents:

![Make MCP scenario tools](/static/img/scenario-tool.png)

### List Visual Scenarios (`make_list_scenarios`)

Lists scenarios in the linked Make organization.

| Parameter | Description |
|-----------|-------------|
| `limit` | Maximum number of scenarios to return (default: 10) |
| `offset` | Number of scenarios to skip for pagination (default: 0) |

**Example use:** The agent surveys active scenarios before suggesting or triggering the right flow.

### Inspect Scenario (`make_get_scenario`)

Shows details for one scenario by ID.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `scenarioId` | Yes | The scenario ID in Make (numeric) |

**Example use:** The agent reads the scenario structure, required inputs, and status before running it.

### Run Scenario (`make_run_scenario`)

Runs an **active** scenario in Make.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `scenarioId` | Yes | The scenario ID to run |
| `data` | No | Input object when the scenario requires parameters |
| `responsive` | No | `true` (default): wait for the scenario to finish (up to ~40 seconds) and return status; `false`: return `executionId` immediately |
| `callbackUrl` | No | URL to receive a POST callback for non-responsive runs; ignored when `responsive` is `true` |

**Example use:** The agent runs a scenario to sync CRM data, send a Slack notification, or trigger a Make module chain after collecting enough information from the customer.

> **Instructions tip:** In the agent **Instructions**, specify when scenarios may be run, which scenario IDs are allowed, or how the agent should choose a scenario (for example: always `list` first, and only `run` approved scenarios).

---

## Recommended Automation Patterns

### 1. Discover the scenario landscape

The agent calls **List Visual Scenarios** to map active scenarios, then responds or routes based on conversation context.

### 2. Webhook bridge to scenario

Events from ScaleFlow (new messages, tickets, contacts) are forwarded to a Make scenario through HTTP/webhook — useful when the Make scenario already includes a Webhooks module.

### 3. Multi-app agent orchestration

The ScaleFlow agent handles the conversation; when CRM, sheet, email, or other tool actions are needed, it calls **Run Scenario** so Make handles the rest across 3,000+ apps.

---

## Real-World Workflow

1. An admin creates a Make API token for the Production organization.
2. The admin connects Make in ScaleFlow and **Test connection** succeeds.
3. The admin creates an AI agent named `Operations Assistant` and attaches the Make connection.
4. The admin writes Instructions: the agent may list scenarios and may run only specific scenario IDs after customer confirmation.
5. The admin runs **Test Version** with sample questions, then **Publish**.
6. The agent is attached to [Smart Assistant](../scaleflow-ai/ai-assistant) or an Inbox flow.
7. When the Make token expires, the admin **Reconnects** and tests again.

---

## Quick Troubleshooting

### Error: Make API token is required

- The token field is empty or contains only spaces. Paste the full token again.

### Error: Invalid Make API token

- The token is wrong, deleted in Make, or belongs to an inaccessible organization.
- Create a new token in Make, then **Reconnect** in ScaleFlow.

### Connection succeeds but MCP tools are missing

- Open the **AI and Automation** tab. If it is empty, use **Test connection** or **Reconnect**.
- Make sure the status is **Connected**, not **Error** or **Disconnected**.

### Agent cannot run a scenario

- The scenario in Make must be **active** (ON).

  ![Make scenario active toggle](/static/img/on-scenarios.png)

- Confirm the `scenarioId` is correct (from **Inspect Scenario** or the Make editor URL).
- If the scenario requires input, pass all required values in `data`.
- For long-running scenarios, consider `responsive: false` and `callbackUrl`.

### Multiple organizations or regions (EU, US)

- ScaleFlow automatically detects the instance (`eu1`, `eu2`, `us1`, `us2`) when validating the token.
- Each organization should have its **own ScaleFlow connection** with a clear workspace label.

### Integrations menu is missing

- Ask your administrator for permission to view or manage integrations.

---

## Best Practices

- Use clear connection names such as `Make Production` and `Make Staging EU`.
- Create a dedicated token for ScaleFlow and revoke it when no longer needed.
- Run **Test connection** immediately after connecting or changing the token.
- In agent Instructions, limit which scenarios may be run to avoid triggering sensitive automation unintentionally.
- In Make, disable or delete test scenarios that are no longer needed.

---

## Read Next

- [Integration Usage](./integration-usage) — manage integrations in ScaleFlow.
- [Google Drive Integration](./google-drive-integration) — connect Drive and pick files.
- [AI Agent Usage](../scaleflow-ai/ai-agent-usage) — create, test, and publish agents.
- [AI Assistant](../scaleflow-ai/ai-assistant) — enable Smart Assistant for customers.
- [Channel Integration](../channels/channel-integration) — connect customer messaging channels.
