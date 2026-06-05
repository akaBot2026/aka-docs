---
id: add-remove-principal
title: "Add/Remove Principal"
sidebar_label: "Add/Remove Principal"
sidebar_position: 17
description: "Add/Remove Principal activity documentation."
displayed_sidebar: activitiesSidebar
---
# プリンシパルの追加/削除

RCA.Activities.ActiveDirectory.AddRemovePrincipal

## **説明**

Active Directory のグループにプリンシパルを追加または削除します。

![add-remove-principal](/static/img/add-remove-principal.png)

（*必須）

## **アクティビティ本文内の項目**

* **Group** - プリンシパルを追加または削除したいグループの名前。

* **Removing Principal** - グループに追加または削除するプリンシパルの名前。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False の 2 つの値を取ります。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続します。
  - False: プロセスの実行を継続しません。

**入力**

* **Group: InArgument<GroupPrincipal>*** - プリンシパルを追加する、または削除する対象のグループ

* **Principal: InArgument<Principal>*** - 追加または削除されるプリンシパル

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックします。公開する前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの名前。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Add/Remove Principal

**オプション**

* **Action: AddRemoveType** - プリンシパルに対して実行するアクション。

**出力**

* **Remove Success: OutArgument<Boolean>** - 削除操作の結果を指定します。Action が Add の場合は false を返します。

