---
id: send-command-key
title: "Send Command Key"
sidebar_label: "Send Command Key"
sidebar_position: 7
description: "Send Command Key アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Send Command Key

RCA.Activities.PCOMM.SendCommandKey

## **説明**

Enter、Clear、PF1-PF24 などの特定の端末コマンドキー（ニーモニックキー）を PCOMM ホストに送信します。

![send-command-key](/static/img/send-command-key.png)

（\*は必須）

## **プロパティ**

**入力**

* **Command Key (MnemonicKey)*** - ホストエミュレーターに送信する端末コマンドキー。ドロップダウンメニューからコマンドを選択します（例: `enter`、`clear`、`tab`、`backspace`、`pf1` -> `pf24` など）。
* **Reset Screen (ブール値)** - 選択した場合、コマンドキーを送信する前にエミュレーター画面をクリアまたはリセットします。

**その他**

* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。
* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [3424325] Send Command Key
