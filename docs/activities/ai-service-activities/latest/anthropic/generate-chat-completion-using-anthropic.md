---
id: generate-chat-completion-using-anthropic
title: "Generate Chat Completion Using Anthropic"
sidebar_label: "Generate Chat Completion Using Anthropic"
sidebar_position: 7
description: "Generate Chat Completion Using Anthropic activity documentation."
displayed_sidebar: activitiesSidebar
---
# Generate Chat Completion Using Anthropic

RCA.Activities.AIServices.GenerateChatCompletionUsingAnthropic

## **Description**

The Generate Chat Completion Using Anthropic activity generates a chat completion response using an Anthropic model based on user prompts and conversation history. This activity must be used inside an AI Scope with **Provider Type** set to Anthropic.

![chat-an](/static/img/chat-an.png)

(\* is mandatory)

## **In the body of activity**

* **Prompt** - The input prompt used to generate the Anthropic chat completion.
* **File Path** - Optional file path used as input for generation.
* **Image** - The image object used to generate the Anthropic chat completion.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False  
  **- True** : allows the rest of the process to continue the execution even an error occurs within the activity.  
  **- False** : blocks the process from continuing the execution.
* **Timeout MS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **File Path (String)** - Path for the file used to generate completion, including common image files (JPEG, PNG, WEBP) and document files (PDF, TXT).
* **Image (Image)** - The input image object used for chat completion.
* **Prompt (String)\*** - The input prompt for the Anthropic chat completion.

**Options**

* **Instruction (String)** - Instruction for the AI model to follow throughout the conversation. It is added once at the beginning of the AI Scope conversation history.
* **Max Tokens (Int32)\*** - The maximum number of tokens to generate. Default value: 1920.
* **Stop Sequences (String[])** - Character sequences that stop output generation.
* **Summarization Message Threshold (Int32)** - Message count threshold that triggers conversation summarization. Default value: 15.
* **Summarization Token Threshold (Int32)** - Token threshold that triggers conversation summarization to save tokens for future turns. Default value: 3000.
* **Temperature (Double?)** - Controls the randomness of the output. Higher values produce more creative results.
* **Top K (Int32?)** - Number of highest probability tokens to consider for the next token.
* **Top P (Double?)** - The cumulative probability of tokens to consider when sampling.

**Output**

* **Full Response (JObject)** - The full response from the service.
* **Result (String)** - The result of the chat completion.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Generate Chat Completion Using Anthropic
