---
id: find-all-computers
title: "Find All Computers"
sidebar_label: "Find All Computers"
sidebar_position: 10
description: "Find All Computers activity documentation."
displayed_sidebar: activitiesSidebar
---
# すべてのコンピューターを検索

RCA.Activities.ActiveDirectory.FindAllComputers

## **説明**

Active Directory からコンピューターのリストを取得します。

![find-all-computers](/static/img/find-all-computers.png)

（*必須）

## **アクティビティ本文内の項目**

* **SAM Account Name** - 取得したいコンピューターの SAM アカウント名。
* **Filters** - コンピューターを検索するための追加フィルターを設定するにはクリックします。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False の 2 つの値を取ります。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続します。
  - False: プロセスの実行を継続しません。

**入力 - コンピューター情報**

* **SAM Account Name: InArgument<String>*** - 取得したいコンピューターの SAM アカウント名。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックします。公開する前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの名前。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Find All Computers

**オプション**

* **Filters: Dictionary<String,Argument>** - コンピューターを検索するための追加フィルター。

**出力**

* **Output Computers: OutArgument<IEnumerable<ComputerPrincipal>>** - 取得されたコンピューターのリスト。

