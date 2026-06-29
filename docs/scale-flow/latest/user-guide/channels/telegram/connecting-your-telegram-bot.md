---
id: connecting-your-telegram-bot
title: Telegram
sidebar_label: Telegram
sidebar_position: 1
description: "Step-by-step guide to create a Telegram bot with BotFather and connect it to ScaleFlow."
displayed_sidebar: scaleFlowSidebar
---

# Connect Your Telegram Bot

Telegram uses a **bot** — a special account that can receive and send messages for your business. ScaleFlow connects using the **Bot Token** from Telegram **@BotFather**.

Treat your Bot Token like a password. If it is exposed, open **@BotFather**, choose your bot, and use **`/revoke`** to issue a new token.

After connection, customer chats with your bot appear in [Inbox](../../operations/inbox-usage).

---

## Before you start

- A Telegram account (phone or desktop app).
- Permission to manage **Channels** in ScaleFlow.
- About **10 minutes** to create the bot and connect.

---

## Step 1: Open the Telegram channel page in ScaleFlow

1. In ScaleFlow, open **Channels**.
2. Select **Telegram** from the channel list.
3. In **Channel setup**, read the checklist, then click **Connect**.

You will confirm the bot under **Connected accounts** at the bottom — same place for **Test**, **Reconnect**, and **Delete**.

![Telegram channel setup with Connect and Connected accounts](/static/img/connect_tele.png)

---

## Step 2: Find the official BotFather in Telegram

Create the bot in the Telegram app, not inside ScaleFlow.

1. Open the Telegram app.
2. Search for **`@BotFather`**.
3. Open **BotFather** with the **blue verified checkmark**. Ignore unofficial accounts.

![Search for official @BotFather in Telegram](/static/img/telegram-search-botfather.png)

---

## Step 3: Create a bot and copy the Bot Token

1. Start a chat with **@BotFather**.
2. Send **`/newbot`** and answer the questions (display name and username).
3. Usernames must end with **`bot`** (for example `MyShopSupport_bot`).
4. When creation succeeds, BotFather sends your **HTTP API token** (a long string with a colon `:`). **Copy the full token** and keep it private.

![BotFather success message with Bot Token](/static/img/telegram-botfather-token.png)

---

## Step 4: Paste the token in ScaleFlow and verify

The **Connect Telegram Bot** window should still be open. If you closed it, click **Connect** again.

1. Paste the token into **Bot Token**.
2. Optionally use the **How to get a token? @BotFather** link.
3. Click **Verify Token**.

![Connect Telegram Bot: enter token and Verify Token](/static/img/telegram-modal-enter-token.png)

---

## Step 5: Confirm the bot name and finish

If the token is valid, you see a green **Bot Found** message and your bot handle (for example `@YourBot_bot`).

1. Check the handle matches the bot you created.
2. Click **Connect** to save.

![Bot Found confirmation before Connect](/static/img/telegram-modal-bot-found.png)

---

## Step 6: Confirm in ScaleFlow

On **Channels → Telegram**, your bot appears under **Connected accounts** with status **active**.

![Telegram — Connected accounts after successful connection](/static/img/telegram-connected-accounts.png)

---

## Confirm it works (customer + Inbox)

The same conversation appears in two places: the customer chats with your **bot** in Telegram, and your team works from ScaleFlow **Inbox** (messages show a **Telegram** label).

1. On a phone, open Telegram, start your bot, and send **`/start`** and a short question.
2. In ScaleFlow, open [Inbox](../../operations/inbox-usage), pick the conversation, and confirm the text appears.
3. Reply from the **Reply** box or use **AI Smart Writing** when enabled.

![Customer sends messages to your bot in the Telegram app](/static/img/telegram-test-chat-mobile.png)

![The same thread in ScaleFlow Inbox with Telegram labels](/static/img/telegram-test-chat-inbox.png)

---

## Manage the connection

| Action | When to use |
|--------|-------------|
| **Test** | Verify the bot is reachable |
| **Reconnect** | Enter a new token after revoke or bot changes |
| **Delete** | Remove the bot from ScaleFlow |

---

## Troubleshooting

### Verify Token fails

- Copy the **entire** token from BotFather (no extra spaces).
- Create a new token with **`/revoke`** in BotFather if unsure.

### Messages do not appear in Inbox

- Click **Test** on the connected account.
- Confirm customers message the correct `@YourBot_bot` handle.
- Try **Reconnect** with a fresh token.

---

## Read next

- [Channel Integration](../channel-integration) — overview of all channels
- [Inbox Usage](../../operations/inbox-usage) — handle conversations
- [AI Assistant](../../scaleflow-ai/ai-assistant) — enable automatic replies
