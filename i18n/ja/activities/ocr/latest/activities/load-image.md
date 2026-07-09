---
id: load-image
title: "Load Image"
sidebar_label: "Load Image"
sidebar_position: 5
description: "Load Image アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Load Image

RCA.Activities.OCR.LoadImage

## **説明**

ファイルを読み込み、System.Drawing.Image 型の変数に出力します。

![load-image](/static/img/load-image.png)

（\*は必須）

## **プロパティ**

**入力**

* **Image Path (文字列)*** - 読み込む画像ファイルのパス。

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [443380046] Load Image
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。

**出力**

* **Output Image (Image)** - System.Drawing.Image 型の出力変数。
