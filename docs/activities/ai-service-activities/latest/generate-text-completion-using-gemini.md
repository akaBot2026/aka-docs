---
id: generate-text-completion-using-gemini
title: "Generate Text Completion Using Gemini"
sidebar_label: "Generate Text Completion Using Gemini"
sidebar_position: 4
description: "Generate Text Completion Using Gemini activity documentation."
displayed_sidebar: activitiesSidebar
---
# Generate Text Completion Using Gemini

RCA.Activities.AIServices.GenerateTextCompletionUsingGemini

## **Description**

The Generate Text Completion Using Gemini activity generates a text completion response using a Google Gemini model based on a prompt. This activity must be used inside an AI Scope with **Provider Type** set to GoogleGemini.

![text-ge](/static/img/text-ge.png)

(\* is mandatory)

## **In the body of activity**

* **Prompt** - The input prompt used to generate the Gemini text completion.
* **File Path** - Optional file path used as input for generation.
* **Image** - The image object used to generate the Gemini text completion.
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
* **Prompt (String)\*** - The input prompt for the Gemini text completion.

**Options**

* **Candidate Count (Int32?)** - Number of generated responses to return. If unset, defaults to 1.
* **Max Output Tokens (Int32)** - Maximum number of tokens that can be generated in the response. Default value: 1920.
* **Stop Sequences (String[])** - Up to 5 character sequences that stop output generation.
* **Temperature (Double?)** - Controls the randomness of the output. Specify a value between 0.0 and 2.0. Defaults to 1.0.
* **Top K (Int32?)** - Number of highest probability tokens to consider for the next token.
* **Top P (Double?)** - The cumulative probability of tokens to consider when sampling. Specify a value between 0.0 and 1.0. Defaults to 1.0.

**Output**

* **Full Response (JObject)** - The full response from the service.
* **Result (String)** - The result of the text completion.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Generate Text Completion Using Gemini
