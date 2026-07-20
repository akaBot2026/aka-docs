---
id: broadcast-usage
title: Broadcasts
sidebar_label: Broadcasts
sidebar_position: 7
description: Beginner-friendly guide to send one message to many customers with Broadcasts and Campaigns.
displayed_sidebar: scaleFlowSidebar
---

# Broadcasts

**Broadcasts** help you send one message to many customers at once — for example a promotion, a store opening notice, or a payment reminder.

You do not need to message people one by one. Choose a channel, choose who should receive it, write (or pick) the message, then send now or later.

---

## When to use Broadcasts

Use Broadcasts when you want to:

- Announce a sale or new product to a group of customers
- Send the same reminder to many contacts
- Run a repeating message (for example every Monday) as a **Campaign**
- See how many people received, opened, or replied

**Everyday example:** A shop wants to tell Zalo OA followers about a weekend discount. Staff create a Broadcast, pick a Zalo template, choose a contact list, send a test message to themselves first, then publish.

---

## Before you start

| You need | Why |
|----------|-----|
| At least one **connected channel** (Zalo OA, WhatsApp, Messenger, or another active channel) | Broadcasts send through that channel |
| [Contact lists](../settings/workspace-tags) or clear audience rules | So you know who should receive the message |
| For Zalo / WhatsApp / Messenger | An **approved message template** on that channel (these channels usually do not allow free-text mass sends) |
| Permission to manage Broadcasts | Ask your admin if the menu is missing |

Also prepare your [Contacts](./contact-management) so names, phones, and lists are up to date.

---

## Open Broadcasts

1. In the left sidebar, click **Broadcasts**.
2. You will see two tabs:
   - **Broadcasts** — each individual send
   - **Campaigns** — repeating schedules (each run creates a related broadcast)
![Open Broadcasts](/static/img/open-broadcast.png)
---

## Create a Broadcast (5 steps)

Click **Create Broadcast**. ScaleFlow walks you through five screens. Use **Next** to continue, **Back** to go back, and **Save as Draft** if you want to finish later.

### Step 1 — Select Channel

1. Choose the **Channel** that will deliver the message.
2. If you see a warning that no channel is connected, go to [Channels](../channels/channel-integration) first and connect one.
3. Check any quality or quota hints shown for that channel (for example Zalo OA quality).

![Select channel Broadcasts](/static/img/select-channel-broadcasts.png)

### Step 2 — Configure Broadcast

1. Enter a clear **Broadcast Name** (example: `Flash Sale June 2026`).
2. Choose **When to Send**:
   - **Send Now** — starts soon after you publish
   - **Send Later** — pick a date and time
   - **Send Recurring Campaign** — repeats on a schedule (this creates a **Campaign**)

For recurring sends you can choose Daily, Weekly, Monthly, or Custom, then set start date, send time, weekdays (if needed), and when it should stop.

**Simple tips:**

- Schedules use your workspace timezone (see [Tenant](../organization/tenant-management)).
- A “send later” time should be at least about **15 minutes** in the future.
- ScaleFlow finalizes the audience at send time (and skips people who opted out where that applies).

![Configure Broadcast](/static/img/configure-broadcas.png)

### Step 3 — Define Audience

Choose who receives the message:

| Mode | What it means |
|------|----------------|
| **By List** | Pick one or more contact [Lists](../settings/workspace-tags) you already created |
| **By Condition** | Build rules such as “Lifecycle stage is Customer” and “Connected channel is Zalo” (rules are combined with AND) |

Watch **Estimated Reach** so you know roughly how many people will be included.

![Define Audience](/static/img/define-audience.png)

### Step 4 — Build Content

What you write depends on the channel:

| Channel | How you build the message |
|---------|---------------------------|
| **Zalo OA** | Choose a **ZBS template**, map personal fields (name, order code, …), preview |
| **WhatsApp** | Choose an approved **template**, map variables, optional header media |
| **Messenger** | Choose a **Utility** or **Marketing** template, then map variables |
| **Other connected channels** | Often a **Manual Message** (text + optional image) with personalization like `{{firstName}}` |

Type `{{` or use **Insert Variable** when you need customer-specific details.

![Build Content](/static/img/build-content.png)

### Step 5 — Review and Test

1. Check the summary: channel, timing, audience, and content.
2. Under **Send a Test Message**, pick a **Test Contact** (it does not have to be in the audience).
3. Click **Send Test Message** and confirm you received it on that channel.
4. Click **Create Broadcast**.

When creation succeeds, you can **Close** or **Publish Now**.

![Review and Test](/static/img/review-broadcast.png)

---

## Manage an existing Broadcast

Open a broadcast from the list. You will see four sections:

| Section | What you do there |
|---------|-------------------|
| **Overview** | See results: Sent, Delivered, Read, Replied, Failed; search recipients; **Export CSV** |
| **Settings** | Review or edit name and schedule (only while still editable) |
| **Audience** | Review who was targeted |
| **Content** | Review the message / template |

Common actions (depending on status):

- **Publish** — start a draft or scheduled send
- **Pause** / **Resume** — temporarily stop or continue
- **Cancel** — stop the broadcast
- **Resend** — send again (you can choose whether to include people who already received it)
- **Delete** — remove it
- **Duplicate** — copy from the list to create a similar one faster

Editing is usually only allowed when the status is **Draft** or **Scheduled**. Otherwise the setup is read-only.

![Detail broadcast](/static/img/detail-broadcast.png)
---

## Campaigns (repeating broadcasts)

If you chose **Send Recurring Campaign**, ScaleFlow creates a **Campaign**.

On the **Campaigns** tab you can:

- See the next and last run times
- Open a campaign for **Campaign Overview** (performance chart across runs)
- Open **Campaign Runs** to see each individual send

Publish, cancel, or delete from the campaign detail when needed.

![Detail broadcast](/static/img/campaings.png)

---

## Statuses in plain language

| Status | Meaning |
|--------|---------|
| **Draft** | Saved but not published yet |
| **Scheduled** | Waiting for the send time |
| **Sending** | Currently going out |
| **Paused** | Temporarily stopped |
| **Sent** | Finished sending |
| **Failed** | Something went wrong — check details or try again |
| **Stopped** / **Cancelled** | Manually stopped |

Recipient rows may also show Delivered, Read, Replied, Pending, or Skipped.

---

## Tips for better results

1. Always **send a test** before publishing to many people.
2. Keep lists clean in [Contacts](./contact-management) so the right people get the message.
3. For Zalo / WhatsApp / Messenger, prepare templates early — approval can take time outside ScaleFlow.
4. Start with a small list the first time you use Broadcasts.
5. After sending, review [Analytics](./analytics-usage) (Broadcast tab) together with the Overview metrics.

---

## Related guides

- [Channel Integration](../channels/channel-integration)
- [Contact Management](./contact-management)
- [Workspace tags & lists](../settings/workspace-tags)
- [Analytics](./analytics-usage)
- [Inbox](./inbox-usage) — customers may reply; replies appear in Inbox
- Channel template guides were removed. Prepare required templates directly on your channel provider before sending broadcasts.
