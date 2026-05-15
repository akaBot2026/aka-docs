---
id: model-usage
title: Model Usage
sidebar_label: Model Usage
sidebar_position: 16
description: Beginner-friendly guide to understand and manage AI models for ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Model Usage

Models are the AI engines that power [AI Agents](./ai-agent-usage) and [AI Assistant](./ai-assistant). A model is what reads the conversation and writes an answer.

Most everyday users do not need to manage models. This page is mainly for admins or AI setup owners.

## What Models are used for

Use **Models** to:

- Connect an AI provider, such as OpenAI, Anthropic, Google, or another approved provider.
- Decide which models your AI Agents can use.
- Turn models on or off.
- Keep AI setup organized for your workspace.

An **API key** is like a private password that lets ScaleFlow use an AI provider account. Only admins should handle it. Never share it in chat, email, or documents.

## Open Models from the menu

![Open provider](/static/img/open-model.png)

1. In the left sidebar, open **AI**.
2. Select **Models**.
3. You will see the provider list page.

If you can open the page but cannot see buttons such as **Create**, **New Model**, or **Settings**, ask your admin to review your model management access.

## Models page (provider list)

On the **Models** page, you can:

![Provider list page](/static/img/list-provider.png)

- Search providers
- Click **Create** to add a new provider (if authorized)
- Click a provider card to open its detail page

Each provider card shows:

- Provider display name
- Number of models
- Enabled status
- Configuration status (whether API key is configured)
- Last updated date



## Create a provider

Create a provider when your organization wants to use an AI service account in ScaleFlow.

![Create provider dialog](/static/img/create-provider-1.png)

1. Click **Create** on the provider list page.
2. Fill in the dialog:
   - **Provider Type** (OpenAI, Anthropic, DeepSeek, Google, Mistral AI, Amazon Bedrock, Microsoft Azure OpenAI, Alibaba Cloud Model Studio, Hugging Face, Ollama)
   - **Provider Name**
   - **Base URL** (optional)
   - **API Key**
   - **Enabled** (on/off)
   - **Import default models** (on/off, available only when creating a new provider)

![Create provider dialog](/static/img/create-provider.png)

3. Click **Create**.
4. Open the created provider card to view details.

Beginner tip: Use a clear provider name, such as `OpenAI - Company Account`, so teammates know which account is being used.

## Provider detail page

When you open a provider, you can:

![Provider detail page](/static/img/detail-provider.png)

- Search models by name
- Click **New Model** to create a model
- Open the actions menu (**...**) and choose:
  - **Settings**
  - **Delete** provider

If no model exists, the page shows an empty state.

![Model list in provider detail](/static/img/list-model.png)

## Provider Settings

![Provider settings button](/static/img/setting-provider-1.png)

In **Settings**, you can update:

- **Base URL**
- **API Key** (leave it empty to keep the current key)
- **Enabled** switch

You can also see:

- Provider type and provider name (read-only)
- Current API key (masked) and update time (if available)

![Provider settings dialog](/static/img/setting-provider.png)

## Create a model

Create a model when the provider is connected but the exact AI model is not available yet.

![New model](/static/img/new-model.png)

1. In provider detail, click **New Model**.
2. Fill required fields:
   - **Model ID** (for example `gpt-4o`)
   - **Model Name** (display name shown in UI)
   - **Capabilities** (select one or more: Text, Vision, Audio, Video, Reasoning, Embeddings)
   - **Enabled** switch

![Create model dialog](/static/img/create-model.png)

3. Click **Create**.

Notes based on current UI behavior:

- Model name can be auto-suggested from selected capability until you enter a custom name.
- On the provider detail page, provider selection is fixed, so you do not need to choose provider again.

## Edit or delete a model

For each model card:

![Edit model dialog](/static/img/action-model-1.png)

1. Click the actions icon on the card.
2. Choose **Edit** or **Delete**.
3. Confirm in the dialog when deleting.

![Edit model dialog](/static/img/edit-model.png)

Delete is permanent for that model entry.

## Managed provider/model behavior

Some providers or models are marked as system-managed.

In the current UI:

- Managed providers do not show **New Model**, **Settings**, or **Delete** actions.
- Managed models cannot be edited or deleted.

This is expected behavior to protect system-managed configuration.

## Use a model in AI Agent

After models are configured, users can select them in [AI Agent](./ai-agent-usage):

1. Open **AI Agent** > **Agents**.
2. Open an agent.
3. In **Basic information**, find **Model**.
4. Choose a model from the dropdown (grouped by provider).
5. (Optional) Click the settings icon next to the model field to open **Advanced Model Settings**.


**Recommendation:** When you pick a model for the agent, prefer **system-managed models** that show a **Security** icon in the list (often shown at the end of the model row). Those models are maintained for your workspace and are the safest default when the same agent is used with [AI Assistant](./ai-assistant) and automated assistant flows, because they stay on supported access and capability paths. You can still choose other enabled models if your admin approves that setup.

![Choosing a model (system model with Security icon)](/static/img/choose-model.png)
## Advanced Model Settings (in agent form)

Advanced settings change how the model writes. Beginners should keep defaults unless an admin gives instructions.

The dialog may include:

- **Temperature**
- **Top P**
- **Max Tokens**
- **Stop Words**
- **Reasoning Level**
- **Verbosity**

Then click **Save**.

Important:

- Some model families do not support temperature control, so temperature will be locked.
- These settings affect response style and length, not the business Knowledge itself.

Simple explanation:

- Lower randomness usually means more consistent answers.
- Higher randomness can sound more creative but may be less predictable.
- Maximum length controls how long an answer can be.

## Recommended workflow

1. Ask your admin which AI provider your company approved.
2. Create one provider with a valid API key.
2. Ensure the provider is **Enabled**.
3. Create only the models your team actually needs.
4. Open an agent and select the target model.
5. Test responses before publishing agent changes.

## Real-world example

1. Admin connects the company's approved AI provider.
2. Admin creates a model named `Support Model`.
3. The support manager selects this model in an AI Agent.
4. The AI Agent is tested with real customer questions.
5. Smart Assistant uses that agent to answer in Inbox.

## Quick troubleshooting

### I cannot see the Models menu

- Ask your admin for model view access.

### I can view but cannot create or edit provider/model

- Ask your admin for model management access.

### Provider is created but model list is empty

- Open provider detail and create models with **New Model**.
- Or recreate provider with **Import default models** enabled.

### Agent cannot use my model

- Verify the model is **Enabled**.
- Verify the provider is **Enabled** and has a valid API key.
- Re-open the agent page and select the model again from the dropdown.
