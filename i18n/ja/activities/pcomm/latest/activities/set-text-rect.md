---
id: set-text-rect
title: "Set Text Rect"
sidebar_label: "Set Text Rect"
sidebar_position: 5
description: "Set Text Rect アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Set Text Rect

RCA.Activities.PCOMM.SetTextRect

## **説明**

端末エミュレーター画面上の座標で定義された特定の矩形領域にテキスト文字列を入力します。

![set-text-rect](/static/img/set-text-rect.png)

（\*は必須）

## **プロパティ**

**入力**

* **Text (文字列)*** - 指定された矩形領域内に入力するテキスト文字列。
* **Start Row (Int32)*** - 矩形入力領域が開始されるエミュレーター画面上の行座標。
* **End Row (Int32)*** - 矩形入力領域が終了するエミュレーター画面上の行座標。
* **Start Column (Int32)*** - 矩形入力領域が開始されるエミュレーター画面上の列座標。
* **End Column (Int32)*** - 矩形入力領域が終了するエミュレーター画面上の列座標。
* **Reset Screen (ブール値)** - 選択した場合、テキストを入力する前にエミュレーター画面をクリアまたはリセットします。

**その他**

* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。
* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [3424325] Set Text Rect
