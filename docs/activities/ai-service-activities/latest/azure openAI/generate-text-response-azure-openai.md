---
id: generate-text-response-azure-openai
title: "Generate Text Response Azure OpenAI"
sidebar_label: "Generate Text Response Azure OpenAI"
sidebar_position: 8
description: "Generate Text Response Azure OpenAI activity documentation."
displayed_sidebar: activitiesSidebar
---
# Generate Text Response Azure OpenAI

RCA.Activities.AIServices.GenerateTextResponseAzureOpenAI

## **Description**

The Generate Text Response Azure OpenAI activity generates a text response using an Azure OpenAI model based on a prompt and optional file or image input. This activity must be used inside an AI Scope with **Provider Type** set to AzureOpenAI.

![text-res-azure](/static/img/text-res-azure.png)

(\* is mandatory)

## **In the body of activity**

* **Prompt** - The input prompt used to generate the Azure OpenAI text response.
* **File Path** - Optional file path used as input for generation.
* **Image** - The image object used to generate the Azure OpenAI text response.
## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False  
  **- True** : allows the rest of the process to continue the execution even an error occurs within the activity.  
  **- False** : blocks the process from continuing the execution.
* **Timeout MS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **File Path (String)** - Path for the file used to generate response, including common image files (JPEG, PNG, WEBP) and document files (PDF, TXT).
* **Image (Image)** - The input image object used to generate response.
* **Prompt (String)\*** - The input prompt for the text response.

**Options**

* **Max Output Tokens (Int32)** - The maximum number of tokens to generate. Default value: 1920.
* **Reasoning Effort (String)** - For gpt-5 and o-series models only. Constrains effort on reasoning. Supported values include none, minimal, low, medium, and high.
* **Reasoning Summary (String)** - For gpt-5 and o-series models only. Summary mode for the reasoning performed by the model. Supported values include auto, concise, and detailed.
* **Temperature (Double?)** - Randomness of the response, ranging from 0.0 to 2.0. Higher values create more creative responses, while lower values are more deterministic. Defaults to 1.0.
* **Top P (Double?)** - Nucleus sampling value. Consider changing this or **Temperature**, but not both. Defaults to 1.

**Output**

* **Full Response (JObject)** - The full response from the service.
* **Result (String)** - The result of the model.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Generate Text Response Azure OpenAI
