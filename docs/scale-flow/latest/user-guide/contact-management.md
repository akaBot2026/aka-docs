---
id: contact-management
title: Contact Management
sidebar_label: Contact Management
sidebar_position: 8
description: A simple user guide to create, import, organize, and manage contacts in ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Contact Management

This guide explains how non-technical users can create, use, and manage contacts in ScaleFlow.

## What you can do in Contacts

In the **Contacts** area, you can:

- View all contacts in one table
- Search contacts by name, email, or phone number
- Filter contacts by label, lead source, lead stage, lifecycle stage, list, and priority
- Add a new contact manually
- Import contacts in bulk from CSV or XLSX
- Export one contact or many contacts to CSV
- Open a contact detail page and update contact properties
- Organize contacts with tags (labels, lists, lead/lifecycle tags)

## Open the Contacts workspace

1. In the left menu, open **Contacts**.
2. You will see:
   - **All Contacts** (`/contacts/list`)
   - **Tags** (`/contacts/tags`)
   - **New contact** (`/contacts/new`, if your role can manage contacts)
   - **Import contacts** (`/contacts/import`, if your role can manage contacts)

If buttons such as **New contact**, **Import contacts**, or tag edit/remove actions are missing, ask your admin to grant contact management permissions.

## Create a contact manually

1. Go to **Contacts** -> **New contact**.

![New contact screen](/img/new-contact.png)

2. Fill in contact information:
   - First name / Last name
   - Phone number
   - Email
   - Labels
   - Lifecycle stage
   - Country
3. Fill in additional information (optional):
   - Company name
   - Job title
   - Lead stage
   - Lead source
   - Priority
   - Subscriber (on/off)
   - Lists
4. Click **Save**.

Important: at least one of these must be entered: **First name** or **Last name**.

## Find contacts quickly

On the **All Contacts** page:

- Use the search box to find by name, email, or phone.

![Contact filters on All Contacts](/img/list-contact.png)

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

Go to **Contacts** -> **Import contacts** and follow 4 steps:

![Import contacts workflow](/static/img/import-contacts.png)

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

## Export contacts

From **All Contacts**:
- Use row actions to export a single contact
- Use the top action menu to export contacts to CSV

## Delete contacts

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

## Current page limitations (important)

In contact detail, these center tabs are currently placeholder sections:
- Associations
- Remarks
- Media

The layout is visible, but full business data for those tabs is not fully implemented yet.
