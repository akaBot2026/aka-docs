---
id: create-group
title: "Create Group"
sidebar_label: "Create Group"
sidebar_position: 3
description: "Create Group activity documentation."
displayed_sidebar: activitiesSidebar
---
# グループの作成

RCA.Activities.ActiveDirectory.CreateGroup

## **説明**

Active Directory に新しいグループを作成します。

![create-group](/static/img/create-group.png)

（*必須）

## **アクティビティ本文内の項目**

* **Group Name** - 作成するグループの名前。
* **Additional Properties** - グループの追加プロパティを設定するにはクリックします。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False の 2 つの値を取ります。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続します。
  - False: プロセスの実行を継続しません。

**入力 - グループ情報**

* **Additional Properties: `Dictionary<String,Argument>`** - グループの追加プロパティ。

* **Group Name: `InArgument<String>`*** - 作成したいグループの名前。

* **Group Scope: GroupScope** - このグループプリンシパルのスコープを指定します（Local, Global, Universal）。

* **Is Security Group: `Nullable<Boolean>`** - グループがセキュリティ有効かどうかを示します（True - セキュリティグループ、False - 配布グループ）。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックします。公開する前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの名前。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Create Group

