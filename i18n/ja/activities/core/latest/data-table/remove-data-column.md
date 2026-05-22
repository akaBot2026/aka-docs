---
id: remove-data-column
title: "データ列の削除"
sidebar_label: "データ列の削除"
sidebar_position: 13
description: "データ列の削除アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# データ列の削除

RCA.Activities.Core.RemoveDataColumn

## **説明**

このアクティビティを使用すると、指定した DataTable からデータ列を削除できます。

[![remove data column.jpg](/static/img/3567e7_remove-data-column.jpg)](/bin/download/Activities/Data%20Table/Activities/Remove%20Data%20Column/WebHome/remove%20data%20column.jpg?rev=1.1)

（\*必須）

## **プロパティ**

**入力**

* **Column (DataColumn)**\* - DataTable の列コレクションから削除される DataColumn オブジェクト。このプロパティが設定されている場合、ColumnName プロパティと ColumnIndex プロパティは無視されます。
* **Column Index(Int)**\* - DataTable の列コレクションから削除される列のインデックス。
例: 12.
* **列名 (文字列)**\* - DataTable の列コレクションから削除される列の名前。このプロパティが設定されている場合、ColumnIndex プロパティは無視されます。
例: 「電話番号」。
* **データ テーブル (DataTable)**\* - 列が削除される DataTable オブジェクト。

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: 「データ列の削除」
