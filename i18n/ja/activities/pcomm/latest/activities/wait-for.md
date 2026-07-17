---
id: wait-for
title: "Wait For"
sidebar_label: "Wait For"
sidebar_position: 9
description: "Wait For アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Wait For

RCA.Activities.PCOMM.WaitFor

## **説明**

特定の端末状態（入力可能、システム利用可能、アプリケーション利用可能、画面遷移など）が満たされるまで、実行を一時停止します。

![wait-for](/static/img/wait-for.png)

（\*は必須）

## **プロパティ**

**入力**

* **Reset Screen (ブール値)** - 選択した場合、待機を開始する前にエミュレーター画面をクリアまたはリセットします。
* **Timeout (Int32)*** - エラーがスローされる前に、指定された条件が満たされるまで待機する最大時間（ミリ秒単位）。
* **Variant Index (Int32)** - 監視するオペレーター情報領域（OIA）の1バイトの16進数位置。
* **Wait Type (WaitType)*** - 待機するエミュレーターの状態またはイベントの種類。オプションは次のとおりです。
  * `InputReady` - 端末がキーボード入力を受け入れる準備ができるまで待機します。
  * `SystemAvailable` - PCOMM システムが利用可能になるまで待機します。
  * `AppAvailable` - ターゲットアプリケーションが利用可能になるまで待機します。
  * `Transition` - 画面遷移が発生するのを待ちます。
  * `CancelWaits` - アクティブな待機操作をキャンセルします。

**その他**

* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。
* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [3424325] Wait For
