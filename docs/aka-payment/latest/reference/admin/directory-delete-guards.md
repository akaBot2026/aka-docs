---
title: "Cannot delete or disable while still in use"
description: "A unit cannot be deleted while it has child units, members, requests, or allocations. A group cannot be deleted while it has members or is assigned to a request type."
id: directory-delete-guards
sidebar_label: Cannot delete or disable while still in use
sidebar_position: 2
---

# Cannot delete or disable while still in use

A unit cannot be deleted while it has child units, members, requests, or allocations. A group cannot be deleted while it has members or is assigned to a request type.

**Requirement level:** Required


**Units**: A unit cannot be deleted if it has child units, members, requests created for it, or budget allocations; the "Delete unit" button is disabled and the reason is displayed. **Approval groups**: A group cannot be deleted if it has members or a request type has an approval step assigned to it. **Users**: The organization owner, a user who is currently the head of a unit, or the last administrator cannot be disabled; the role of the last administrator cannot be downgraded either.


## Used in these guides

- [Add or invite users](../../guides/admin/how-to/invite-user.md) — In Users, click Add user (to check each email) or Invite (to invite multiple email addresses with the same role).
- [Add or edit an approval group](../../guides/admin/how-to/manage-approval-group.md) — In Approval groups, click Add approval group, then add or remove members.
- [Add or edit a unit in the organization structure](../../guides/admin/how-to/manage-organization.md) — In Organization structure, click Add unit or Add child unit, then add users and assign a department head.
