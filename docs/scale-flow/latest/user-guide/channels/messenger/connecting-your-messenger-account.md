---
id: connecting-your-messenger-account
title: Messenger
sidebar_label:  Messenger
sidebar_position: 1
description: "Step-by-step guide to connect Facebook Messenger to ScaleFlow so page messages appear in Inbox."
displayed_sidebar: scaleFlowSidebar
---

# Connect Your Messenger Account

**Messenger** (Facebook Messenger) lets customers message your Facebook Page. Connecting Messenger brings those conversations into ScaleFlow [Inbox](../../operations/inbox-usage).

---

## Before you start

- Access to the **Facebook Page** (or Meta Business account) you want to connect.
- Admin or sufficient permissions on that Page to authorize third-party apps.
- Permission to manage **Channels** in ScaleFlow.

---

## Step 1: Open the Messenger channel page

1. In ScaleFlow, open **Channels**.
2. Select **Messenger** from the channel list.
3. Review **Channel setup** and **Connected accounts**.

![Open Channels from the main navigation](/static/img/open-message.png)

---

## Step 2: Start connection

1. Click **Connect**.
2. A Facebook / Meta sign-in window opens.

---

## Step 3: Sign in and approve access

1. Sign in with the Facebook account that manages your business Page.
2. Select the correct **Facebook Page** if prompted.
3. Review the permissions ScaleFlow requests.
4. Click **Continue** / **Allow** to approve.


![Open Channels from the main navigation](/static/img/approve-facebook.png)

---

## Step 4: Confirm in ScaleFlow

1. Return to ScaleFlow (the window may close automatically).
2. Wait for the connection confirmation.
3. Confirm the Page appears under **Connected accounts** with status **active**.

If the process takes too long, click **Cancel** and try **Connect** again.

![Confirm in ScaleFlow](/static/img/connect-message-success.png)
---

## Manage the connection

| Action | When to use |
|--------|-------------|
| **Test** | Verify Messenger is still reachable |
| **Reconnect** | Re-authorize after token expiry or Page changes |
| **Delete** | Remove the Page from ScaleFlow (new Messenger messages stop) |

---

## Confirm it works

1. Click **Test** on the connected account.
2. Send a message to your Facebook Page from a personal Facebook or Messenger account.
3. Open [Inbox](../../operations/inbox-usage) and confirm the message appears with a **Messenger** label.

---

## Message templates (for Broadcasts)

After a Page is connected, you can manage **Messenger message templates** used for mass sends in [Broadcasts](../../operations/broadcast-usage).

1. Open **Channels → Messenger**.
2. Open the connected Page / channel detail.
3. Open the **Templates** area.
4. Search or filter by status (**Approved**, **Pending**, **Rejected**) and language.
5. Create a new template, open a template to view details, or delete a template you no longer need.

Only **Approved** templates are ready to use when you build Messenger broadcast content.

> **Gợi ý ảnh:** Trang chi tiết Facebook/Messenger với bảng Templates (Status, Template name, Language, Category) và nút tạo template mới.

---

## Troubleshooting

### Wrong Facebook Page connected

- **Delete** the connection and **Connect** again, selecting the correct Page.

### Messages do not appear in Inbox

- Run **Reconnect** and complete Meta authorization again.
- Confirm the Page is published and Messenger is enabled for the Page.
- Check that messaging is not restricted in Meta Business settings.

### Connection window blocked

- Allow popups for ScaleFlow in your browser.
- Try another browser or disable extensions that block OAuth popups.

---

## Read next

- [Channel Integration](../channel-integration) — overview of all channels
- [Inbox Usage](../../operations/inbox-usage) — reply to customers
- [AI Assistant](../../scaleflow-ai/ai-assistant) — enable Smart Assistant
