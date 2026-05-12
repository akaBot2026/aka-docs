---
id: team-management
title: Team Management
sidebar_label: Team Management
sidebar_position: 10
description: A practical guide to create teams, manage members, and maintain team structure in ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Team Management

This guide explains how to use **Team Management** in ScaleFlow to organize users into teams and manage team members.

## What you can do on this page

In **Organization -> Team Management**, you can:

- View all teams in your workspace
- Search teams by name
- Create a new team
- Edit team information
- Add or remove team members
- Delete a team when it is no longer needed

## Access and permissions

Your visible actions depend on your permissions:

- **View page and team list**: requires view
- **Create / Edit / Delete teams**: requires manage
- **Manage members in Add/Edit dialog**: also requires manage

If a button is missing, contact your workspace admin to update your permissions.

## Open Team Management

1. In the left sidebar, open **Organization**.
2. Select **Team Management**.
3. You will see the team list with key information such as:
   - Team name
   - Description
   - Number of members
   - Status
   - Created date
   - Actions (if you have manage)

![Team list overview](/static/img/list-team.png)

## Create a new team

1. Click **+ Add Team**.
2. Fill in required fields:
   - Team name
3. Optionally add:
   - Description
   - Initial members

   ![Add team dialog](/static/img/add-team.png)

4. Click **Create Team**.

Tips:

- Use a clear naming convention (for example: `Support - APAC`, `Sales - SMB`).
- Create smaller teams based on workflows to improve ownership.

## Add or remove team members

1. In the team row, click the **Edit** icon.
2. In **Manage Members**, open the member picker.
3. Add users to the member list or remove users who no longer belong to the team.
4. Click **Save Changes**.

Notes:

- A user can be moved between teams based on your organization policy.
- Update members whenever responsibility changes.

## Edit team details

1. In the team row, click the **Edit** icon.
2. Update fields such as:
   - Team name
   - Description
   - Members

   ![Edit team confirmation dialog](/static/img/edit-team.png)

3. Click **Save Changes**.

## Delete a team

1. In the team row, click the **Delete** icon.
2. Confirm the action in the dialog.

![Delete team confirmation dialog](/static/img/delete-team.png)

3. The team is removed after successful confirmation.

Use this action carefully. Before deletion, make sure members are reassigned to another team if required by your workflow.

## Notes about current UI behavior

- Team status (**Active/Inactive**) is displayed in the list.
- Team status is currently read-only from this page.
- Team edits are done in a modal dialog (there is no separate team detail page).
- The list supports pagination (page and page size controls).

## Troubleshooting

### I cannot see Team Management

- You may not have team view permission.
- Ask your admin to grant organization team view access.

### I can view teams but cannot create or edit

- You may only have view permission.
- Ask your admin for team management permission.

### I cannot assign members

- Member management is part of manage.
- Ask your admin to grant team management access.

### My updates are not visible immediately

- Wait a few seconds and refresh the page.
- Re-open the team to verify saved changes.
- If needed, sign out and sign in again.
