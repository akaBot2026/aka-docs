---
id: find-all-users
title: "Find All Users"
sidebar_label: "Find All Users"
sidebar_position: 8
description: "Find All Users activity documentation."
displayed_sidebar: activitiesSidebar
---
# すべてのユーザーを検索

RCA.Activities.ActiveDirectory.FindAllUsers

## **説明**

Active Directory からユーザーのリストを取得します。

![find-all-users](/static/img/find-all-users.png)

（*必須）

## **アクティビティ本文内の項目**

* **SAM Account Name** - 取得したいユーザーの SAM アカウント名。
* **Filters** - ユーザーを検索するための追加フィルターを設定するにはクリックします。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False の 2 つの値を取ります。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続します。
  - False: プロセスの実行を継続しません。

**入力 - ユーザー情報**

* **SAM Account Name: `InArgument<String>`*** - 取得したいユーザーの SAM アカウント名。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックします。公開する前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの名前。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Find All Users

**オプション**

* **Filters: `Dictionary<String,Argument>`** - ユーザーを検索するための追加フィルター。

**出力**

* **Output Users: `OutArgument<IEnumerable<UserPrincipal>>`** - 取得されたユーザーのリスト。

