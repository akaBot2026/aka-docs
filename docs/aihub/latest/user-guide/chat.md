---
id: chat
title: "Chat"
sidebar_label: "Chat"
sidebar_position: 2
description: "Start conversations, write effective requests, review citations, and use Chat safely in AI Hub."
displayed_sidebar: aiHubSidebar
---

# Chat

Chat is where you talk to an assigned Channel, get answers grounded in approved documents, and review the sources behind each answer.

## Start a new conversation

**Prerequisites**

- Chat read/write permission.
- At least one assigned Channel with an active version.
- Available usage quota.

**Procedure**

1. Select **Chat**.
2. Open the Channel selector.
3. Search for and select the required Channel.
4. Select **New conversation**.
5. Enter a clear request in the message box.
6. Select **Send**.

> ✅ **Expected result:** The user message appears, response streaming begins, and the completed answer is stored in the conversation.


![Chat interface showing an active conversation with AI response, Channel selector, and conversation history](/static/img/fig-02-chat-start.png)

> ⚠️ **If it fails:**
> - **No Channels assigned:** request an assignment from the Channel owner or access administrator.
> - **Select a Channel:** choose a Channel before creating or sending.
> - **Model unavailable:** contact the Channel owner or platform administrator.
> - **Quota exhausted:** open the quota details and contact the budget owner.


## Write effective requests

A useful request normally includes four elements:

1. **Objective:** what result is required.
2. **Context:** relevant process, audience, date, or business scope.
3. **Constraints:** approved sources, length, exclusions, confidentiality, or deadline.
4. **Output format:** table, summary, checklist, email draft, JSON, or another required structure.

Example:

> Check the root cause of error for agent `<AgentName>` on 2026/07/30 around 10:00 AM.

Avoid vague prompts such as "tell me everything" and avoid combining unrelated tasks in one message.

## Stop or retry a response

- Select **Stop** to end an in-progress response.
- Use **Retry** only after checking the request and any displayed error.
- Do not repeatedly retry a tool that might change data; first confirm whether the previous attempt completed in the target system.

## Review citations

When a response contains **Sources** or citation markers:

**Procedure**

1. Select a citation.

![Chat response showing completed tool calls including knowledge search, Center health check, robot list, log search, and job details](/static/img/fig-03-chat-citation.png)

2. Review the excerpt, document name, estimated page/sheet, and relevance information.
3. Open the related knowledge base when permitted.
4. Compare critical statements with the authoritative source document.

A citation shows that relevant content was retrieved; it does not guarantee that the generated interpretation is correct. If the source has been deleted or access was revoked, the preview may no longer be available.


## Add context from Akabot Center

Where context suggestions are available:

**Procedure**

1. Search for the relevant Akabot Center item.
2. Select only the item needed for the request.
3. Confirm the selected context before sending.
4. Remove an incorrect item using its remove action.

Context search may be unavailable when Akabot Center is degraded. Do not paste restricted data manually to work around an access failure.

## Manage conversations

- Use search to locate a conversation by title.
- Rename a conversation to reflect its business purpose.
- Start a new conversation when changing to an unrelated task or Channel.
- Archived conversations are read-only; start a new conversation to continue.
- Deletion is permanent and removes all messages in that conversation. Confirm the exact title before deleting.

![Conversation search and management sidebar showing search box, conversation list, and active conversation with knowledge results](/static/img/fig-05-chat-manage.png)

## Safe-use rules

- Do not enter passwords, API keys, access tokens, or data outside your approved handling scope.
- Treat AI output as a draft until a responsible person verifies it.
- Validate legal, financial, safety, HR, and customer-impacting content against authoritative policy.
- Do not approve write tools solely because the Channel recommends approval.
- Report suspected disclosure, unauthorized access, or harmful behavior immediately.

See also: [Security and responsible-use checklist](./troubleshooting.md#security-and-responsible-use-checklist).

## Where to go next

- Want to know why a citation looks the way it does, or how a source document is kept up to date? See [Knowledge bases](./knowledge-bases.md).
- Ran into an error message? See [Troubleshooting](./troubleshooting.md#user-facing-error-guide).
