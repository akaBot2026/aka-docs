---
id: connecting-your-line-business-account
title: "Connect Your LINE Business Account"
sidebar_label: "Connect LINE Business"
sidebar_position: 1
description: "Step-by-step guide to connect your LINE Official Account to ScaleFlow so you can receive and reply to customer messages."
displayed_sidebar: scaleFlowSidebar
---

# Connect Your LINE Business Account

Follow the steps below to connect your business LINE account to ScaleFlow.

After the connection is complete, customer messages sent to your business LINE account will appear in [Inbox](./inbox-usage). From there, your staff or the [AI Assistant](./ai-assistant) can reply in one place.

---

## What is LINE Business?

**LINE Official Account** is a LINE account designed for businesses, similar to a Facebook fan page but on LINE. Customers can send messages, ask for prices, place orders, or receive updates through this account.

**ScaleFlow** connects to LINE through the **Messaging API**, which allows it to receive and send messages from the official account. You will copy two credentials from the LINE admin pages, the **Channel secret** and **Channel access token**, and paste them into ScaleFlow.

---

## Before You Start

Prepare the following:

- A **LINE account** used to manage the business, usually owned by the shop owner, marketing team, or customer support team.
- Permission to manage **Channels** in ScaleFlow. If you do not see the **Connect** button, ask your administrator for access.
- About **15-30 minutes** for the first setup, especially if you still need to create a LINE Official Account, enable Messaging API, and copy the credentials.

> **Note:** The two credentials you copy, **Channel secret** and **Channel access token**, work like passwords. Do not share them publicly or send them to unauthorized people. Only paste them into ScaleFlow during setup.

---

## Step Overview

| Step | Where | What to do |
|------|-------|------------|
| 1 | ScaleFlow | Open the LINE Business page and click **Connect** |
| 2 | LINE | Create or select an Official Account |
| 3 | LINE | Enable Messaging API and copy the **Channel secret** |
| 4 | LINE | Enable Webhook and turn off automatic replies |
| 5 | LINE | Copy the **Channel access token** (long-lived) |
| 6 | ScaleFlow | Paste both credentials, click **Verify**, then **Create connection** |
| 7 | ScaleFlow | Choose whether to sync contacts |
| 8 | ScaleFlow + LINE app | Send a test message and check Inbox |

---

## Step 1: Open the LINE page in ScaleFlow

1. Sign in to ScaleFlow.
2. In the left main menu, select **Channels**.
3. In the channel list, select **LINE Business**.
4. Click the **Connect** button in the top-right area of the channel settings section.

ScaleFlow opens the detailed **Connect LINE Business** guide page.

![Open Channels and select LINE Business](/static/img/connect-channel-1.png)

![LINE Business settings page with the Connect button](/static/img/connect-channel-2.png)

---

## Step 2: Create or Select a LINE Official Account

This step is done on LINE's website, not inside ScaleFlow.

