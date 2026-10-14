---
id: ai-models
title: AI Models and Keys
sidebar_label: AI Models
sidebar_position: 3
description: Add AI provider keys and manage custom models.
displayed_sidebar: akaXtractSidebar
---

# AI Models and Keys

This page is for the Owner, an Administrator, or anyone who can manage models.

## Which Models Need a Key

The AI model that you select in a Pipeline processes the documents of that Pipeline.

| Model | Key |
| --- | --- |
| `AkaXtract AI` and `AkaXtract Onprem` | Not needed |
| A model from another provider | A saved AI key for **that provider**. A key from `API Keys` does not work |

## Add an AI Key

1. Open `AI Models` -> `Add API Key Model`.
2. Select the provider in `Select AI Provider`. Enter `API Key Name` and `API Key` (at least 8 characters).
3. Select `Test Connection`, then `Save`. Most providers need a successful test before you can save. A test is not required for FPT AI. A successful test shows `API Key Is Valid`.
4. In the Pipeline, select the model and the matching key.

![AI Models page with the provider filter and Add API Key Model](/static/img/scale-xtract-ai-model-keys.png)

![Add AI Model API Key dialog](/static/img/scale-xtract-add-ai-model-key.png)

**Result:** the key appears under the correct provider.

To change a key, select `Edit`. Leave the key field blank to keep the current key.

![Edit AI Model API Key dialog](/static/img/scale-xtract-edit-ai-model-key.png)

![API Key Is Valid after Test Connection](/static/img/scale-xtract-test-connection-valid.png)

:::warning
Deleting a key can affect Pipelines that use it. Replace the key in those Pipelines first.
:::

## Add a Custom Model

1. Open `AI Providers`, choose a provider, and select `Add Custom Model...`.
2. Enter `Model ID` exactly as the provider defines it. It is required, up to 200 characters, and cannot contain backslashes, empty path segments, `.` or `..` segments, or control characters.
3. Optionally enter `Display Name` and `Description`, then select `Add Model`.

![AI Providers page](/static/img/scale-xtract-ai-providers.png)

![Models of a provider with the Add Custom Model button](/static/img/scale-xtract-provider-models.png)

![Add Custom Model dialog](/static/img/scale-xtract-add-custom-model.png)

**Result:** the model appears with a `Custom` badge. A custom model is visible only to your organization. Adding a model to the list does not mean your key may call it.

Use `Edit`, `Enable`, or `Disable` from the model menu. Existing Pipelines keep their configuration when you delete a custom model and do not switch models automatically, so test them again before the next publication.
