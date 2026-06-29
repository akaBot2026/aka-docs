---
id: setting-up-chat-widget
title: Chat Widget Setup
sidebar_label: Chat Widget
sidebar_position: 1
description: Step-by-step guide to add the chat widget to your website in ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Chat Widget Setup

**Chat Widget** is a **small chat box** embedded on your website. When visitors open your site, click the chat icon, and send a message, that message appears in ScaleFlow **Inbox** just like messages from Zalo or Messenger.

You do **not** need to write code to configure the widget in ScaleFlow. The only step that may require someone with website access is **pasting a script snippet** on your site — ScaleFlow provides it ready to copy.

---

## What can Chat Widget do?

- Customers chat directly on your website without installing an app.
- Messages appear in [Inbox](../../operations/inbox-usage) — staff reply in one place.
- You can enable [AI Assistant](../../scaleflow-ai/ai-assistant) for automatic AI replies.
- You can use [Flows](../../operations/flow-usage) to welcome customers, ask about their needs, and route to AI or staff.
- Customize logo, colors, and welcome text to match your brand.
- (Optional) Show additional contact buttons for Zalo, Messenger, WhatsApp, and more if those channels are already connected.

---

## When should you use Chat Widget?

Use it when:

- You have a **website** (landing page, online shop, company profile page).
- You want customers to **ask questions on the web** instead of calling or searching for Zalo/Facebook.
- You want to collect **phone numbers / email** before chat (enable in settings).
- You want **one Inbox** for both web and other channels.

**Example:** A gym has a website describing membership plans. A visitor clicks chat and asks about pricing — the message goes to Inbox and AI or front desk staff replies.

---

## Before you start

| Requirement | Notes |
|-------------|-------|
| Permission to manage **Channels** in ScaleFlow | Cannot see the menu? Ask your administrator |
| **Website URL** where the widget will be embedded | For example: `www.yourcompany.com` |
| (Recommended) [Knowledge](../../scaleflow-ai/knowledge-usage) + [AI Agent](../../scaleflow-ai/ai-agent-usage) | So AI can answer FAQs on the widget |
| Someone with permission to **edit the website** | Or paste the script yourself if you use Wix / WordPress / Shopify |

Plan about **20–40 minutes** for the first setup.

---

## Step 1 — Open the Chat Widget page

1. Sign in to ScaleFlow.
2. Left menu → **Channels**.
3. Select **Chat Widget**.

![Open Chat Widget in Channels](/static/img/chat-widget-open-channels.png)

4. Click **Create widget**.

If you already have a widget, you will see **Your widgets** — click **Edit** to update settings or **Copy script** to get the embed code again.

---

## Step 2 — Complete the 4 setup screens

The setup wizard has **4 steps**. The **preview** on the right always shows your changes on a sample widget.

| Step | Screen name | What you do |
|------|-------------|-------------|
| 1 | **Branding** | Logo, colors, welcome message, appearance |
| 2 | **Basic settings** | Display type, language, allowed websites |
| 3 | **Engagement and channels** | Collect customer info, link other channels |
| 4 | **Deploy** | Copy the script and add it to your website |

After each step, click **Next** (or the equivalent save button) to continue.

---

### Step 2.1 — Branding

This is what **customers see** on your website.

**Basic information**

| Field | Suggested value |
|-------|-----------------|
| **Company logo** | Company logo (PNG/JPG, around 128×128 px) |
| **Live chat display name** | Display name, for example: `Customer Support` |
| **Sender display name** | Sender name, for example: `Support Team` |
| **Welcome message** | Greeting when the customer opens the chat window |

**Widget appearance**

- Choose **Style presets** if you do not want to customize details.
- Or choose **Custom** to set colors, background, corner radius, and chat button icon.
- **Pop-up message**: a short message next to the chat button to invite visitors (can appear after a few seconds on the page).

**Message composer**

| Field | Meaning |
|-------|---------|
| **Placeholder** | Hint text in the chat box, for example: `Type your question...` |
| **Disclaimer** | Note below the chat box (replaces the “Powered by ScaleFlow” line if you fill it in) |
| **Attachments** | Allow customers to attach files |
| **Multi-line Input** | Enter sends the message; Shift+Enter adds a new line |

![Branding step](/static/img/chat-widget-branding.png)

---

### Step 2.2 — Basic settings

**Widget display type**

| Option | Description |
|--------|-------------|
| **Support widget** | **Recommended** — chat icon in the corner of the screen, familiar and easy to click |
| **Navigator widget** | Bottom chat bar (may not be available in some environments) |

**Language**

- Select supported widget languages (Vietnamese, English, and more).
- Drag to reorder — the **top language is the default**.

**Allowed Domains** — **required**

Enter the **website addresses** allowed to show the widget, for example:

- `yourcompany.com`
- `www.yourcompany.com`

Only these sites can load the widget — this prevents others from copying your script to unrelated sites.

**Usage limits**

Helps reduce spam. You can keep the **defaults** if unsure — the system suggests suitable values.

![Allowed Domains](/static/img/chat-widget-domains.png)

---

### Step 2.3 — Engagement and channels

**Collect customer data**

- Enable if you want customers to **enter name / phone / email** before chatting.
- Choose required fields: phone number and/or email.

**External messaging channels**

- Show additional Zalo, Messenger, WhatsApp buttons **on the widget**.
- Only channels **already connected** in [Channel Integration](../channel-integration) can be enabled.
- If not connected yet, click **Connect** and follow the guide for that channel first.

![Engagement settings](/static/img/chat-widget-engagement.png)

---

### Step 2.4 — Deploy

This step puts the widget **on your live website**.

**In ScaleFlow:**

1. Go to the **Deploy** step.
2. Click **Copy** to copy the **script snippet**.
3. Follow the 5 steps on screen:

