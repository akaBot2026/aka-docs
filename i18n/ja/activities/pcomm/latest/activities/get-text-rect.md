---
id: get-text-rect
title: "Get Text Rect"
sidebar_label: "Get Text Rect"
sidebar_position: 3
description: "Get Text Rect アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Get Text Rect

RCA.Activities.PCOMM.GetTextRect

## **説明**

PCOMM 画面上の指定された矩形領域（開始/終了の行と列で定義）からテキスト文字列を抽出します。

![get-text-rect](/static/img/get-text-rect.png)

（\*は必須）

## **プロパティ**

**入力**

* **Start Row (Int32)*** - 矩形選択領域が開始されるエミュレーター画面上の行座標。
* **End Row (Int32)*** - 矩形選択領域が終了するエミュレーター画面上の行座標。
* **Start Column (Int32)*** - 矩形選択領域が開始されるエミュレーター画面上の列座標。
* **End Column (Int32)*** - 矩形選択領域が終了するエミュレーター画面上の列座標。
* **Reset Screen (ブール値)** - 選択した場合、テキストを抽出する前にエミュレーター画面をクリアまたはリセットします。

**オプション**

* **Wait For String (文字列)** - 抽出を開始する前に画面上で待機する特定のテキスト文字列。これにより、テキストを読み取る前に正しい画面がロードされていることが確認されます。

**出力**

* **Output Text (文字列)** - 抽出されたテキストを格納する String 型の変数。この変数は、ワークフロー内の後続のアクティビティで再利用できます。

**その他**

* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。
* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [3424325] Get Text Rect
