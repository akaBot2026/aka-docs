---
id: introduction
title: "Introduction"
sidebar_label: "Introduction"
sidebar_position: 2
description: "Introduction to AI Service activities package"
displayed_sidebar: activitiesSidebar
---
# AI Service Activities

The **AI Service Activities** package enables Akabot robots to integrate seamlessly with leading Generative AI and Large Language Model (LLM) providers. By bringing state-of-the-art cognitive capabilities directly into your automated workflows, you can automate complex decision-making, synthesize unstructured data, categorize emails, extract key details from documents, and drive natural conversation loops.

---

## Supported AI Providers

This package is provider-agnostic, allowing you to connect to and transition between multiple top-tier AI services with minimal configuration:

| Provider | Supported Models (Examples) | Typical Use Cases |
| :--- | :--- | :--- |
| **OpenAI** | `gpt-4o`, `gpt-4`, `gpt-3.5-turbo` | General reasoning, structured data extraction, agentic tasks. |
| **Google Gemini** | `gemini-1.5-pro`, `gemini-1.5-flash` | High-context window tasks, rapid text generation, multimodal processing. |
| **Anthropic Claude** | `claude-3-5-sonnet`, `claude-3-opus`, `claude-3-haiku` | Detailed drafting, advanced reasoning, complex coding/logic assistance. |
| **Azure OpenAI** | Enterprise-grade deployments of OpenAI models | Secure, enterprise-managed environments with strict data privacy. |

---

## Package Key Features

* **Provider-Agnostic Container (`AI Scope`)**: Manage credentials, connections, default timeouts, and session states in a single parent scope. Child activities inside automatically inherit the established connection.
* **Efficient Session Reusability**: Share active connection sessions across multiple scopes in a workflow to minimize authorization overhead and latency.
* **Text Completion**: Generate quick responses, complete prompt-based tasks, summarize lengthy documents, or format unstructured information.
* **Chat Completion**: Engage in conversational multi-turn flows, apply system-level guidelines, handle high-volume interactions, and configure parameters such as **Temperature**, **Max Tokens**, and **Stop Sequences**.

---

## Activity Catalog

The package includes the following activities categorized by function:

### 1. Connection & Scope
* **[AI Scope](./latest/ai-scope.md)**: Authenticates with the selected provider (OpenAI, Gemini, Anthropic, or Azure OpenAI) using your API Key and Model configurations, serving as the execution scope for all other AI activities.

### 2. Chat Completion
These activities let you build interactive conversational workflows using standard chat endpoints:
* **[Generate Chat Completion](./latest/generate-chat-completion.md)**: Drives chat interactions using **OpenAI** models.
* **[Generate Chat Completion Using Gemini](./latest/generate-chat-completion-using-gemini.md)**: Drives chat interactions using **Google Gemini** models.
* **[Generate Chat Completion Using Anthropic](./latest/generate-chat-completion-using-anthropic.md)**: Drives chat interactions using **Anthropic Claude** models.
* **[Generate Chat Response Azure OpenAI](./latest/generate-chat-response-azure-openai.md)**: Drives chat interactions using **Azure OpenAI** hosted models.

### 3. Text Completion
These activities generate singular completions or handle prompt-and-response tasks:
* **[Generate Text Completion](./latest/generate-text-completion.md)**: Performs text completion using **OpenAI** models.
* **[Generate Text Completion Using Gemini](./latest/generate-text-completion-using-gemini.md)**: Performs text completion using **Google Gemini** models.
* **[Generate Text Completion Using Anthropic](./latest/generate-text-completion-using-anthropic.md)**: Performs text completion using **Anthropic Claude** models.
* **[Generate Text Response Azure OpenAI](./latest/generate-text-response-azure-openai.md)**: Performs text completion using **Azure OpenAI** hosted models.

---

## How to Get Started

Building a workflow with AI Service Activities follows a simple, consistent pattern:

1. **Add the Container**: Drag and drop the **AI Scope** activity into your workflow designer.
2. **Setup Authentication**: In the **AI Scope** properties, choose your **Provider Type**, paste your **API Key**, and specify the desired **Model** (e.g., `gpt-4o` or `gemini-1.5-flash`).
3. **Insert an AI Activity**: Place your desired text or chat activity (e.g., **Generate Chat Completion**) directly inside the **Do** block of the **AI Scope**.
4. **Map Prompt and Output**: Write your input prompt in the activity's body. Create a variable in the **Result** field (under the Output properties) to capture the AI's generated response for downstream processing.
