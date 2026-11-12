---
title: "Enable assistant tools"
description: "In AI Settings, on the Assistant tab, under Assistant tools, select the tools to enable (by group or individually), then click Save."
id: enable-assistant-tools
sidebar_label: Enable assistant tools
sidebar_position: 2
displayed_sidebar: akaPaymentSidebar
---

# Enable assistant tools

In AI Settings, on the Assistant tab, under Assistant tools, select the tools to enable (by group or individually), then click Save.


## Steps

1. In the sidebar, under **Administration**, open **AI Settings** (admins only, on desktop) and select the **Assistant** tab.
2. Expand **Assistant tools** (organized into groups: Requests and tasks, Read files, Lookup, Reports, Notification center, Compose requests, Approvals). Use the **Search tools** field (2) to filter; hover over a tool name to see what it does and which roles it is intended for.

   ![Assistant tools section expanded (38 tools): (2) Search tools field, (3) Select all tools checkbox and Sensitive label, the Requests and tasks, Read files, Lookup, Reports, Notification center, Compose requests, and Approvals groups; (4) Save button beside Discard changes](/static/img/aka-payment-latest-admin-enable-assistant-tools.webp)

3. Select individual tools, a group's checkbox, or **Select all tools** (3). Tools labeled **Sensitive** (3) change data and always ask the user for confirmation in the chat panel; **Reconcile requests** is only for operators and admins.
4. Click **Save** (4) ("Assistant tools saved."), or **Discard changes** to discard unsaved selections.

## Troubleshooting

- "Failed to load assistant tools": the assistant service is not responding, or you don't have permission to manage tools; click **Retry**.
- Enabling a tool does not grant anyone additional permissions: the app still checks each user's permissions for every action.


## Result

- [AI Assistant is enabled for your role](../../../troubleshooting/assistant/tools-enabled.md) — An admin has enabled at least one assistant tool available to your role, so the AI Assistant button appears.

## Used in these guides

- [AI Assistant skills](../../assistant/features/skills.md) — Ready-made recipes with steps written in natural language. Users run them using slash commands in the chat panel, and admins manage them.
- [Enable AI Assistant and choose what it can do](../enable-assistant-tools.md) — Admins can enable AI Assistant for users and select the tools it can use (read files, look up information, create drafts, approve, and more).
- [Add or edit an assistant skill](manage-assistant-skill.md) — In AI Settings, on the Assistant tab, under Skills, click Add skill or the pencil icon to edit; enable, disable, restore, or delete a skill in its row.
- [AI Assistant is enabled for your role](../../../troubleshooting/assistant/tools-enabled.md) — An admin has enabled at least one assistant tool available to your role, so the AI Assistant button appears.
