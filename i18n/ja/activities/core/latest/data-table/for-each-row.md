---
id: for-each-row
title: "各行について"
sidebar_label: "各行について"
sidebar_position: 6
description: "For Each Row アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# 各行について

RCA.Activities.Core.ForEachRow

## **説明**

このアクティビティを使用すると、指定した DataTable 変数の行ごとにアクションを 1 回実行できます。

[![for each row.jpg](/static/img/b95036_for-each-row.jpg)](/bin/download/Activities/Data%20Table/Activities/For%20Each%20Row/WebHome/for%20each%20row.jpg?rev=1.1)

（\*必須）

## **アクティビティ本体内**

**Foreach** - ループ変数名を設定します

**in** - ループするデータ テーブル

**本文** - ループで実行するアクティビティを追加します。

## **プロパティ**

**入力**

* **データ テーブル (DataTable)**\* - DataRow から値を取得する DataColumn オブジェクト。

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: 各行。

**出力**

* **現在のインデックス (Int)** - 現在のコレクションのどの要素が反復されるかを指定するゼロベースのインデックス。Int32 変数に格納されます。
