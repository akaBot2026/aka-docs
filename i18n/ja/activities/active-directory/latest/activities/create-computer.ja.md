---
id: create-computer
title: "Create Computer"
sidebar_label: "Create Computer"
sidebar_position: 4
description: "Create Computer activity documentation."
displayed_sidebar: activitiesSidebar
---
# コンピューターの作成

RCA.Activities.ActiveDirectory.CreateComputer

## **説明**

Active Directory に新しいコンピューターを作成します。

![create-computer](/static/img/create-computer.png)

（*必須）

## **アクティビティ本文内の項目**

* **SAM Account Name** - 作成するコンピューターの SAM アカウント名。
* **Additional Properties** - コンピューターの追加プロパティを設定するにはクリックします。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False の 2 つの値を取ります。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続します。
  - False: プロセスの実行を継続しません。

**入力 - コンピューター情報**

* **Additional Properties: `Dictionary<String,Argument>`** - コンピューターの追加プロパティ。

* **Password: InArgument<String>** - コンピューターアカウントのパスワード。

* **SAM Account Name: InArgument<String>*** - コンピューターの SAM アカウント名。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックします。公開する前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの名前。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Create Computer

