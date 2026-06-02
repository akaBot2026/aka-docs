---
id: ai-scope
title: "AI Scope"
sidebar_label: "AI Scope"
sidebar_position: 1
description: "AI Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# AI Scope

RCA.Activities.AIServices.AIScope

## **Description**

The AI Scope activity connects and authenticates to an AI provider. Place AI Service activities inside this scope to send prompts, generate text responses, or continue chat conversations with the configured provider.

![scope](/static/img/scope.png)

(\* is mandatory)

## **In the body of activity**

* **Do** - The AI Service activities you want to execute within the configured AI provider session.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False  
  **- True** : allows the rest of the process to continue the execution even an error occurs within the activity.  
  **- False** : blocks the process from continuing the execution.
* **Timeout MS (Int32)** - The timeout in milliseconds for the scope. This value is used as a default for child activities that do not specify their own timeout. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Api Key (String)\*** - The API key used to authenticate to the selected AI provider.
* **Endpoint (String)** - The endpoint URL of the service provider. Required when **Provider Type** is AzureOpenAI.  
  E.g: https://project-name.openai.azure.com/
* **Model (String)\*** - Model ID used to generate the response.  
  E.g: gpt-4o, gemini-1.5-pro-latest, claude-3-sonnet-20240229
* **Provider Type (AIProviderType)** - The AI provider type to use. Supported values include OpenAI, GoogleGemini, Anthropic, and AzureOpenAI.
* **Use Existing Session (AISession)** - Existing session from a previous AI Scope. When provided, this activity reuses the session instead of creating a new one.

**Options**

* **Disposed On Completion (Boolean)** - Controls whether resources are automatically disposed when the activity completes. Set to False when you want to reuse the session in subsequent AI Scope activities. Set to True for the final AI Scope in a chain to clean up resources.

**Output**

* **Output Session (AISession)** - Output session that can be passed to subsequent AI Scope activities.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: AI Scope
