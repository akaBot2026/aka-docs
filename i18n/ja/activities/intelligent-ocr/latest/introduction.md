---
id: introduction
title: "はじめに"
sidebar_label: "はじめに"
sidebar_position: 1
description: "Intelligent OCR アクティビティ パッケージの概要"
displayed_sidebar: activitiesSidebar
---
# はじめに

**Intelligent OCR** アクティビティ パッケージ（akaBot Studio では **RCA.Activities.OCR** として知られています）は、光学文字認識（OCR）、クラウド OCR、および構造化データ抽出のためのアクティビティを提供します。ロボットが請求書、領収書、フォームなどのさまざまなドキュメント タイプをデジタル化し、構造化データを抽出できるようにします。

Document Understanding（文書理解）機能を活用することで、文書のデジタル化からデータの抽出、エクスポートまでの処理を行うワークフローを構築できます。

---

## **パッケージ詳細**

- **パッケージ名**: `RCA.Activities.OCR`
- **サポートされているフレームワーク**: .NET Framework 4.5.2 以上、.NET Framework 4.7.2 以上。
- **依存関係**: イメージング、コンピュータビジョン、Azure Cognitive Services、およびタクソノミー（分類）ライブラリを含みます。

---

## **主なアクティビティ**

文書を処理してそのデータを抽出するために、akaBot Studio のワークフローは通常、以下の順序に従います。

1. **Digitize Document (ドキュメントをデジタル化)**: ネストされた OCR エンジン（*Tesseract OCR* など）を使用して文書をデジタル化し、Document Object Model（DOM）と抽出された文書テキストを生成します。
2. **Data Extraction Scope (データ抽出スコープ)**: DOM と文書テキストを受け取り、その本体内にネストされた抽出器を実行して、タクソノミー（分類）フィールドの値を抽出します。
3. **Form Extractor (フォーム抽出器)**: 単語の座標に基づいて、固定レイアウトの文書からテンプレート レイアウトとフィールドを照合することによりデータを抽出します。
4. **Regular Expression Extractor (正規表現抽出器)**: 事前設定された正規表現パターンとテキストを照合してデータを抽出します。
5. **Export Extraction Results (抽出結果をエクスポート)**: スコープからの最終的な `ExtractionResult` を、Excel、データベース、または ERP 統合で使用するための標準の `DataSet`（テーブルのコレクション）に変換します。
