---
id: ai-agent-usage
title: AI Agent Usage
sidebar_label: AI Agent Usage
sidebar_position: 14
description: Beginner-friendly guide to create, teach, test, and publish an AI Agent for ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# AI Agent Usage

An **AI Agent** is the AI worker behind your [AI Assistant](./ai-assistant). It follows your instructions, reads your [Knowledge](./knowledge-usage), and helps customers in Inbox.

You can think of an AI Agent as a trained support teammate. It does not replace your staff. It handles simple questions, gathers basic information, and passes complex cases to humans.

## When to use an AI Agent

Use an AI Agent when:

- Customers ask repeat questions such as price, opening hours, warranty, delivery, or return policy.
- You want consistent answers from approved business information.
- You want AI to create tickets or support staff with basic tasks.
- You want to test AI behavior safely before using it with real customers.

Example: A school creates an AI Agent called `Admissions Assistant`. It answers questions about tuition, documents, deadlines, and office hours. When a parent asks for a special scholarship review, the agent creates a ticket for the admissions team.

## Open AI Agent

1. In the left sidebar, open **AI Agent**.
2. Select **Agents**.
3. You will see the list of existing agents.

![AI Agent list page](/static/img/list-agent.png)

If you cannot see action buttons such as **Add Agent**, **Import Agent**, or **Save Draft**, ask your admin to update your access.

## Create your first AI Agent

![Create agent](/static/img/create-agent.png)

1. Click **Add Agent**.
2. In the **Create agent** dialog, choose a template:
   - **Basic support**
   - **Contact resolution**
   - **Custom**
3. Enter:
   - **Name** (required)
   - **Description** (optional)
4. Click **Create**.
5. The system redirects you to the agent detail page for setup.

Choose **Basic support** if you are unsure. It is the easiest starting point for beginner teams.

## Understand the setup sections

The agent detail page is organized into simple setup sections.

### 1. Basic information

![Basic information section](/static/img/basic-information.png)

Use this section to name the agent and choose the AI model it will use.

- **Agent Name**: choose a clear name, such as `Customer Support Assistant`.
- **Description**: explain what this agent should help with.
- **Model**: choose the AI brain. If you are unsure, use the model recommended by your admin.

Simple description example:

> Helps customers with common product, delivery, warranty, and return questions. Creates a ticket when staff need to review the case.

### 2. Knowledge

![Knowledge section](/static/img/knowledge.png)

Knowledge is the information the agent can use to answer correctly. Add FAQs, policies, product details, documents, or website pages.

1. On the agent detail page, in the **Knowledge** section, click **Add Knowledge**.
2. In the **Add knowledge base** dialog, choose how to proceed:
   - **Create new**: start a new knowledge base and add sources (files, Drive, or web) in the flow that opens. See [Knowledge Usage](./knowledge-usage) for creating and syncing documents.
   - **Choose existing**: pick one or more knowledge bases you already created in the library.
3. Click **Next** to continue (or **Cancel** to close without changes).

![Add knowledge base: Create new or Choose existing](/static/img/add-knowledge-agent.png)

4. If you chose **Choose existing**, the **Select existing knowledge** screen opens. Use **Search knowledge bases...** if the list is long. Click each row to select or deselect it. The footer shows how many are selected.
5. Click **Add selected** to attach them to this agent (or **Cancel** to go back).

![Select existing knowledge and Add selected](/static/img/select-knowledge-agent.png)

6. Confirm the chosen knowledge bases appear in the **Knowledge** section on the agent page. You can repeat **Add Knowledge** to attach more bases over time.

If you have not created Knowledge yet, follow [Knowledge Usage](./knowledge-usage) first.

### 3. Integrations

![Integration section](/static/img/integration.png)

Integrations let the agent work with connected business tools, such as HubSpot, Shopify, Google Drive, or Google Sheets.

Use this only when the agent needs information from those tools or needs to perform an approved action. Beginners can start without integrations, then add them later.

Learn more in [Integration Usage](./integration-usage).

### 4. Instructions

Instructions tell the agent how to behave.

![How to respond](/static/img/instruction-1.png)

Write rules in simple language:

- Be polite and short.
- Use only approved Knowledge.
- Ask one question at a time.
- Do not guess prices, policies, or promises.
- Transfer to staff for complaints, refunds, legal questions, or sensitive information.

![What to avoid](/static/img/instruction-2.png)

Use the "avoid" section for topics the agent should not handle alone.

![Exiting a conversation](/static/img/instruction-3.png)

Use the handoff section to explain when a human should continue.

### 5. Advanced actions

![Advanced actions](/static/img/advanced.png)

Advanced actions are tasks the agent can perform when allowed, such as:

- Send a text message.
- Assign a conversation.
- Search or add a contact.
- Create or update a ticket.

Start with fewer actions. Add more only after testing.

## Test before publishing

![Action agent](/static/img/action-agent.png)

Use this safe workflow:

1. Configure the sections you need.
2. Click **Save Draft**.
3. Click **Test Version**.
4. Ask real customer questions.
5. Improve Knowledge or instructions if the answers are not good.
6. Click **Publish Version** only when you are satisfied.

Testing does not affect real customers. It helps you catch unclear instructions before the agent is used in Inbox.

## Connect the AI Agent to AI Assistant

After publishing:

1. Open [AI Assistant](./ai-assistant).
2. Select **Smart Assistant**.
3. Choose this agent.
4. Decide when it should run.
5. Turn **Enabled** on and save.

## Real-world workflow

1. Admin creates Knowledge with FAQs, shipping policy, and return policy.
2. Admin creates an AI Agent named `Shop Support Assistant`.
3. Admin connects the Knowledge to the agent.
4. Admin tests questions like "How long does delivery take?"
5. Admin publishes the agent.
6. Admin turns on Smart Assistant in [AI Assistant](./ai-assistant).
7. Customers receive faster answers in [Inbox](./inbox-usage).
8. Complicated issues become [Tickets](./ticket-usage) for staff.

## Import an existing agent

![Import agent](/static/img/import-agent.png)

Use import only if your team already has an exported agent file.

1. On the agent list page, click **Import Agent**.
2. Select the exported file.
3. In the **Import agent** dialog, review the imported information.
4. Update **Name** and **Description** if needed.
5. Click **Import Agent**.

## Review AI activity

For published versions, open **Execution tasks** to:

- Review when the agent ran.
- Check whether the run succeeded or failed.
- Understand why an answer was produced.

This is useful when a customer asks, "Why did AI answer that way?"

## Best practices

- Use clear agent names by purpose, such as `Support Assistant` or `Sales FAQ Assistant`.
- Keep the agent focused. One agent should not handle every possible business process at once.
- Test with real questions before publishing.
- Update Knowledge first when answers are missing.
- Use tickets for work that needs staff follow-up.

## Quick troubleshooting

### I cannot see Agents or open agent details

- Ask your admin for AI Agent view access.

### I can view but cannot create/edit/publish/delete

- Ask your admin for AI Agent management access.

### I cannot use Import Agent

- Ask your admin whether you have file upload access.

### I cannot see execution tasks

- **Execution tasks** are available only for **published** versions.
