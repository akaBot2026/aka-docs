---
id: ticket-usage
title: Ticket Usage
sidebar_label: Ticket Usage
sidebar_position: 7
description: Beginner-friendly guide to create, assign, and resolve customer support tickets in ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Ticket Usage

A **Ticket** is a trackable customer issue or task. Use tickets when a conversation needs follow-up, ownership, due dates, internal notes, or a clear resolution.

Inbox is for talking with customers. Tickets are for making sure important work does not get forgotten.

## When to use a ticket

Use a ticket when an issue needs tracking beyond a single reply, such as:

- Ongoing customer issues
- Cases that need team handover
- Work that needs an assignee and due date
- Issues that require internal notes or attachments
- Refunds, complaints, delivery problems, repair cases, or account checks

Example: A customer asks, "Where is my order?" Staff can answer directly in Inbox. But if the order is missing and warehouse staff must investigate, create a ticket.

## How AI works with tickets

[AI Assistant](./ai-assistant) can support ticket handling in several ways:

- Recognize when a conversation needs staff follow-up.
- Create or suggest a ticket when allowed by the [AI Agent](./ai-agent-usage).
- Summarize the conversation so staff understand the issue quickly.
- Help draft staff replies while the ticket is being handled.

AI should not make final decisions for sensitive cases such as refunds, legal complaints, or private account issues unless your business has explicitly approved that workflow.

## Where to create a ticket

To open the ticket management page, click **Tickets** in the sidebar (main navigation).

![Open the Tickets page from navigation](/static/img/open-ticket.png)

You can create tickets from two places:

1. **Tickets page**  
   Go to **Tickets** and click **Create Ticket**.

![Create ticket from ticket](/static/img/create-ticket-ticket.png)

2. **Conversation view (Inbox)**  
   Open a conversation, go to the tickets section, then click **Create**.

![Create ticket from inbox](/static/img/create-ticket-inbox.png)

## Create a ticket

When creating a ticket, fill in:

![Create ticket screen](/static/img/create-ticket.png)

- **Title** (required)
- **Description** (optional)
- **Priority** (required): `Low`, `Medium`, `High`, `Urgent`
- **Status** (optional, default is `New`)
- **Type** (optional)
- **Due date** (optional)
- **Assign to me** (optional toggle)

After saving, the system creates a ticket ID (for example: `#123`) and opens the detail view.

Beginner tip: Always write a clear title. A good title is short but specific, such as "Customer reports missing package" or "Refund request for order 10245".

## Ticket statuses in ScaleFlow

ScaleFlow supports these statuses:

- **New**
- **In Progress**
- **Waiting for Customer**
- **Waiting for Internal**
- **On Hold**
- **Resolved**
- **Reopened**
- **Closed**

Simple status guide:

- Use **New** when the issue has just been created.
- Use **In Progress** when someone is actively working on it.
- Use **Waiting for Customer** when you need the customer to reply.
- Use **Waiting for Internal** when another team needs to help.
- Use **Resolved** when the issue has been solved.
- Use **Closed** when no more work is needed.

## Manage tickets after creation

In ticket detail, users can:

![Ticket detail view](/static/img/detail-ticket.png)

- Update title and description
- Change status, priority, type, and due date
- Assign ticket to a **User**, **Team**, or **AI agent**
- Add **internal notes** for team collaboration
- Upload and open attachments
- Review timeline and update history

Use internal notes for staff-only context, such as "Warehouse is checking CCTV" or "Manager approved replacement."

## Find tickets quickly

On the Tickets list, use:

- Search by keyword
- Filters: Status, Priority, Assignee, Due date (and Type when available)
- Table columns for ID, issue, contact, assignee, and last update
- CSV export (if your role allows it)

## Delete tickets

Users with manage permission can delete tickets from the list.  
If a ticket is linked to external systems, deleting it also removes linked external records.

Avoid deleting tickets unless you are sure they were created by mistake. For normal work, close the ticket instead.

## Complete workflow: chat to ticket to resolution

1. Customer sends a message through Zalo: "My order arrived damaged."
2. The message appears in [Inbox](./inbox-usage).
3. Smart Assistant asks for the order number and photo if allowed by your setup.
4. AI or staff creates a Ticket.
5. The ticket is assigned to the support team.
6. Staff add internal notes and check the order.
7. Staff reply to the customer in Inbox.
8. The ticket status moves from **New** to **In Progress** to **Resolved**.
9. The conversation is closed when the customer confirms the issue is solved.

## Suggested team workflow

1. Create ticket as soon as issue needs tracking.
2. Set priority and due date early.
3. Assign clear owner (user/team/AI).
4. Use internal notes for handover context.
5. Move status step-by-step until **Resolved** or **Closed**.
6. Reopen when a resolved issue returns.

## What to read next

- Learn how conversations arrive in [Inbox Usage](./inbox-usage).
- Learn how AI can create or support tickets in [AI Assistant](./ai-assistant).
- Learn how to build the AI worker in [AI Agent Usage](./ai-agent-usage).