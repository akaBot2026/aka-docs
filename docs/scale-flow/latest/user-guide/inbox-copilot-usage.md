---
id: inbox-copilot-usage
title: Inbox Assistant Usage
sidebar_label: Inbox Assistant Usage
sidebar_position: 17
description: Beginner-friendly guide to the AI helpers available inside Inbox.
displayed_sidebar: scaleFlowSidebar
---

# Inbox Assistant Usage

Inbox Assistant is the AI helper area for Inbox. It supports your team while they handle customer conversations.

For the main setup guide, start with [AI Assistant](./ai-assistant). This page gives a quick overview of each assistant type.

## What each assistant does

- **Smart Assistant**: uses a published [AI Agent](./ai-agent-usage) to answer customers automatically or help continue a conversation.
- **Smart Summary**: turns a long conversation into a short internal summary.
- **Smart Writing**: improves a draft message you already typed.
- **Follow-up Assistant**: sends a follow-up when the customer or staff has been inactive for a set time.

Smart Assistant is the main AI workflow because it connects your AI Agent, Knowledge, Inbox, and Tickets.

## Open Inbox Assistant

1. In the left sidebar, open **AI**.
2. Select **Inbox Assistant**.
3. You will see assistant cards.

![Inbox Assistant list](/static/img/list-inbox-copilot.png)

If you cannot see the menu or edit buttons, ask your admin to review your access.

The list page shows:

- Assistant name
- **Enabled** / **Disabled** status
- Short description
- Last updated date

Click any card to open that assistant's edit page.

## Configure Smart Assistant

![Inbox Assistant edit page](/static/img/edit-inbox-copilot.png)

Smart Assistant is the best place to start if you want AI to help customers automatically.

1. Choose an AI Agent.
2. Choose a published version or **Latest**.
3. Choose when it should run: always, outside working hours, or a custom schedule.
4. Choose how many recent messages AI should read.
5. Turn **Enabled** on.
6. Write simple instructions.
7. Click **Save changes**.

Example instruction:

> Answer common questions using approved Knowledge. If the customer asks about payment problems, refunds, complaints, or anything uncertain, create a ticket and let staff continue.

## Configure Smart Summary

Smart Summary helps staff understand a conversation quickly.

Use it when:

- A conversation is long.
- A manager is checking a case.
- A conversation is transferred to another teammate.
- A ticket needs a short summary.

Starter instruction:

> Summarize the customer's issue, what has already been discussed, and the recommended next step in 3 short bullet points.

## Configure Smart Writing

Smart Writing helps staff improve text before sending.

Useful actions:

- Make this message more polite.
- Shorten this answer.
- Translate to Vietnamese.
- Translate to English.
- Make the tone warmer.
- Turn this into a professional support reply.

Use Smart Writing when staff already know what they want to say but want help making it clearer.

## Configure Follow-up Assistant

Follow-up Assistant helps restart quiet conversations.

Example:

1. Customer asks for a quote.
2. Staff reply with details.
3. The customer does not answer for 12 hours.
4. Follow-up Assistant sends a polite reminder.

Suggested follow-up instruction:

> Send a friendly follow-up asking whether the customer still needs help. Do not pressure the customer. Keep the message short.

## Use assistants inside Inbox

After enabling assistants, go to [Inbox](./inbox-usage):

1. Open a conversation.
2. Use Smart Summary for internal understanding.
3. Type a draft and use Smart Writing if needed.
4. Let Smart Assistant handle conversations only when your setup has been tested.
5. Review important customer-facing messages before sending.

## Practical setup order

1. Create [Knowledge](./knowledge-usage).
2. Create and publish an [AI Agent](./ai-agent-usage).
3. Configure Smart Assistant.
4. Enable Smart Summary for staff handover.
5. Add a few Smart Writing actions.
6. Test in Inbox before using with many customers.

## Real-world example

1. A customer sends a message through Zalo asking for store hours.
2. Smart Assistant answers from Knowledge.
3. The customer then asks for a refund.
4. Smart Assistant creates a ticket and transfers the conversation to staff.
5. A staff member uses Smart Summary to understand the conversation quickly.
6. The staff member resolves the ticket and replies to the customer.

## Quick troubleshooting

### Cannot see Inbox Assistant menu

- Ask your admin for Inbox update or AI Assistant access.

### Can open the page but cannot use AI in chat

- Check whether the corresponding assistant is **Enabled**.
- Check whether an AI Agent or model is selected where required.

### Cannot see Smart Writing button in composer

- The button appears only when:
  - Smart Writing is enabled, and
  - The input already contains draft text.

### Smart Assistant does not run on the expected schedule

- Review **Runtime config**.
- If using **Custom**, make sure each time window has valid start/end times.
