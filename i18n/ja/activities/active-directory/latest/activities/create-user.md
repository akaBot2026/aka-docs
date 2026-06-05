---
id: create-user
title: "Create User"
sidebar_label: "Create User"
sidebar_position: 2
description: "Create User activity documentation."
displayed_sidebar: activitiesSidebar
---
# ユーザーの作成

RCA.Activities.ActiveDirectory.CreateUser

## **説明**

Active Directory に新しいユーザーを作成します。

![create-user-active-directory](/static/img/create-user-active-directory.png)

（*必須）

## **アクティビティ本文内の項目**

* **SAM Account Name** - ユーザーの SAM アカウント名。
* **First Name** - ユーザーの名。
* **Last Name** - ユーザーの姓。
* **Additional Properties** - ユーザーの追加プロパティを設定するにはクリックします。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False の 2 つの値を取ります。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続します。
  - False: プロセスの実行を継続しません。

**入力 - ユーザー情報**

* **Additional Properties: `Dictionary<String,Argument>`** - ユーザーの追加プロパティ。

* **Description: `InArgument<String>`** - ユーザーの説明。

* **Display Name: `InArgument<String>`** - ユーザーの表示名。

* **First Name: `InArgument<String>`** - ユーザーの名。

* **Last Name: `InArgument<String>`** - ユーザーの姓。

* **Password: `InArgument<String>`** - ユーザーアカウントのパスワード。

* **SAM Account Name: `InArgument<String>`** - ユーザーの SAM アカウント名。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックします。公開する前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの名前。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Create User

