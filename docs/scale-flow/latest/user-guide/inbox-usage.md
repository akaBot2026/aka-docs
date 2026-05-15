---
id: inbox-usage
title: Inbox Usage
sidebar_label: Inbox Usage
sidebar_position: 19
description: Beginner-friendly guide to receive, answer, assign, and track customer conversations in Inbox.
displayed_sidebar: scaleFlowSidebar
---

# Inbox Usage

Inbox is the main place where your team reads and replies to customer messages.

Messages arrive from connected channels such as Zalo OA, Facebook Messenger, WhatsApp, and Telegram. If [AI Assistant](./ai-assistant) is enabled, AI can help answer, summarize, or hand over conversations to staff.

## What Inbox is used for

Use Inbox to:

- See all customer conversations in one place.
- Reply to customers.
- Add internal notes that only your team can see.
- Assign conversations to a user, team, or AI Assistant.
- Create or view tickets related to the customer.
- Check contact details while chatting.

Example: A customer sends a Facebook message asking about delivery. The message appears in Inbox. AI Assistant suggests an answer. A staff member reviews it, sends it, and updates the contact stage.

## Open Inbox

![Inbox overview with 3-column layout](/static/img/open-inbox.png)

1. In the left sidebar, click **Inbox**.
2. The page opens in a 3-column layout:
   - Left: inbox categories
   - Middle: conversation list
   - Right: active conversation + contact panel

If you cannot open Inbox, ask your admin to check your Inbox access.

## Where messages come from

Inbox receives messages from the channels your business connects in [Channel Integration](./channel-integration).

Common examples:

- Zalo OA messages from Vietnamese customers.
- Facebook Messenger messages from your business page.
- WhatsApp messages from customers using your business number.
- Telegram messages sent to your business bot.

If a message does not appear in Inbox, test or reconnect the channel first.

## Understand the left categories

![Understand the left categories](/static/img/left-categories-panel.png)

Inbox categories are shown in the left panel:

- **My inbox**
  - **Assigned to me**
  - **Assigned to my team**
  - **Mentions**
  - **Unassigned**
- **Lifecycle stages** (dynamic list from your workspace tags)
- **Company inbox**
  - **All**

Start with **Assigned to me** if you are a staff member. Use **Unassigned** when picking up new work.

## Work with the conversation list

In the middle panel, you can:

- **Search** conversations by keyword
- **Sort** by newest or oldest
- **Filter** by:
  - Channel
  - Contact labels
  - Lifecycle stage
- Scroll to load more conversations automatically

![Conversation list with search, sort, and filters](/static/img/conversation-list-search-sort-filter.png)

Click any conversation row to open it.

## Open and understand a conversation

Each row can show:

- Contact avatar and channel badge
- Conversation title/contact name
- Latest message preview
- Relative time (for example, "5m ago")
- Contact/lifecycle badges

## Use the conversation header (top of chat area)

![Use the conversation header](/static/img/conversation-header-actions.png)

When a conversation is open, the header lets you:

- Select a specific channel or keep **All channels**
- Change lifecycle stage for the contact
- Move to next lifecycle stage quickly
- Assign/unassign conversation to:
  - User
  - Team
  - AI Assistant
- Show/hide the right contact info panel

Assign to **AI Assistant** when you want AI to help continue the conversation according to your assistant settings. Assign to a **user** or **team** when a human should own the next step.

## Reply to customers or add internal notes

![Reply to customers or add internal notess](/static/img/reply_internal_note.png)

At the bottom input area:

1. Choose tab:
   - **Reply**: sends customer-facing message
   - **Internal note**: adds internal note only
2. Type your message.
3. (Optional) Attach a file using the upload button.
4. Click **Send** (or **Add Note** in Internal note tab).

If you can open the conversation but cannot type/send, you are in read-only mode for that conversation.

## How AI Assistant helps in Inbox

![AI assistant in Inbox composer](/static/img/ai-assistant-inbox.png)

When AI Assistant is enabled:

- **Smart Assistant** can answer automatically when configured to do so.
- **Smart Summary** can summarize the conversation for staff.
- **Smart Writing** can improve a draft you already typed.
- **Follow-up Assistant** can send a follow-up after a quiet period.

AI may reply automatically when Smart Assistant is enabled, the schedule allows it, and the conversation matches its instructions.

AI should hand over to humans when:

- The customer is angry or making a complaint.
- The customer asks for a refund, cancellation, or exception.
- The request needs private account or order checking.
- The answer is not available in Knowledge.
- A ticket is needed for follow-up.

To enable or disable AI behavior, go to [AI Assistant](./ai-assistant) and change the **Enabled** switch or schedule.

## Reply to a specific message

On each message, open the action menu to:

- Copy message
- Reply to that specific message (quote-style reply)
- Copy message link

![Message action menu in a conversation](/static/img/action-message.png)

After choosing reply, a reply preview appears above the input. You can remove it before sending.

## Use the contact panel (right side)

The right panel shows contact details for the active conversation.

Main tabs:

- **Contact**: core contact profile fields
- **Tickets**: view related tickets and create a new ticket
- **Attachments**: files related to the contact

![Contact profile panel in Inbox](/static/img/profile-inbox.png)

You can also open the full contact page using the external-link icon in the panel header.

![Expand contact](/static/img/expand-contact.png)

## Test chat (safe simulation)

![Test chat](/static/img/test-chat.png)

In Inbox header actions, a flask icon opens **Test Chat** (if your role allows it).

Use it to simulate customer messages for internal testing:

- Messages are for testing only
- They do not impact real customers
- The first test message can create a test conversation in Inbox automatically

Use Test Chat before turning on Smart Assistant for real customers.

## Chat to ticket workflow

Use tickets when a conversation needs follow-up beyond a simple reply.

Before expecting automatic ticket creation, make sure ticket actions are enabled in the AI Agent configuration.

![Enable ticket action in AI Agent settings](/static/img/setting-ticket-inbox.png)

Important setup checklist for auto ticket creation:

- In [AI Agent](./ai-agent-usage), open **Advanced actions** and enable the ticket action (create/update ticket).
- In agent instructions, add a clear rule such as: complaint/refund/compensation/payment issue -> create ticket and hand over to staff.
- Publish the agent version after changing actions/instructions.
- In [AI Assistant](./ai-assistant), ensure **Smart Assistant** is enabled and using the published version.

Example:

1. Customer asks through Zalo: "My package is missing."
2. Smart Assistant asks for the order number.
3. The customer provides the order number.
4. AI creates or suggests a [Ticket](./ticket-usage).
5. Staff are assigned to investigate.
6. Staff update the ticket status until the issue is resolved.
7. Staff reply to the customer in Inbox and close the conversation.

![AI creates ticket from an Inbox conversation](/static/img/ai-create-ticket.png)

If AI says it needs human support but no ticket is created, check the setup checklist above first. In most cases, ticket action is disabled or the agent version in Smart Assistant was not republished after changes.

## Recommended daily workflow

1. Start from **Assigned to me**.
2. Open one conversation and review contact info first.
3. Use **Reply** for customer messages and **Internal note** for team context.
4. Set lifecycle stage and assignment before moving to next conversation.
5. Use filters when the queue is large (channel + lifecycle stage is usually enough).

## What to read next

- Need to connect message sources? See [Channel Integration](./channel-integration).
- Need AI to answer automatically? See [AI Assistant](./ai-assistant).
- Need to track a customer issue? See [Ticket Usage](./ticket-usage).
