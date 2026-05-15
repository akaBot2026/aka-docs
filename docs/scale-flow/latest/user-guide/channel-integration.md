---
id: channel-integration
title: Channel Integration
sidebar_label: Channel Integration
sidebar_position: 4
description: Beginner-friendly guide to connect Zalo OA, Facebook, WhatsApp, and Telegram to ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Channel Integration

Channels are the places where customers message your business, such as Zalo OA, Facebook Messenger, WhatsApp, or Telegram.

Connecting a channel lets ScaleFlow collect those messages in one shared [Inbox](./inbox-usage). After that, staff and [AI Assistant](./ai-assistant) can help answer customers from one place.

## What to know before you start

- You need access to the business account for the channel you want to connect.
- You need permission in ScaleFlow to manage channels.
- You should connect channels before turning on automatic AI support.
- After connecting, send a test message to make sure the message appears in Inbox.

## Supported channels

- Zalo OA
- Messenger (Facebook)
- WhatsApp Business API
- Telegram

Some other channels may appear in the list but show **Coming Soon**.

## Open the Channels page

Most steps in this guide start from **Channels**. In ScaleFlow, open **Channels** from the main navigation, then choose a channel (Zalo, Messenger, WhatsApp, or Telegram) from the list.

![Open Channels from the main navigation](/static/img/open-channel.png)

## What is Zalo OA?

Zalo OA means **Zalo Official Account**. It is a business account on Zalo that lets your company receive and send messages with customers.

Use Zalo OA when your customers commonly contact you through Zalo. For example, a clinic, school, ecommerce shop, or local service business can use Zalo OA to answer questions, send updates, and support customers.

## How to create a Zalo OA account

If your business does not have a Zalo OA yet:

1. Go to the Zalo Official Account website.
2. Sign in with the Zalo account that should manage the business account.
3. Create a new Official Account.
4. Choose the account type that matches your business.
5. Fill in the business name, contact details, and required information.
6. Submit for review if Zalo asks for verification.
7. After the account is ready, return to ScaleFlow and connect it.

If you are not sure who owns your Zalo OA, ask your marketing, customer service, or business admin team before connecting it.

## Connect Zalo OA step by step

Use this section when you want customer messages from your Zalo Official Account to appear in ScaleFlow Inbox.

Before connecting, make sure:

- You can sign in to the Zalo account that manages the Zalo OA.
- You know which Zalo OA your business wants to connect.
- Your Zalo OA is ready to be used for business messaging. Some Zalo permissions may require a verified or upgraded OA.

### Step 1: Open the Zalo channel page

1. In ScaleFlow, open **Channels**.
2. Select **Zalo** from the channel list.
3. Check the **Connected accounts** area.
4. If no account is connected yet, click **Connect**.

![Click Connect to start Zalo OA connection](/static/img/zalo-connect-button.png)

### Step 2: Sign in to Zalo

After you click **Connect**, Zalo opens a sign-in window.

1. Sign in with the Zalo account that manages your business Zalo OA.
2. If Zalo shows a QR code, open the Zalo app on your phone and scan the QR code.
3. Continue until Zalo shows the permission screen.

![Zalo login QR code screen](/static/img/zalo-login-qr.png)

Tip: If the wrong Zalo account appears, close the window and sign in again with the correct account.

### Step 3: Choose the correct Zalo OA and approve access

Zalo will ask you to allow ScaleFlow to connect with your Official Account.

1. Check the selected Zalo OA name carefully.
2. Make sure it is the business OA you want to use in ScaleFlow.
3. Review the requested permissions.
4. Approve the request to continue.

![Zalo OA permission approval screen](/static/img/zalo-permission-approval.png)

In simple terms, this permission allows ScaleFlow to receive and manage customer conversations from that Zalo OA. Do not approve the connection if the selected OA is not your business account.

### Step 4: Wait for the success message

After approval, ScaleFlow shows a success message in the connection window.

1. Confirm that the message says the Zalo Official Account was connected successfully.
2. Click **Close** or close the window.
3. Return to the ScaleFlow channel page.

![Zalo authentication successful message](/static/img/zalo-auth-success.png)

### Step 5: Confirm the account appears in ScaleFlow

Back in ScaleFlow, the connected Zalo OA should appear under **Connected accounts**.

The connection is successful when:

- The Zalo OA card appears.
- The status shows **active**.
- The card has actions such as **Test**, **Reconnect**, and **Delete**.

![Zalo OA connected successfully in ScaleFlow](/static/img/zalo-connected-success.png)

### What the buttons mean

- **Test**: checks whether ScaleFlow can still reach this Zalo OA.
- **Reconnect**: use this if the connection expires or stops working.
- **Delete**: removes the Zalo OA from ScaleFlow. New customer messages from this OA will stop arriving in Inbox.

## Connect Messenger or WhatsApp

Messenger and WhatsApp follow a similar connection flow:

1. Open **Channels**.
2. Select **Messenger** or **WhatsApp** from the left panel.
3. Click **Connect**.
4. Sign in with the business account for that platform.
5. Approve the requested access.
6. Return to ScaleFlow and wait for confirmation.
7. The connection is successful when the account appears in **Connected accounts**.

