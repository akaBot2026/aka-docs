---
id: export-extraction-results
title: "Export Extraction Results"
sidebar_label: "Export Extraction Results"
sidebar_position: 3
description: "Export Extraction Results アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Export Extraction Results

RCA.Activities.OCR.ExportExtractionResults

## **説明**

ExtractionResult 変数からの結果を、さらに処理可能な DataSet 変数にエクスポートすることで、抽出結果への容易なアクセスを提供します。ExtractionResult 変数は、Data Extraction Scope アクティビティから取得できます。

![export-extraction-results](/static/img/export-extraction-results.png)

（\*は必須）

## **プロパティ**

**入力**

* **Extraction Result (ExtractionResult)*** - エクスポートする抽出プロセスの結果。
* **Include Confidence (ブール値)** - 選択した場合、出力される DataSet に各抽出値の確信度情報が含まれます。

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [897624653] Export Extraction Results
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。

**出力**

* **DataSet (DataSet)** - ExtractionResults からのすべての値を含む DataSet（テーブルのコレクション）。
