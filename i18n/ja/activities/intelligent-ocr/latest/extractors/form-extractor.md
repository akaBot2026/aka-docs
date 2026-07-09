---
id: form-extractor
title: "Form Extractor"
sidebar_label: "Form Extractor"
sidebar_position: 1
description: "Form Extractor アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Form Extractor

RCA.Activities.OCR.FormExtractor

## **説明**

ドキュメント内の単語の位置を考慮して、必要な情報を抽出、照合、および報告します。固定レイアウトや固定テンプレートのドキュメント タイプに最適です。

![form-extractor](/static/img/form-extractor.png)

（\*は必須）

## **プロパティ**

**入力**

* **Min Overlap Percentage (Double)** - ドキュメント内のボックスとテンプレート内のボックスの間の最小重複（オーバーラップ）領域（パーセンテージ単位）を指定します。デフォルトは `65` です。

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [539280315] Form Extractor
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。
