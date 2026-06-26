---
id: ai-agent-usage
title: AI Agent Usage
sidebar_label: AI Agent Usage
sidebar_position: 1
description: Beginner-friendly guide to create, teach, test, and publish an AI Agent for ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# AI Agent Usage

An **AI Agent** is your AI staff member.  
You teach it what to answer, what to avoid, and when to hand off to a human.

If you are new, do not worry about technical terms.  
Follow this guide step by step.

## Quick Start (5 steps)

1. Open **AI Agent -> Agents**.
2. Click **Add Agent** and create one.
3. Fill **Basic** info (name, description, model).
4. Add **Knowledge** and choose needed **Integrations**.
5. Click **Save Draft -> Test -> Publish Version**.

That is enough to launch your first agent.

## Open AI Agent

1. In the left menu, click **AI Agent**.
2. Open **Agents**.

On this page, you can search agents, filter by status, import, or create a new one.

![AI Agent list page](/static/img/list-agent.png)

## Create your first agent

1. Click **Add Agent**.
2. Choose a template (or choose **scratch** if you want to start from blank).
3. Click **Create**.
4. Fill in the create dialog:
   - **Name**
   - **Description**
   - **Mode** (for scratch)
5. The system opens your new agent page.

Tip: if you are unsure, start with a template.

![Create page template gallery](/static/img/ai-agent-create-template-gallery.png)
![Create scratch dialog](/static/img/ai-agent-create-scratch-dialog.png)

## Understand the agent page

Your agent page has two main parts:

- Left/main area: where you write agent instructions
- Right panel: settings tabs

You will also see:

- Version selector (`v1`, `v2`, ...)
- Action menu (save, publish, test, export, delete)

![AI Agent workspace overview](/static/img/ai-agent-workspace-overview.png)

## Set up the 3 tabs

### 1) Basic

Use this tab to set:

- Agent name
- Description
- Welcome message (for chat agents)
- AI model

![AI Agent basic tab](/static/img/ai-agent-basic-tab.png)

### 2) Capabilities

Use this tab to control what the agent can use:

- **Knowledge base**: your trusted content (FAQ, policies, docs)
- **Integrations**: tools like Google Drive, Google Sheets, HubSpot
- **System actions**: what actions the agent is allowed to do
- **Parameters**: optional input values for some flows

![AI Agent capabilities tab](/static/img/ai-agent-capabilities-tab.png)

### 3) Behavior

Use this tab for safety and handoff:

- **Guardrails**: topics/keywords to avoid, and safe response style
- **Exit conditions**: when AI should stop and hand off to a human

![AI Agent behavior tab](/static/img/ai-agent-behavior-tab.png)

## Save, test, publish (recommended flow)

1. Click **Save Draft**  
   (Draft = a saved working version, not live yet.)
2. Click **Test Chat** (or **Test Worker** for worker mode).
3. Ask real sample questions.
4. Improve answers by updating knowledge/instructions/actions.
5. Click **Publish Version** when results are good.

![AI Agent version actions menu](/static/img/ai-agent-version-actions-menu.png)

## Review agent runs

After publishing, use **Execution tasks** to review what happened in real runs:

- when the agent ran
- success/failed status
- details for troubleshooting

![AI Agent execution tasks](/static/img/ai-agent-execution-tasks.png)

## Import or export an agent

### Import

1. In agent list, click **Import Agent**.
2. Upload an exported `.json` file.
3. Review information.
4. Confirm import.

![AI Agent import dialog](/static/img/ai-agent-import-dialog.png)

### Export

From agent detail page, open action menu -> **Export Agent**.

## Connect agent to AI Assistant

When your agent is published:

1. Open [AI Assistant](./ai-assistant)
2. Choose where assistant should run
3. Select your published agent
4. Enable and save

## Common questions

### I cannot see Add Agent / Publish / Delete

You likely do not have manage permission. Ask your admin.

### I cannot use Import Agent

You likely do not have file management permission.

### I cannot see Execution tasks

Execution tasks are shown for published versions.
