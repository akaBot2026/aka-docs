---
id: ai-models
title: "AI モデルとキー"
sidebar_label: "AI モデル"
sidebar_position: 3
description: "AI プロバイダーのキーを追加し、カスタム モデルを管理します。"
displayed_sidebar: akaXtractSidebar
---

# AI モデルとキー

このページは、Owner、Administrator、またはモデルを管理できる権限を持つ方を対象としています。

## キーが必要なモデル

Pipeline で選択した AI モデルが、その Pipeline の文書を処理します。

| モデル | キー |
| --- | --- |
| `AkaXtract AI` と `AkaXtract Onprem` | 不要 |
| 他のプロバイダーのモデル | **そのプロバイダー**用に保存した AI キー。`API Keys` で発行したキーは使用できません |

## AI キーを追加する

1. `AI Models` -> `Add API Key Model` を開きます。
2. `Select AI Provider` でプロバイダーを選択します。`API Key Name` と `API Key`（8 文字以上）を入力します。
3. `Test Connection` を選択し、続けて `Save` を選択します。ほとんどのプロバイダーでは、保存する前にテストが成功している必要があります。FPT AI ではテストは必須ではありません。テストが成功すると `API Key Is Valid` と表示されます。
4. Pipeline で、モデルと対応するキーを選択します。

![プロバイダー フィルターと Add API Key Model を表示した AI Models ページ](/static/img/scale-xtract-ai-model-keys.png)

![Add AI Model API Key ダイアログ](/static/img/scale-xtract-add-ai-model-key.png)

**結果：** キーが正しいプロバイダーの下に表示されます。

キーを変更するには、`Edit` を選択します。現在のキーを維持する場合は、キーの欄を空のままにします。

![Edit AI Model API Key ダイアログ](/static/img/scale-xtract-edit-ai-model-key.png)

![Test Connection 後の API Key Is Valid](/static/img/scale-xtract-test-connection-valid.png)

:::warning
キーを削除すると、そのキーを使用している Pipeline に影響する場合があります。先に、それらの Pipeline のキーを差し替えてください。
:::

## カスタム モデルを追加する

1. `AI Providers` を開き、プロバイダーを選択して、`Add Custom Model...` を選択します。
2. プロバイダーが定義しているとおりに `Model ID` を入力します。必須項目で、200 文字まで入力でき、バックスラッシュ、空のパス セグメント、`.` または `..` のセグメント、制御文字は使用できません。
3. 必要に応じて `Display Name` と `Description` を入力し、`Add Model` を選択します。

![AI Providers ページ](/static/img/scale-xtract-ai-providers.png)

![Add Custom Model ボタンを表示したプロバイダーのモデル一覧](/static/img/scale-xtract-provider-models.png)

![Add Custom Model ダイアログ](/static/img/scale-xtract-add-custom-model.png)

**結果：** モデルに `Custom` バッジが付いて表示されます。カスタム モデルは、お使いの組織にのみ表示されます。モデルを一覧に追加しても、お持ちのキーでそのモデルを呼び出せるとは限りません。

モデルのメニューから、`Edit`、`Enable`、`Disable` を使用できます。カスタム モデルを削除しても、既存の Pipeline は設定を維持し、別のモデルに自動で切り替わることはありません。次回の公開の前に、再度テストしてください。
