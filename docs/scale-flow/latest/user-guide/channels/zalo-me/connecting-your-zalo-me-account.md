---
id: connecting-your-zalo-me-account
title: "Connect Your Zalo Me Account"
sidebar_label: "Connect Zalo Me"
sidebar_position: 1
description: "Step-by-step guide to connect a personal Zalo account to ScaleFlow using QR login."
displayed_sidebar: scaleFlowSidebar
---

# Connect Your Zalo Me Account

**Zalo Me** connects a **personal Zalo account** (not an Official Account) to ScaleFlow using **QR login**.

Use Zalo Me when you need a personal Zalo listener for direct conversations. For business-facing messaging at scale, prefer [Zalo OA](../zalo/connecting-your-zalo-oa-account).

After connection, messages appear in [Inbox](../../operations/inbox-usage).

---

## Before you start

- A personal Zalo account on your phone with the Zalo app installed.
- Permission to manage **Channels** in ScaleFlow.
- The Zalo app ready to scan a QR code.

---

## Step 1: Open the Zalo Me channel page

1. In ScaleFlow, open **Channels**.
2. Select **Zalo Me** from the channel list.
3. Click **Connect**.

![Open Channels from the main navigation](/static/img/open-channel.png)

> **Gợi ý ảnh:** Trang **Channels → Zalo Me** với nút **Connect**.

---

## Step 2: Scan the QR code

1. ScaleFlow displays a QR code.
2. Open the **Zalo app** on your phone.
3. Scan the QR code.
4. Approve the connection on your device when prompted.

> **Gợi ý ảnh:** Cửa sổ QR login ScaleFlow và màn hình xác nhận trên điện thoại Zalo.

---

## Step 3: Confirm in ScaleFlow

1. Return to the Zalo Me channel page.
2. Confirm the account appears under **Connected accounts**.
3. Status should show **active**.

Connection is successful when the account card shows **Test**, **Reconnect**, and **Delete**.

---

## Manage the connection

| Action | When to use |
|--------|-------------|
| **Test** | Verify ScaleFlow can still reach this Zalo Me account |
| **Reconnect** | Scan a new QR code if the session expired |
| **Delete** | Remove the account from ScaleFlow |

---

## Confirm it works

1. Click **Test** on the connected account.
2. Send a message to the connected Zalo account from another Zalo user.
3. Open [Inbox](../../operations/inbox-usage) and confirm the message appears.

---

## Troubleshooting

### QR code expired

- Click **Connect** or **Reconnect** to generate a new QR code and scan again.

### Wrong personal account connected

- **Delete** the connection and connect again with the correct phone / Zalo login.

### When to use Zalo OA instead

- Multiple staff need to handle the same business inbox.
- You need an Official Account brand presence.
- See [Connect Zalo OA](../zalo/connecting-your-zalo-oa-account).

---

## Read next

- [Channel Integration](../channel-integration) — overview of all channels
- [Connect Zalo OA](../zalo/connecting-your-zalo-oa-account) — business Official Account
- [Inbox Usage](../../operations/inbox-usage) — handle conversations
