---
id: for-each-list-item
title: "各リスト項目に対して"
sidebar_label: "各リスト項目に対して"
sidebar_position: 3
description: "各リスト項目に対してアクティビティを実行するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# 各リスト項目に対して

RCA.Activities.Office365.ForEachListItem

## **説明**

指定した SharePoint リスト内の各リスト項目に対して 1 つまたは複数のアクティビティを実行します。

![for-each-list-item.png](/static/img/for-each-list-item.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **Do** - 各 SharePoint リスト項目に対して実行するアクティビティ。

## **プロパティ**

**入力**

* **List: InArgument<Office365SharepointList>** - 操作が実行される SharePoint リスト。

* **Filter: InArgument<String>** - オプションの OData フィルター。

**出力**

* **Current Index: OutArgument<Int32>** - 現在のイテレーションのインデックス。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window

