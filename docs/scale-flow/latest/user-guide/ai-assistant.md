---
id: ai-assistant
title: AI Assistant
sidebar_label: AI Assistant
sidebar_position: 5
description: Beginner-friendly guide to AI Assistant, Smart Assistant, automatic replies, summaries, and handoff to staff.
displayed_sidebar: scaleFlowSidebar
---

# AI Assistant

AI Assistant is the main AI area for Inbox. It helps your team reply faster, summarize conversations, continue simple customer support tasks, and know when a human staff member should step in.

Think of AI Assistant as a helpful team member that can read the recent conversation, use your business Knowledge, and support customers based on the rules you set.

## AI Assistant vs Inbox Assistant vs Inbox Copilot

In this guide, **AI Assistant** is the overall name for every inbox-related AI helper (Smart Assistant, Smart Reply, Smart Summary, Smart Writing, and Follow-up Assistant). We use one clear label so readers know all of these features belong to the same “AI help for conversations” area.

In ScaleFlow’s interface, you open these settings under **AI** → **Inbox Assistant**. That menu name is the product label for the same capability set.

You may still see **Inbox Copilot** in a few places—most often as an internal name in the app URL (for example `/ai/inbox-copilot`), in engineering identifiers, or in older screenshots and filenames. **Inbox Copilot and Inbox Assistant refer to the same settings pages**, not two different products. If the wording differs, follow **AI** → **Inbox Assistant** and you are in the right place.

## What AI Assistant can do

AI Assistant includes several helpers:

- **Smart Assistant**: answers customers automatically by using a published [AI Agent](./ai-agent-usage).
- **Smart Reply**: creates a suggested reply draft in Inbox for staff to review and send.
- **Smart Summary**: writes a short summary of a conversation for your team.
- **Smart Writing**: improves, rewrites, translates, or polishes a message you already typed.
- **Follow-up Assistant**: sends a follow-up when a conversation has been quiet for a set time.

Smart Assistant is the core feature for automated customer support. It is the part that can carry a conversation, use Knowledge, and take supported actions such as creating a ticket when needed.

## When to use AI Assistant

Use AI Assistant when:

- Customers often ask the same questions.
- Your team wants faster first replies.
- You want AI to answer outside working hours.
- Staff need quick summaries before taking over a conversation.
- You want simple issues handled automatically and complex issues sent to humans.

Example: A customer asks, "What is your return policy?" Smart Assistant checks the return policy in Knowledge and replies clearly. If the customer says, "My refund has not arrived," Smart Assistant can create a Ticket so staff can investigate.

## Before you turn it on

For the best results, prepare these first:

1. Add useful business information in [Knowledge](./knowledge-usage), such as FAQs, pricing, delivery policy, refund policy, and product details.
2. Create and test an [AI Agent](./ai-agent-usage) that knows how your business should respond.
3. Connect at least one customer channel in [Channel Integration](./channel-integration), such as Zalo OA or Facebook Messenger.
4. Learn the daily customer workspace in [Inbox Usage](./inbox-usage).

## Open AI Assistant settings

![Inbox Assistant list](/static/img/open-ai-assistant.png)

1. In the left sidebar, open **AI**.
2. Select **Inbox Assistant**.
3. Choose the assistant you want to configure, such as **Smart Assistant**, **Smart Summary**, **Smart Writing**, or **Follow-up Assistant**.
4. Click **Save changes** after editing.

If you cannot see the page or save changes, ask your admin to check your Inbox or AI permissions.

## Set up Smart Assistant

![Smart Assistant settings page](/static/img/setting-smart-assistant.png)

Smart Assistant uses an AI Agent to answer customers automatically.

1. Open **AI** -> **Inbox Assistant**.
2. Select **Smart Assistant**.
3. Choose the **Agent** that should answer customers.
4. Choose an **Agent version**. After your agent is tested and published, **prefer the newest version**: pick **Latest** (or the highest published version number) so customer replies use your latest instructions, Knowledge links, and fixes. Pinning an old version can leave Smart Assistant on outdated behavior until someone updates this setting.
5. Choose when Smart Assistant should run:
   - **Always**: AI can respond at any time.
   - **Outside working hours**: AI responds when staff are not working.
   - **Custom**: choose your own time range.
6. Set **Messages used** to a practical number, such as 8-12, so AI can understand recent context.
7. Turn **Enabled** on.
8. Write simple conversation instructions.
9. Click **Save changes**.

Simple instruction example:

> Answer politely and briefly. Use only approved Knowledge. If the customer asks about refunds, order problems, complaints, or private account information, create a ticket or transfer the conversation to staff.

## Set up Smart Reply

Smart Reply is for assisted human replies. It does not send messages automatically. It generates a draft in the Inbox composer so staff can review, edit, and send.

![Smart Reply settings page](/static/img/setup-smart-reply.png)

1. Open **AI** -> **Inbox Assistant**.
2. Select **Smart Reply**.
3. Choose a model and set clear writing instructions (tone, language, allowed scope).
4. Turn **Enabled** on.
5. Click **Save changes**.

Simple Smart Reply instruction example:

