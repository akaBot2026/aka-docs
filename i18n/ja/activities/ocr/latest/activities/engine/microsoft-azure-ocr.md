---
id: microsoft-azure-ocr
title: "Microsoft Azure OCR"
sidebar_label: "Microsoft Azure OCR"
sidebar_position: 4
description: "Microsoft Azure OCR エンジン アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Microsoft Azure OCR

RCA.Activities.OCR.MicrosoftAzureOCR

## **説明**

Microsoft Azure Computer Vision OCR API を使用して、指定された UI 要素または画像から文字列とその情報を抽出します。

![microsoft-azure-ocr](/static/img/microsoft-azure-ocr.png)

（\*は必須）

## **プロパティ**

**入力**

* **Image (Image)** - 処理対象となる画像オブジェクト。

**ログイン**

* **API Key (文字列)*** - Microsoft Azure Computer Vision OCR へのアクセスを提供する API キー。
* **Endpoint (文字列)*** - Microsoft Azure Computer Vision OCR サービスに関連付けられたエンドポイント URL。

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [3424325] Microsoft Azure OCR
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。

**オプション**

* **Language (ドロップダウン リスト)** - OCR 抽出に使用する言語。デフォルトは English です。
* **Scale (Double)** - 選択した UI 要素または画像の拡大倍率。デフォルトは `1.0` です。

**出力**

* **Text (文字列)** - 抽出された文字列。
