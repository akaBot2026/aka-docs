---
id: generate-chat-completion-using-gemini
title: "Generate Chat Completion Using Gemini"
sidebar_label: "Generate Chat Completion Using Gemini"
sidebar_position: 5
description: "Generate Chat Completion Using Gemini activity documentation."
displayed_sidebar: activitiesSidebar
---
# Generate Chat Completion Using Gemini

RCA.Activities.AIServices.GenerateChatCompletionUsingGemini

## **Description**

The Generate Chat Completion Using Gemini activity generates a chat completion response using a Google Gemini model based on user prompts and conversation history. This activity must be used inside an AI Scope with **Provider Type** set to GoogleGemini.

![chat-ge](/static/img/chat-ge.png)
(\* is mandatory)

## **In the body of activity**

* **Prompt** - The input prompt used to generate the Gemini chat completion.
* **File Path** - Optional file path used as input for generation.
* **Image** - The image object used to generate the Gemini chat completion.

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
* **Prompt (String)\*** - The input prompt for the Gemini chat completion.

**Options**

* **Candidate Count (Int32?)** - Number of generated responses to return. If unset, defaults to 1.
* **Instruction (String)** - Instruction for the AI model to follow throughout the conversation. It is added once at the beginning of the AI Scope conversation history.
* **Max Output Tokens (Int32)** - Maximum number of tokens that can be generated in the response. Default value: 1920.
* **Stop Sequences (String[])** - Up to 5 character sequences that stop output generation.
* **Summarization Message Threshold (Int32)** - Message count threshold that triggers conversation summarization. Default value: 15.
* **Summarization Token Threshold (Int32)** - Token threshold that triggers conversation summarization to save tokens for future turns. Default value: 3000.
* **Temperature (Double?)** - Controls the randomness of the output. Specify a value between 0.0 and 2.0. Defaults to 1.0.
* **Top K (Int32?)** - Number of highest probability tokens to consider for the next token.
* **Top P (Double?)** - The cumulative probability of tokens to consider when sampling. Specify a value between 0.0 and 1.0. Defaults to 1.0.

**Output**

* **Full Response (JObject)** - The full response from the service.
* **Result (String)** - The result of the chat completion.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Generate Chat Completion Using Gemini
