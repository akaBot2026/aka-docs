---
id: generate-text-completion-using-anthropic
title: "Generate Text Completion Using Anthropic"
sidebar_label: "Generate Text Completion Using Anthropic"
sidebar_position: 6
description: "Generate Text Completion Using Anthropic activity documentation."
displayed_sidebar: activitiesSidebar
---
# Generate Text Completion Using Anthropic

RCA.Activities.AIServices.GenerateTextCompletionUsingAnthropic

## **Description**

The Generate Text Completion Using Anthropic activity generates a text completion response using an Anthropic model based on a prompt. This activity must be used inside an AI Scope with **Provider Type** set to Anthropic.

![text-an](/static/img/text-an.png)
(\* is mandatory)

## **In the body of activity**

* **Prompt** - The input prompt used to generate the Anthropic text completion.
* **File Path** - Optional file path used as input for generation.
* **Image** - The image object used to generate the Anthropic text completion.
## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False  
  **- True** : allows the rest of the process to continue the execution even an error occurs within the activity.  
  **- False** : blocks the process from continuing the execution.
* **Timeout MS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **File Path (String)** - Path for the file used to generate completion, including common image files (JPEG, PNG, WEBP) and document files (PDF, TXT).
* **Image (Image)** - The input image object used for text completion.
* **Prompt (String)\*** - The input prompt for the Anthropic text completion.

**Options**

* **Max Tokens (Int32)\*** - The maximum number of tokens to generate. Default value: 1920.
* **Stop Sequences (String[])** - Character sequences that stop output generation.
* **Temperature (Double?)** - Controls the randomness of the output. Higher values produce more creative results.
* **Top K (Int32?)** - Number of highest probability tokens to consider for the next token.
* **Top P (Double?)** - The cumulative probability of tokens to consider when sampling.

**Output**

* **Full Response (JObject)** - The full response from the service.
* **Result (String)** - The result of the text completion.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Generate Text Completion Using Anthropic
