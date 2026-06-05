---
id: get-computer
title: "Get Computer"
sidebar_label: "Get Computer"
sidebar_position: 7
description: "Get Computer activity documentation."
displayed_sidebar: activitiesSidebar
---
# コンピューターの取得

RCA.Activities.ActiveDirectory.GetSingleComputer

## **説明**

Active Directory からコンピューターを取得します。

![get-computer](/static/img/get-computer.png)

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

* **SAM Account Name: `InArgument<String>`*** - 取得したいコンピューターの SAM アカウント名。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックします。公開する前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの名前。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Get Computer

**オプション**

* **Filters: `Dictionary<String,Argument>`** - コンピューターを検索するための追加フィルター。

**出力**

* **Output Computer: `OutArgument<ComputerPrincipal>`** - 取得されたコンピューターオブジェクト。

