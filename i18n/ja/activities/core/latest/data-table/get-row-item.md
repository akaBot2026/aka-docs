---
id: get-row-item
title: "行項目の取得"
sidebar_label: "行項目の取得"
sidebar_position: 8
description: "行項目アクティビティのドキュメントを取得します。"
displayed_sidebar: activitiesSidebar
---
# 行項目の取得

RCA.Activities.Core.GetRowItem

## **説明**

このアクティビティを使用すると、指定された列に従って DataRow 変数から値を取得できます。

[![get row item.jpg](/static/img/c01fdd_get-row-item.jpg)](/bin/download/Activities/Data%20Table/Activities/Get%20Row%20Item/WebHome/get%20row%20item.jpg?rev=1.1)

（\*必須）

**アクティビティ本体内**

* **DataTable 行 (DataRow)**\* - 値の取得元となる DataRow オブジェクト。

## **プロパティ**

**入力**

* **Column (DataColumn)**\* - DataRow から値を取得する DataColumn オブジェクト。このプロパティが設定されている場合、ColumnName プロパティと ColumnIndex プロパティは無視されます。
* **列インデックス (Int)**\* - DataRow から値を取得する列のインデックス。
例: 11
* **列名 (文字列)**\* - DataRow から値を取得する列の名前。このプロパティが設定されている場合、ColumnIndex プロパティは無視されます。
例: 「必要な列名」。
* **Data Row**\* - 値の取得元となる DataRow オブジェクト。

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: 行項目の取得

**出力**

* **値** - 指定された DataRow の列の値。
