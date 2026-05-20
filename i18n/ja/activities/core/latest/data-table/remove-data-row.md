---
id: remove-data-row
title: "データ行の削除"
sidebar_label: "データ行の削除"
sidebar_position: 14
description: "データ行アクティビティのドキュメントを削除します。"
displayed_sidebar: activitiesSidebar
---
# データ行の削除

RCA.Activities.Core.RemoveDataRow

## **説明**

このアクティビティを使用すると、指定した DataTable にデータ行を削除できます。

![remove data row.jpg](/static/img/28cc5b_remove-data-row.jpg)

（\*必須）

## **プロパティ**

**入力**

* **データ行 (DataRow)**\* - 削除される DataRow オブジェクト。
* **データ テーブル (DataTable)**\* - 行が削除される DataTable オブジェクト。
* **行インデックス (整数)**\* - 削除する行のインデックス。

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: データ行を削除します。
