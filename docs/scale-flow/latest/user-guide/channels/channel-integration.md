---
id: channel-integration
title: Channel 
sidebar_label: Channel 
sidebar_position: 1
description: Beginner-friendly overview to connect Zalo OA, LINE, WhatsApp, Messenger, Telegram, and more to ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Channel Integration

Channels are the places where customers message your business — Zalo OA, Facebook Messenger, WhatsApp, LINE, Telegram, and more.

Connecting a channel lets ScaleFlow collect those messages in one shared [Inbox](../operations/inbox-usage). After that, staff and [AI Assistant](../scaleflow-ai/ai-assistant) can help answer customers from one place.

---

## What to know before you start

- You need access to the business account for the channel you want to connect.
- You need permission in ScaleFlow to manage channels.
- Connect channels before turning on automatic AI support.
- After connecting, send a test message to confirm it appears in Inbox.

---

## Supported channels and setup guides

Channels you can connect today in ScaleFlow. Each row links to a **dedicated step-by-step guide**.

| Channel | Setup guide |
|---------|-------------|
| **Zalo OA** | [Connect Your Zalo OA Account](./zalo/connecting-your-zalo-oa-account) |
| **Zalo Me** | [Connect Your Zalo Me Account](./zalo-me/connecting-your-zalo-me-account) |
| **Messenger (Facebook)** | [Connect Your Messenger Account](./messenger/connecting-your-messenger-account) |
| **WhatsApp Business API** | [Connecting Your WhatsApp Business API Account](./whatsapp/connecting-your-whatsapp-business-api-account) |
| **LINE Business** | [Connect Your LINE Business Account](./line/connecting-your-line-business-account) |
| **Telegram** | [Connect Your Telegram Bot](./telegram/connecting-your-telegram-bot) |

Other channels in the list (SMS, WeChat, Viber, Instagram, TikTok, Chat Widget, and more) may show **Coming Soon** and cannot be connected yet.

---

## Open the Channels page

Most connection flows start from **Channels**. Open **Channels** from the main navigation, then choose a channel from the list.

![Open Channels from the main navigation](/static/img/open-channel.png)

Pick the channel you need and follow the matching guide in the table above.

---

## Manage connected accounts

After connection, each account appears in **Connected accounts** on that channel's page.

| Action | What it does |
|--------|----------------|
| **Test** | Check whether the channel is still reachable |
| **Reconnect** | Sign in again or refresh credentials if the connection stopped working |
| **Delete** | Remove the connection (new messages from that channel stop arriving in Inbox) |

These actions work the same way across Zalo, Messenger, WhatsApp, LINE, Telegram, and other supported channels.

---

## How to confirm it works

1. Click **Test** on the newly connected account.
2. Send a real test message from that channel (phone app, Messenger, WhatsApp, etc.).
3. Open [Inbox](../operations/inbox-usage) and confirm the message arrives with the correct channel label.

Channel-specific testing tips (for example Telegram bot + Inbox screenshots) are in each dedicated guide above.

---

## Real-world workflow

1. A customer sends a message to your Zalo OA: "Do you have a warranty?"
2. The message appears in [Inbox](../operations/inbox-usage).
3. [AI Assistant](../scaleflow-ai/ai-assistant) checks your warranty Knowledge and replies.
4. If the customer needs a repair case, staff create a [Ticket](../operations/ticket-usage).
5. The ticket is handled until the repair is complete.

---

## What to do next

After at least one channel is connected:

1. Add business answers in [Knowledge](../scaleflow-ai/knowledge-usage).
2. Build your first [AI Agent](../scaleflow-ai/ai-agent-usage).
3. Turn on [AI Assistant](../scaleflow-ai/ai-assistant) when you are ready.

### All channel setup guides

- [Zalo OA](./zalo/connecting-your-zalo-oa-account)
- [Zalo Me](./zalo-me/connecting-your-zalo-me-account)
- [Messenger](./messenger/connecting-your-messenger-account)
- [WhatsApp Business API](./whatsapp/connecting-your-whatsapp-business-api-account)
- [LINE Business](./line/connecting-your-line-business-account)
- [Telegram](./telegram/connecting-your-telegram-bot)

### Related guides

- [Inbox Usage](../operations/inbox-usage) — handle messages after channels are connected
- [Integration Usage](../integrations/integration-usage) — connect HubSpot, Google Drive, Make, and more

---

## Quick troubleshooting

### Messages do not appear in Inbox

1. Open the channel page and click **Test**.
2. Try **Reconnect** and complete authorization again.
3. Confirm the channel account is still active on the provider side.
4. See the troubleshooting section in the channel-specific guide.

### I cannot see the Channels menu

- Ask your admin to grant channel management permission.

### Wrong account connected

- Use **Delete**, then follow the setup guide again from the table above.