| Step | What to do |
|------|------------|
| 1 | Open your website admin (WordPress, Wix, Shopify, or ask IT) |
| 2 | Paste the script into the page **&lt;head&gt;** section (often labeled “Header”, “Custom code”, or “HTML head”) |
| 3 | Save and **reload** the website |
| 4 | Click **Verify installation** — confirm the script is on the declared domain |
| 5 | Open the website and send a **test message** through the widget |

**Need help with the website?**

- Copy the script and send it to your **web developer / IT** with: *“Please paste this into the head section of the website.”*
- The Deploy screen includes guides for **Wix**, **Shopify**, and **WordPress** — open the matching link if your site uses that platform.

![Deploy — copy script](/static/img/chat-widget-deploy.png)

---

## Step 3 — Confirm messages arrive in Inbox

1. Open the website with the widget embedded (on desktop or mobile).

![Widget message in Inbox](/static/img/chat-widget-inbox-1.png)

2. Click the chat icon → send a test message: `Hello, I would like to ask for information`.
3. In ScaleFlow, open [Inbox](../../operations/inbox-usage).
4. Confirm the new conversation appears with the **Chat Widget** label.

![Widget message in Inbox](/static/img/chat-widget-inbox.png)

---

## Step 4 — (Recommended) Enable automatic AI replies

The widget is only the **entry point** — AI replies when you enable **Smart Assistant**:

1. Create [Knowledge](../../scaleflow-ai/knowledge-usage) (FAQ, policies, and more).
2. Create an [AI Agent](../../scaleflow-ai/ai-agent-usage) and Publish it.
3. Go to **AI → Inbox Assistant → Smart Assistant** — select the Agent and enable automatic replies. See [AI Assistant](../../scaleflow-ai/ai-assistant).

Messages from the widget are handled **the same way as messages from Zalo or Messenger**.

---

## Step 5 — (Optional) Use Flows for more complex scenarios

If you need a fixed **welcome → check customer message → call AI** flow, create a [Flow](../../operations/flow-usage):

- **Trigger:** Message Received
- **Channel:** select **Chat Widget**
- Add steps: Send Message, AI Agent, Wait for Reply, and more

Example: customer sends “I want membership advice” → Flow welcomes them → Agent recommends a plan.

---

## Manage existing widgets

On **Channels → Chat Widget**:

| Button | When to use it |
|--------|----------------|
| **Edit** | Change logo, colors, welcome message, domain, and more |
| **Copy script** | Get the embed code again (after changing computers or losing the script) |
| **Delete** | Remove the widget (it will stop working on the website) |

**Note:** Changes in ScaleFlow usually **update on the website immediately** — you do not need to paste a new script unless you change the widget or domain.

---

## Real-world example — Online shop

1. Admin creates a widget named `Order Support Chat`.
2. Branding: shop logo, blue theme, welcome text *“Hi! Need help with an order or product?”*
3. Basic: Support widget, Vietnamese language, domain `yourshop.com`.
4. Engagement: enable phone collection; show Zalo button (Zalo OA already connected).
5. Deploy: IT pastes the script into Shopify.
6. Verify → send test message → see it in Inbox.
7. Enable Smart Assistant with the product FAQ Agent.

---

## Troubleshooting

### Chat icon does not appear on the website

- Did you **save** and **reload** the page?
- Does the website domain **match** Allowed Domains? (`www.` and non-`www.` are different — add both if needed).
- Click **Verify installation** on the Deploy step.
- Try incognito mode or another phone.

### Widget appears but shows not allowed

- The current website is not in **Allowed Domains** — add the domain and save the widget.

### Message sent but nothing in Inbox

- Confirm you are signed in to the correct **tenant** / company in ScaleFlow.
- Send another test message; wait a few seconds and refresh Inbox.
- Ask your administrator about Inbox access.

### Cannot copy or verify the script

- Reload the Deploy page.
- Check your network connection; try another browser.

### Want Zalo on the widget but cannot enable it

- You must [connect Zalo OA](../zalo/connecting-your-zalo-oa-account) (or the relevant channel) **first**, then return to enable it in the Engagement step.

### AI does not reply on the widget

- Is Smart Assistant enabled? Has the Agent been **Published**?
- See [AI Assistant](../../scaleflow-ai/ai-assistant) — the widget uses the same mechanism as other channels.

---

## Best practices

- **Support widget** + colors matching your website → builds more trust.
- Keep the **Welcome message** short and clear (1–2 sentences).
- Always add the **correct domain** before Deploy.
- **Test on mobile** — many customers chat from their phones.
- Enable phone/email collection if you need follow-up; disable it for faster, lower-friction chat.
- Add Zalo/Messenger buttons if customers prefer those apps.

---

## Screenshot checklist

| File name | What to capture |
|-----------|-----------------|
| `chat-widget-open-channels.png` | Channels menu → Chat Widget |
| `chat-widget-create.png` | Create widget button |
| `chat-widget-branding.png` | Branding step + preview |
| `chat-widget-domains.png` | Allowed Domains |
| `chat-widget-engagement.png` | Data collection + external channels |
| `chat-widget-deploy.png` | Copy script + Verify |
| `chat-widget-live-site.png` | Widget on a live website |
| `chat-widget-inbox.png` | Widget conversation in Inbox |

---

## Read next

- [Channel Integration](../channel-integration) — overview of all channels
- [Inbox](../../operations/inbox-usage) — reply to customers from the widget
- [AI Assistant](../../scaleflow-ai/ai-assistant) — enable automatic AI replies
- [AI Agent](../../scaleflow-ai/ai-agent-usage) — create an Agent for the widget
- [Flows](../../operations/flow-usage) — automation when messages arrive from Chat Widget
