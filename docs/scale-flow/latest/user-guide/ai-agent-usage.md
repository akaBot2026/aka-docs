---
id: ai-agent-usage
title: AI Agent Usage
sidebar_label: AI Agent Usage
sidebar_position: 14
description: Practical guide for non-technical users to create, configure, test, and publish AI Agents using the current UI.
displayed_sidebar: scaleFlowSidebar
---

# AI Agent Usage

This guide helps non-technical users use the **AI Agent** feature based on the current UI.

## What AI Agent is for

Use **AI Agent** to:

- Build AI assistants for customer support workflows
- Configure knowledge, integrations, and response behavior
- Test safely before going live
- Manage versions for controlled updates

## Open AI Agent from the menu

1. In the left sidebar, open **AI Agent**.
2. Select **Agents**.
3. You will see the list of existing agents.

## Required permissions

In the current UI, actions depend on permissions:

- **View agent list/detail**: `agent_registry.view`
- **Create, edit, publish, delete agents**: `agent_registry.manage`
- **Import Agent (upload JSON file)**: `storage.file.manage`
- **Add knowledge to an agent**: requires both agent and knowledge management permissions

If you cannot see action buttons (for example **Add Agent**, **Import Agent**, **Save Draft**), ask your admin to update your permissions.

## Agents list page

On the **Agents** page, you can:

- Search with **Search agents...**
- Filter by status using **All statuses**
- Open an agent detail page by clicking an agent card
- If authorized, use:
  - **Import Agent**
  - **Add Agent**

Available status filters:

- `all`
- `published`
- `draft`
- `archived`

## Create a new agent

1. Click **Add Agent**.
2. In the **Create agent** dialog, choose a template:
   - **Basic support**
   - **Contact resolution**
   - **Custom**
3. Enter:
   - **Name** (required)
   - **Description** (optional)
4. Click **Create**.
5. The system redirects you to the agent detail page for setup.

Note: every new agent follows a section-by-section configuration flow.

## Import an agent from JSON

1. On the list page, click **Import Agent**.
2. Select a previously exported `.json` file.
3. In the **Import agent** dialog, review the imported information.
4. Update **Name** and **Description** if needed.
5. Click **Import Agent**.

If the file format is invalid, the UI shows **Invalid import file**.

## Configure the agent by sections

In the agent detail screen, the left panel shows these steps:

- **Basic information**
- **Knowledge**
- **Integrations**
- **Instructions**
- **Advanced actions**
- **Performance testing** (currently a placeholder)
- **Flow deployment** (currently a placeholder)

### 1) Basic information

Configure:

- **Agent Name**
- **Description**
- **Model** (choose the AI model)

This section defines the agent identity and purpose.

### 2) Knowledge

Add knowledge sources so the agent can answer more accurately:

1. Click **Add Knowledge**.
2. Select an existing knowledge base or create a new one.
3. Added knowledge appears as cards in this section.
4. Remove a knowledge source from the agent with **Remove**.

Without proper permissions, add/remove actions are unavailable.

### 3) Integrations

This section controls which integration connections the agent can use:

1. Review available connections.
2. Click each row to select or unselect.
3. Each selected connection grants access to resources and actions from that integration.

If the workspace has no connections, the UI shows **No connections yet**.

### 4) Instructions

This section defines agent behavior in 3 groups:

- **How to respond**: response style and behavior
- **What to avoid**: guardrails and restricted content
- **Exiting a conversation**: conditions for handoff or exit

This is where you train the agent's tone, safety rules, and handoff logic.

### 5) Advanced actions

Enable or disable advanced actions by group:

- **Conversation actions**
- **Contact actions**
- **Ticket actions**

Examples available in the current UI:

- Send text message
- Assign conversation
- Add contact / Search contacts
- Create ticket / Get ticket / Update ticket status

Each action includes fields like trigger condition and guidelines so the agent knows when to execute it.

## Save, publish, test, and manage versions

At the top-right of the detail page, use version controls:

- Main button:
  - **Save Draft** (when viewing a draft)
  - **Create Draft** (when viewing a published version)
- Menu **More actions**:
  - **Publish Version** (shown only for draft versions)
  - **Test Version**
  - **Export Agent**
  - **Execution tasks** (for published versions only)
  - **Delete Draft Version** (draft only)
  - **Delete This Agent**

Recommended safe workflow for non-technical users:

1. Configure all relevant sections.
2. Click **Save Draft**.
3. Use **Test Version** to verify responses.
4. If results are good, click **Publish Version** to go live.

## Track execution tasks

For published versions, open **Execution tasks** to:

- Review run history (Running/Success/Failed)
- Inspect input, start/end time, token usage, and cost
- Open **View trace** for detailed execution flow

This is useful when investigating why an agent response was correct or incorrect.

## Best practices for non-technical users

- Use clear agent names by team or purpose (for example: `Support - VN`, `Sales FAQ Bot`)
- Keep **Description** specific so the agent stays in scope
- Always run **Test Version** before publishing
- For major updates, create a new draft and retest
- If key buttons are missing, verify permissions first

## Quick troubleshooting

### I cannot see Agents or open agent details

- Check `agent_registry.view`.

### I can view but cannot create/edit/publish/delete

- Check `agent_registry.manage`.

### I cannot use Import Agent

- Check `storage.file.manage`.

### I cannot see execution tasks

- **Execution tasks** are available only for **published** versions.
