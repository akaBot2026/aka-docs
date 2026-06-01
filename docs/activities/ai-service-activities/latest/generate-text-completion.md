---
id: generate-text-completion
title: "Generate Text Completion"
sidebar_label: "Generate Text Completion"
sidebar_position: 2
description: "Generate Text Completion activity documentation."
displayed_sidebar: activitiesSidebar
---
# Generate Text Completion

RCA.Activities.AIServices.GenerateTextCompletion

## **Description**

The Generate Text Completion activity generates a text completion response using an OpenAI model based on a prompt. This activity must be used inside an AI Scope with **Provider Type** set to OpenAI.

![text-open-ai](/static/img/text-open-ai.png)

(\* is mandatory)

## **In the body of activity**

* **Prompt** - The input prompt used to generate the text completion.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False  
  **- True** : allows the rest of the process to continue the execution even an error occurs within the activity.  
  **- False** : blocks the process from continuing the execution.
* **Timeout MS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Prompt (String)\*** - The input prompt for the text completion.

**Options**

* **Best Of (Int32?)** - Generates multiple completions server-side and returns the best one. Must be greater than **N** when used with **N**. Defaults to 1.
* **Echo (Boolean?)** - Echoes back the prompt in addition to the completion. Defaults to False.
* **Frequency Penalty (Double?)** - Number between -2.0 and 2.0. Positive values reduce repeated text. Defaults to 0.
* **Log Probabilities (Int32?)** - Includes the log probabilities on the most likely output tokens.
* **Max Tokens (Int32)** - The maximum number of tokens allowed for the prompt and generated answer. Default value: 1920.
* **N (Int32?)** - Number of completion choices to return. Defaults to 1.
* **Presence Penalty (Double?)** - Number between -2.0 and 2.0. Positive values increase the likelihood of new topics. Defaults to 0.
* **Stop (String[])** - Up to 4 sequences where the API will stop generating further tokens.
* **Stream (Boolean?)** - Whether to stream back partial progress. Defaults to False.
* **Suffix (String)** - The suffix that comes after a completion of inserted text.
* **Temperature (Double?)** - A number between 0 and 2. Higher values produce more random output, while lower values make it more focused. Defaults to 1.
* **Top P (Double?)** - A number between 0 and 1. The lower the number, the fewer tokens are considered. Defaults to 1.

**Output**

* **Full Response (JObject)** - The full response from the service.
* **Result (String)** - The result of the text completion.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Generate Text Completion
