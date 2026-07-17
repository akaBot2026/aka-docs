---
id: microsoft-win10-ocr
title: "Microsoft Win10 OCR"
sidebar_label: "Microsoft Win10 OCR"
sidebar_position: 3
description: "Microsoft Win10 OCR エンジン アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Microsoft Win10 OCR

RCA.Activities.OCR.MicrosoftUWPOCR

## **説明**

Windows 10/11 に組み込まれている組み込み OCR エンジンを使用して、指定された画像から文字列とその情報を抽出します。

![microsoft-win-ocr](/static/img/microsoft-win-ocr.png)

（\*は必須）

## **プロパティ**

**入力**

* **Image (Image)** - 処理対象となる画像オブジェクト。

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [3424325] Microsoft Win10 OCR
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。

**オプション**

* **Language (ドロップダウン リスト)** - 使用する言語コード。デフォルトは English です。
* **Scale (Double)** - 選択した UI 要素または画像の拡大倍率。デフォルトは `1.0` です。

**出力**

* **Text (文字列)** - 抽出された文字列。
