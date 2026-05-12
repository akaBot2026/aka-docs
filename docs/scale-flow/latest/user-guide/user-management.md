---
id: user-management
title: User Management
sidebar_label: User Management
sidebar_position: 4
description: A practical guide to manage users, invitations, roles, and access in ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# User Management

This guide explains how to use the **User Management** page in ScaleFlow to find users, invite members, create users, edit user profiles, assign roles, and remove users.

## What you can do on this page

In **Organization -> User Management**, you can:

- View all users in your organization
- Search users
- Move through paginated user lists
- Invite one or multiple team members by email
- Add a user manually
- Edit user basic information
- Assign or update roles
- Open a user detail page
- Delete a user

## Access and permissions

Your visible actions depend on your permissions:

- **View page**: requires user view access
- **Invite / Add / Edit / Delete**: requires user management access
- **Assign roles**: requires role assignment access

If a button is missing, contact your workspace admin to update your permissions.

## Open User Management

1. In the left sidebar, open **Organization**.
2. Select **User Management**.
3. You will see a table with columns:
   - Email
   - Name
   - Roles
   - Status
   - Created At
   - Actions

   ![User management list page](/static/img/list-user.png)

## Find users quickly

Use the search box at the top of the page:

- Type your keyword (for example: email or name)
- Results are refreshed automatically after a short delay
- Click **Clear Filter** to reset search

The table uses pagination. You can change page and page size from the table controls.

## Invite users by email

1. Click **Invite Users**.
2. Enter one or more email addresses.
3. You can add emails by:
   - Pressing **Enter**
   - Typing a comma
   - Typing a space
   - Pasting multiple emails at once

   ![Invite team users dialog](/static/img/invite-team-user.png)

4. Click **Invite**.

Important:

- Invalid or duplicate emails are blocked in the dialog.
- Invitation links are valid for **7 days**.

## Add a user manually

1. Click **+ Add User**.
2. Fill in required fields:
   - Email
   - First Name
   - Last Name
   - Password

   ![Add User dialog](/static/img/create-user.png)

3. Click **Create User**.

Validation rules:

- Email must be valid
- First and last name are required
- Password must be at least 6 characters

## Edit a user

1. In the user row, click the **Edit** icon.
2. Update user information.

![Edit user dialog](/static/img/edit-user.png)

3. Click **Save Changes**.

Notes:

- Email is read-only in edit mode.
- This action updates profile fields (not role assignment).

## Assign roles to a user

1. In the user row, click the **Assign Role** icon (shield).
2. Select one or more roles.
3. Click **Save**.

Notes:

- Role assignment is handled in a dedicated dialog.
- For owner accounts, role assignment is disabled from the list.

## Open user detail page

From the Email column, click a user email to open the detail page.

You can review:

- Identity information
- Contact information
- Status and member since date
- Workspace-related profile details

## Delete a user

1. In the user row, click the **Delete** icon.
2. Confirm in the dialog.

![Delete user confirmation dialog](/static/img/delete-user.png)

3. The user is removed after successful confirmation.

Use this action carefully because it can affect access and workflow ownership.

## Troubleshooting

### I cannot see User Management

- You may not have user view permission.
- Ask your admin to grant organization user view access.

### I can view the table but cannot invite/add/edit/delete

- You may only have view permission.
- Ask your admin for user management permission.

### I cannot assign roles

- You need role assignment permission.
- Ask your admin to grant role assignment access.

### My changes are not visible immediately

- The list usually refreshes automatically after successful actions.
- If needed, refresh the page and search again.
