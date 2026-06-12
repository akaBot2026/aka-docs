---
id: add-list-items
title: "リスト項目の追加"
sidebar_label: "リスト項目の追加"
sidebar_position: 1
description: "リスト項目追加アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# リスト項目の追加

RCA.Activities.Office365.AddListItems

## **説明**

指定した SharePoint リストに 1 件または複数のリスト項目を追加します。

![add-list-items.png](/static/img/add-list-items.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **List** - 操作が実行される SharePoint リスト。
* **Single List Item** - 単一のリスト項目のフィールド値。
* **Multiple List Items** - 複数のリスト項目のフィールド値。

## **プロパティ**

**入力**

* **List: InArgument<Office365SharepointList>** - 操作が実行される SharePoint リスト。

* **Single List Item: InArgument<DataTable>** - 単一のリスト項目のフィールド値。フィールド名 (String) と値 (Object) の 2 列を含める必要があります。

* **Multiple List Items: InArgument<DataTable>** - 複数のリスト項目のフィールド値。最初の行が列ヘッダーを表し、残りの行がフィールド値を表します。

**出力**

* **List Items: OutArgument<Office365SharepointListItem[]>** - 新しく作成されたリスト項目に関する情報。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window

* **Single List Item**: `dtNewTask`
* **List Items (Output)**: **Ctrl + K** を押して変数 `newItems` を作成します。
6. プロセスを実行します。新しいタスクが SharePoint リストに正常に追加されます。

