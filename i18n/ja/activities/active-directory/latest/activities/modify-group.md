---
id: modify-group
title: "Modify Group"
sidebar_label: "Modify Group"
sidebar_position: 15
description: "Modify Group activity documentation."
displayed_sidebar: activitiesSidebar
---
# グループの変更

RCA.Activities.ActiveDirectory.ModifyGroup

## **説明**

Active Directory 内の既存のグループを変更します。

![modify-group](/static/img/modify-group.png)

（*必須）

## **アクティビティ本文内の項目**

* **Group Name** - 変更したいグループの名前。

* **Filters** - グループを検索するための追加フィルターを設定するにはクリックします。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False の 2 つの値を取ります。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続します。
  - False: プロセスの実行を継続しません。

**入力 - グループ情報**

* **Group Name: `InArgument<String>`*** - 変更したいグループの名前。

**入力 - 既存プリンシパル**

* **Existing Group: `InArgument<GroupPrincipal>`** - 変更したいグループ。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックします。公開する前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの名前。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Modify Group

**変更情報** 

* **Modifying Properties: `Dictionary<String,Argument>`*** - グループの変更するプロパティ。

**オプション**

* **Filters: `Dictionary<String,Argument>`** - グループを検索するための追加フィルター。

**出力**

* **Output Group: `OutArgument<GroupPrincipal>`** - 変更後のグループオブジェクト。

