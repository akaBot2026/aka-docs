---
id: webhooks
title: "Webhook による結果の送信"
sidebar_label: "Webhook"
sidebar_position: 1
description: "結果を他のシステムに自動的に送信し、各送信の状況を確認します。"
displayed_sidebar: akaXtractSidebar
---

# Webhook による結果の送信

Webhook は、処理が完了した各文書の結果を、指定した URL に送信します。

**事前に必要なもの：** Webhook を管理する権限、実際の文書を処理する Pipeline、受信側のアドレス。

## Webhook を設定する

1. Pipeline を開き、`Webhook` を選択して、`Enable Webhook` をオンにします。
2. `Callback URL` を入力し、受信側が必要とする `HTTP Method` を選択します。ネットワーク ポリシーで許可されている有効なアドレスを使用してください。HTTPS を推奨します。
3. 任意：`Add Header` を選択して、ヘッダーを追加します（認証用の `x-api-key` など）。ヘッダー名は重複できません。
4. 任意：データの形式を変更します。`Body (Custom JSON)` は有効な JSON オブジェクトである必要があります。`Quick Insert` を使用して、プレースホルダーを追加できます。`Result Mapping (TypeScript)` は、送信前に結果を変換します。空のままにすると、元の結果がそのまま送信されます。
5. `Save Webhook` を選択し、保存された値を確認するために開き直します。

![Enable Webhook、Callback URL、HTTP Method、Headers、Result Mapping を表示した Webhook の設定](/static/img/scale-xtract-webhook-config-full.png)

![Quick Insert のプレースホルダーと Body (Custom JSON)](/static/img/scale-xtract-webhook-config-body.png)

**結果：** 設定が保存されます。保存してもテスト送信は行われません。

使用できるプレースホルダーには、`$jobId`、`$fileId`、`$pipelineId`、`$pipelineVersion`、`$status`、`$result`、`$metadata`、`$errorCode`、`$errorMessage`、`$retryCount`、`$completedAt` があります。

## Webhook が送信されるタイミング

- Webhook は、結果と処理エラーを送信します。
- Pipeline で Human Review が必要な場合、レビュー担当者が `Confirm` を選択した後に結果が送信されます。却下された結果は送信されません。
- `Test Pipeline` では Webhook は送信されません。

## 送信状況を確認する

`Webhook History` を開き、Job ID、ステータス、メソッドで絞り込み、`View` を選択すると、リクエスト、レスポンス、HTTP ステータス、エラーの内容を確認できます。

![送信試行を表示した Webhook History タブ](/static/img/scale-xtract-webhook-history.png)

![Webhook Call Details ダイアログ](/static/img/scale-xtract-webhook-call-details.png)

| ステータス | 意味 |
| --- | --- |
| `SUCCESS` | 受信側が HTTP 2xx ステータスを返しました。確実に受信されたかどうかは、受信側の記録で確認してください |
| `FAILED` | 1 回の送信試行が失敗しました |
| `EXHAUSTED` | すべての試行回数を使い切りました |

受信側が 2xx 以外のステータスを返した場合、AkaXtract は 1 分間隔で最大 3 回、自動的に再試行します。アドレスまたは認証を修正し、再送信と突き合わせの方法について、連携チームと取り決めてください。

:::note
同じ結果が複数回配信される場合があるため、受信側で重複を処理できるようにしてください。Webhook を再送信する目的だけで、成功した Job を再試行しないでください。
:::
