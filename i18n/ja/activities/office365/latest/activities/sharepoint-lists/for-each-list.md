---
id: for-each-list
title: "各リストに対して"
sidebar_label: "各リストに対して"
sidebar_position: 4
description: "各リストに対してアクティビティを実行するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# 各リストに対して

RCA.Activities.Office365.ForEachList

## **説明**

指定した SharePoint サイト内の各リストに対して 1 つまたは複数のアクティビティを実行します。

![for-each-list.png](/static/img/for-each-list.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **Do** - 各 SharePoint リストに対して実行するアクティビティ。

## **プロパティ**

**入力**

* **Site Url Or Id: `InArgument<String>`** - SharePoint サイトの URL または ID。

* **Include Columns Definitions: `Boolean`** - リスト列に関する情報を取得するかどうかを示します。

**出力**

* **Current Index: `OutArgument<Int32>`** - 現在のイテレーションのインデックス。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window