If the process takes too long, click **Cancel** and try again.

## Connect Telegram

Telegram uses a **bot**. A bot is a Telegram account that can receive and send messages for your business. ScaleFlow connects using the **Bot Token** that Telegram gives you when you create the bot.

Treat your Bot Token like a password. Anyone with the token can control your bot. If you think a token was exposed, open **@BotFather** in Telegram, choose your bot, and use **/revoke** to issue a new token.

### Step 1: Open the Telegram channel page in ScaleFlow

1. In ScaleFlow, open **Channels**.
2. Select **Telegram** from the channel list.
3. In **Channel setup**, read the short checklist, then click **Connect** (top right of the Telegram panel).

You will use **Connected accounts** at the bottom to confirm the bot after setup. There you can **Test**, **Reconnect**, or **Delete** a connection, same idea as other channels.

![Telegram channel setup with Connect and Connected accounts](/static/img/connect_tele.png)

### Step 2: Find the official BotFather in Telegram

You create the bot inside the Telegram app (phone or desktop), not inside ScaleFlow.

1. Open the Telegram app.
2. Tap the search field and type **`@BotFather`**.
3. Open the account named **BotFather** that has the **blue verified checkmark**. Ignore unofficial accounts with similar names.

![Search for official @BotFather in Telegram](/static/img/telegram-search-botfather.png)

### Step 3: Create a bot and copy the Bot Token

1. Start a chat with **@BotFather**.
2. Send **`/newbot`** and answer the questions (display name and username).
3. Usernames must end with **`bot`** (for example `MyShopSupport_bot`). If a name is taken, BotFather will ask for another.
4. When creation succeeds, BotFather sends a message that includes your **HTTP API token** (a long string with a colon `:` in the middle). **Copy the full token** and keep it private.

![BotFather success message with Bot Token](/static/img/telegram-botfather-token.png)

### Step 4: Paste the token in ScaleFlow and verify

The **Connect Telegram Bot** window should still be open from Step 1. If you closed it, click **Connect** again on the Telegram channel page.

1. Paste the token into **Bot Token**.
2. Optionally use the **How to get a token? @BotFather** link as a reminder.
3. Click **Verify Token** so ScaleFlow can check the token with Telegram.

![Connect Telegram Bot: enter token and Verify Token](/static/img/telegram-modal-enter-token.png)

### Step 5: Confirm the bot name and finish

If the token is valid, you will see a green **Bot Found** message and your bot’s handle (for example `@YourBot_bot`).

1. Check that the handle matches the bot you created in BotFather.
2. Click **Connect** to save the connection in ScaleFlow.

![Bot Found confirmation before Connect](/static/img/telegram-modal-bot-found.png)

### Step 6: Confirm the account in ScaleFlow

Back on **Channels** > **Telegram**, your bot should appear under **Connected accounts** with status **active**, similar to the card in the screenshot in Step 1. Use **Test** to confirm messages can reach ScaleFlow, and **Reconnect** or **Delete** when you need to refresh or remove the link.

![Telegram — Connected accounts after successful connection](/static/img/telegram-connected-accounts.png)

## Manage connected accounts

After connection, each account is shown in **Connected accounts**. You can:

- **Test**: Check whether the channel is still reachable.
- **Reconnect**: Sign in again if the connection stops working.
- **Delete**: Remove the connection from ScaleFlow (new messages from that channel will stop).

## How to confirm it works

1. Click **Test** on the newly connected account.
2. Send a real test message from that channel (Zalo/Facebook/WhatsApp/Telegram).
3. Open **Inbox** and confirm the message arrives.

### Telegram: customer on the phone, team in Inbox

For Telegram, the same conversation appears in two places: the customer chats with your **bot** in the Telegram app, and your team (or [AI Assistant](./ai-assistant)) works from ScaleFlow **Inbox**. Incoming bubbles show a **Telegram** label so you always know which channel the message used.

1. On a phone, open Telegram, start your bot, and send something (for example **`/start`** and a short question).
2. In ScaleFlow, open [Inbox](./inbox-usage), pick the conversation, and confirm the same text appears. You can reply from the **Reply** box or use **AI Smart Writing** when it is enabled.

![Customer sends messages to your bot in the Telegram app](/static/img/telegram-test-chat-mobile.png)

![The same thread in ScaleFlow Inbox with Telegram labels and a reply draft](/static/img/telegram-test-chat-inbox.png)

## Real-world workflow

1. A customer sends a message to your Zalo OA: "Do you have a warranty?"
2. The message appears in [Inbox](./inbox-usage).
3. [AI Assistant](./ai-assistant) checks your warranty Knowledge and replies.
4. If the customer asks for a repair case, staff create a [Ticket](./ticket-usage).
5. The ticket is handled until the repair is complete.

## What to do next

After at least one channel is connected:

1. Add business answers in [Knowledge](./knowledge-usage).
2. Build your first [AI Agent](./ai-agent-usage).
3. Turn on [AI Assistant](./ai-assistant) when you are ready.

If the test fails:

- Try **Reconnect**.
- Make sure the channel account is still active.
- Ask your admin for help if messages still do not arrive.
