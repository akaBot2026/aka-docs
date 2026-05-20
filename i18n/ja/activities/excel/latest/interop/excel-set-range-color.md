---
id: excel-set-range-color
title: "Excel 設定範囲の色"
sidebar_label: "Excel 設定範囲の色"
sidebar_position: 22
description: "Excel Set Range Color アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Excel 設定範囲の色

RCA.Activities.Excel.ExcelSetRangeColor

## **説明**

このアクティビティでは、Color 変数を使用して、指定したセルまたはセル範囲の色を変更できます。 Excel アプリケーション スコープ アクティビティ内でのみ使用できます。

![image-20220505133337-1.jpeg](/static/img/2cff03_image-20220505133337-1.jpeg)

（\*必須）

## **プロパティ**

**入力**

* **シート名 (文字列)\***- 色を付けるセルを含むシートの名前。
例: 「シートの名前」
* **範囲 (文字列)**\* - 色を設定する指定されたシート内のデータの範囲。文字列のみがサポートされています。
例: 「A1:K10」
* **色 (System.Drawing.Color)**\* - システム描画色変数として保存される抽出された色。
例: カラー.レッド
色のリストについては: https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color?view=net-5.0

**その他**

* **公開 (チェックボックス)** - 公開する場合にチェックを入れます。使用する前に、データ セキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: 範囲の色の設定
