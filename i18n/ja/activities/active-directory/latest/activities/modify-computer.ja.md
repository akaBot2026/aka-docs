---
id: modify-computer
title: "Modify Computer"
sidebar_label: "Modify Computer"
sidebar_position: 16
description: "Modify Computer activity documentation."
displayed_sidebar: activitiesSidebar
---
# コンピューターの変更

RCA.Activities.ActiveDirectory.ModifyComputer

## **説明**

Active Directory 内の既存のコンピューターを変更します。

![modify-computer](/static/img/modify-computer.png)

（*必須）

## **アクティビティ本文内の項目**

* **SAM Account Name** - 変更したいコンピューターの SAM アカウント名。

* **Filters** - コンピューターを検索するための追加フィルターを設定するにはクリックします。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False の 2 つの値を取ります。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続します。
  - False: プロセスの実行を継続しません。
**入力 - コンピューター情報**

* **SAM Account Name: InArgument<String>*** - 変更したいコンピューターの SAM アカウント名。

**入力 - 既存プリンシパル**

* **Existing Computer: InArgument<ComputerPrincipal>** - 変更したいコンピューター。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックします。公開する前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの名前。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Modify Computer

**変更情報** 

* **Modifying Properties: `Dictionary<String,Argument>`** - コンピューターの変更するプロパティ。

**オプション**

* **Filters: `Dictionary<String,Argument>`** - コンピューターを検索するための追加フィルター。

**出力**

* **Output Computer: OutArgument<ComputerPrincipal>** - 変更後のコンピューターオブジェクト。

