---
id: find-all-groups
title: "Find All Groups"
sidebar_label: "Find All Groups"
sidebar_position: 9
description: "Find All Groups activity documentation."
displayed_sidebar: activitiesSidebar
---
# すべてのグループを検索

RCA.Activities.ActiveDirectory.FindAllGroups

## **説明**

Active Directory からグループのリストを取得します。

![find-all-groups](/static/img/find-all-groups.png)

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

* **Group Name: InArgument<String>*** - 取得したいグループの名前。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックします。公開する前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの名前。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Find All Groups

**オプション**

* **Filters: `Dictionary<String,Argument>`** - グループを検索するための追加フィルター。

**出力**

* **Output Groups: OutArgument<IEnumerable<GroupPrincipal>>** - 取得されたグループのリスト。

