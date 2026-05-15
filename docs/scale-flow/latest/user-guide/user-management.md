---
id: user-management
title: User Management
sidebar_label: User Management
sidebar_position: 4
description: Beginner-friendly guide to invite users, manage accounts, and assign roles in ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# User Management

User Management is where admins add people to ScaleFlow and manage their access.

Use it when a new teammate joins, someone changes teams, or a user should no longer access the workspace.

## What User Management is used for

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

If a button is missing, contact your workspace admin to update your permissions.

## Open User Management

![Open Organization and User Management from the sidebar](/static/img/open-user-manage.png)

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

![Find user](/static/img/search-user.png)

- Type your keyword (for example: email or name)
- Results are refreshed automatically after a short delay
- Click **Clear Filter** to reset search

The table uses pagination. You can change page and page size from the table controls.

## Invite users by email

Invitation is the easiest option when adding teammates.

   ![Open invite user](/static/img/open-invite-user.png)

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
- After accepting the invitation, the user can sign in. If your company uses SSO, they should use the SSO option explained in [Account Registration](./account-registration).

## Add a user manually

Use manual creation only when your organization wants an admin to create the account directly.

![Open Add User](/static/img/open-add-user.png)

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
![Edit delete assign role user](/static/img/edit-delete-user.png)
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
- If you are unsure which role to choose, review [Roles & Permissions](./roles-permissions).

## Open user detail page

From the Email column, click a user email to open the detail page.

![Detail user](/static/img/detail-user.png)

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

## Real-world onboarding example

1. A new support staff member joins the company.
2. Admin invites the user by work email.
3. The user signs in with SSO from [Account Registration](./account-registration).
4. Admin assigns the `Support Agent` role.
5. Admin adds the user to the right team in [Team Management](./team-management).
6. The user starts handling conversations in [Inbox](./inbox-usage).

## Offboarding example

1. A staff member leaves the company.
2. Admin removes or disables their access.
3. Admin checks open tickets assigned to that user.
4. Tickets and conversations are reassigned to another user or team.

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
