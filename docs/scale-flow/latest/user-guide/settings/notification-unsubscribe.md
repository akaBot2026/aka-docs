---
id: notification-unsubscribe
title: Email notification preferences
sidebar_label: Notification unsubscribe
sidebar_position: 4
description: Beginner-friendly guide to the public unsubscribe page for email and in-app notifications.
displayed_sidebar: scaleFlowSidebar
---

# Email Notification Preferences (Unsubscribe)

Sometimes ScaleFlow sends email alerts to your team (for example when a conversation is assigned or a ticket updates). If someone wants fewer emails, they can use a special **unsubscribe link** in the message.

This page is **public** — it works without signing in to ScaleFlow, as long as the link is valid.

---

## Who uses this page

- **Team members** who receive operational emails from ScaleFlow
- **Admins** helping a colleague turn notifications off after leave or role change

This is different from in-app notification settings inside ScaleFlow (bell icon). The unsubscribe page is only for links sent by email.

---

## Open the page

1. Open the email from ScaleFlow.
2. Click the **notification preferences** or **unsubscribe** link.
3. The browser opens a ScaleFlow page with the logo and two main switches.

The link contains a private **token**. Do not share it publicly.

> **Gợi ý ảnh:** Trang unsubscribe với logo ScaleFlow, tiêu đề, và 2 toggle Allow notifications / Email.

---

## Choose your preferences

| Switch | What it does |
|--------|----------------|
| **Allow notifications** | Master switch — off means no notification emails |
| **Email** | Email channel — only works when Allow notifications is on |

Typical choices:

- Keep both **on** — normal email alerts
- Turn **Email** off but keep Allow on — rare; usually you turn both off
- Turn **Allow notifications** off — stops email alerts from this link

Click **Save preferences** (or **Save configuration**) when done.

> **Gợi ý ảnh:** Hai toggle và nút Save ở cuối form.

---

## After you save

You should see a success screen confirming your preferences were updated.

If you need alerts again, ask your workspace admin — you may need a new invitation email or fresh link.

---

## Error messages in plain language

| What you see | What it means | What to do |
|--------------|---------------|------------|
| Invalid link | Token missing or expired | Request a new email from ScaleFlow or ask admin |
| Link already used | This token was saved once and cannot be reused | Use latest email or ask admin to resend |
| Could not save | Temporary server or network issue | Try again in a few minutes |

---

## Tips for admins

1. Tell new staff they can reduce email noise without losing Inbox access.
2. Unsubscribe affects **notification emails**, not the ability to log in and work in ScaleFlow.
3. For fine-grained control (only some event types), use in-app notification settings when available.

---

## Related guides

- [User Management](../organization/user-management)
- [Profile Usage](../organization/profile-usage)
- [Inbox Usage](../operations/inbox-usage)
