---
id: modify-user
title: "Modify User"
sidebar_label: "Modify User"
sidebar_position: 14
description: "Modify User activity documentation."
displayed_sidebar: activitiesSidebar
---
# ユーザーの変更

RCA.Activities.ActiveDirectory.ModifyUser

## **説明**

Active Directory 内の既存のユーザーを変更します。

![modify-user-active](/static/img/modify-user-active.png)

（*必須）

## **アクティビティ本文内の項目**

* **SAM Account Name** - 変更したいユーザーの SAM アカウント名。
* **First Name** - 変更したいユーザーの名。

* **Last Name** - 変更したいユーザーの姓。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False の 2 つの値を取ります。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続します。
  - False: プロセスの実行を継続しません。

**入力 - ユーザー情報**

* **SAM Account Name: `InArgument<String>`*** - 変更したいユーザーの SAM アカウント名。

**入力 - 既存プリンシパル**

* **Existing User: `InArgument<UserPrincipal>`** - 変更したいユーザー。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックします。公開する前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの名前。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Modify User

**変更情報** 

* **Modifying Properties: `Dictionary<String,Argument>`** - ユーザーの変更するプロパティ。

**オプション**

* **Filters: `Dictionary<String,Argument>`** - ユーザーを検索するための追加フィルター。

**出力**

* **Output User: `OutArgument<UserPrincipal>`** - 変更後のユーザーオブジェクト。

