---
id: connecting-your-freshdesk-account
title: "Connect Freshdesk to ScaleFlow"
sidebar_label: "Connect Freshdesk"
sidebar_position: 1
description: "Step-by-step guide to connect Freshdesk to ScaleFlow and sync tickets and contacts, written for non-technical users."
displayed_sidebar: scaleFlowSidebar
---

# Connect Freshdesk to ScaleFlow

This guide walks you through connecting your **Freshdesk** account to **ScaleFlow** so you can:

- Receive and view customer support tickets directly in ScaleFlow.
- Sync contacts and conversation history between the two systems.

No technical background is required. Just follow each step in order.

---

## 1. What do Freshdesk and ScaleFlow do together?

- **Freshdesk**: A customer support ticket management system.
- **ScaleFlow**: A workspace where you bring together messages and conversations from multiple channels (LINE, WhatsApp, Facebook, and more) and assign work to your support team or AI Assistant.

After the connection is set up:

- Tickets created in Freshdesk can be synced into ScaleFlow.
- Customer information (email, name, and more) is shared between both systems so your team has full context.
- You can use AI and automation in ScaleFlow based on Freshdesk data.

---

## 2. Before You Start

Prepare the following:

- A **Freshdesk** account with admin access, or enough permissions to:
  - Open **Profile Settings** to get your API key.
  - Open **Admin** to configure webhooks if needed.
- A **ScaleFlow** account with permission to manage integrations:
  - You can see the **Integrations** menu in the left sidebar.
  - You can open the **Freshdesk** page under Integrations.
- About **10-20 minutes** for the first setup.

---

## 3. Step Overview

| Step | Where | What to do |
|------|-------|------------|
| 1 | ScaleFlow | Open the Freshdesk integration page and click **Add connection** |
| 2 | Freshdesk | Get your Freshdesk **Domain** and **API Key** |
| 3 | ScaleFlow | Fill in the connection details and turn sync options on or off |
| 4 | ScaleFlow | Save and verify the connection |
| 5 | ScaleFlow + Freshdesk | (Optional) Configure how data syncs and how fields are mapped |
| 6 | ScaleFlow | Test the sync and use it in daily work |

---

## 4. Step 1 - Open the Freshdesk Page in ScaleFlow

1. Sign in to **ScaleFlow**.
2. In the left menu, select **Integrations**.
3. In the integration list, find **Freshdesk** (the blue Freshdesk icon).
4. Click **Freshdesk** to open the connection management page.
5. If this is your first connection, click **Add connection**.

![Open Freshdesk](/static/img/connect-freshdesk.png)

---

## 5. Step 2 - Get the Domain and API Key from Freshdesk

This is the most important part. You need:

- Your Freshdesk **Domain** (for example: `yourcompany.freshdesk.com`).
- Your Freshdesk account **API Key**.

### 5.1. Get your Freshdesk domain

1. Sign in to **Freshdesk** in your browser.
2. Look at the browser address bar (URL).
3. You should see something like:
   - `https://yourcompany.freshdesk.com`
4. The part `yourcompany.freshdesk.com` is the **Domain** you need.

![Freshdesk domain](/static/img/domain-freshdesk.png)

### 5.2. Get your Freshdesk API Key

1. In Freshdesk, click your **avatar** or **username** in the top-right corner.
2. Select **Profile Settings**.
3. On your profile page, scroll down to **Your API Key**.
4. Click **Copy** to copy the API key.

![API key](/static/img/your-api-key.png)

If you are unsure, the Freshdesk connection page in ScaleFlow includes a **View the Guide** link that opens Freshdesk's official instructions for finding your API key.

---

## 6. Step 3 - Fill in the Connection Details in ScaleFlow

Return to the **ScaleFlow** browser tab on the Freshdesk connection page.

1. At the top, you will see:
   - The **Freshdesk** logo and name.
   - A short description: "Configure authentication with API key and ticket webhook endpoint."
2. Below that are the input fields.

### 6.1. Fill in the basic information

- **Connection name**  
  Enter a name you can easily recognize, such as `Main Freshdesk` or `Freshdesk Support`.  
  This is the name shown in your ScaleFlow connection list.

- **Domain**  
  Paste the domain from step 5.1, for example: `yourcompany.freshdesk.com`.

- **API Key**  
  Paste the API key you copied in step 5.2.

- **Default requester email (optional)**  
  You can enter a shared email such as `support@yourcompany.com`.  
  Freshdesk uses this as a default address when a ticket needs a requester email.

![Paste API key](/static/img/paste-api-key-freshdesk.png)

### 6.2. Sync settings

Below that, you will see a **Sync settings** section with switches:

- **Sync from ScaleFlow to Freshdesk**  
  Turn this on if you want items created in ScaleFlow (contacts, requests) to be sent to Freshdesk.

- **Sync from Freshdesk to ScaleFlow**  
  Turn this on if you want tickets and contacts from Freshdesk to flow into ScaleFlow.

- **Sync contacts**  
  Allows contact information to be shared between both systems.

- **Sync tickets**  
  Allows tickets and conversation history to be shared between both systems.

You can:

