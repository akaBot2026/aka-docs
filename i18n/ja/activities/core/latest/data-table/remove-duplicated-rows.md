---
id: remove-duplicated-rows
title: "重複した行を削除する"
sidebar_label: "重複した行を削除する"
sidebar_position: 15
description: "重複行の削除アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# 重複した行を削除する

RCA.Activities.Core.RemoveDuplicatedRows

## **説明**

このアクティビティを使用すると、データ テーブル内の重複行を削除できます。

[![remove duplicate rows.jpg](/static/img/93189c_remove-duplicate-rows.jpg)](/bin/download/Activities/Data%20Table/Activities/Remove%20Duplicated%20Rows/WebHome/remove%20duplicate%20rows.jpg?rev=1.1)

（\*必須）

## **プロパティ**

**入力**

* **データ テーブル (DataTable)\***- 確認するデータ テーブル。

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
**例**: 重複した行を削除します。

**出力**

* **出力データ テーブル(DataTable)** - 指定された DataRow の列値。
