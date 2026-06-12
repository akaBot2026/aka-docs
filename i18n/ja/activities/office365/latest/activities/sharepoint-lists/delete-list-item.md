---
id: delete-list-item
title: "リスト項目の削除"
sidebar_label: "リスト項目の削除"
sidebar_position: 2
description: "リスト項目削除アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# リスト項目の削除

RCA.Activities.Office365.DeleteListItem

## **説明**

指定したリスト項目を削除します。

![delete-list-item.png](/static/img/delete-list-item.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **List Item** - 操作が実行されるリスト項目。

## **プロパティ**

**入力**

* **List Item: `InArgument<Office365SharepointListItem>`** - 操作が実行されるリスト項目。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window


