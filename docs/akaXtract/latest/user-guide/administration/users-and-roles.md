---
id: users-and-roles
title: Users and Roles
sidebar_label: Users and Roles
sidebar_position: 1
description: Invite or add members, and create roles and assign permissions.
displayed_sidebar: akaXtractSidebar
---

# Users and Roles

<a id='members'></a>

## Invite or Add Members

**Before you begin:** you need permission to manage users, and permission to assign roles if you set roles. Members belong to the ScaleX company, not to a list for documents only.

1. Open `Profile & Setting` -> `User Management`. Search first to avoid duplicates.
2. Choose how to add the member:

| Method | How | Result |
| --- | --- | --- |
| Invite | `Invite Users`, enter `Email Addresses` separated by commas, spaces, or new lines, choose roles, then `Send Invitations` | The invitation shows `pending`. The recipient completes it in the account system and signs in, and the roles apply at sign-in |
| Add directly | `Add User`, enter `Email`. For a new account also enter `First Name`, `Last Name`, and a `Password` of at least 6 characters. Choose roles, then `Create User` | An existing ScaleX account joins right away. A new user must change the password at first sign-in |

![User Management tab](/static/img/scale-xtract-user-management.png)

![Invite Users dialog](/static/img/scale-xtract-invite-users.png)

![Add User dialog](/static/img/scale-xtract-add-user.png)

If a user was added but the roles were not saved, use `Assign Role` instead of creating the account again.

:::note
A member without a role cannot process documents. A multi-address invitation can partly succeed, so check each address before you resend. Deleting a member removes that person from the **company** or cancels a pending invitation. You cannot delete yourself, and the owner is protected. Because the company can be shared with other applications, removal can affect more than AkaXtract.
:::

<a id='roles'></a>

## Create a Role

1. Open `Profile & Setting` -> `Roles & Permissions` and select `Create new role`.
2. Enter a unique `Role name` and an optional description. To start from an existing role, use `Copy permissions from role`. Select `Continue`.
3. Select the permissions and select `Create role`.

![Roles & Permissions tab](/static/img/scale-xtract-roles-permissions.png)

![Create new role dialog](/static/img/scale-xtract-create-role.png)

A new role starts with only the quota-read permission selected. Some management permissions include the view permissions they depend on.

## Assign and Edit Roles

1. In `User Management`, open the member menu and select `Assign Role`.
2. Choose the roles and save. This replaces the selected set, so keep the roles that are still needed. Ask the member to reload the page or sign in again.

For a custom role, you can edit the permissions and the description, but not the name. For a system role other than Owner, you can change only the quota-read permission. The Owner role cannot be edited and is reserved for the company owner. System roles cannot be deleted.

:::warning
Deleting a custom role removes its assignments and can remove users' access. Check the members first.
:::