> Draft short, friendly replies in Vietnamese. Use business policy from Knowledge when available. If information is missing, ask one clarifying question instead of guessing.

## How AI Assistant works in real life

### Example 1: Basic product question

1. Customer sends a Zalo message: "Do you sell this product in size M?"
2. The message appears in [Inbox](./inbox-usage).
3. Smart Assistant checks the connected [Knowledge](./knowledge-usage).
4. Smart Assistant replies with the available sizes.
5. Staff can review the conversation later if needed.

### Example 2: AI hands over to staff

1. Customer says: "I paid but did not receive my order."
2. Smart Assistant recognizes this needs human checking.
3. Smart Assistant creates or suggests a [Ticket](./ticket-usage).
4. The ticket is assigned to a user or team.
5. Staff continue the conversation and update the ticket until resolved.

### Example 3: Outside working hours

1. Customer messages at 10:30 PM.
2. Smart Assistant replies with approved information and asks for the order number.
3. A Ticket is created for the morning team.
4. Staff start the next day with the conversation summary and ticket history ready.

## Use AI Assistant inside Inbox

![AI assistant in Inbox composer](/static/img/ai-assistant-inbox.png)

1. Open **Inbox**.
2. Select a customer conversation.
3. Decide the workflow you need:
   - **Smart Assistant**: auto-support flow (AI can respond based on your Smart Assistant settings).
   - **Smart Reply**: draft-assist flow (staff click AI to generate a suggestion, then review and send).
4. If a draft appears, review facts, tone, and policy details before sending.
5. Send as-is or edit to match the exact customer context.

AI can help, but staff should still review important replies, especially for refunds, complaints, legal questions, or sensitive customer information.

## What happens in common cases

### Case 1: Smart Assistant is enabled, but no Knowledge is connected

- AI may still respond using conversation context and instructions, but answers are usually less accurate and less business-specific.
- The risk of generic or incomplete replies increases.
- Best practice: connect [Knowledge](./knowledge-usage) first, then retest before broad rollout.

### Case 2: Knowledge exists, but content is outdated or not synced

- AI may use old information or miss newly uploaded files.
- Uploading files alone is not enough; run sync in Knowledge and verify documents are ready.
- If policy changed recently, update files and sync again before relying on auto-replies.

### Case 3: Smart Assistant is enabled, but no published agent version is selected

- Auto-reply may not run as expected for customer conversations.
- Publish a tested [AI Agent](./ai-agent-usage) version, then select that version (or **Latest**) in Smart Assistant settings.
- If you recently improved the agent but replies still feel old, confirm you are not stuck on an older pinned version—choose **Latest** or the newest published version.


### Case 4: Customer messages during non-configured runtime

- If Smart Assistant is set to **Outside working hours** or **Custom**, it only runs in allowed time windows.
- Outside those windows, staff continue manually or use Smart Reply for assisted drafts.

### Case 5: Smart Reply is enabled, but team expects full auto-reply

- Smart Reply only suggests drafts; staff still decide and press send.
- If you need automatic conversation handling, configure and enable Smart Assistant.

### Case 6: High-risk topics (refunds, legal, complaints)

- AI should not finalize risky decisions alone.
- Add explicit handoff rules in agent instructions: create ticket, escalate, or transfer to staff.
- Keep humans in the loop for final confirmation on sensitive topics.

## Enable or disable automatic help

Use the **Enabled** switch on each assistant settings page.

- Turn it **on** when the assistant is ready and tested.
- Turn it **off** when you want staff to handle conversations manually.
- Start with a small test group or a low-risk channel before using it for all customer conversations.

## Recommended beginner setup

1. Prepare one small Knowledge base with your top 20 customer questions.
2. Create one AI Agent named `Customer Support Assistant`.
3. Test the agent with 5-10 real customer questions.
4. Turn on Smart Assistant outside working hours first.
5. Review conversations for a few days.
6. Expand to more channels or longer hours when the answers are reliable.

## Troubleshooting

### Smart Assistant does not answer

- Make sure **Enabled** is turned on.
- Make sure an AI Agent is selected.
- Make sure the selected agent has a published version, and that **Agent version** is **Latest** or the specific new version you expect (not an old pin).
- Check whether the schedule allows AI to run at the current time.
- Confirm the conversation falls into the runtime window when using **Outside working hours** or **Custom**.

### Smart Reply button is missing or not generating drafts

- Make sure **Smart Reply** is enabled in **AI -> Inbox Assistant**.
- Check that your model/provider is available and correctly configured.
- Verify your account has permission to use Inbox AI features.
- Refresh Inbox and re-open the conversation after saving settings.

### AI gives unclear or wrong answers

- Update the instructions in Smart Assistant.
- Improve the source information in [Knowledge](./knowledge-usage).
- Test and republish the related [AI Agent](./ai-agent-usage), then in Smart Assistant set **Agent version** to **Latest** (or the newest published version) so Inbox uses the update.

### AI should not answer a certain topic

- Add a clear rule in the AI Agent instructions.
- Tell AI to create a ticket or transfer to staff for that topic.
- Add examples, such as "Refund complaints must be handled by staff."
