---
id: data-extraction-scope
title: "Data Extraction Scope"
sidebar_label: "Data Extraction Scope"
sidebar_position: 2
description: "akaBot Studio で Data Extraction Scope アクティビティを使用して、ドキュメント抽出器を調整および設定する方法を説明します。"
displayed_sidebar: activitiesSidebar
---

# Data Extraction Scope

RCA.Activities.OCR.DataExtractionScope

## **説明**

**Data Extraction Scope** アクティビティは、ネストされた抽出器アクティビティ（[Form Extractor](/docs/activities/intelligent-ocr/latest/extractors/form-extractor.md) または [Regular Expression Extractor](/docs/activities/intelligent-ocr/latest/extractors/regular-expression-extractor.md) など）の実行および設定コンテナーを提供します。タクソノミー（分類）で定義されたドキュメント タイプとフィールドに従って、抽出プロセスを調整します。

このアクティビティは、ドキュメントのデジタル化された表現（ドキュメント テキストおよびドキュメント オブジェクト モデル DOM）と、特定のドキュメント タイプ ID を受け取り、その本体内で設定された抽出器を実行し、結果を `ExtractionResult` 変数に格納します。この出力変数は、後続の [Export Extraction Results](/docs/activities/intelligent-ocr/latest/activities/export-extraction-results.md) アクティビティに渡して、データを表形式で取得できます。

![data-extraction-scope](/static/img/data-extraction-scope.png)

---

## **アクティビティ本体内**

* **Drop Extractor Here (ここに抽出器をドロップ)** - 抽出ロジックを定義するために、1 つ以上の抽出器アクティビティ（*Form Extractor* など）をドラッグ アンド ドロップする必要がある中央のコンテナー ブロック。

---

## **プロパティ**

### **入力**

* **Document Object Model (Document)*** - ファイルのドキュメント オブジェクト モデル（DOM）。通常、先行する [Digitize Document](/docs/activities/intelligent-ocr/latest/activities/digitize-document.md) アクティビティによって生成され、`Document` 変数に格納されます。
* **Document Text (文字列)*** - ドキュメント自体の生テキスト。通常、先行する [Digitize Document](/docs/activities/intelligent-ocr/latest/activities/digitize-document.md) アクティビティによって生成され、`String` 変数に格納されます。
* **Document Type Id (文字列)*** - 処理対象のドキュメント タイプを識別する、タクソノミー設定の一意のドキュメント タイプ ID（例: `"Invoices.Inbound.VendorInvoice"`）。

### **その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。  
  例: [755350182] Data Extraction Scope
* **Public (チェックボックス)** - 選択した場合、このアクティビティで使用される変数や引数の値が Verbose レベルでログに記録されます。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。

### **出力**

* **Extraction Result (ExtractionResult)** - 処理および抽出されたデータを格納する `ExtractionResult` 型の変数。
