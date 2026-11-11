---
title: "When your organization uses a custom AI model"
description: "Custom models must pass validation before they can be applied. API keys are not shown again. If the provider fails, AI features stop and do not automatically switch to ePayment AI."
id: own-model
sidebar_label: When your organization uses a custom AI model
sidebar_position: 2
---

# When your organization uses a custom AI model

Custom models must pass validation before they can be applied. API keys are not shown again. If the provider fails, AI features stop and do not automatically switch to ePayment AI.

**Requirement level:** Notice


Applies to "Your AI provider" for both **Document processing model** and **Assistant model** (AI Settings). These models are configured separately and can be different.

- **No automatic switch to ePayment AI**: if the provider has an issue or rejects the key, AI features stop until the issue is resolved (invoice reading, document packet splitting, reconciliation, or the assistant chat window).
- **Validate before applying**: clicking **Save** runs validation. The document processing model must pass **Connection**, **Image reading**, and **Structured response** checks (this can take one to two minutes); the assistant model must be able to call tools. If validation fails, the current model remains in use and the page shows the reason (key rejected, model ID does not exist, quota exceeded, unable to connect, etc.).
- **API key**: encrypted before it is saved and cannot be read again by anyone, including administrators. Once a key is saved, the page only shows "A key is saved"; leave the key field empty to keep the existing key, and enter a key only when you want to replace it.
- **Base URL** (under Advanced): only for OpenAI-compatible endpoints or proxy servers, and must use HTTPS; PDFs are sent there as images of individual pages.
- The assistant's **Thinking level** is available only for OpenAI (without a Base URL), Anthropic, and Google Gemini.


## Used in these guides

- [Choose an AI model for the assistant](../../guides/admin/how-to/set-assistant-model.md) — In AI Settings, open the Assistant tab, select the Assistant model card, choose ePayment AI or a custom provider, set the Thinking level if available, then click Save.
- [Choose an AI model for document processing](../../guides/admin/how-to/set-document-model.md) — In AI Settings, open the Document processing tab, choose ePayment AI or Your AI provider (provider, model, API key), then click Save to validate and apply.
