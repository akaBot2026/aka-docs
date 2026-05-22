---
id: excel-delete-range
title: "Excel範囲削除"
sidebar_label: "Excel範囲削除"
sidebar_position: 6
description: "Excel 範囲の削除アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Excel範囲削除

RCA.Activities.Excel.ExcelDeleteRange

## **説明**

このアクティビティを使用すると、Excel ワークブック内の指定した範囲を削除できます。 ShiftCells および ShiftOption プロパティ フィールドを使用して、行または列全体をシフトするためにも使用できます。

![image-20220505131710-1.jpeg](/static/img/62cc1a_image-20220505131710-1.jpeg)

（\*必須）

## **プロパティ**

**入力**

* **シート名 (文字列)** - シートの名前には、削除するデータが含まれています。デフォルトでは、「Sheet1」が入力されます。文字列変数と文字列のみがサポートされます。
例: 「従業員データ」
* **範囲 (文字列)\***- 削除する範囲。このフィールドは文字列と文字列変数のみをサポートします。
例: 「A1:K10」

**その他**

* **公開 (チェックボックス)** - 公開する場合にチェックを入れます。使用する前に、データ セキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: 範囲の削除

**オプション**

* **ShiftCells (チェックボックス)** - これをチェックすると、Shift Option プロパティで指定された内容に従ってセルの書式設定がシフトされます。このボックスの選択を解除すると、セル データのみが削除され、書式設定は変更されません。
* **ShiftOption (DropDownlist)**- 削除された範囲内のセルを移動する方法を指定します。使用可能なオプションは、ShiftUp、ShiftDown、EntireRow、および EntireColumn です。
