---
id: tenant-management
title: Tenant Management
sidebar_label: Tenant Management
sidebar_position: 12
description: A practical, non-technical guide to view and update tenant profile information in ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Tenant Management

This guide explains how non-technical users can use **Tenant Management** in ScaleFlow to review tenant details and update the company name.

## What you can do on this page

In **Organization -> Tenant Management**, you can:

- View tenant identity details
- View tenant ownership details
- Copy IDs to clipboard for sharing
- Update **Company Name** (if you have edit permission)
- Review tenant status and timestamps

## Access and permissions

Your visible actions depend on your permissions:

- **Open page and view data**: requires `tenant.view`
- **Edit Company Name and save**: requires `tenant.manage`

If you do not have `tenant.view`, the page is blocked with an access denied flow.
If you only have `tenant.view`, the page is read-only.

## Open Tenant Management

![Tenant Management overview](/static/img/tenant-management-overview.png)

1. In the left sidebar, open **Organization**.
2. Select **Tenant Management**.
3. You will see two information cards:
   - **Identity**
   - **Ownership**

## Understand the information on screen

### Identity section

You can review:

- **Tenant Name** (read-only)
- **Tenant ID** (read-only, copy icon available)
- **Company Name**
  - Editable when you have `tenant.manage`
  - Read-only when you do not have `tenant.manage`

### Ownership section

You can review:

- **Owner Email** (read-only)
- **Owner ID** (read-only, copy icon available)
- **Status** badge:
  - `Active`
  - `Pending`
  - `Disabled`

### Metadata section

At the bottom of the page, you can review:

- **Created At**
- **Updated At**

These are informational fields and cannot be edited.

## Update Company Name

If you have `tenant.manage`:

1. In the **Company Name** field, enter the new value.
2. Click **Save**.
3. Wait for the success notification: **Tenant updated successfully**.

If the update fails, you will see: **Failed to update tenant**.

## Discard unsaved changes

If you changed **Company Name** but do not want to save:

1. Click **Discard Changes**.
2. The field resets to the latest saved value from the server.

## Notes about current UI behavior

- This page does not create or delete tenants.
- Only **Company Name** is editable from this screen.
- Save and discard action buttons are shown only to users with `tenant.manage`.
- Copy icon appears for ID fields to help sharing technical identifiers safely.

## Troubleshooting

### I cannot see Tenant Management in Organization

- Your account may not have `tenant.view`.
- Ask your admin to grant tenant view permission.

### I can open the page but cannot edit anything

- You likely have view-only access (`tenant.view` without `tenant.manage`).
- Ask your admin for tenant management permission if updates are required.

### I clicked Save but changes are not visible

- Wait a few seconds for data refresh.
- Reopen the page or refresh the browser.
- Confirm that the success message appeared after saving.

### I see "Failed to load tenant information."

- This usually means the tenant data request failed.
- Refresh the page and try again.
- If the issue persists, contact support with tenant ID for faster troubleshooting.
