---
title: "AI Assistant Skills"
description: "Preconfigured recipes made up of steps written in natural language. Users invoke them with slash commands in the chat box, and administrators manage them."
id: skills
sidebar_label: AI Assistant Skills
sidebar_position: 2
displayed_sidebar: akaPaymentSidebar
---

# AI Assistant Skills

Preconfigured recipes made up of steps written in natural language. Users invoke them with slash commands in the chat box, and administrators manage them.


There are 4 built-in skills, all enabled by default and displayed on the welcome screen: "Create a request from an invoice" (/hoa-don), "Create a request from a statement and invoices" (/ban-ke), "Create a request using question and answer" (/nhap-tay), and "Report with tables and charts" (/bao-cao). Administrators can edit and restore built-in skills, and add, edit, or delete custom skills; each organization can have up to 50 skills.

A skill can be used only if the user's role has access to all the tools required by its steps. Administrators enable tools in AI Settings → Assistant → Assistant tools (38 tools, all disabled by default): see [Enable assistant tools](../../admin/how-to/enable-assistant-tools.md). Any action that changes data displays a confirmation card and runs only when the user clicks **Agree** (**Cancel** makes no changes); the assistant does not sign documents automatically. For approval steps that require a signature or an answer, the user must complete them in the application. For files dropped into the chat box, see [Document upload limits](../../../reference/extraction/file-limits.md).


## Available in these guides

- [Add or edit an AI assistant skill](../../admin/how-to/manage-assistant-skill.md) — In AI Settings, open the Assistant tab and the Skills section, then click Add skill or the pencil icon to edit. You can enable, disable, restore, or delete skills from their respective rows.
- [Create a request with the AI assistant](../how-to/create-draft.md) — Open the AI assistant, select the /hoa-don, /ban-ke, or /nhap-tay skill, drop in an invoice or statement, answer the form, and click Agree on the confirmation card.
