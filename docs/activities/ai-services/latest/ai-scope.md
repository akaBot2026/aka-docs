---
id: ai-scope
title: "AI Scope"
sidebar_label: "AI Scope"
sidebar_position: 3
description: "AI Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# AI Scope

RCA.Activities.AIServices.AIScope

## **Description**

The AI Scope activity connects and authenticates to an AI provider. Place AI Service activities inside this scope to send prompts, generate text responses, or continue chat conversations with the configured provider.

![scope](/static/img/scope.png)

(\* is mandatory)

## Configuration Guide

1. Drag **AI Scope** onto your workflow.
2. Set **Provider Type** (e.g., `OpenAI`), paste your **Api Key** (see **How to get an API Key** below), and set **Model** (e.g., `gpt-4o`). If **Provider Type** is `AzureOpenAI`, also fill in **Endpoint**.
3. Drop a matching AI Service activity for that provider inside the **Do** block — see [Activity Catalog](/docs/activities/ai-services/latest/introduction.md#activity-catalog) for the full list (e.g., **Generate Chat Completion** for OpenAI, **Generate Chat Completion Using Gemini** for Google Gemini).
4. Write your prompt in that activity, and store its **Result** output in a variable to use later in your workflow.

## **In the body of activity**

* **Do** - The AI Service activities you want to execute within the configured AI provider session. The activity you use here must match the **Provider Type** set above — see the [Activity Catalog](/docs/activities/ai-services/latest/introduction.md#activity-catalog) for which activity goes with which provider.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False  
  **- True** : allows the rest of the process to continue the execution even an error occurs within the activity.  
  **- False** : blocks the process from continuing the execution.
* **Timeout MS (Int32)** - The timeout in milliseconds for the scope. This value is used as a default for child activities that do not specify their own timeout. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Api Key (String)\*** - The API key used to authenticate to the selected AI provider.
* **Endpoint (String)** - The endpoint URL of the service provider. Required when **Provider Type** is AzureOpenAI. This is a placeholder pattern, not a real address — replace `project-name` with your actual Azure OpenAI resource name (copied from **Keys and Endpoint** in the Azure Portal).  
  E.g: `https://project-name.openai.azure.com/`
* **Model (String)\*** - Model ID used to generate the response. Must be a model your provider account has access to — see [Supported AI Providers](/docs/activities/ai-services/latest/introduction.md#supported-ai-providers) for example model IDs per provider.  
  E.g: `gpt-4o` (OpenAI), `gemini-1.5-pro` (Google Gemini), `claude-3-5-sonnet` (Anthropic)
* **Provider Type (AIProviderType)** - The AI provider type to use. Supported values include OpenAI, GoogleGemini, Anthropic, and AzureOpenAI.
* **Use Existing Session (AISession)** - Existing session from a previous AI Scope. When provided, this activity reuses the session instead of creating a new one.

**How to get an API Key**

* **OpenAI** - Sign in at [platform.openai.com](https://platform.openai.com/api-keys), open **API keys**, and create a new secret key.
* **Anthropic** - Sign in at [console.anthropic.com](https://console.anthropic.com/settings/keys), open **API Keys**, and create a new key.
* **Google Gemini** - Sign in at [aistudio.google.com](https://aistudio.google.com/apikey) and select **Get API Key**.
* **Azure OpenAI** - In the **Azure Portal**, open your Azure OpenAI resource, go to **Keys and Endpoint**, and copy a key and the endpoint URL. When **Provider Type** is set to `AzureOpenAI`, also fill in the **Endpoint** field with this value.

**Troubleshooting**

* **Activity fails immediately with an authentication error** - The **Api Key** is missing, incorrect, or has been revoked on the provider's site. Generate a new key (see **How to get an API Key** above) and update **Api Key**.
* **Activity fails with a model-not-found or invalid-model error** - The value in **Model** is misspelled, or your provider account/API key does not have access to that model. Check the exact model ID on your provider's dashboard, and confirm your account has access to it.
* **AzureOpenAI provider fails to connect** - **Endpoint** is empty or incorrect. It must be filled in only for `AzureOpenAI`, using the endpoint URL from your Azure OpenAI resource's **Keys and Endpoint** page.
* **Activity times out on long prompts or long documents** - Increase **Timeout MS** (default `30000`). This value is inherited by child activities that don't set their own timeout.

**Options**

* **Disposed On Completion (Boolean)** - Controls whether resources are automatically disposed when the activity completes. Set to False when you want to reuse the session in subsequent AI Scope activities. Set to True for the final AI Scope in a chain to clean up resources.

**Output**

* **Output Session (AISession)** - Output session that can be passed to subsequent AI Scope activities.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: AI Scope
