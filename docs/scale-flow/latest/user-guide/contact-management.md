---
id: contact-management
title: Contact Management
sidebar_label: Contact Management
sidebar_position: 8
description: Beginner-friendly guide to create, organize, import, and use customer contacts in ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Contact Management

Contacts are customer profiles. A contact keeps important customer information in one place, such as name, phone number, email, labels, lifecycle stage, and conversation history.

Use Contacts when you want your team to understand who the customer is before replying in [Inbox](./inbox-usage) or handling a [Ticket](./ticket-usage).

## What Contacts are used for

In the **Contacts** area, you can:

- View all contacts in one table
- Search contacts by name, email, or phone number
- Filter contacts by label, lead source, lead stage, lifecycle stage, list, and priority
- Add a new contact manually
- Import contacts in bulk from CSV or XLSX
- Export one contact or many contacts to CSV
- Open a contact detail page and update contact properties
- Organize contacts with tags (labels, lists, lead/lifecycle tags)

Example: A customer messages through Zalo today and Facebook next week. Contact information helps your team recognize that both conversations belong to the same person.

## Open the Contacts workspace

1. In the left menu, click **Contacts** to open the Contacts page.

![Open the Contacts page from navigation](/static/img/open-contact.png)
2. You will see:
   - **All Contacts**
   - **Tags**
   - **New contact** if your role can manage contacts
   - **Import contacts** if your role can manage contacts

If buttons such as **New contact**, **Import contacts**, or tag edit/remove actions are missing, ask your admin to grant contact management permissions.


You can open the **New contact** form in two ways. Both paths lead to the same screen.

**Option 1 — from All Contacts**

1. Go to **Contacts** → **All Contacts**.
2. Click **Add contact** in the page toolbar (above the contacts table).

![Add contact from All Contacts](/static/img/add-contact.png)

**Option 2 — from the sidebar**

1. In the left menu, under **Contacts**, click **New contact**.

![Open New contact from the sidebar](/static/img/new-contact-1.png)

After the form opens:

1. Fill in contact information:
   - First name / Last name
   - Phone number
   - Email
   - Labels
   - Lifecycle stage
   - Country
2. Fill in additional information (optional):
   - Company name
   - Job title
   - Lead stage
   - Lead source
   - Priority
   - Subscriber (on/off)
   - Lists
3. Click **Save**.


Important: at least one of these must be entered: **First name** or **Last name**.

Use manual creation when you are adding one customer at a time, such as a VIP customer, partner, or lead from a phone call.

## Find contacts quickly

On the **All Contacts** page:

- Use the search box to find by name, email, or phone.

![Contact filters on All Contacts](/static/img/list-contact.png)

- Use filter chips to narrow down results:
  - Label
  - Lead source
  - Lead stage
  - Lifecycle stage
  - List
  - Priority
- Use **Reset** to clear all filters.

## Update a contact from the detail page

1. Open a contact from the table.
2. In **Contact property**, click the pencil icon on any field you want to edit.
3. Change the value and confirm.

Editable fields in the current implementation include:
- First name, last name
- Email, phone number
- Job title, company name
- Lead stage, lead source, lifecycle stage
- Priority, country
- Last channel and last contact fields

You can also:
- Add/remove **Labels**
- Add/remove **Lists**
- Click **Send message** to open the related conversation in Inbox (if available)

## Import contacts in bulk (CSV/XLSX)

Use import when you already have many contacts in a spreadsheet.


![Button import contact](/static/img/button-import-contact.png)

Go to **Contacts** -> **Import contacts** and follow 4 steps:

![Import contact](/static/img/import-contact.png)

1. **Prepare**
   - Read the import checklist
   - Download sample CSV/XLSX if needed
2. **Upload**
   - Upload or drag and drop a `.csv` or `.xlsx` file
3. **Match**
   - Match your file columns to ScaleFlow fields
   - Choose an action per column:
     - **Overwrite**
     - **Update blank only**
     - **Add appendix**
     - **Content mapping** (used to detect existing contacts)
4. **Define**
   - Optionally append all imported contacts to selected lists
   - Review summary, then click **Import contacts**

After import, ScaleFlow shows how many contacts were created and how many were updated.

Simple example: Your sales team has 500 leads in Excel. Import the file, match columns like name, phone, and email, then place all imported contacts into a list called `May Campaign`.

## Export contacts

![Export contact](/static/img/export-contact.png)

From **All Contacts**:
- Use row actions to export a single contact
- Use the top action menu to export contacts to CSV

## Delete contacts

![Delete contact](/static/img/delete-contact.png)

- Select one or more contacts, then click **Delete selected**
- You can also delete from row actions

Note: some contacts cannot be deleted yet if they already have conversations.

## Manage tags (Labels, Lists, Lead/Lifecycle tags)

Go to **Contacts** -> **Tags** to:

![Tags management with type filter](/static/img/list-tags-contact.png)

- Search tags
- Filter by tag type
- Create new tags

![Create new tag dialog](/static/img/create-tag.png)

- Edit tag name/color
- Delete tags
- Reorder tags by drag-and-drop

## How Contacts connect to other features

- [Inbox](./inbox-usage): staff see contact information while replying.
- [Tickets](./ticket-usage): tickets can be linked to the customer.
- [Analytics](./analytics-usage): contact activity helps managers understand growth and customer movement.
- [AI Assistant](./ai-assistant): AI can use conversation context and contact details when your setup allows it.

## Practical workflow

1. A new customer sends a message from Facebook.
2. ScaleFlow creates or links the contact.
3. Staff open the contact panel in Inbox.
4. Staff add a label such as `Interested in premium plan`.
5. If follow-up is needed, staff create a ticket.
6. The next teammate can see the contact history before replying.

## Current page limitations

In contact detail, these center tabs are currently placeholder sections:
- Associations
- Remarks
- Media

The layout is visible, but full business data for those tabs is not fully implemented yet.
