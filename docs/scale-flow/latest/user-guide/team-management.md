---
id: team-management
title: Team Management
sidebar_label: Team Management
sidebar_position: 10
description: Beginner-friendly guide to create teams and organize staff work in ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Team Management

Teams help organize users into working groups, such as Support, Sales, Admissions, Billing, or Technical Support.

Use teams when conversations or tickets should be assigned to a group instead of one person.

## What Team Management is used for

In **Organization -> Team Management**, you can:

- View all teams in your workspace
- Search teams by name
- Create a new team
- Edit team information
- Add or remove team members
- Delete a team when it is no longer needed

## Access and permissions

If a button is missing, contact your workspace admin to update your permissions.

## Open Team Management
![Open team](/static/img/open-team.png)
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

Create a team when several users share the same responsibility.

 ![Add team button](/static/img/add-team-1.png)

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

Example: If one support staff member moves to the Billing team, remove them from `Customer Support` and add them to `Billing Support`.

## Edit team details

  ![Edit team button](/static/img/edit-team-1.png)

1. In the team row, click the **Edit** icon.
2. Update fields such as:
   - Team name
   - Description
   - Members

   ![Edit team confirmation dialog](/static/img/edit-team.png)

3. Click **Save Changes**.

## Delete a team

![Delete team confirmation dialog](/static/img/delete-team-1.png)

1. In the team row, click the **Delete** icon.
2. Confirm the action in the dialog.

![Delete team confirmation dialog](/static/img/delete-team.png)

3. The team is removed after successful confirmation.

Use this action carefully. Before deletion, make sure members are reassigned to another team if required by your workflow.

## How teams connect to Inbox and Tickets

- In [Inbox](./inbox-usage), conversations can be assigned to a team when anyone in that group can help.
- In [Tickets](./ticket-usage), tickets can be assigned to a team when the next step belongs to that group.
- In [User Management](./user-management), users must exist before they can be added to teams.

## Real-world workflow

1. Admin creates a team called `Refund Support`.
2. Admin adds staff who can review refund requests.
3. Smart Assistant creates a ticket when a customer asks for a refund.
4. The ticket is assigned to `Refund Support`.
5. Any team member can pick it up and resolve it.

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
