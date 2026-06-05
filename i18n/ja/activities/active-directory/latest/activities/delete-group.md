---
id: delete-group
title: "Delete Group"
sidebar_label: "Delete Group"
sidebar_position: 12
description: "Delete Group activity documentation."
displayed_sidebar: activitiesSidebar
---
# グループの削除

RCA.Activities.ActiveDirectory.DeleteSingleGroup

## **説明**

Active Directory からグループを削除します。

![delete-group-active](/static/img/delete-group-active.png)

（*必須）

## **アクティビティ本文内の項目**

* **Group Name** - 削除するグループの名前。
* **Filters** - グループを検索するための追加フィルターを設定するにはクリックします。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False の 2 つの値を取ります。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続します。
  - False: プロセスの実行を継続しません。

**入力 - 既存プリンシパル**

* **Existing Group: `InArgument<GroupPrincipal>`** - 削除したい既存のグループ。

**入力 - グループ情報**

* **Group Name: `InArgument<String>`** - 削除したいグループ名。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックします。公開する前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの名前。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Delete Group

**オプション**

* **Filters: `Dictionary<String,Argument>`** - グループを検索するための追加フィルター。

**出力**

* **Delete Success: `OutArgument<Boolean>`** - グループが正常に削除された場合は True、そうでない場合は False。

