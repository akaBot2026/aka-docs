---
id: ai-auto-reply-configuration
title: AI Auto-Reply Configuration
sidebar_label: AI Auto-Reply Configuration
sidebar_position: 5
description: A simple guide for non-technical users to configure AI auto-reply in Inbox Co-pilot.
displayed_sidebar: scaleFlowSidebar
---

# AI Auto-Reply Configuration

This guide shows how to configure AI to automatically reply to customer messages in ScaleFlow, using the current Inbox Co-pilot implementation.

It is written for non-technical users. You do not need coding knowledge.

## Understand the 3 AI features first

In **Inbox Co-pilot**, these features are different:

- **Smart Assistant**: can auto-handle customer conversations (this is the main auto-reply flow).
- **Follow-up Assistant**: can auto-send a follow-up message after inactivity.
- **Smart Reply**: only suggests a draft for human agents to review; it does not auto-send by itself.

If your goal is "AI should reply automatically", focus on:

1. **Smart Assistant** (main auto reply)
2. **Follow-up Assistant** (optional re-engagement)

## Open Inbox Co-pilot

1. In the left navigation, open **AI** -> **Inbox Co-pilot**.
2. You will see assistant cards such as:
   - Smart Summary
   - Smart Reply
   - Smart Writing
   - Smart Assistant
   - Follow-up Assistant
3. Click **Smart Assistant** to configure auto-reply behavior.

If you cannot open this page, ask your admin to grant inbox update permissions.

## Configure Smart Assistant (main auto-reply)

On the **Smart Assistant** page, configure these fields:

### 1) Agent

- Select the AI Agent that will reply in conversations.
- This field is required.

### 2) Agent version

- Choose a specific published version, or keep **Latest**.
- If you keep **Latest**, the system uses the latest published version.

### 3) Runtime (when AI can run)

Choose one mode:

- **Always**: AI can run any time.
- **Outside working hours**: default schedule is `17:00` to `08:00`.
- **Custom**: define one or more custom time ranges.

Important:

- In **Custom**, each range must have both start and end time.
- Overnight ranges are supported.

### 4) Messages used

- Number of recent messages the AI reads for context.
- Must be at least `1`.
- Recommended start: `10` to `20` for better context.

### 5) Enabled

- Turn this on to activate Smart Assistant.
- Turn off to stop Smart Assistant from auto-handling conversations.

### 6) Contact identification (optional but useful)

- **Contact identification enabled**: when enabled, AI tries to identify the customer (phone/email) before continuing.
- **Contact identification prompt**: editable instruction for that identification behavior.

### 7) Save

- Click **Save Changes**.

Without saving, new settings are not applied.

## Configure Follow-up Assistant (optional)

Use this if you want AI to send a follow-up message after no activity.

1. Go back to **Inbox Co-pilot**.
2. Open **Follow-up Assistant**.
3. Configure:
   - **Delay before follow-up (hours)**: from `1` to `23`.
   - **Messages used**: number of recent messages AI reads before creating follow-up.
   - **Model**: model used to generate follow-up text.
   - **Enabled**: turn on/off the feature.
   - **Action**:
     - `Send Message` (implemented now)
     - `Notify Admin` (placeholder, not fully implemented yet)
   - **Follow-up instructions** (shown when action is `Send Message`)
4. Click **Save Changes**.

## How auto-reply works in the current implementation

This section reflects actual system behavior:

- Smart Assistant runs only when it has valid configuration (agent + runtime).
- If runtime does not match current time, Smart Assistant will not auto-handle that conversation.
- If a conversation already has assignees, Smart Assistant may skip auto-assignment.
- If the assigned AI agent has already exited that conversation session, Smart Assistant is skipped.
- Follow-up timer resets whenever a new outbound message appears.
- If a customer sends a new message, scheduled follow-up is canceled.
- Follow-up `notify` action currently logs an event and is marked pending implementation.

## Quick test checklist

After saving, test with a real or testing conversation:

1. Send a customer message in Inbox.
2. Confirm conversation is eligible for Smart Assistant (time window and assignment conditions).
3. Verify AI responds.
4. For Follow-up:
   - Send an outbound message.
   - Wait your configured delay.
   - Confirm follow-up is sent.
   - Then test again with a customer reply before delay to confirm cancellation.

## Troubleshooting

If AI is not auto-replying, check in this order:

1. **Enabled** is ON for Smart Assistant / Follow-up Assistant.
2. **Agent** is selected for Smart Assistant.
3. **Runtime** includes current time.
4. **Save Changes** was clicked.
5. Conversation is not already controlled by another assignment flow.
6. For Follow-up, ensure action is `Send Message` (not `Notify Admin`).

## Recommended starting setup (safe default)

For first rollout:

- Smart Assistant: Enabled, Runtime = Outside working hours, Messages used = 10
- Contact identification: Enabled (use default prompt first)
- Follow-up Assistant: Disabled initially, then enable after Smart Assistant is stable

This gives a controlled rollout with low risk and easy monitoring.
