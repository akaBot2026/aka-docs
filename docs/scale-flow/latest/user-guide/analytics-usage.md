---
id: analytics-usage
title: Analytics Usage
sidebar_label: Analytics Usage
sidebar_position: 18
description: Beginner-friendly guide to understand customer support activity through Analytics.
displayed_sidebar: scaleFlowSidebar
---

# Analytics Usage

Analytics helps you understand what is happening in your customer support operation. It shows message, conversation, ticket, and contact activity over time.

Use Analytics when you want to answer questions such as:

- Are we receiving more customer messages this week?
- Which channel is busiest?
- How many tickets were created or resolved?
- Are many customers waiting for support?
- Are contacts growing over time?

## What Analytics tracks

Analytics helps you track operational activity over time, including:

- New contacts
- Messages received/sent
- Conversations created/updated
- Ticket activity (created, resolved, reopened, assigned, priority changes)
- Contact lifecycle activity

## Open Analytics

1. In the left sidebar, open **AI**.
2. Select **Analytics**.
3. Choose one of 5 sections:
   - **Overview**
   - **Conversation**
   - **Message**
   - **Ticket**
   - **Contact**

If you cannot see Analytics, ask your admin to review your role access.

## Use the toolbar (top of page)

### 1) Date range

You can choose:

- **Today**
- **Current month**
- **Select month** (shows month picker)
- **Yesterday**
- **Last 7 days**
- **Last 14 days**
- **Last 30 days**

### 2) Reset

- Click **Reset** to return filters to default:
  - In **Overview**: reset to `Today`
  - In other tabs: reset to `Current month`

### 3) Export (Excel)

- In tabs **Conversation / Message / Ticket / Contact**, click **Export**.
- The system downloads an Excel file automatically.
- Export is not shown in **Overview**.

## Understand each Analytics tab

### 1. Overview

Overview shows high-level cards and trend charts:

- **New Contacts**
- **New Messages** (includes top channel)
- **New Conversations** (includes top channel)
- **Tickets** (resolved + reopened/new)

![Overview analytics tab](/static/img/overview.png)

Below the cards, you will see 4 trend charts:

- New Contacts
- New Messages
- New Conversations
- Tickets (New, Reopened, Resolved)

### 2. Conversation

Use this tab to understand conversation volume and ownership.

Charts include:

- **Conversation Created**
- **Conversation Status Changed**
- **Conversation Assigned**

![Conversation analytics tab](/static/img/conversation.png)

Each chart may include filter controls:

- **Dimension** (for example Channel type, Channel, New status, Assignee)
- **Value** (choose one value or **All**)

If you select **All** on enum-type dimensions, you can switch chart display:

- **Grouped**
- **Stacked**

### 3. Message

Use this tab to understand incoming and outgoing message activity.

Charts include:

- **Message Received**
- **Message Sent**

![Message analytics tab](/static/img/message.png)

You can filter by dimensions such as:

- Channel type
- Channel

### 4. Ticket

Use this tab to understand support workload and issue resolution.

Charts include:

- **Ticket Created**
- **Ticket Resolved**
- **Ticket Reopened**
- **Ticket Assigned**
- **Ticket Priority Changed**

![Ticket analytics tab](/static/img/ticket.png)

Common dimensions include:

- Ticket type
- Contact
- Assignee
- New priority

### 5. Contact

Use this tab to understand customer growth and contact changes.

Charts include:

- **Contact Created**
- **Contact Identity Linked**

![Contact analytics tab](/static/img/contact.png)

Common dimension:

- Lifecycle stage

## How to read charts quickly

- Horizontal axis = time
- Vertical axis = number of events
- Hover on bars/lines to see exact values
- Use **Dimension + Value** to answer specific questions (for example "How many tickets were reopened for one ticket type?")

## Real-world examples

### Weekly support review

1. Open **Overview**.
2. Choose **Last 7 days**.
3. Check whether messages or tickets increased.
4. Open **Ticket** to see resolved and reopened cases.
5. Export the report for the weekly team meeting.

### Channel performance check

1. Open **Message**.
2. Choose **Last 30 days**.
3. Filter by channel type.
4. Compare Zalo, Facebook, WhatsApp, or Telegram activity.
5. Decide where staff coverage is needed most.

## Suggested workflow

1. Start with **Overview** to detect unusual changes.
2. Move to a detail tab (Conversation, Message, Ticket, Contact).
3. Keep date range small first (Today / Last 7 days) to spot patterns faster.
4. Use dimension filters to isolate one channel/team/status.
5. Export Excel when you need to share with managers or weekly reports.

## How Analytics connects to other features

- [Inbox](./inbox-usage) creates conversation and message activity.
- [Tickets](./ticket-usage) create ticket activity.
- [Contacts](./contact-management) create contact activity.
- [AI Assistant](./ai-assistant) can reduce manual workload, and Analytics helps you monitor the operational impact.

## Quick troubleshooting

### Cannot see Analytics menu

- Ask your admin for Analytics access.

### Export button not visible

- Export only appears in **Conversation / Message / Ticket / Contact** tabs.
- Export is hidden in **Overview** by design.

### Export clicked but no file downloaded

- Check browser download permissions/pop-up restrictions.
- Try again after narrowing the date range.

### Charts look empty

- Change date range to a period with known activity.
- Remove filters by setting **Value = All**.

