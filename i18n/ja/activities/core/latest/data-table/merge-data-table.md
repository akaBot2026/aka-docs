---
id: merge-data-table
title: "データテーブルのマージ"
sidebar_label: "データテーブルのマージ"
sidebar_position: 11
description: "データ テーブルのマージ アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# データテーブルのマージ

RCA.Activities.Core.MergeDataTable

## **説明**

このアクティビティを使用すると、変更を保存するか、現在の DataTable で欠落しているスキーマを処理するかにかかわらず、DataTable を現在の DataTable とマージできます。

[![merge data table.jpg](/static/img/eeb7af_merge-data-table.jpg)](/bin/download/Activities/Data%20Table/Activities/Merge%20Data%20Table/WebHome/merge%20data%20table.jpg?rev=1.1)

（\*必須）

## **プロパティ**

**入力**

* **宛先 (DataTable)**\* - ソース データ テーブルからデータを取得し、変更や欠落したスキーマを処理するデータ テーブル。
* **ソース (DataTable)**\*- 宛先データ テーブルとマージされるデータ テーブル。

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
**例**: データテーブルをマージします。

**オプション**

* **スキーマ アクションの欠落 (ドロップダウンリスト)** - 現在のテーブルにアクションを追加するためにさまざまなオプションを選択できます。これには、Add、Ignore、Error、Addwithkey が含まれます。
