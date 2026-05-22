---
id: output-data-table
title: "出力データテーブル"
sidebar_label: "出力データテーブル"
sidebar_position: 12
description: "出力データ テーブルのアクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# 出力データテーブル

RCA.Activties.Core.OutputDataTable

## **説明**

このアクティビティでは、CSV 形式を使用してデータ テーブルを文字列に書き込むことができます。

![ouput data table.jpg](/static/img/7cc429_ouput-data-table.jpg)

（\*必須）

## **プロパティ**

**入力**

* **データ テーブル (DataTable)**\* - 出力するデータ テーブル。

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
**例**: 出力データテーブル

**出力**

* **テキスト** - 文字列としてのデータの出力。
