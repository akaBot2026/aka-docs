---
id: flow-usage
title: Flow Usage
sidebar_label: Flows
sidebar_position: 4
description: Step-by-step guide to create, test, publish, and deploy Flows in ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Flow Usage

**Flows** let you design **customer engagement scenarios** visually by dragging and dropping steps on the canvas — no code required.

Example of a simple Flow:

1. A customer sends their first message → the system sends a welcome message.
2. AI answers frequently asked questions.
3. Wait for the customer to reply → end the conversation or hand off to staff.

Use Flows when you need a **clear, step-by-step process** instead of turning on generic AI replies.

---

## How Flows differ from AI Agent and AI Assistant

These three work together but serve different roles:

| | **Flows** | **AI Agent** | **AI Assistant** |
|---|-----------|--------------|------------------|
| **What it is** | An automation scenario (when it runs + what happens next) | An AI worker trained to respond in a defined way | An Inbox feature that helps staff reply quickly |
| **Best for** | Welcoming customers, waiting for replies, branching by situation | AI that understands products, policies, and external integrations | Staff who need suggestions or automatic replies in Inbox |
| **How they connect** | A Flow can call an AI Agent you already created | Selected in the Flow **AI Agent** step | Complements Flows; staff can still intervene manually when needed |

**Simple example:** You create an AI Agent named `Product Advisor`. The Flow `Zalo Welcome` will: receive a new message → send a welcome → call that Agent to reply → wait for the customer to message again.

---

## Before you start

You should have:

- Permission to open **Flows** in the left menu (if you do not see it, ask your administrator).
- At least **one chat channel** connected (Zalo, Messenger, WhatsApp, and more) — see [Channel Integration](../channels/channel-integration).
- (Recommended) An [AI Agent](../scaleflow-ai/ai-agent-usage) and [Knowledge](../scaleflow-ai/knowledge-usage) if the Flow will use AI or query documents.

Plan about **15–30 minutes** for your first Flow.

---

## Open the Flows screen

1. In the left menu, select **Flows**.
2. Inside, there are two sections:
   - **Flows** — the list of scenarios you are designing.
   - **Runs** — versions **deployed live** to real customers.

![Flows menu](/static/img/open-flows.png)

**Quick reference:**

- **Flows** = the draft on paper.
- **Runs** = the draft posted on the wall and running with real customers.

---

## Step 1 — Create a new Flow

1. On the **Flows** page, click **Create a Flow...**
2. Fill in:
   - **Title** (required) — for example: `Welcome and FAQ`
   - **Subtitle** (optional) — a short description so teammates understand what this Flow does
3. Choose **Flow Mode**:
   - **Conversational** — use when the Flow involves messages, chat, or Inbox. **Most teams should choose this.**
   - **Worker** — for background tasks with less direct chat interaction (more advanced).
4. Click **Create Flow**.

You enter the **Flow editor** with the first version labeled **v1 Draft**.

![Create Flow dialog](/static/img/dialog-create-flows.png)

---

## Step 2 — Design the scenario

### Two views on the toolbar

| View | When to use it |
|------|----------------|
| **Flow** | Edit steps in order — the most straightforward view |
| **Graph** | See the overall diagram — useful when the Flow has many branches |

### Set “When does this Flow run?”

At the top of the Flow, under **When this happens**:

1. Choose an **event** — most common: **Message Received** (a new message arrives).
   - Other groups: Conversation, Ticket, Contact — use these for internal workflows.
2. (Optional) Choose a **channel** — run only on Zalo, Messenger, and so on.
3. (Optional) Add **conditions** — for example, run only when the sender is a customer.

![Flow trigger configuration](/static/img/flows-trigger.png)

### Add steps (drag from the palette)

**Action steps — used most often**

| Step on screen | What it does |
|----------------|--------------|
| **Send Text Message** | Send a text message to the customer |
| **AI Agent** | Have a pre-built AI Agent reply or process the request |
| **Query Knowledge** | Search a document store (FAQ, policies, and more) |
| **Wait for Reply** | Pause and wait for the customer (or staff) to reply |

**Control steps — for more complex Flows**

| Step on screen | What it does |
|----------------|--------------|
| **If** | If… then do A, otherwise do B |
| **Loop** | Repeat a group of steps |
| **Wait** | Pause for a duration (for example 10 seconds) |
| **End** | End the Flow |
| **Comment** | Notes for teammates — **not** sent to customers |

> Advanced steps such as **HTTP Request** and **Sub Workflow** are for teams that need external system integration. You can skip them at first.

![Flow editor](/static/img/flows-editor.png)

### Validate before saving

If information is missing (no Agent selected, empty message text, incomplete If conditions, and so on), the screen **shows errors** on the relevant step. Open that step and complete the required fields before testing or publishing.

---

## Step 3 — Save and publish

Flows use **versioning** like software releases:

| Status | Meaning |
|--------|---------|
| **Draft** | Still being edited; **not** used with real customers yet |
| **Published** | Locked snapshot ready to deploy |

**How to publish:**

1. Finish the draft (changes are usually saved automatically).
2. Open the menu → select **Publish...**
3. (Optional) Add a **Version Message** — for example: `v1 — welcome + FAQ`
4. Click **Publish**.

To iterate: create a **new draft** from a published version, edit it, then Publish as v2, v3, and so on.

![Publish Flow](/static/img/flows-publish.png)

---

## Step 4 — Test the Flow before going live

**Always test first** — avoid sending incorrect messages to customers.

1. On the toolbar, switch to **Test** mode.
2. The system validates the Flow; if it passes, the test panel opens on the right.
3. In the panel:
   - **Chat** — send test messages (for message-based triggers).
   - **Ticket** — test ticket-related events.
   - **Step list** — see which steps ran and whether they succeeded or failed.

