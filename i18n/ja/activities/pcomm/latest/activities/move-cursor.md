---
id: move-cursor
title: "Move Cursor"
sidebar_label: "Move Cursor"
sidebar_position: 8
description: "Move Cursor アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Move Cursor

RCA.Activities.PCOMM.MoveCursor

## **説明**

端末エミュレーターの入力カーソルを、画面上の指定された Row（行）と Column（列）の座標に移動します。

![move-cursor](/static/img/move-cursor.png)

（\*は必須）

## **プロパティ**

**入力**

* **Reset Screen (ブール値)** - 選択した場合、カーソルを移動する前にエミュレーター画面をクリアまたはリセットします。

**オプション**

* **Row (Int32)** - カーソルの移動先となるエミュレーター画面上の行座標。
* **Column (Int32)** - カーソルの移動先となるエミュレーター画面上の列座標。

**その他**

* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。
* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [3424325] Move Cursor
