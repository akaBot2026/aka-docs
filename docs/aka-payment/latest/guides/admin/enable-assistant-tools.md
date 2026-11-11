---
title: "Enable the AI assistant and choose what it can do"
description: "Administrators can enable the AI assistant for users and choose which tools (read files, look up information, draft, approve, and more) it can use."
id: enable-assistant-tools
sidebar_label: Enable the AI assistant and choose what it can do
sidebar_position: 2
---

# Enable the AI assistant and choose what it can do

Administrators can enable the AI assistant for users and choose which tools (read files, look up information, draft, approve, and more) it can use.

**When to use:**

- Users don't see the AI Assistant button in the upper-right corner.
- The assistant reports that a skill requires a tool that isn't enabled.
- Administrators want to allow or block the assistant from reading files, creating drafts, submitting requests, or approving requests.


By default, the assistant has no tools and is hidden from everyone. Enabled tools still respect each user's role permissions.


## Ways to do this

- [Enable assistant tools](how-to/enable-assistant-tools.md) — In AI Settings, on the Assistant tab, under Assistant tools, select the tools the assistant can use (by group or individually), then click Save.

## See also

- [Manage AI assistant skills](manage-assistant-skill.md) — Administrators can add, edit, disable, or restore a skill (a / command) so the assistant follows the company's processes.

## Used in these guides

- [Manage AI assistant skills](manage-assistant-skill.md) — Administrators can add, edit, disable, or restore a skill (a / command) so the assistant follows the company's processes.

## Steps

[Enable assistant tools](how-to/enable-assistant-tools.md)

1. [Enable assistant tools](how-to/enable-assistant-tools.md)
   1. In the sidebar, under **Administration**, open **AI Settings** (administrators only, on desktop) and select the **Assistant** tab.
   2. Expand **Assistant tools** (grouped into Requests and tasks, Read files, Lookup, Reports, Notification center, Compose requests, and Approvals). Use the **Search tools** field (2) to filter. Hover over a tool name to see what it does and which roles it's for.
      ![Assistant tools section expanded (38 tools): (2) Search tools field, (3) Select all tools checkbox and Sensitive label, the Requests and tasks, Read files, Lookup, Reports, Notification center, Compose requests, and Approvals groups; (4) Save button next to Cancel changes](/static/img/aka-payment-latest-admin-enable-assistant-tools.webp)
   3. Select individual tools, a group's checkbox, or **Select all tools** (3). Tools labeled **Sensitive** (3) modify data and always ask the user for confirmation in the chat panel; **Reconcile requests** is available only to operators and administrators.
   4. Click **Save** (4) ("Assistant tools saved."), or **Cancel changes** to discard unsaved selections.

## Troubleshooting

### [Enable assistant tools](how-to/enable-assistant-tools.md)

- "Assistant tools couldn't be loaded": The assistant service isn't responding, or you don't have permission to manage it. Click **Try again**.
- Enabling a tool doesn't grant anyone additional permissions: the application still checks each user's permissions for every action.
