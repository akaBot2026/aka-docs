---
id: tesseract-ocr
title: "Tesseract OCR"
sidebar_label: "Tesseract OCR"
sidebar_position: 5
description: "Tesseract OCR エンジン アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Tesseract OCR

RCA.Activities.OCR.TesseractOCR

## **説明**

Tesseract OCR エンジンを使用して、指定された UI 要素または画像から文字列とその情報を抽出します。他の OCR コンテナー アクティビティ内の OCR エンジンとして使用できます。

![tesseract-ocr](/static/img/tesseract-ocr.png)

（\*は必須）

## **プロパティ**

**入力**

* **Image (Image)** - 処理対象となる画像オブジェクト。

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [3424325] Tesseract OCR
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。

**オプション**

* **Language (文字列)** - OCR エンジンがテキストを抽出する際に使用する言語。デフォルトは English です（例: `"eng"`、`"vie"`、`"jpn"`）。
* **Scale (Double)** - 選択した UI 要素または画像の拡大倍率。デフォルトは `1.0` です。

**出力**

* **Text (文字列)** - 抽出された文字列。
