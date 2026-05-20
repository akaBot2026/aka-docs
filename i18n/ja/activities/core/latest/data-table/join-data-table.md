---
id: join-data-table
title: "データテーブルを結合する"
sidebar_label: "データテーブルを結合する"
sidebar_position: 9
description: "データ テーブルの結合アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# データテーブルを結合する

RCA.Activities.Core.JoinDataTables

## **説明**

このアクティビティを使用すると、相互に共通の値を使用して、異なるテーブルから異なるデータを追加できます。

[![join data table.jpg](/static/img/432c4f_join-data-table.jpg)](/bin/download/Activities/Data%20Table/Activities/Join%20Data%20Table/WebHome/join%20data%20table.jpg?rev=1.1)

（\*必須）

## **アクティビティ本体内**

**テーブル結合ウィザード -** 結合条件と結合タイプを設定します

![image-20230419151628-1.png](/static/img/a0e548_image-20230419151628-1.png)

## **プロパティ**

**入力**

* **データ テーブル 1 (DataTable)**\* - 結合操作で使用する最初のテーブルは、DataTable 変数に保存されます。このフィールドは DataTable 変数のみをサポートします。
* **データ テーブル 2 (DataTable)\*** - 結合操作で使用する 2 番目のテーブルは、DataTable 変数に保存されます。このフィールドは DataTable 変数のみをサポートします。

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: データテーブルを結合\

**オプション**

* **結合タイプ (JoinType)** - INNER/LEFT/FULL。

**出力**

* **出力データ テーブル (DataTable)** - DataTable タイプの出力。
