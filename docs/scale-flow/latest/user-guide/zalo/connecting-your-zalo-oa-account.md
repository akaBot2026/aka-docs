---
id: connecting-your-zalo-oa-account
title: "Connect Your Zalo OA Account"
sidebar_label: "Connect Zalo OA"
sidebar_position: 1
description: "Step-by-step guide to connect your Zalo Official Account to ScaleFlow so customer messages appear in Inbox."
displayed_sidebar: scaleFlowSidebar
---

# Connect Your Zalo OA Account

**Zalo OA** (Zalo Official Account) is a business account on Zalo that lets your company receive and send messages with customers.

Use Zalo OA when your customers commonly contact you through Zalo — for example clinics, schools, ecommerce shops, or local service businesses.

After connection, messages appear in [Inbox](../inbox-usage). Staff and [AI Assistant](../ai-assistant) can reply from one workspace.

---

## Before you start

- You can sign in to the Zalo account that manages the Zalo OA.
- You know which Zalo OA your business wants to connect.
- Your Zalo OA is ready for business messaging (some permissions may require a verified or upgraded OA).
- You have permission to manage **Channels** in ScaleFlow.

If your business does not have a Zalo OA yet, see [Create a Zalo OA account](#create-a-zalo-oa-account) below.

---

## Step 1: Open the Zalo channel page

1. In ScaleFlow, open **Channels**.
2. Select **Zalo OA** from the channel list.
3. Check the **Connected accounts** area.
4. If no account is connected yet, click **Connect**.

![Click Connect to start Zalo OA connection](/static/img/zalo-connect-button.png)

---

## Step 2: Sign in to Zalo

After you click **Connect**, Zalo opens a sign-in window.

1. Sign in with the Zalo account that manages your business Zalo OA.
2. If Zalo shows a QR code, open the Zalo app on your phone and scan it.
3. Continue until Zalo shows the permission screen.

![Zalo login QR code screen](/static/img/zalo-login-qr.png)

> **Tip:** If the wrong Zalo account appears, close the window and sign in again with the correct account.

---

## Step 3: Choose the correct Zalo OA and approve access

1. Check the selected Zalo OA name carefully.
2. Make sure it is the business OA you want to use in ScaleFlow.
3. Review the requested permissions.
4. Approve the request to continue.

![Zalo OA permission approval screen](/static/img/zalo-permission-approval.png)

This permission allows ScaleFlow to receive and manage customer conversations from that Zalo OA. Do not approve if the selected OA is not your business account.

---

## Step 4: Wait for the success message

1. Confirm the message says the Zalo Official Account was connected successfully.
2. Click **Close** or close the window.
3. Return to the ScaleFlow channel page.

![Zalo authentication successful message](/static/img/zalo-auth-success.png)

---

## Step 5: Confirm the account in ScaleFlow

The connected Zalo OA should appear under **Connected accounts**.

Connection is successful when:

- The Zalo OA card appears.
- Status shows **active**.
- Actions **Test**, **Reconnect**, and **Delete** are available.

![Zalo OA connected successfully in ScaleFlow](/static/img/zalo-connected-success.png)

---

## Create a Zalo OA account

If you need a new Official Account:

1. Go to the [Zalo Official Account](https://oa.zalo.me/) website.
2. Sign in with the Zalo account that should manage the business account.
3. Create a new Official Account.
4. Choose the account type that matches your business.
5. Fill in business name, contact details, and required information.
6. Submit for review if Zalo asks for verification.
7. After the account is ready, return to ScaleFlow and connect.

If you are not sure who owns your Zalo OA, ask your marketing, support, or admin team before connecting.

---

## Manage the connection

| Action | When to use |
|--------|-------------|
| **Test** | Check whether ScaleFlow can still reach this Zalo OA |
| **Reconnect** | Connection expired or stopped working |
| **Delete** | Remove the OA from ScaleFlow (new messages stop arriving in Inbox) |

---

## Confirm it works

1. Click **Test** on the connected account.
2. Send a real message to your Zalo OA from the Zalo app.
3. Open [Inbox](../inbox-usage) and confirm the message appears.

---

## Troubleshooting

### Wrong Zalo OA connected

- **Delete** the connection, then **Connect** again with the correct Zalo login.

### Messages do not appear in Inbox

- Run **Test** and **Reconnect**.
- Confirm the OA is still active on Zalo.
- Ask your admin if channel permissions are correct.

### Zalo OA vs Zalo Me

- **Zalo OA** — business Official Account (this guide).
- **Zalo Me** — personal Zalo via QR login. See [Connect Zalo Me](../zalo-me/connecting-your-zalo-me-account).

---

## Read next

- [Channel Integration](../channel-integration) — overview of all channels
- [Inbox Usage](../inbox-usage) — reply to customers
- [AI Assistant](../ai-assistant) — enable automatic replies
