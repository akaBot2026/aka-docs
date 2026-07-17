---
id: start-stop-communication
title: "Start/Stop Communication"
sidebar_label: "Start/Stop Communication"
sidebar_position: 12
description: "Start/Stop Communication アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Start/Stop Communication

RCA.Activities.PCOMM.StartStopCommunication

## **説明**

ローカルエミュレーターのワークステーションセッションとホストサーバー間の通信を開始または停止します。

![start-communication](/static/img/start-communication.png)

（\*は必須）

## **プロパティ**

**入力**

* **Operation (CommunicateOperation)*** - 実行する通信アクション。オプションは次のとおりです。
  * `Start` - ローカルセッションとホストサーバー間の通信を接続し、開始します。
  * `Stop` - ローカルセッションとホストサーバー間の通信を切断し、停止します。
* **Reset Screen (ブール値)** - 選択した場合、アクションを実行する前にエミュレーター画面をクリアまたはリセットします。

**その他**

* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。
* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [3424325] Start/Stop Communication
