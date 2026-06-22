---
id: connecting-your-messenger-account
title: "Connect Your Messenger Account"
sidebar_label: "Connect Messenger"
sidebar_position: 1
description: "Step-by-step guide to connect Facebook Messenger to ScaleFlow so page messages appear in Inbox."
displayed_sidebar: scaleFlowSidebar
---

# Connect Your Messenger Account

**Messenger** (Facebook Messenger) lets customers message your Facebook Page. Connecting Messenger brings those conversations into ScaleFlow [Inbox](../inbox-usage).

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

![Open Channels from the main navigation](/static/img/open-channel.png)

---

## Step 2: Start connection

1. Click **Connect**.
2. A Facebook / Meta sign-in window opens.

> **Gợi ý ảnh:** Trang **Channels → Messenger** với nút **Connect**.

---

## Step 3: Sign in and approve access

1. Sign in with the Facebook account that manages your business Page.
2. Select the correct **Facebook Page** if prompted.
3. Review the permissions ScaleFlow requests.
4. Click **Continue** / **Allow** to approve.

> **Gợi ý ảnh:** Meta OAuth consent screen với Page được chọn.

---

## Step 4: Confirm in ScaleFlow

1. Return to ScaleFlow (the window may close automatically).
2. Wait for the connection confirmation.
3. Confirm the Page appears under **Connected accounts** with status **active**.

If the process takes too long, click **Cancel** and try **Connect** again.

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
3. Open [Inbox](../inbox-usage) and confirm the message appears with a **Messenger** label.

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
- [Inbox Usage](../inbox-usage) — reply to customers
- [AI Assistant](../ai-assistant) — enable Smart Assistant