1. Open your browser and go to [LINE Official Account Manager](https://manager.line.biz/).
2. Sign in with your LINE account.
3. If you **do not have** a business account yet:
   - Create a new Official Account.
   - Enter your business name, business category, and contact information as instructed on the screen.
   - Wait for LINE approval if required.
4. If you **already have** an account, select the correct Official Account that customers will message.

> **Important:** Make sure you choose the correct business LINE account. If your company has multiple LINE accounts, confirm with the marketing or customer support team which account is currently used for customer communication.

![Official Account list in LINE Official Account Manager](/static/img/list-account-line.png)

---

## Step 3: Enable Messaging API and Copy the Channel Secret

Still in **LINE Official Account Manager**:

1. Open the Official Account you selected in step 2.
2. Go to **Settings** -> **Messaging API**.
3. Click **Enable Messaging API**.
4. LINE will ask you to choose a **Provider** in LINE Developers:
   - Select an existing Provider, **or**
   - Create a new Provider and give it a clear name, such as your company name.
5. **Remember the Provider name** because you will need it in step 5.
6. After Messaging API is enabled, find **Channel secret** on the same page and click **Copy**.

Return to ScaleFlow, find **Step 2**, and paste the **Channel secret** into the matching field.

![Enable Messaging API in LINE Official Account Manager](/static/img/copy-channel-secret.png)

![Paste the Channel secret into ScaleFlow - Step 2](/static/img/paste-channel-secret.png)

---

## Step 4: Configure Response Settings

To make sure customer messages go to ScaleFlow instead of being answered automatically by LINE:

1. In **LINE Official Account Manager**, go to **Settings** -> **Response settings**.
2. Turn on **Webhooks**.
3. On the same page, turn off **Auto-response messages**.

> **Note:** Webhooks allow LINE to forward customer messages to ScaleFlow. Turning off auto-response prevents customers from receiving two replies at the same time, one from LINE and one from your team.

![Enable Webhook and disable Auto-response](/static/img/response-setting.png)

> **Note:** ScaleFlow **automatically registers the webhook URL** when you create the connection.

---

## Step 5: Get the Channel Access Token

This step is done in **LINE Developers Console**.

1. Open [LINE Developers Console](https://developers.line.biz/console/).
2. Sign in with the same LINE account.
3. In the left menu, select the **Provider** you used in step 3.
4. Select the **channel** linked to your Official Account.
5. Open the **Messaging API** tab.
6. Scroll down to **Channel access token**.
7. Click **Issue** to generate a new token, or click **Copy** if a **long-lived** token already exists.
8. Copy the full token value.

Return to ScaleFlow and, in **Step 4**, paste the value into **Channel access token (long-lived)**.

![Select the Provider and channel in LINE Developers Console](/static/img/provider-line.png)

![Copy the long-lived Channel access token](/static/img/copy-channel-line-token.png)

![Paste the access token into ScaleFlow - Step 4](/static/img/paste-access-token.png)

> **📷 Image note:** Capture **Step 4** in ScaleFlow with the access token field filled in.

---

## Step 6: Verify and Create the Connection in ScaleFlow

After you paste both the **Channel secret** and **Channel access token**:

1. Look at the right panel in ScaleFlow under **Connection status**.
2. Click **Verify Setup**.
3. Wait a few seconds. If the setup is correct, you will see a green confirmation showing the **LINE account name** and its **@...** ID, for example `@myshop`.
4. Confirm that the displayed name matches the correct business account.
5. Click **Create Connection**.

![Verify Setup button before verification](/static/img/verify-setup.png)

![Successful verification showing the Official Account name](/static/img/verify-success-line.png)

### If verification fails

Common causes include:

- One of the credentials was pasted incorrectly or incompletely. Copy both values again from LINE.
- You selected a **LINE Login** channel instead of a **Messaging API** channel. Check step 3 again.
- The token has expired. Generate a new **long-lived** token in step 5.

After fixing the issue, click **Verify Setup** again. If you change either credential after a successful verification, you must verify again before creating the connection.

---

## Step 7: Choose Contact Sync Options

After **Create Connection** succeeds, ScaleFlow shows the **Choose contact sync options** dialog.

### What is contact sync?

If you enable **Contact Sync**, ScaleFlow imports the list of people currently **following** your LINE Official Account and adds them to [Contacts](./contact-management).

- **Recommended** if you want an existing list of followers available in Contacts.
- **Optional** if you only need to receive messages when customers contact you first. In that case, ScaleFlow still creates contacts automatically when new messages arrive.

### Note about free or unverified LINE accounts

Some **free** or **unverified** LINE accounts do not allow bulk syncing of followers. In that case, ScaleFlow shows that contact sync is unavailable.

**Inbox will still work normally.** Just do the following:

1. Turn **off** the **Contact Sync** toggle.
2. Click **Continue** to finish.

If you want to sync later, upgrade or verify the Official Account in [LINE Official Account Manager](https://manager.line.biz/) and try again.

![Contact sync options dialog](/static/img/sync-contact.png)

### If contacts already exist in ScaleFlow

When sync is enabled, choose how ScaleFlow should handle duplicate contacts:

| Option | Meaning |
|--------|---------|
| **Merge** | Keep the existing information and only fill missing fields from LINE. *(Recommended)* |
| **Replace** | Overwrite the existing information with data from LINE. |
| **Skip** | Leave duplicate contacts unchanged and only add new people. |

---

## Step 8: Confirm the Connection is Active

Go back to **Channels** -> **LINE Business** and scroll to **Connected accounts**.

The connection is successful when:

- You see a LINE account card with the correct Official Account name.
- The status shows **active**.
- The card includes the **Test**, **Reconnect**, and **Delete** buttons.

![Connected LINE account in ScaleFlow](/static/img/active-line.png)

### Buttons on the account card

| Button | When to use it |
|--------|----------------|
| **Test** | When you want to confirm that ScaleFlow can still communicate with LINE. |
| **Reconnect** | When the connection has a problem or you changed credentials on LINE and need to enter the new values again. |
| **Delete** | When you want to stop using this LINE account in ScaleFlow. New messages will no longer arrive in Inbox. |

---

## Step 9: Send a Test Message and Open Inbox

The best way to confirm the setup is to test it like a real customer:

1. On your phone, open the **LINE** app.
2. Find the business Official Account by scanning the QR code or searching by name or `@` ID.
3. Send a test message, for example: *"Hello, I want to ask about your product."*
4. In ScaleFlow, open [Inbox](./inbox-usage).
5. Find the new conversation. The message you just sent should appear there with the **LINE** label.

![Customer sends a message in the LINE app](/static/img/phone-line.png)

![The same message appears in ScaleFlow Inbox](/static/img/inbox-line.png)

You can also click **Test** on the LINE account card. If it succeeds, ScaleFlow shows a green confirmation message.

---

## Daily Workflow After Setup

1. Customers send messages through your LINE Official Account.
2. Messages appear in ScaleFlow **Inbox**.
3. Staff can reply directly, or you can enable the [AI Assistant](./ai-assistant) to help with responses.
4. If follow-up is needed, create a [Ticket](./ticket-usage) from the conversation.

---

## Frequently Asked Questions

### I do not see the Connect button

Your ScaleFlow account may not have permission to manage channels. Contact your company administrator.

### We have multiple LINE Official Accounts. Can we connect more than one?

Each Official Account is connected separately. You can connect multiple LINE accounts if your business uses multiple Official Accounts.

### What happens if I change the Channel secret or access token on LINE?

Go to **Channels** -> **LINE Business**, click **Reconnect** on the account card, then repeat the steps to paste the credentials and **Verify** again.

### Is it a problem if contact sync does not work?

No. Messaging still works normally. Inbox continues to receive messages, and contacts are created when customers message you. The only limitation is that you will not have the full existing follower list imported in advance.

### Customer messages still do not appear in Inbox

Try these steps in order:

1. Click **Test** on the LINE account card.
2. Confirm that **Webhooks** are enabled and **Auto-response** is disabled on LINE, as described in step 4.
3. Click **Reconnect** and verify the credentials again.
4. Ask your ScaleFlow administrator for help if the issue continues.

---

## Recommended Next Steps

Once LINE is working correctly:

1. Add canned replies, policies, and FAQs to [Knowledge](./knowledge-usage) so AI can answer more accurately.
2. Set up an [AI Agent](./ai-agent-usage) if you want more automation.
3. Turn on the [AI Assistant](./ai-assistant) when you are ready.

---

## LINE Reference Links

Official LINE resources, mostly available in English or Japanese:

- [LINE Official Account Manager](https://manager.line.biz/)
- [LINE Developers Console](https://developers.line.biz/console/)
- [LINE Messaging API getting started guide](https://developers.line.biz/en/docs/messaging-api/getting-started)

In ScaleFlow, the same resources are also shown in the **Reference links** section on the right side of the connection guide page.
