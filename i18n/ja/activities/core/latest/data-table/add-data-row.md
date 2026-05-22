---
id: add-data-row
title: "データ行の追加"
sidebar_label: "データ行の追加"
sidebar_position: 2
description: "データ行アクティビティのドキュメントを追加します。"
displayed_sidebar: activitiesSidebar
---
# データ行の追加

RCA.Activities.Core.AddDataRow

## **説明**

このアクティビティを使用すると、指定した DataTable にデータ行を追加できます。

[![add data row.jpg](/static/img/32fa4e_add-data-row.jpg)](/bin/download/Activities/Data%20Table/Activities/Add%20Data%20Row/WebHome/add%20data%20row.jpg?rev=1.1)

（\*必須）

## **プロパティ**

**入力**

* **配列行 (Object[])** - DataTable に追加されるオブジェクトの配列。各オブジェクトの型は、DataTable 内の対応する列の型にマップする必要があります。
* **データ行 (DataRow)** - DataTable に追加される DataRow オブジェクト。このプロパティが設定されている場合、ArrayRow プロパティは無視されます。
* **データ テーブル (DataTable)**\* - 列を追加する DataTable オブジェクト。このフィールドは DataTable オブジェクトのみをサポートします。

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: データ行の追加
