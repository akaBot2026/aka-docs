---
id: regular-expression-extractor
title: "Regular Expression Extractor"
sidebar_label: "Regular Expression Extractor"
sidebar_position: 2
description: "Regular Expression Extractor アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Regular Expression Extractor

RCA.Activities.OCR.RegexBasedExtractor

## **説明**

正規表現を使用してドキュメントから構造化されたフィールドを抽出する抽出器です。

![regular-expression-extractor](/static/img/regular-expression-extractor.png)

（\*は必須）

## **プロパティ**

**入力**

* **Configuration (文字列)*** - JSON エスケープされた文字列としての抽出器の設定値。
* **Timeout MS (Int32)** - 正規表現検索のタイムアウト値（ミリ秒単位）。デフォルトは `2000` です（0 に設定した場合はタイムアウトなし）。

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [354086666] Regular Expression Extractor
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。
