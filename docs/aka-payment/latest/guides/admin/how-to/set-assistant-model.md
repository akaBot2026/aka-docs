---
title: "Choose an AI model for the assistant"
description: "In AI Settings, on the Assistant tab, select AkaPayment AI or your own provider in the Assistant model card, set Reasoning effort if available, then click Save."
id: set-assistant-model
sidebar_label: Choose an AI model for the assistant
sidebar_position: 9
displayed_sidebar: akaPaymentSidebar
---

# Choose an AI model for the assistant

In AI Settings, on the Assistant tab, select AkaPayment AI or your own provider in the Assistant model card, set Reasoning effort if available, then click Save.


## Steps

1. In the sidebar, under **Administration**, open **AI Settings** (administrators only, on desktop) and select the **Assistant** tab (1).

   ![AI Settings page: (1) AI Settings in the sidebar and the Assistant tab; the Assistant model card with (2) the two options AkaPayment AI (Recommended) and Your AI provider, and the Save button; below are the Assistant instructions and Assistant display sections](/static/img/aka-payment-latest-admin-set-assistant-model.webp)

2. In the **Assistant model** card (which may differ from the AI used to process documents), select **AkaPayment AI** (recommended) or **Your AI provider** (2).
3. If you select your own provider: select a **Provider**, select or enter a **Model** (it must support tool calling), and enter an **API key**. To change **Reasoning effort** (Default (provider), Low, Medium, High), open **Advanced**; this setting is available only for OpenAI without a Base URL, Anthropic, and Google Gemini.
4. Click **Save**. For your own provider, the button displays "Checking model…"; the model is saved only after it passes the check.

## Troubleshooting

- A red-bordered box at the bottom of the card explains the reason (for example, "This model does not support tool calling…" or "API key was rejected…"): fix the issue, then click **Save** again. See [When your organization uses its own AI model](../../../reference/ai/own-model.md).


## Notes

- **[When your organization uses its own AI model](../../../reference/ai/own-model.md)**\
  Your own model must pass the check before it can be applied; the key is not shown again; if the provider fails, AI features stop and do not automatically switch to AkaPayment AI.

## Used in these guides

- [Choose an AI model for the chat assistant](../set-assistant-model.md) — For administrators who want to choose the AI model that responds in the assistant's chat window and set its reasoning effort.
- [Create a request with the AI assistant](../../assistant/how-to/create-draft.md) — Open the AI Assistant, select the /hoa-don, /ban-ke, or /nhap-tay skill, drop an invoice or statement, answer the form, and click Agree on the confirmation card.
