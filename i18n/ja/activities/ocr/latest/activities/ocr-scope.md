---
id: ocr-scope
title: "OCR Scope"
sidebar_label: "OCR Scope"
sidebar_position: 2
description: "OCR Scope アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# OCR Scope

RCA.Activities.Core.OCRScope

## **説明**

このアクティビティは、OCR アクティビティを実行するためのスコープ（範囲）を作成します。

![image-20230417095210-1.png](/static/img/ebba26_image-20230417095210-1.png)

## **アクティビティ本体内**

* **Do (実行)** - ツールボックスから別のアクティビティをドラッグして追加できます。

## **プロパティ**

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [765026544] OCR Scope
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。

**オプション**

* **Language (ドロップダウン リスト)** - 画像内で使用されている言語を指定します。利用可能なオプションは、English、Japanese、Vietnamese、および ChineseTraditional です。
