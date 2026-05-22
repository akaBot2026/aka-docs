---
id: excel-get-workbook-sheet
title: "Excel ワークブックシートの取得"
sidebar_label: "Excel ワークブックシートの取得"
sidebar_position: 7
description: "Excel Get Workbook Sheet アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Excel ワークブックシートの取得

RCA.Activities.Excel.ExcelGetWorkbookSheet

## **説明**

このアクティビティを使用すると、インデックスに基づいてシートを検索し、その名前を文字列変数として返すことができます。 Excel アプリケーション スコープ アクティビティで使用されます。

![image-20220505132249-2.jpeg](/static/img/71bc9c_image-20220505132249-2.jpeg)

（\*必須）

## **プロパティ**

**入力**

* **Index (Int)\***- 取得するシートのインデックス。このフィールドは、整数と Int32 変数のみをサポートします。
例: 2

**その他**

* **公開 (チェックボックス)** - 公開する場合にチェックを入れます。使用する前に、データ セキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: ワークブックシートの取得

**出力**

* **シート (文字列)** - シート名を含む文字列のリスト。インデックス順に書き込まれます。
