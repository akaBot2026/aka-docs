---
id: get-user
title: "Get User"
sidebar_label: "Get User"
sidebar_position: 5
description: "Get User activity documentation."
displayed_sidebar: activitiesSidebar
---
# ユーザーの取得

RCA.Activities.ActiveDirectory.GetSingleUser

## **説明**

Active Directory からユーザーを取得します。

![get-user](/static/img/get-user.png)

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
  例: [3424325] Get User

**オプション**

* **Filters: `Dictionary<String,Argument>`** - ユーザーを検索するための追加フィルター。

**出力**

* **Output User: `OutArgument<UserPrincipal>`** - 取得されたユーザーオブジェクト。

