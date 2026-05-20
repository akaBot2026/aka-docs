---
id: agent-pool
title: "エージェントプール"
sidebar_label: "エージェントプール"
sidebar_position: 3
description: "エージェントプールに関するドキュメント。"
displayed_sidebar: centerSidebar
---

# エージェントプール

エージェントプールは、特定のワークフローに関連するエージェントをまとめた「プール」を作成する機能です。ワークフローの実行が必要な際に、プール内の利用可能なエージェントが自動的にワークフローを実行し、エージェントの有効活用を図ります。

## a. エージェントプールの作成

ステップ1: プール内のエージェントが実行するワークフローを作成します。**Automation > Workflow > Create new** でワークフローを作成し、対象の**Agent Group**を選択して保存します。

ステップ2: エージェントプールを作成します。**Resources > Agent Pool > Create New** を選択します。

![image-20221031170544-22.png](/static/img/165fc9_image-20221031170544-22.png)

表示されるフォームに入力します：

![image-20221031170959-23.png](/static/img/4fb8d8_image-20221031170959-23.png)

| No | カラム/ラベル | 説明 | タイプ | 最大長 | 必須 | 入力要件 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Name | エージェントプール名を入力 | String | 55文字 | はい | |
| 2 | Description | 作成/編集するワークフローの説明を入力 | String |  | いいえ | |
| 3 | Workflow | 作成したワークフローを選択 | ドロップダウン |  | はい | |
| 4 | Description | ワークフローの説明を入力 | String | 255文字 | いいえ | |

Generalタブの隣に**Callback Setup**があります。この機能により、プールのエージェントがタスクを完了した際に出力をサードパーティへ送信できます。

![image-20221031171615-24.png](/static/img/dd3eef_image-20221031171615-24.png)

送信オプションは3種類あります：

**No callback**（デフォルト）：出力を送信しない

**Restful API (POST Method)**：入力したAPIを介して出力を送信

![image-20221101104556-1.png](/static/img/839f13_image-20221101104556-1.png)

**Webhook**：出力をWebhookアドレスへ送信

![image-20221101104633-2.png](/static/img/b0d4b5_image-20221101104633-2.png)
