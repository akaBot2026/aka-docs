---
id: excel-set-border
title: "Excel の境界線を設定する"
sidebar_label: "Excel の境界線を設定する"
sidebar_position: 21
description: "Excel Set Border アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Excel の境界線を設定する

RCA.Activities.Excel.ExelSetBorder

## **説明**

このアクティビティを使用すると、Excel のさまざまな範囲に境界線を設定できます。これは Excel アプリケーション スコープ アクティビティでのみ使用できます。

![image-20220505133607-1.jpeg](/static/img/707809_image-20220505133607-1.jpeg)

（\*必須）

## **プロパティ**

**入力**

* **シート名 (文字列)\***- 枠線を付けるセルを含むシートの名前。
例: 「従業員情報」
* **範囲 (文字列)**\* - 境界線を引く範囲。
例: 「A1:K10」

**その他**

* **公開 (チェックボックス)** - 公開する場合にチェックを入れます。使用する前に、データ セキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: **「境界線を設定」**

**オプション**

* **境界線の太さ (ドロップダウン リスト ボックス)** - さまざまなオプションを選択してこのカテゴリを変更し、必要に応じて境界線を太くしたり、細くしたりできます。このオプションには、xlThin、xlThick、xlMedium、xlHairline が含まれます。
* **カラー インデックス (Int)** - オブジェクトの色を決定する数値。カラーインデックスが小さいほど、より青（より熱く）になります。 Int32のみ
例: 1234
* **線のスタイル (ドロップダウン リスト ボックス)** - 境界線の別のスタイルを選択できます。含まれるもの: xlStyleLineNone、xlDouble、xlDot、xlDash、xlDashDot、xlDashDotDot、xlSlantDashDot
