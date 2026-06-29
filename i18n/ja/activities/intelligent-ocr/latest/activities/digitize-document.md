---
id: digitize-document
title: "Digitize Document"
sidebar_label: "Digitize Document"
sidebar_position: 1
description: "Digitize Document アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Digitize Document

RCA.Activities.OCR.Intelligent.DigitizeDocument

## **説明**

ドキュメントをデジタル化し、そのドキュメント オブジェクト モデル（DOM）とテキストを抽出して、対応する変数型に格納します。

![digitize-document](/static/img/digitize-document.png)

（\*は必須）

## **アクティビティ本体内**

* **Document Path (ドキュメントのパス)** - デジタル化するドキュメントのファイルパス。（デザイナー本体内の **File Name. Text Must Be Set** プレースホルダーに対応します）。
* **Drop OCR Engine Here (ここに OCR エンジンをドロップ)** - ドキュメントに対して光学文字認識を実行するために、OCR エンジン アクティビティ（*Tesseract OCR* など）をドラッグ アンド ドロップする必要があるコンテナー ブロック。

## **プロパティ**

**入力**

* **Document Path (文字列)*** - デジタル化するドキュメントのファイルパス。

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [185433725] Digitize Document
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。

**出力**

* **Document Object Model (Document)** - Document 変数に格納された、ファイルのドキュメント オブジェクト モデル（DOM）。
* **Document Text (文字列)** - 指定されたドキュメントから抽出されたテキスト。