4. If the result is not right, go back, edit the draft, and test again.

![Flow test panel](/static/img/flows-test-panel.png)

> **Tip:** If the Flow stops at **Wait for Reply** and you want to start over, click **Stop test**, then send a new test message.

---

## Step 5 — Deploy a live Run

A **Run** is a **published** Flow version running with real customers.

1. Go to **Flows → Runs**, or from the editor choose **Deploy a Run...**
2. Select the **Flow** and **published version**.
3. Review the summary.
4. Enter a **Run title** (for example: `Zalo Welcome — June`).
5. Click **Deploy**.

After deployment, key actions:

| Button | When to use it |
|--------|----------------|
| **Start** | Begin — the Flow responds when matching events occur |
| **Pause Intake** | Stop accepting new triggers; in-flight runs may finish |
| **Upgrade / Downgrade** | Move to a newer (or older) published version |
| **Delete** | Remove the Run — the Flow no longer runs for customers |

![Deploy Run](/static/img/flows-deploy-run.png)
![Deploy Run 1](/static/img/flows-deploy-run-1.png)
![Deploy Run 2](/static/img/flows-deploy-run-2.png)

---

## Step 6 — Monitor after deployment

Open a Run under **Runs** to see:

- **Status** — Running, Stopped, Starting, and so on
- **History** — each time the Flow was triggered
- **Success rate**, processing time, failure count
- **Force Stop** — stop all in-progress Flow executions (including those waiting for a reply)

Click a specific execution to inspect each step in detail.

![Run detail](/static/img/flows-run-detail.png)

---

## Example Flows to follow

### 1. Welcome + FAQ

1. **Trigger:** Message Received (all channels or Zalo only).
2. **Send Text Message:** `Hello! How can I help you today?`
3. **AI Agent:** select your FAQ Agent (latest published version).
4. **Wait for Reply** (if you need continued conversation).
5. **End** — finish.

### 2. Complaint → collect information

1. **Trigger:** Message Received + condition that the message contains “complaint” or “refund”.
2. **AI Agent:** ask for order details and reason.
3. **Send Text Message:** confirm the request was recorded and staff will follow up.
4. (Optional) The Agent can create a Ticket if configured.

### 3. Document lookup only

1. **Trigger:** Message Received.
2. **Query Knowledge:** select your product FAQ knowledge base.
3. **AI Agent** or **Send Text Message:** reply based on the query result.

---

## End-to-end example

Suppose an electronics shop uses Zalo OA:

1. An admin [connects Zalo OA](../channels/zalo/connecting-your-zalo-oa-account).
2. Creates [Knowledge](../scaleflow-ai/knowledge-usage) from a product FAQ file.
3. Creates an [AI Agent](../scaleflow-ai/ai-agent-usage) named `Product Advisor` with that Knowledge.
4. Creates Flow `Zalo Welcome` — triggered when a message arrives on Zalo.
5. **Test** in the editor → **Publish** v1 → **Deploy Run** → **Start**.
6. A customer messages on Zalo → receives welcome + AI reply → staff see it in [Inbox](./inbox-usage).

---

## Troubleshooting

### Flow does not run for real customers

- Did you click **Start** on the Run? Status must be **Running**, not **Stopped**.
- Did you **Publish** and **Deploy**? Editing the draft alone does **not** change what customers see.
- Does the trigger channel match? (for example, the Flow is Zalo-only but the customer messaged on Messenger).
- Try again using **Test** mode in the editor.

### Test works but real customers do not see it

- After publishing a new version, **Upgrade** the Run to that version (or deploy a new Run).
- Confirm the Run is still **Started**.

### Cannot publish or test

- Open each step with a warning and complete required fields: select Agent, write message content, choose Knowledge, set wait duration, and so on.

### Flow is stuck waiting for a reply

- In **Test:** send a reply in the test chat, or **Stop test** and try again.
- For real customers: the customer must send another message; verify the chat channel is still connected.

### Cannot delete a Flow

- Stop or delete all **Runs** attached to that Flow first.

---

## Best practices

- **Start small:** one welcome message + one AI Agent is enough for the first version.
- **Always test** before deploying.
- Use clear Flow names and version notes — your teammates will thank you later.
- For customer chat → choose **Conversational**.
- Update Flows by publishing new versions, then **Upgrade** the Run — do not only edit the draft and forget to deploy.

---

## Screenshot checklist (for content team)

| File name | What to capture |
|-----------|-----------------|
| `open-flows.png` | Flows menu + Flows / Runs sections |
| `dialog-create-flows.png` | Create New Flow dialog |
| `flows-trigger.png` | Message Received trigger + channel |
| `flows-editor.png` | Editor with several steps |
| `flows-publish.png` | Publish dialog |
| `flows-test-panel.png` | Test mode with chat and step list |
| `flows-deploy-run.png` | Deploy a Run dialog |
| `flows-deploy-run-1.png` | Deploy Run — additional step |
| `flows-deploy-run-2.png` | Deploy Run — confirmation |
| `flows-run-detail.png` | Run detail page while running |

---

## Read next

- [AI Agent Usage](../scaleflow-ai/ai-agent-usage) — build AI workers used in the **AI Agent** step
- [Knowledge Usage](../scaleflow-ai/knowledge-usage) — add FAQs and documents for **Query Knowledge**
- [Channel Integration](../channels/channel-integration) — Zalo, Messenger, WhatsApp, and more
- [Inbox Usage](./inbox-usage) — view conversations while Flows run
- [AI Assistant](../scaleflow-ai/ai-assistant) — AI support for staff in Inbox
