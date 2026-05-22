---
id: excel-close-workbook
title: "Excel ワークブックを閉じる"
sidebar_label: "Excel ワークブックを閉じる"
sidebar_position: 3
description: "Excel の「ワークブックを閉じる」アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Excel ワークブックを閉じる

RCA.Activities.Excel.ExcelCloseWorkbook

## **説明**

このアクティビティを使用すると、開いているワークブックを閉じることができます。これは Excel アプリケーション スコープ アクティビティでのみ使用できます。

![image-20220505135216-1.jpeg](/static/img/b207ba_image-20220505135216-1.jpeg)

（\*必須）

## **プロパティ**

**その他**

* **公開 (チェックボックス)** - 公開する場合にチェックを入れます。使用する前に、データ セキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: ワークブックを閉じる

**ワークブックを使用**

* **ワークブック (WorkbookApplication)**\* - 閉じるワークブック。これは、Excel アプリケーション スコープまたは上記のその他のアクティビティからの出力である可能性があります。 WorkbookApplication 変数のみがサポートされます。
