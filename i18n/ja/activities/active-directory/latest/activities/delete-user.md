---
id: delete-user
title: "Delete User"
sidebar_label: "Delete User"
sidebar_position: 11
description: "Delete User activity documentation."
displayed_sidebar: activitiesSidebar
---
# ユーザーの削除

RCA.Activities.ActiveDirectory.DeleteSingleUser

## **説明**

Active Directory からユーザーを削除します。

![delete-user-active](/static/img/delete-user-active.png)

（*必須）

## **アクティビティ本文内の項目**

* **SAM Account Name** - 削除するユーザーの SAM アカウント名。
* **Filters** - ユーザーを検索するための追加フィルターを設定するにはクリックします。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False の 2 つの値を取ります。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続します。
  - False: プロセスの実行を継続しません。

**入力 - 既存プリンシパル**

* **Existing User: `InArgument<UserPrincipal>`** - 削除したい既存のユーザー。

**入力 - ユーザー情報**

* **SAM Account Name: `InArgument<String>`** - 削除したい既存のユーザー名。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックします。公開する前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの名前。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Delete User

**オプション**

* **Filters: `Dictionary<String,Argument>`** - ユーザーを検索するための追加フィルター。

**出力**

* **Delete Success: `OutArgument<Boolean>`** - ユーザーが正常に削除された場合は True、そうでない場合は False。

