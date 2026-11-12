---
title: "Choose how the assistant opens for me"
description: "Users want the assistant to open in the Right panel or as a Floating bubble in their browser, instead of using the organization default."
id: set-assistant-display
sidebar_label: Choose how the assistant opens for me
sidebar_position: 2
displayed_sidebar: akaPaymentSidebar
---

# Choose how the assistant opens for me

Users want the assistant to open in the Right panel or as a Floating bubble in their browser, instead of using the organization default.

**When to use:**

- The user finds that the assistant panel covers content and wants to use the Floating bubble.
- The user wants to switch the assistant back to the Right panel on their device.


The preference is saved only in the current browser; on mobile devices, the assistant always opens in the Right panel.


## Ways to do this

- [Choose how the assistant opens in Preferences](how-to/set-assistant-display.md) — In Personal profile, on the Preferences tab, select Organization default, Right panel, or Floating bubble in the AI Assistant row; this preference is saved only in this browser.

## See also

- [Set the default way the assistant opens: Right panel or Floating bubble](../admin/set-assistant-display.md) — Administrators can choose how the assistant opens for the entire organization: in the Right panel or as a draggable Floating bubble.

## Used in these guides

- [Set the default way the assistant opens: Right panel or Floating bubble](../admin/set-assistant-display.md) — Administrators can choose how the assistant opens for the entire organization: in the Right panel or as a draggable Floating bubble.

## Steps

[Choose how the assistant opens in Preferences](how-to/set-assistant-display.md)

1. Check that [AI Assistant is enabled for your role](../../troubleshooting/assistant/tools-enabled.md).
   The top of the page shows a ✨ "AI Assistant" button (or a floating bubble in the corner of the screen); if neither appears, the assistant has not been enabled for you.
   If this condition is not met: follow [Enable assistant tools](../admin/how-to/enable-assistant-tools.md) below.
2. [Enable assistant tools](../admin/how-to/enable-assistant-tools.md) — only if [AI Assistant is enabled for your role](../../troubleshooting/assistant/tools-enabled.md) is not already satisfied
   1. In the sidebar, under **Admin**, open **AI Settings** (administrators only, on desktop) and select the **Assistant** tab.
   2. Expand **Assistant Tools** (grouped into Requests and Tasks, Read Files, Lookups, Reports, Notification Center, Draft Requests, and Approvals). Use the **Search tools** field (2) to filter; hover over a tool name to see what it does and which roles it is for.
      ![Expanded Assistant Tools section (38 tools): (2) Search tools field, (3) Select all tools checkbox and Sensitive label, the Requests and Tasks, Read Files, Lookups, Reports, Notification Center, Draft Requests, and Approvals groups; (4) Save button next to Discard changes](/static/img/aka-payment-latest-admin-enable-assistant-tools.webp)
   3. Select individual tools, a group's checkbox, or **Select all tools** (3). Tools labeled **Sensitive** (3) modify data and always ask the user for confirmation in the chat panel; **Reconcile proposals** is only for operators and administrators.
   4. Click **Save** (4) ("Assistant tools saved."), or **Discard changes** to discard unsaved selections.
3. [Choose how the assistant opens in Preferences](how-to/set-assistant-display.md)
   1. Click the user card at the bottom of the sidebar → **Personal profile**.
   2. Select the **Preferences** tab ("Applies only to this browser and is not saved to your account.").
   3. In the **AI Assistant** row, select **Organization default (…)** (uses the administrator's default), **Right panel**, or **Floating bubble**. The selection takes effect immediately.

## Troubleshooting

### [Enable assistant tools](../admin/how-to/enable-assistant-tools.md)

- "Could not load assistant tools": the assistant service is not responding or you do not have permission to manage it; click **Retry**.
- Enabling a tool does not grant anyone additional permissions: the application still checks each user's permissions for every action.

### [Choose how the assistant opens in Preferences](how-to/set-assistant-display.md)

- The **AI Assistant** row is not visible: the assistant has not been enabled for you, or the screen is narrow, such as on a phone (under 768 px; in that case, the assistant always opens in the **Right panel**).
- If you switch browsers or devices, the selection returns to **Organization default**.
