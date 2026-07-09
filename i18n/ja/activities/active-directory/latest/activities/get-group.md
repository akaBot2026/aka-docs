---
id: get-group
title: "Get Group"
sidebar_label: "Get Group"
sidebar_position: 6
description: "Get Group activity documentation."
displayed_sidebar: activitiesSidebar
---
# グループの取得

RCA.Activities.ActiveDirectory.GetSingleGroup

## **説明**

Active Directory からグループを取得します。

![get-group](/static/img/get-group.png)

（*必須）

## **アクティビティ本文内の項目**

* **Group Name** - 取得したいグループの名前。
* **Filters** - グループを検索するための追加フィルターを設定するにはクリックします。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False の 2 つの値を取ります。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続します。
  - False: プロセスの実行を継続しません。

**入力 - グループ情報**

* **Group Name: `InArgument<String>`*** - 取得したいグループの名前。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックします。公開する前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの名前。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Get Group

**オプション**

* **Filters: `Dictionary<String,Argument>`** - グループを検索するための追加フィルター。

**出力**

* **Output Group: `OutArgument<GroupPrincipal>`** - 取得されたグループオブジェクト。

