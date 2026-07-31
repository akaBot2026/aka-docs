---
id: data-masking
title: Data Masking
sidebar_label: Data Masking
sidebar_position: 6
description: Beginner-friendly guide to hide sensitive contact details (phone, email, name) for selected roles.
displayed_sidebar: scaleFlowSidebar
---

# Data Masking

**Data Masking** helps you hide sensitive customer details from people who do not need to see the full value.

For example, a trainee can still work in Inbox, but phone numbers may show as `*******89` instead of the full number. Admins can still see everything if their role is not in the masked list.

---

## What Data Masking is for

Use it when you want to:

- Protect customer phone numbers or emails from casual viewing
- Limit what certain roles can see on contact cards
- Follow internal privacy rules without removing people from ScaleFlow

Masked fields are about **how data is displayed**. The information can still exist in the system for people who are allowed to see it.

---

## Before you start

- You need permission to manage **Data Masking**
- [Roles](./roles-permissions) should already exist (so you can choose who sees masked values)
- Decide which fields matter most: phone, email, first name, last name

---

## Open Data Masking

1. In the left sidebar, open **Organization**.
2. Select **Data Masking**.
3. Read the short description: control how sensitive contact data is shown across the workspace.

![Open Data Masking](/static/img/open-data-working.png)

---

## Add a masking rule

1. Click **Add Rule**.
2. In **Add Masking Rule**:
   - Choose a **Contact Property** (Phone Number, Email, First Name, or Last Name)
   - Choose a **Masking Style** (full hide, partial hide, or email/phone variants)
   - If you choose a partial style, set how many characters/digits to hide and from which side
   - Check the live **Preview** so you know how values will look
   - Select **Masked Roles** — the roles that should see the masked version
   - Turn **Rule Enabled** on when you want it active
3. Save the rule.

![Add a masking rule](/static/img/dialog-add-masking.png)

---

## Edit or delete a rule

- Use **Edit** to change the field, style, roles, or enabled switch.
- Use **Delete** and confirm **Delete Masking Rule?** when a rule is no longer needed.
- Use **Search Masking Rules** when the list grows.

---

## Important warning (read once)

If a role is both:

- listed under **Masked Roles**, and
- allowed to fully manage contacts,

that role may have trouble creating or updating contacts while values are hidden. Prefer masking for roles that only need to view or reply, not for full contact admins.

---

## Everyday example

Your company hires seasonal agents. Admins create a rule:

- Property: **Phone Number**
- Style: partial mask (show only the last digits)
- Masked roles: **Agent**

Agents can still help customers in Inbox, but they cannot copy full phone numbers casually. Managers with an unmasked role still see the complete number when needed.

---

## Tips

1. Start with **one field** (usually phone or email) and test with a sample user role.
2. Use **Preview** every time — it is easier than guessing.
3. Review rules when you add new [Roles](./roles-permissions).
4. Tell the team what they should do if they need the full value (ask a lead, escalate, and so on).

---

## Related guides

- [Roles and permissions](./roles-permissions)
- [User Management](./user-management)
- [Contact Management](../operations/contact-management)
- [Tenant Management](./tenant-management)
