---
id: google-cloud-ocr
title: "Google Cloud OCR"
sidebar_label: "Google Cloud OCR"
sidebar_position: 2
description: "Google Cloud OCR エンジン アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Google Cloud OCR

RCA.Activities.OCR.GoogleCloudOCR

## **説明**

Google Cloud Vision OCR エンジンを使用して、指定された UI 要素または画像から文字列とその情報を抽出します。

![google-cloud-ocr](/static/img/google-cloud-ocr.png)

（\*は必須）

## **プロパティ**

**入力**

* **Image (Image)** - 処理対象となる画像オブジェクト。

**ログイン**

* **API Key (文字列)*** - Google Cloud Vision API へのアクセスを提供する API キー。

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [3424325] Google Cloud OCR
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。

**オプション**

* **Language (ドロップダウン リスト)** - OCR 抽出に使用する言語。デフォルトは English です。
* **Scale (Double)** - 選択した UI 要素または画像の拡大倍率。デフォルトは `1.0` です。

**出力**

* **Text (文字列)** - 抽出された文字列。
