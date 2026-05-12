---
id: roles-permissions
title: Roles & Permissions
sidebar_label: Roles & Permissions
sidebar_position: 11
description: A non-technical guide to create roles, configure permissions, and assign access in ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Roles & Permissions

This guide explains how non-technical users can use the **Roles & Permissions** page to control who can view and do what in the workspace.

## What you can do on this page

In **Organization -> Roles & Permissions**, you can:

- View all roles
- Search roles by name
- Create new roles
- Copy permissions from an existing role
- Edit a role description
- Configure role permissions by feature group
- Delete custom roles that are no longer needed

## Before you start

- If you cannot see this page, ask your admin to grant role view access.
- If you can open the page but cannot save or delete, your account may be view-only.

## Open Roles & Permissions

1. In the left sidebar, open **Organization**.
2. Select **Roles & Permissions**.
3. You will see role cards (for example: Owner, Administrator, Supervisor, Member, Guest, and custom roles).

## Understand a role card

Each role card shows:

- Role name
- Role description (if available)
- Permission badges
- Last modified time

Important behavior in the current UI:

- **Owner** role has full permissions and cannot be edited or deleted.
- Roles with the **System** badge are protected:
  - Cannot be deleted
  - Permission updates are read-only
- Custom roles can be managed from the 3-dot menu: **Edit** / **Delete**.

## Create a new role

![Create role dialog](/static/img/create-role.png)

1. Click **Create new role**.
2. In **Role details**:
   - Enter **Role name** (required)
   - Enter **Description** (optional)
   - Optional: choose **Copy permissions from role** to copy a permission set from another role
3. Click **Continue**.![alt text](image.png)
4. In **Add permissions**, select the permissions you want.

![Add permissions](/static/img/list-permission.png)

5. Click **Create role** to finish.

Notes:

- Role name cannot be changed after creation.
- Copying permissions from an existing role helps speed up setup.

## Edit an existing role

You can edit custom roles (not Owner, not System):

1. Click the role card, or open the 3-dot menu and select **Edit**.
2. Update the description in **Edit role**.
3. Click **Continue** to move to permissions.
4. Update the permissions.
5. Click **Save changes**.

## Configure permissions (simple view)

In the permissions step, you can:

- Use the search box to filter quickly
- Use **Select all** for all currently visible permissions
- Select by feature group (Inbox, Contacts, Tickets, Organization, ...)
- Select individual permissions

### Automatic add/remove behavior

When you select or unselect some permissions, the system may automatically add or remove related dependent permissions.

This is expected behavior to prevent incomplete or conflicting access setups.

### Storage permissions note

Storage permissions stay disabled until the role has at least one permission from a core feature group (such as Inbox, Contacts, Tickets, AI, Channels, Integrations, or Organization).

## Delete a role

![Delete role dialog](/static/img/delete-role.png)

1. Open the 3-dot menu on a role card.
2. Select **Delete**.
3. Confirm in the dialog.

Check carefully before deleting, because users assigned to that role may lose access.

## Assign roles to users

Creating roles and assigning roles are two separate steps:

1. Create or update roles in **Roles & Permissions**.
2. Open **Organization -> User Management**.
3. On the target user row, click **Assign Role** (shield icon).

![Assign role dialog](/static/img/assign-role.png)

4. Select one or more roles, then save.

Notes:

- Users in the Owner role cannot be reassigned from the user list.
- If you do not see **Assign Role**, ask your admin for role assignment access.

## Suggested setup for non-technical teams

- Keep default system roles unchanged.
- Create custom roles based on real job responsibilities (for example: Support Agent, Team Lead, QA).
- Start by copying a similar role, then remove unnecessary permissions.
- Test with one user before applying to the full team.

## Troubleshooting

### I cannot see the Roles & Permissions page

- Your account may not have role view access.
- Contact your admin to request access.

### I can open the page but cannot save changes

- You may have view-only access.
- Or you may be editing a protected System role (read-only).
- Ask your admin to grant role management access if updates are needed.

### I cannot select some Storage permissions

- Select at least one permission from a core feature group first.
- Then return to select Storage permissions.

### I deleted a role by mistake

- Recreate the role with the same or equivalent permissions.
- Go to **User Management** and reassign the role to affected users.
