---
id: webhook
title: "Webhook"
sidebar_label: "Webhook"
sidebar_position: 4
description: "Webhookに関するドキュメント。"
displayed_sidebar: centerSidebar
---

## Webhook

Webhookを使用すると、akaBotプラットフォームを外部のアプリケーションエコシステムと連携できます。Centerのイベントをサブスクライブして、外部のDCM、BPM、CRMなどに転送し、新しいキュー項目の準備、トリガー失敗、プロセス変更などを通知できます。

注意：アプリケーション側がWebhook受信に対応している必要があります。

**Webhook**タブを選択すると、次のページが表示されます。

![image-20221101165929-27.png](/static/img/96aed6_image-20221101165929-27.png)

| No | カラム | 説明 |
| --- | --- | --- |
| 1 | Action | Webhook管理のアクション（Edit: Webhook編集、Delete: Webhook削除） |
| 2 | URL | 受信先アプリケーションのURL |
| 3 | Subscribed Event | アプリケーションへ転送されるイベント |
| 4 | Enable | Webhookの有効/無効状態（**Enabled** / **Disabled**） |

## Webhookの作成/編集

Webhookを作成するには：

![image-20221101165953-28.png](/static/img/5d5b4c_image-20221101165953-28.png)

| No | カラム/ラベル | 説明 | タイプ | 最大長 | 必須 | 入力要件 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | URL | akaBot Centerのイベントを購読・受信するシステムのURLを入力 | String | 1000文字 | はい | |
| 2 | Enabled | このWebhookを有効にする場合はチェック | チェックボックス |  | いいえ | |
| 3 | Choose All Events / Choose Events | すべてのイベントを送信するか、選択したイベントのみを送信するかを選択 | 単一選択 |  | はい | |
| 4 | Filter | 転送したいイベントを選択（複数選択可）。**Choose Events**を選択した場合に有効 |
