---
id: ticket-usage
title: Ticket Usage
sidebar_label: Ticket Usage
sidebar_position: 7
description: Create, assign, and track tickets in ScaleFlow with clear status and ownership.
displayed_sidebar: scaleFlowSidebar
---

# Ticket Usage

This guide explains how to use tickets in ScaleFlow to track customer issues from creation to closure.

## What a ticket is used for

Use a ticket when an issue needs tracking beyond a single reply, such as:

- Ongoing customer issues
- Cases that need team handover
- Work that needs an assignee and due date
- Issues that require internal notes or attachments

## Where to create a ticket

You can create tickets from two places:

1. **Tickets page**  
   Go to **Tickets** and click **Create Ticket**.

![Create ticket from ticket](/static/img/create-ticket-ticket.png)

2. **Conversation view (Inbox)**  
   Open a conversation, go to the tickets section, then click **Create**.

![Create ticket from inbox](/static/img/create-ticket-inbox.png)

## Create ticket (fields)

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

Use statuses consistently so reporting and handovers stay clear.

## Manage tickets after creation

In ticket detail, users can:

![Ticket detail view](/static/img/detail-ticket.png)

- Update title and description
- Change status, priority, type, and due date
- Assign ticket to a **User**, **Team**, or **AI agent**
- Add **internal notes** for team collaboration
- Upload and open attachments
- Review timeline and update history

## Find tickets quickly

On the Tickets list, use:

- Search by keyword
- Filters: Status, Priority, Assignee, Due date (and Type when available)
- Table columns for ID, issue, contact, assignee, and last update
- CSV export (if your role allows it)

## Delete tickets

Users with manage permission can delete tickets from the list.  
If a ticket is linked to external systems, deleting it also removes linked external records.

## Suggested team workflow

1. Create ticket as soon as issue needs tracking.
2. Set priority and due date early.
3. Assign clear owner (user/team/AI).
4. Use internal notes for handover context.
5. Move status step-by-step until `Resolved` or `Closed`.
6. Reopen when a resolved issue returns.