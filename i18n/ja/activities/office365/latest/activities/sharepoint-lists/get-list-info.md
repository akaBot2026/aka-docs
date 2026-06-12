---
id: get-list-info
title: "リスト情報の取得"
sidebar_label: "リスト情報の取得"
sidebar_position: 5
description: "リスト情報取得アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# リスト情報の取得

RCA.Activities.Office365.GetListInfo

## **説明**

指定した SharePoint リストに関する情報を取得します。

![get-list-info-office.png](/static/img/get-list-info-office.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **Site Url Or Id** - SharePoint サイトの URL または ID。
* **List Title Or Id** - リストのタイトル（表示名）または ID のいずれかを指定します。

## **プロパティ**

**入力**

* **Site Url Or Id: InArgument<String>** - SharePoint サイトの URL または ID。

* **List Title Or Id: InArgument<String>** - リストのタイトル（表示名）または ID のいずれかを指定します。

* **Include Columns Definitions: Boolean** - リスト列に関する情報を取得するかどうかを示します。

**出力**

* **List: OutArgument<Office365SharepointList>** - SharePoint リストに関する情報。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window

5. メッセージ ボックスに次の VB.NET 式を入力します:
   `"Retrieved List: " & campaignsList.Title & " with " & campaignsList.Columns.Count.ToString() & " columns."`
6. ワークフローを実行します。出力パネルにリストのタイトルと定義されている列数が出力されます。