- Turn on both directions (ScaleFlow ↔ Freshdesk) if you want everything to stay in sync.
- Turn on only one direction if ScaleFlow should only read from Freshdesk or only push data to it.

![Freshdesk sync settings](/static/img/sync-freshdesk.png)

When you are done:

1. Review the connection name, domain, API key, and sync switches.
2. Click **Save**.

---

## 7. Step 4 - Verify the Connection and Review Webhook Details

After you save successfully, ScaleFlow will:

- Create or update the Freshdesk connection.
- Check whether the API key is valid.

If the API key is correct:

- You will see a success message in the corner of the screen.
- ScaleFlow opens the **connection details** page with tabs such as:
  - **Display**
  - **Data sync**
  - **AI and automation** (when available)

On the **Display** tab, the right panel shows:

- **Connection metadata**:
  - The domain in use.
  - The default email.
  - The connection creation date.
  - **Webhook endpoint** - the URL Freshdesk uses to send notifications.

![Display connection](/static/img/webhook-freshdesk.png)

In most cases, ScaleFlow handles the webhook setup automatically. You only need to make sure the connection status is **Connected** and sync is working normally.

If the API key is wrong or required information is missing:

- You will see an error message.
- Check the following:
  - Is the domain correct? (Missing `.freshdesk.com` or a typo is a common mistake.)
  - Did you copy the full API key? (No missing characters at the start or end.)
  - Is the connection name filled in?

---

## 8. Step 5 - Configure How Data Syncs (Optional)

After the connection is set up, you can fine-tune **what data syncs and how fields are mapped** between Freshdesk and ScaleFlow.

Go to the tab or section with titles such as:

- **Freshdesk data sync overview**
- **Contact field mapping**
- **Ticket field mapping**

Here you can:

- See the total number of synced **contacts** and **tickets**.
- Turn sync groups on or off.
- Choose which Freshdesk fields map to which ScaleFlow fields (for example: Email, Name, Phone number, Ticket tags, and more).

![Ticket sync](/static/img/sync-ticket.png)

Field mapping helps:

- Keep data in the right place and easy to read.
- Avoid losing information when data moves between the two systems.

---

## 9. Step 6 - Confirm Sync Is Working

To make sure everything is running correctly:

1. Go back to **Freshdesk** under **Integrations** in ScaleFlow.
2. Open the Freshdesk connection you just created.
3. Switch to the **Data sync** tab.
4. Here you will see:
   - The most recent sync time.
   - The number of contacts or tickets synced.
   - A list of recent sync activity.

![Freshdesk data sync](/static/img/data-sync-freshdesk.png)

If everything is working:

- You will see entries such as "Sync started" and "Completed", along with the number of items imported.

If you do not see any data:

- Click **Sync now** if the button is available.
- Review the sync switches from step 6.2.
- Make sure your Freshdesk account has sample data (at least a few tickets or contacts).

---

## 10. Use Freshdesk and ScaleFlow in Daily Work

After setup, a typical daily workflow looks like this:

1. Customers send requests through channels such as LINE, WhatsApp, or email.
2. Some tickets are created or managed in Freshdesk.
3. Data from Freshdesk is synced into **ScaleFlow**:
   - It appears in **Tickets**, **Contacts**, or within the conversation context.
4. Your support team can:
   - Review customer context in ScaleFlow, including information from Freshdesk.
   - Reply to customers directly in messaging channels.
   - Use the [AI Assistant](./ai-assistant) or [AI Agent](./ai-agent-usage) for automation when needed.

---

## 11. Frequently Asked Questions

### I do not see the Integrations menu or cannot open the Freshdesk page

Your ScaleFlow account may not have permission to manage integrations. Contact your company administrator.

### My Freshdesk domain is different from the example in this guide. Can I still use it?

Yes, as long as the domain still follows the format `yourcompany.freshdesk.com`. Copy the exact value from your browser and paste it into ScaleFlow without extra spaces.

### What should I do if my API key is exposed?

1. Go back to Freshdesk -> **Profile Settings** and generate a new API key, or follow Freshdesk's security instructions.
2. Update the new API key in ScaleFlow on the **Display** tab of your Freshdesk connection.

### Why do I not see any tickets in ScaleFlow?

Try these steps in order:

1. Open the **Data sync** tab and check whether any sync has completed successfully.
2. Confirm these switches are enabled:
   - **Sync from Freshdesk to ScaleFlow**
   - **Sync tickets**
3. Make sure your Freshdesk account contains real tickets, not an empty environment.
4. If the issue continues, contact your ScaleFlow administrator.

### How do I temporarily stop syncing?

You can:

- Open the **Display** tab of your Freshdesk connection.
- Turn off the relevant sync switches, such as **Sync tickets**.
- Or **disconnect** the integration if you no longer want to use it.

---

## 12. Recommended Next Steps

Once Freshdesk is connected and stable:

1. Set up [Knowledge](./knowledge-usage) with guides, policies, and FAQs so AI understands your support context.
2. Create an [AI Agent](./ai-agent-usage) to automatically classify tickets, suggest replies, or route requests to the right team.
3. Connect channels such as [LINE](./line/connecting-your-line-business-account) and [WhatsApp](./whatsapp/connecting-your-whatsapp-business-api-account) so every conversation comes into one place.
