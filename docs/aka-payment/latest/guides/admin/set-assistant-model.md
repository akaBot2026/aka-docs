---
title: "Choose an AI model for the chat assistant"
description: "Administrators can choose which AI model responds in the assistant chat window and how much it thinks."
id: set-assistant-model
sidebar_label: Choose an AI model for the chat assistant
sidebar_position: 9
---

# Choose an AI model for the chat assistant

Administrators can choose which AI model responds in the assistant chat window and how much it thinks.

**When to use:**

- Your company wants chat content to be sent only to its AI provider.
- The assistant reports that the AI model isn't running or hasn't been configured.
- Administrators want the assistant to think more carefully about complex questions, or respond faster and at a lower cost.


The assistant's model is independent of the document processing model; a custom model must support tool calling.


## Ways to do this

- [Choose an AI model for the assistant](how-to/set-assistant-model.md) — In AI Settings, on the Assistant tab, select AkaPayment AI or a custom provider in the Assistant model card, set the Thinking level if available, then click Save.

## See also

- [Choose the AI model for invoice reading and document processing](set-document-model.md) — Administrators can choose the AI model that reads invoices, separates document bundles, and checks reconciliation rules: AkaPayment AI or the company's AI account.

## Used in these guides

- [Choose the AI model for invoice reading and document processing](set-document-model.md) — Administrators can choose the AI model that reads invoices, separates document bundles, and checks reconciliation rules: AkaPayment AI or the company's AI account.

## Steps

[Choose an AI model for the assistant](how-to/set-assistant-model.md)

1. [Choose an AI model for the assistant](how-to/set-assistant-model.md)
   1. In the sidebar, under **Administration**, open **AI Settings** (administrators only, on desktop), then select the **Assistant** tab (1).
      ![AI Settings page: (1) AI Settings in the sidebar and the Assistant tab; the Assistant model card with (2) the two options AkaPayment AI (Recommended) and Your AI provider, and the Save button; the Assistant instructions and Assistant display settings sections below](/static/img/aka-payment-latest-admin-set-assistant-model.webp)
   2. In the **Assistant model** card (which may differ from the document processing AI), select **AkaPayment AI** (recommended) or **Your AI provider** (2).
   3. If you select a custom provider: select a **Provider**, select or enter a **Model** (which must support tool calling), and enter an **API key**. To change the **Thinking level** (Default (provider's setting), Low, Medium, High), open **Advanced**; this setting is available only for OpenAI without a Base URL, Anthropic, and Google Gemini.
   4. Click **Save**. For a custom provider, the button displays "Checking model…"; the model is saved only if it passes the check.

## Notes

- **[When your organization uses a custom AI model](../../reference/ai/own-model.md)**\
  A custom model must pass the check before it can be applied; the key isn't displayed again; if the provider fails, the AI feature stops and doesn't automatically switch to AkaPayment AI.

## Troubleshooting

### [Choose an AI model for the assistant](how-to/set-assistant-model.md)

- A red-bordered message at the bottom of the card explains the reason (for example, "This model doesn't support tool calling…" or "API key rejected…"): fix the issue, then click **Save** again. See [When your organization uses a custom AI model](../../reference/ai/own-model.md).
